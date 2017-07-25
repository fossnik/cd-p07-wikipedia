$(document).ready(function() {

	var queryButton = document.getElementById('queryButton');
	// element to post results on
	var pagesUL = document.querySelector('ul');

	queryButton.addEventListener('click', function() {
		var queryTextInput = document.getElementById('queryText').value;
		$.ajax( { // Using jQuery useragent on WikiAPI
			url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + queryTextInput,
			// data: queryData,
			dataType: 'jsonp',
			// type: 'POST',
			type: 'GET',
			headers: { 'Api-User-Agent': 'Example/1.0' },
			success: function(responseData) {
				var pages = responseData.query.pages;
				var htmlA = "<ul id='list'>";
				$.each(pages, function(index, page){
					console.log(pages[index].title);
					var title = page.title;
					var description = page.id;

					htmlA += '<p>' + title + '</p>';
					$(".queryResult").html(htmlA);
				})
			}	// End of Success
		});	// End of ajax
	})	// End of Event Listener
});
