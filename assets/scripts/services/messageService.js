'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('/api/messages');
      },

      addMessage: function ( message ) {
        return $http.post('/api/messages', { message: message });
      }
    };
  });
