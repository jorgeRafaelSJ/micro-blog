console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var content;
	var time;
	var count = 0;

	$("#postButton").on("click", function(e){
		e.preventDefault();

		text= $("#postEntry").val();
		time = new Date();


		//appending the text from the input form into the list with button to remove if desired.
		if(text === ""){
  			//add alert?
		} else {
			$("#post-list").append(
				"<div class = 'row col-xs-offset-1'><li class='list-group-item col-xs-10'>" + time +"<br>&nbsp" + text +"</li>" +
				"<button type='submit' class='btn btn-default delete-post' aria-label='Right Align'>" +
				"<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button'></div>"
				);

			count ++;
		}
		//reset post input form
		$("#postEntry").val("");
	});

	//delete button on the right side of every post
	$(".delete-post").on("click", function(e){
		e.preventDefault();
		$(".list-group-item").remove();
	});
});

