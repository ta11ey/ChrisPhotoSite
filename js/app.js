var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			templateUrl: 'js/portfolio/portfolioTmp.html',
			controller: 'portfolioCtrl'
		})
		.when('/bio', {
			templateUrl: 'js/about/aboutTmp.html',
			controller: 'aboutCtrl'
		})
		.when('/contact', {
			templateUrl: 'js/contact/contactTmp.html',
			controller: 'contactCtrl'
		})
		.when('/blog', {
			templateUrl: 'js/blog/blogTmp.html',
			controller: 'blogCtrl'
		})
		.when('/admin', {
			templateUrl: 'js/admin/adminTmpl.html',
			controller: 'adminCtrl'
		})

		.otherwise('/home')
})
