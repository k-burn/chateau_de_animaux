petHotel.controller('ClientController', function($http){
    let vm = this;
    vm.clientList=[];

    getOwners();


    vm.addClient =function(clientToAdd){
        console.log('in addPet');
        
        $http({
            method:'POST',
            url: '/clients',
            data: clientToAdd
        }).then(function(response){
            console.log('In POST response of addClient', response.data);
            vm.clientToAdd='';
        }).catch(function(error){
            console.log('Error in Post', error);
        })
    }

    function getOwners(){
        $http({
            method: 'GET',
            url:'/clients',
        }).then(function(response){
            console.log('back from server with', response);
            vm.clientList= response.data;
        }).catch(function(error){
            console.log('error getting owners', error);
        })
    }

    
})