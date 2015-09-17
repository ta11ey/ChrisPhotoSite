angular.module('myApp').controller('blogCtrl', function($scope, blogService){
	$scope.blogPost = blogService.blogPost;
	
})