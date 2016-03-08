angular
.module('Prueba', [])
.directive('prueba' , function (){
	return {
		replace: true,
		controller: 'pruebactrl as Pruebactrl',
		templateUrl: 'js/directives/prueba/tpl.html'
	}
})