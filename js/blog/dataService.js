angular.module('myApp').service('blogService', function($http, $q){

this.getBlogPosts = function(){
	return $http({
		method: 'GET',
		url: 'https://chrisblashillphoto.firebaseio.com/blogPosts.json'
	}).then(function(result){
		var postData = [];
		for(var post in result.data){

			date= result.data[post].date;
			title= result.data[post].title;
			post= result.data[post].post;
			postData.push({date,title,post})
		}
		  
		
		return postData;
	})
}

})