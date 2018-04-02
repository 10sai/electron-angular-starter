var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  // Here is where you create the views(states);
    var appState = {
      name: 'app',
      url: '/app',
      controller: 'AppCtrl'
    }
  
    var dashboardState = {
      name: 'dashboard',
      url: '/dashboard',
      templateUrl: 'templates/dash.html',
      controller: 'DashCtrl'
    }

    var settingsState = {
      name: 'settings',
      url: '/settings',
      templateUrl: 'templates/settings.html',
      controller: 'SettingsCtrl'
    }
  
    $stateProvider.state(appState);
    $stateProvider.state(dashboardState);
    $stateProvider.state(settingsState);


    // This is to load a view by default;
    $urlRouterProvider.otherwise('/dashboard');
});