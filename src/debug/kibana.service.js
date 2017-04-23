'use strict';

angular.module('ngDebugUtils.debug', ['ngDebugUtils']).service('kibana', function($http){
	
	var $public = this;

	$public.showConsole = function () {

		console.log('showConsole ', $http);

	};


});