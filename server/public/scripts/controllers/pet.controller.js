petHotel.controller('PetController', function($http){
    let vm = this;
    vm.petList=[];

    getPets();
    
    function getPets(){
        $http({
            method: 'GET',
            url:'/pets'
        }).then(function(response){
            console.log('back from server with:', response);
            vm.petList=response.data;   
        }).catch(function(error){
            console.log('Error getting pets:', error);
        });//end GET
    }//end getPets

    vm.addPet =function(petToAdd){
        console.log('in addPet');
        
        $http({
            method:'POST',
            url: '/pets',
            data: petToAdd
        }).then(function(response){
            console.log('In POST response of addPet', response.data);
            vm.petToAdd='';
            
        }).catch(function(error){
            console.log('Error in Post', error);
        })
    }

    
})