var app= angular.module('AnimalHotel', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    console.log('Route config loaded');

    $routeProvider
        .when('/',{
            templateUrl: '/views/home.html'
        }).when('/newClient', {
            templateUrl: '/views/newClient.html',
            controller: 'ClientController as cc'
        }).when('/newPet', {
            templateUrl: '/views/newPet.html',
            controller: 'PetController as pc'
        }).when('/currentGuests', {
            templateUrl: '/views/currentGuests.html',
            controller: 'GuestController as gc'
        }).when('/checkInOut',{
            templateUrl: 'views/checkin-out.html',
            controller: 'InOutController as ic'
        }).when('/logbook',{
            templateUrl: 'views/logbook.html',
            controller: 'LogController as lc'
        }).otherwise({
            templateUrl: '/views/404.html'
        })//end
    
}]);