petHotel.controller('PetController', function($http){
    let vm = this;
    vm.petList=[];
    vm.ownersList =[];

    getPets();
    getOwners();
    
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
        console.log(petToAdd);
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

    function getOwners(){
        $http({
            method: 'GET',
            url:'/owners',
        }).then(function(response){
            console.log('back from server with', response);
            vm.ownersList= response.data;
        }).catch(function(error){
            console.log('error getting owners', error);
        });//end get
    }//end get owners

    vm.deletePet = function(id) {
        console.log('delete pet with id: ', id);
        $http.delete('/pets/' + id)
          .then(function(response) {
            getPets();
        })
    }

    vm.checkIn = function(id) {
        console.log('update person with id: ', id);
        $http.put('/pets/' + id)
          .then(function(response) {
            getPets();
        });
    }
    
})