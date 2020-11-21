angular.module('patholeApp')
.controller('mainpageController',['$scope','$http',mainpageController])

function mainpageController($scope,$http){
    $scope.file;
    $scope.data="";

    $scope.SelectFile = function (e) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $scope.PreviewImage = e.target.result;
            $scope.$apply();
        };
        $scope.file=e.target.files[0];
        reader.readAsDataURL(e.target.files[0]);
        $scope.data="";
        //console.log($scope.file.name);
    };

    $scope.classify=function(){

        var fileFormData = new FormData();
        fileFormData.append('file', $scope.file);
        
        $http.post("http://127.0.0.1:5000/upload",fileFormData, {
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
           }).success(function(data){
        $scope.data=data;
        
    })
    
    }
    
}