'use strict';

/* Controllers */
portfolio.controller('worksCtrl', function ($scope) {
  $scope.works = [
    {
        img:'img/magmagazine-preview.jpg',
        name:'MagMagazine1',
        link: 'magmagazine.html'
    },
    
    {
        img:'img/letusmake-preview.jpg',
        name:'Let Us Make',
        link: 'letusmake.html'
    },
    
    {
        img:'img/GRAphica-preview.jpg',
        name:'GRAphica',
        link: 'photographicas.html'
    },
    
    {
        img:'img/flat-corporate-preview.jpg',
        name:'Flat Corporate',
        link: 'projects/FlatCorporate/index.htm'
    },
    
    {
        img:'img/Math-app-preview.jpg',
        name:'Math App',
        link: 'mathapp.html'
    },
    
    {
        img:'img/reen-preview.jpg',
        name:'Reen',
        link: 'reen.html'
    },
    
    {
        img:'img/lexelorLanding.jpg',
        name:'Lexelor landing page',
        link: 'http://lexelor.com/'
    },
    
    {
        img:'img/lexelor.jpg',
        name:'Lexelor home',
        link: 'Lexelor/index.html'
    },
    	
	];
});