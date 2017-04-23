angular.module('ngDebugUtils', []);
angular.module('ngDebugUtils.debug', ['ngDebugUtils']).service('kibana', function($http){
	
	var $public = this,
		$private = {};

	$public.showConsole = function () {

		console.log('showConsole', $http);

	};


});