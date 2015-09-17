angular.module('myApp').controller('adminCtrl', function($scope, adminService, $firebaseArray){
	// var ref = new Firebase('https://chrisblashillphoto.firebaseio.com/');

	var url = 'https://chrisblashillphoto.firebaseio.com/';

	$scope.items = $firebaseArray(new Firebase(url + '/items'));
	$scope.allData = false;
	$scope.allDataTrue= false;

	$scope.addPost = function(postDate, postPost, postTitle){
		if (postDate && postTitle && postPost){
	 		$scope.items.$add({date:postDate, post:postPost,title:postTitle});
	 		$scope.allData = false;
	 		$scope.allDataTrue = true;
	 		$scope.date = "";
	 		$scope.post = "";
	 		$scope.title= "";

	 	}

	 	else if (!postDate || !postPost || !postTitle){
	 		$scope.allData = true;
	 	}



	
	 }

})