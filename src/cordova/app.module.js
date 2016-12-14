(function(){
	'use strict';

	angular
		.module('cordova', [
			'ui.router'
		])
		.config(['$urlRouterProvider', '$stateProvider', config])
		.run(run);

	function config($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('app', {
			abstract: true,
			views: {
				'root@': {
					controller: function(){ console.log('Root view controller'); },
					templateUrl: '/templates/app.template.html'
				}
			}
		})
		.state('app.index', {
			url: '/',
			views: {
				'header@app': {
					controller: function(){ console.log('app.index header view controller'); },
					template: 'Header'
				}
			},
		});
	}

	function run(){
		console.log('App run');
	}
})();