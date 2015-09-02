'use strict';

/* Controllers */
portfolio.controller('worksCtrl', function ($scope) {

    $http.get('../projects/works.json').success(function(data) {
        $scope.works = data;
        console.log("hello");
    });
    
});