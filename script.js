$(document).ready(function() {
/*
	var endpointURL = 'https://en.wikipedia.org/w/api.php';
	var apiParams = '?format=json\
&action=query\
&generator=search\
&gsrnamespace=0\
&gsrlimit=10\
&prop=pageimages|extracts\
&pilimit=max\
&exintro\
&explaintext\
&exsentences=1\
&exlimit=max\
&gsrsearch=';
*/
	$("#queryWiki").submit(function(event) {
		event.preventDefault(); // prevents page reloading or something
		var queryTextInput = document.getElementById('queryText').value;
		var apiParams = { action: 'query',
										generator: 'search',
										gsrsearch: queryTextInput,
										format: 'json',
										prop: 'extracts|pageimages',
									};
		$.ajax( {
			type: 'GET',
			dataType: 'jsonp',
			url: '//en.wikipedia.org/w/api.php',
  		data: apiParams,
			success: function(responseData) {
				var pages = responseData.query.pages;
				var htmlHead = '<div class="well">';
				var htmlTail = '</div>';
				$.each(pages, function(index, page){
					var title = page.title;
					var extract = page.extract;
					console.log(page);
					// build HTML for injection into index.html
					htmlHead += '<p><button><em>' + title + '</em><br>' + extract + '</button>';
					// htmlHead += '<button type="button" class="btn" onclick="location.href=' + https://en.wikipedia.org/wiki/Special:Random'">Random</button>
					$("#queryResult").html(htmlHead + htmlTail);
				})	// End of $.each
			}	// End of success:
		});	// End of $.ajax
	})	// End of Event Listener #queryWiki
});	// End of $(document).ready()
