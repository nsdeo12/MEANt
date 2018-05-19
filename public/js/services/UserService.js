angular.module('UserService',[]).factory('User',['$http',function($http){


return{
    
    create:function(userData){
        return $http.post('/api/users',userData);
    },
    read:function(){
        return $http.get('/api/users');
    },
    delete:function(id){
        return $http.delete('api/users/'+id)
    }
}


}]);