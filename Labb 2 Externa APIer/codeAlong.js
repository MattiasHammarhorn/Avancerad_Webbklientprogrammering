var bigHugeThesaurus_apiKey = '8750bb49d982e385df734b7ec72b8861';

var bigHugeThesaurus_apiUrl_beginning = 'http://words.bighugelabs.com/api/2/';
var bigHugeThesaurus_apiUrl_ending = '/json';
var complete_bigHugeThesaurus_apiUrl = '';

var searchWord = '';

var flickr_apiKey = '61afa3ac191762e31e67ae160308a198&tags=';

var flickr_apiUrl_beginning = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=';
var flickr_apiUrl_ending = '&safe_search=1&content_type=1&per_page=10&format=json&nojsoncallback=1';
var flickr_apiUrl_photo_id = '';
var flickr_apiUrl_size;
var flickr_selected_size = 640;

var complete_flickr_apiUrl = "";

/* ---------- B H T ---------- */

function searchApis (searchWord) {
    $('#big-huge-thesaurus-results').empty();
    complete_bigHugeThesaurus_apiUrl =
    bigHugeThesaurus_apiUrl_beginning +
    bigHugeThesaurus_apiKey + "/" + searchWord +
    bigHugeThesaurus_apiUrl_ending;

    $.getJSON(complete_bigHugeThesaurus_apiUrl, (bigHugeThesaurusResponse) => {
        
        $.each(bigHugeThesaurusResponse, (i, result) => {

            $.each(result, (typeOfWord, wordArray) => {

                $.each(wordArray, (index, word) => {
                    index += 1;
                    $('#big-huge-thesaurus-results').append('<p>' + word + '</p>');            
                })
            });

            $('#big-huge-thesaurus-results').append('</p>');
        })
    }).fail( ( call ) => {
        console.log(call.status);

        if(call.status == 404) {
            alert(searchWord + ' not found, ' + call.status);
        } else {
            alert('Oops, something went wrong. Http status = ' + call.status);
        }
    });

/* ---------- FLICKR ---------- */
    $('#flickr-results').empty();
    complete_flickr_apiUrl = flickr_apiUrl_beginning + flickr_apiKey + '/' + searchWord + flickr_apiUrl_ending;

    $.getJSON(complete_flickr_apiUrl, (flickrResponse) => {
        
        $.each(flickrResponse.photos.photo, function(i, myresult) {
            
            flickr_apiUrl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + flickr_apiKey + "&photo_id="+myresult.id+"&format=json&nojsoncallback=1";

            $.getJSON(flickr_apiUrl_size, function(size) {
                $.each(size.sizes.size, function(i, myresult_size){
                    console.log(myresult);
                    if(myresult_size.width == flickr_selected_size) {
                        $('#flickr-results').append('<p>' + myresult.title + '</p>' + '<p>' + '<img src ="' + myresult_size.source + '"/>' + '</p>');
                    }
                })
            })
        })
     })
}

$('#word-input').keyup( function() {
    if(event.keyCode == 13) {

        var searchInput = $('#word-input').val();
        searchApis(searchInput);
    }
})

$('#big-huge-thesaurus-results').on('click', 'p', (event) => {
    searchWord = event.target.innerHTML;

    searchApis(searchWord);

    $('#word-input').val(searchWord);
})