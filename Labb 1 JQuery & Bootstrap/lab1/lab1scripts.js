$( () => {

    $( ".draggable" ).draggable({
        start: function(){
            $( this ).effect("shake");
        }
    });

    var doingCounter= 0;

    $("#doing-counter").html(doingCounter);

    $( ".droppable" ).droppable({
        over: function(){
            $( this ).effect("highlight");
        },
        drop: function( event, ui ) {
            doingCounter++;
            $("#doing-counter").html(doingCounter);
        }
    });

    $( ".tabs" ).tabs();
    
    $( ".datepicker" ).datepicker();
});