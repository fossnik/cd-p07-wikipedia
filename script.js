$(document).ready(function() {

	var queryButton = document.getElementById('queryButton');

	queryButton.addEventListener('click', function() {
		var queryTextInput = document.getElementById('queryText').value;
		$.ajax( { // Using jQuery useragent on WikiAPI
			url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + queryTextInput,
			// data: queryData,
			dataType: 'jsonp',
			type: 'POST',
			// type: 'GET',
			headers: { 'Api-User-Agent': 'Example/1.0' },
			success: function(responseData) {
				// var pages = responseData.query.pages;
				console.log(responseData);
				// $.each(pages, function(index, source){
				// console.log(pages[index]);
				// var sources = response.sources;
				// var html =  '<select class="form-control" id="source">';
				// var pagesUL = document.querySelector('ul');
				// pagesUL.innerHTML = '';
				// $.each(sources, function(index, responseData){
				// 	pagesUL.appendChild(responseData.sources);
			}
		});  // End of ajax
	}) // End of Event Listener
});
