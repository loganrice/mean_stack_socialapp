angular.module("app",[]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(o,s){o.addPost=function(){o.postBody&&s.create({username:"dickeyxxx",body:o.postBody}).success(function(s){o.posts.unshift(s),o.postBody=null})},s.fetch().success(function(s){o.posts=s})}]),angular.module("app"),console.error("error").service("PostSvc",function(o){this.fetch=function(){return o.get("/api/posts")},this.create=function(s){return o.post("/api/posts",s)}});