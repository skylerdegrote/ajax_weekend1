var searchPerson;
$(document).ready(function(){
	console.log("The Page is loaded!");
	
	//my input variable
	
	$("body").on("click", ".bttn", function(event){
		// event.preventDefaut();
		searchPerson=$('#searchInput').val();
		console.log("clicked");
		search(searchPerson);
	});


	
});//end of document ready

function callback(data){
		$("#results").html("");
		$("#results").append("<br><img src='"+data.avatar_url+"'width=200px' class='col-md-6'>");
		if(data.name===undefined){
		$("#results").append("<br>"+data.login+" has not entered their name yet");
		}else{
			$("#results").append("<br>User Name: "+data.name);

		}
		$("#results").append("<br>User Login: "+data.login);
		$("#results").append("<br>Link to Github Page: <a href='"+data.html_url+"' target='blank'>"+data.html_url+"</a>");
		if(data.location===undefined||data.location===""||data.location===null){
		$("#results").append("<br>"+data.login+" has not provided a location");
		}else{
		$("#results").append("<br>User Location: "+data.location);
		}
		$("#results").append("<br>Link to Github Repos: <a href='https:github.com/"+data.login+"?tab=repositories' target='blank'>repositories</a>");
//https:github.com/skylerdegrote?tab=repositories

		
		console.log(data.login);
	
}

function search(query){
$.ajax({
		url: 'https://api.github.com/users/'+searchPerson+'?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
		type: 'GET',
		dataType: 'json',
		crossDomain:true,
		success: function(data){
			console.log(data);
			callback(data);
		},
		error: function(){
			$("#results").append("The user was not found");
		},
		// uri: function(){
		// 	encodeURI( ",", "/", "?", ":", "@", "&", "=", "+", "$", "#");
		// }
	});
}









