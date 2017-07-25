$(document).ready(function() {

	var queryTextInput = document.getElementById('queryText').value;

	console.log(queryTextInput);
  // Using jQuery useragent on WikiAPI
  $.ajax( {
    url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + queryTextInput,
    // data: queryData,
    dataType: 'jsonp',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
    	console.log(data);
    }
  });
})
