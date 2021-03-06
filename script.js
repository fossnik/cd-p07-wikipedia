$(document).ready(function() {
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
					html += "<p><div onclick=";
					html += "location.href='https://en.wikipedia.org/?curid=";
					html += pageid + "'";
					html += "><button style='width: 100%'><h3>";
					html += title;
					html += "</h3><br><h5>" + extract + "</h5></button></div>";
				})	// End of $.each
				html += "</div>";
				$("#queryResult").html(html);
			}	// End of success:
		});	// End of $.ajax
	})	// End of Event Listener #queryWiki
});	// End of $(document).ready()
