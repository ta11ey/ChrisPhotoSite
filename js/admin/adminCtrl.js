angular.module('myApp').controller('adminCtrl', function($scope, adminService, $firebaseArray){
	// var ref = new Firebase('https://chrisblashillphoto.firebaseio.com/');

	var url = 'https://chrisblashillphoto.firebaseio.com/';

	$scope.items = $firebaseArray(new Firebase(url + '/items'));
	$scope.allData = false;
	
	$scope.addPost = adminService.addPost;
	$scope.formShow = false;
	$scope.formButtonWords = 'Show'

	$scope.showForm = function(){
		if(!$scope.formShow){
			$scope.formShow = true;
			$scope.formButtonWords = 'Hide'
		}
		else{
			$scope.formShow = false;
			$scope.formButtonWords = 'Show'
		}
	}

	$scope.toggleClear = function() {
		if ($scope.date && $scope.post && $scope.title){
			$scope.title = "";
			$scope.post = "";
			$scope.date = "";
			$scope.allData=false;
		}

		else {$scope.allData=true}
	}
	

})