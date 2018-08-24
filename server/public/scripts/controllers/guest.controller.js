petHotel.controller('GuestController', function($http){
    let vm = this;
    vm.guestList=[];

    getCurrentGuests();
    

    function getCurrentGuests(){
        $http({
            method: 'GET',
            url:'/guests'
        }).then(function(response){
            console.log('back from server with:', response);
            vm.guestList=response.data;   
        }).catch(function(error){
            console.log('Error getting pets:', error);
        });//end GET
};//end getCurrentGuests