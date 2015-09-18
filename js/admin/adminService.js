angular.module('myApp').service('adminService', function($firebaseArray, $q){

	var url = 'https://chrisblashillphoto.firebaseio.com/';

	var items = $firebaseArray(new Firebase(url + '/blogPosts'));

	this.addPost = function(postDate, postPost, postTitle){
		var defer = $q.defer;
		if (postDate && postTitle && postPost){
	 		items.$add({date:postDate, post:postPost,title:postTitle}).then(function(){alert("sucessfully posted " + postTitle)});
	 	}
	 }





})