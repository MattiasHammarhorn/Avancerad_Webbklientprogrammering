var apiurl,myresult,apiurl_size,selected_size;
apiurl = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=657b47a907f74dc94d557dc75d48d5a4&per_page=10&format=json&nojsoncallback=1";
selected_size = 640;

$(document).ready(function(){
    $('#button').click(function(){
        $("#results").html('');
        $.getJSON(apiurl,function(json) {
            $.each(json.photos.photo,function(i,myresult)   {
                apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=657b47a907f74dc94d557dc75d48d5a4&photo_id="+myresult.id+"&format=json&nojsoncallback=1";
                $.getJSON(apiurl_size,function(size){
                $.each(size.sizes.size,function(i,myresult_size){
                    console.log(myresult)
                    if(myresult_size.width==selected_size){
                        $("#results").append('<p>'+myresult.title + '</p></p><p><a href="'+myresult_size.url+'" target="_blank"><img src="'+myresult_size.source+'"/></a></p>');
                        }
                    })
                })
            });
        });
    });
});