angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.staffStatus', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/staffStatus.html',
        controller: 'staffStatusCtrl'
      }
    }
  })

  .state('menu.staffList', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/staffList.html',
        controller: 'staffListCtrl'
      }
    }
  })

  .state('menu.record', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/record.html',
        controller: 'recordCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('staff', {
    url: '/page4',
    templateUrl: 'templates/staff.html',
    controller: 'staffCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});