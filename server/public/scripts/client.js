var petHotel= angular.module('AnimalHotel', ['ngRoute']);

petHotel.config(['$routeProvider', function($routeProvider){
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
            controller: 'ClientController as cc'
        }).when('/logbook',{
            templateUrl: 'views/logbook.html',
            controller: 'LogController as lc'
        }).otherwise({
            templateUrl: '/views/404.html'
        })//end
    
}]);