angular
.module('Login', [])
.directive('login', function() {
	return {
		restrict: 'AE', 
		replace: true,
		controller: 'loginController as LoginController',
		templateUrl: 'js/directives/login/tpl.html'
	}
})