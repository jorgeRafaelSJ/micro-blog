console.log("Sanity Check: JS is working!");

$(document).ready(function(){


	var text;
	var time;
	var count = 0;
	

	//click function that creates post
	$("#postButton").on("click", function(e){
		e.preventDefault();
		text= $("#postEntry").val();
		time = new Date();


		//appending the text from the input form into the list with button to remove if desired.
		if(text === ""){
  			
		} else {
			$("#post-list").prepend(
				"<div class = 'row single-post' id=\'" + count + "\' ><li class='list-group-item col-xs-10'>" + time + "<br>&nbsp" + text + "</li>" +
				"<button type='submit' class='btn btn-default delete-post-btn pull-right' aria-label='delete' data-target=" + count + ">" +
				"<span class='glyphicon glyphicon-remove' aria-hidden='true'></span></button'></div>" 
				);

			count ++;
			//Post count display!
			$("#postButton").text("Publish post # " + (count + 1));
		}
		//reset post input form
		$("#postEntry").val("");
	});



	//delete button on the right side of every post 
	//set listener on entire document and specify which class to listen for

	$(document).on("click",".delete-post-btn", function(e){
		e.preventDefault(); 
		
		//sets an id for the parent div of the button that was pressed - .attr() returns the value for the first element in the set of matched element
		var id = $(this).data('target');
		$("#" + id).remove();

		// edit the count of posts and update post button to reflect the change in post count
		count --;
		$("#postButton").text("Publish post # " + (count + 1));
	});



	//tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	});

});

