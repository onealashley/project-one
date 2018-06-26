<<<<<<< HEAD
var venueId 
var title
var performer = [];
var performers

function displayConcert(location) {
    var queryUrl = "https://api.eventful.com/json/events/search?location=" + location + "&keywords=has_performers:1&tag=music&cors_filter=1&t=this+month&c=music&app_key=FFR9NRDxgF32bNs5";
=======
var title;

function displayConcert(location) {
    var queryUrl = "https://api.eventful.com/json/events/search?location=" + location + "&tag=music&cors_filter=1&t=this+month&c=music&app_key=FFR9NRDxgF32bNs5";
    
>>>>>>> 1ce3d524b6ed070e65fce21edd6e462328c859c1

    $.ajax({
        url: queryUrl,
        dataType: "jsonp",
        jsonp: "callback",
        method: "GET"
    }).then(function(response) {
        console.log(response.events);
        for (i = 0; i < response.events.event.length; i++) {
<<<<<<< HEAD
            updateDomWithEvent(response.events.event[i]);
=======
            console.log(response.events.event[i]);
            var concertInfo = $("<div class=events>");
            title = $("<p id = artist>").text(response.events.event[i].title);
            // $("#artist").click(function());
            var venue = $("<p id = venue>").text(response.events.event[i].venue_name);
            // $("#venue").click(funtcion());
            var address = $("<p>").text(response.events.event[i].venue_address);
            var parsedDate = $("<div class=date>").append(moment(response.events.event[i].start_time).format('Do MMM'));
            concertInfo.append(title).append(venue).append(address);
            var button = $('<button>').text('More Info')
            var link = $('<a>').attr('href', response.events.event[i].url)
            link.append(button);
            button.addClass('btn btn-lg');
            $("#event-view").append(parsedDate).append(concertInfo);
            concertInfo.append(link);
             
            //googleSearch();
            
>>>>>>> 1ce3d524b6ed070e65fce21edd6e462328c859c1
        }
    });
}

<<<<<<< HEAD

function updateDomWithEvent(event) {
    console.log(event);
    var concertInfo = $("<div class=events>");
    var buttons = $("<div class=buttons>");
    var title = $("<p id = artist>").text(event.title);
    performers = event.performers.performer.name;
    var venue = $("<p id = venue>").text(event.venue_name);
    var address = $("<p>").text(event.venue_address);
    var latitude = event.latitude;
    var longitude = event.longitude;
    var mapButton = $('<button>').text('Map Info')
    var mapLink = $('<a>').attr('href', "http://www.google.com/maps/place/" + latitude + "," + longitude).attr('target','_blank');
    mapLink.append(mapButton);
    mapButton.addClass('btn btn-lg');
    var button = $('<button>').text('More Info')
    var link = $('<a>').attr('href', event.url).attr('target','_blank');
    link.append(button);
    button.addClass('btn btn-lg');
    var dateAndTime = $("<div class=date>")
    var parsedDate = $("<div>").append(moment(event.start_time).format('Do MMM'));
    var parsedTime = $("<div>").append(moment(event.start_time).format('h A'));
    
    dateAndTime.append(parsedDate).append(parsedTime);
    concertInfo.append(title).append(venue).append(address);
    buttons.append(mapLink).append(link);
   
    iTunes(function(buttonToAppend) {
        buttons.append(buttonToAppend);
    });

    $("#event-view").append(dateAndTime).append(concertInfo).append(buttons);
}

function iTunes(callback){

    console.log(performers);
    performers = performers.replace(/ /g,"+");
    console.log(performers);
    var queryUrl2 = "https://itunes.apple.com/search?term=" + performers + "&entity=allArtist&attribute=allArtistTerm";
    console.log(queryUrl2);

    $.ajax ({
        url: queryUrl2,
        method: "GET"
    }).then(function(response2) {
        var res = JSON.parse(response2);
        var artistLink = (res["results"][0].artistLinkUrl);

        var button = $('<button>').text('Artist Info')
        var bandLink = $('<a>').attr('href', artistLink).attr('target','_blank');
        bandLink.append(button);
        button.addClass('btn btn-lg');

        callback(bandLink);
    });
}
=======
// function googleSearch(){
//     $.ajax({
//         url:'https://www.googleapis.com/customsearch/v1?key=AIzaSyDWeL-Vl1ixwYme3CsCloG4KGPbod3Yx_c&cx=002724992046672505104:qt0x3gyeaes&q='+title.text(),
//         method:'GET'
//     }).then(function(response){
//         console.log(title.text());
//         console.log(response.items[0].formattedUrl);
//         for (i = 0; i < $('.events'); i++){
//         var button = $('<button>').text($('More Info').text);
//         $('.events').append(button); 
//     }            
//     })
// }

    //AIzaSyDWeL-Vl1ixwYme3CsCloG4KGPbod3Yx_c

>>>>>>> 1ce3d524b6ed070e65fce21edd6e462328c859c1



$("#search-location").on("click", function(event){
    event.preventDefault();
    $("#event-view").empty();
    var inputLocation = $("#location-input").val().trim();
    displayConcert(inputLocation);
});

