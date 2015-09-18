angular.module('myApp').controller('blogCtrl', function($scope, blogService){
	// $scope.returnedBlogPosts = blogService.getBlogPosts;
		
		
		$scope.getPostData = function () {
			blogService.getBlogPosts().then(function (response) {
					$scope.posts = response;
				})
			}
		$scope.getPostData();
		

	
})