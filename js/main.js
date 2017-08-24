var app = angular.module('myapp',[]);

app.controller('tabelasController',function($scope,$http){
	$scope.dados=[];
	$scope.ligas = [];
	 $http.get("https://apistat.herokuapp.com/api/tabelas/")
    .then(function(response) {
        $scope.dados = response.data;
    });
     $http.get("https://apistat.herokuapp.com/api/ligas/")
    .then(function(response) {
        $scope.ligas = response.data;
    });

   
});