// https://gist.github.com/eddiewebb/735feb48f50f0ddd65ae5606a1cb41ae

// How many characters to include on either side of match keyword
summaryInclude=60;
// Options for fuse.js
var fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    tokenize: true,
    matchAllTokens: true,
    threshold: 0.0,
    location: 0,
    distance: 100,
    maxPatternLength: 64,
    minMatchCharLength: 3,
    keys: [
        {name:"title",weight:0.8},
        {name:"tags",weight:0.5},
        {name:"categories",weight:0.5},
        {name:"contents",weight:0.4}
    ]
};

var searchQuery = param("q");
if(searchQuery){
    $("#search-query").val(searchQuery);
    executeSearch(searchQuery);
}else {
    $('#search-results').append("<p>Please enter a word or phrase above</p>");
}

function executeSearch(searchQuery){
    // Look for "index.json" in the same directory where this script is called.
    $.getJSON( "index.json", function( data ) {
        var pages = data;
        var fuse = new Fuse(pages, fuseOptions);
        var result = fuse.search(searchQuery);
        console.log({"matches":result});
        if(result.length > 0){
            populateResults(result);
        }else{
            $('#search-results').append("<p>No matches found</p>");
        }
    });
}

function populateResults(result){
    $.each(result,function(key,value){
        var contents= value.item.contents;
        var snippet = "";
        var snippetHighlights=[];
        snippetHighlights.push(searchQuery);

        if(snippet.length<1){
            snippet += contents.substring(0,summaryInclude*2);
        }
        // Pull template from hugo template definition
        var templateDefinition = $('#search-result-template').html();
        // Replace values
        var output = render(templateDefinition,{key:key,title:value.item.title,link:value.item.permalink,tags:value.item.tags,categories:value.item.categories,snippet:snippet});
        $('#search-results').append(output);

        $.each(snippetHighlights,function(snipkey,snipvalue){
            $("#summary-"+key).mark(snipvalue);
        });

    });
}

function param(name) {
    // If the search is a phrase like "foo bar", it becomes "foo+bar". The
    // "replace(/\+/g, ' ')" portion replaces the "+" chars with spaces again.
    return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}

function render(templateString, data) {
    var conditionalMatches,conditionalPattern,copy;
    conditionalPattern = /\$\{\s*isset ([a-zA-Z]+) \s*\}(.+)\$\{\s*end\s*}/g;
    // Since loop below depends on re.lastInxdex, we use a copy to capture any
    // manipulations whilst inside the loop.
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if(data[conditionalMatches[1]]){
            // Valid key: Remove conditionals, leave contents.
            copy = copy.replace(conditionalMatches[0],conditionalMatches[2]);
        }else{
            // Not valid: Remove entire section.
            copy = copy.replace(conditionalMatches[0],'');
        }
    }
    templateString = copy;
    // Now any conditionals removed we can do simple substitution.
    var key, find, re;
    for (key in data) {
        find = '\\$\\{\\s*' + key + '\\s*\\}';
        re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
}
