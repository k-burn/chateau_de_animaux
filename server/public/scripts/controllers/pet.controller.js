petHotel.controller('PetController', function($http){
    let vm = this;
    vm.petlist=[];

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
})