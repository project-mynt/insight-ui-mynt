'use strict';

//Global service for global variables
angular.module('insight.system')
  .factory('Global',[
    function() {
    }
  ])
  .factory('Version',
    function($resource) {
      return $resource(window.apiPrefix + '/version');
  });
