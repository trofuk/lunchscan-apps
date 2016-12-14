(function(){
	'use strict';

	angular
		.module('ls.shared')
		.directive('lsHeader', [lsHeaderDirective]);

	function lsHeaderDirective()
	{
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			controller: function(){},
			templateUrl: '/templates/ls-header.template.html',
			link: function(scope, element, attributes){}
		};
	}
})();
