angular.module('myApp').service('adminService', function(){
	 this.addquote= function(mydate, mytitle, mypost){
  			if (date && title && post){
  				blogService.blogPost.push({
  					date: mydate,
  					title: mytitle,
  					post: mypost
  				})
  			}
  		}
})