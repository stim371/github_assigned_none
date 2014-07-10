// Github Assigned-None Button

// build new url
var url = document.URL;

alert(url);

var newUrl = url

// attach new element to DOM
var assignedNoneButton = $('ul.filter-list').append('<li><a href="' + newUrl + '" class="filter-item">Unassigned</a></li>');

