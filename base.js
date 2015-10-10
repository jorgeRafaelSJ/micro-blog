console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	//appending the text from the input box into the content
	$("#postButton").on("click", function(e){
		e.preventDefault();

		$("#postbox").append( "<p>" + $("#postEntry").val() + "</p>");

	});
});
