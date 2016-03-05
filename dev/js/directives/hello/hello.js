angular
.module('Hello', [])
.directive('helloWorld', function() {
	return {
		restrict: 'AE', 
		replace: true,

		scope: {
			fruit: '@'
		},

		template: '<div>{{fruit}}</div>'

		//One way
		/*scope: {},

		link: function (scope, elem, attrs) {
			scope.flavor = attrs.flavor
		}*/

		//two way

	}
})