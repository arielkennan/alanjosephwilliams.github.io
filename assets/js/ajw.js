$(".header-subnav a").each(function() {   
    if (this.href == window.location.href) {
        $(this).addClass("active");
    }
});


//  Search jQuery

$(function() {
  $('#search-query').lunrSearch({
    indexUrl: '/designgov-2/search.json',             // URL of the `search.json` index data for your site
    results:  '#search-results',          // jQuery selector for the search results container
    entries:  '.entries',                 // jQuery selector for the element to contain the results list, must be a child of the results element above.
    template: '#search-results-template'  // jQuery selector for the Mustache.js template
  });
});