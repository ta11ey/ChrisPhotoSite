angular.module('myApp').service('adminAuth', function($firebaseArray, $q){

	var url = 'https://chrisblashillphoto.firebaseio.com/';

	var items = $firebaseArray(new Firebase(url + '/items'));

	





})