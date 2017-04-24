'use strict';

angular.module('ngDebugUtils.debug', ['ngDebugUtils']).service('kibana', function(){
	
	var $public = this;

	$public.showConsole = function () {

		console.warn('Executa o console do kibana ');

	}; 


});