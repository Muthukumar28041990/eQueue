/**
 * $stateProvider configuration
 */

EQueueApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider.state('home', {
		url : '/home',
		templateUrl : 'app/modules/Home/home.html',
		controller : 'HomeController'
	})
});