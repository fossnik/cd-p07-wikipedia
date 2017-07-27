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
											exlimit: 'max',
											exsentences: 1,
											exintro: true,
											explaintext: true,
											prop: 'extracts',
											gsrlimit: 8,
										};
		$.ajax( {
			type: 'GET',
			dataType: 'jsonp',
			url: '//en.wikipedia.org/w/api.php',
  		data: apiParams,
			success: function(responseData) {
				var pages = responseData.query.pages;
				var wikiArray = [];
				var html = '<div class="well container text-center">';
				$.each(pages, function(index, page){
					var pageid = page.pageid;
					var title = page.title;
					var extract = page.extract;
					// wikiArray[index] = {
					// 	pageid: pageid,
					// 	title: title,
					// 	extract: extract,
					// }
					// build HTML for injection into index.html
					html += "<p><form action='https://en.wikipedia.org/?curid=" + pageid + "'><button style='width: 100%'><h3>'" + title + '</h3><br><h5>' + extract + '</h5></button></form>';
					// htmlHead += '<button type="button" class="btn" onclick="location.href=' + https://en.wikipedia.org/wiki/Special:Random'">Random</button>
				})	// End of $.each
				html += "</div>";
				$("#queryResult").html(html);
			}	// End of success:
		});	// End of $.ajax
	})	// End of Event Listener #queryWiki
});	// End of $(document).ready()
