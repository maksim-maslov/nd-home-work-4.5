'use strict';

userApp.component('userDetail', {

    controller: function UserDetailCtrl($routeParams, UsersService) {

        this.userLoaded = false;

        this.user = UsersService.get({
            userId: $routeParams['userId']
        }, (successResult) => {
            // Окей!
            this.notfoundError = false;
            this.userLoaded = true;

            this.activeTab = 1;
            this.disableControlTab = true;
        }, (errorResult) => {
            // Не окей..
            this.notfoundError = true;
            this.userLoaded = true;


        });

        this.user.$promise.then(function(result) {
            //this.userLoaded = true;
        });

        this.deleteUser = function(userId) {

            this.user.$delete({
                userId: userId
            }, (successResult) => {
                // Окей!
                this.deletionSuccess = true;
            }, (errorResult) => {
                // Не окей..
                this.deletionError = true;
            });

        }

    },

    templateUrl: './src/UserDetail/UserDetail.html'

});
