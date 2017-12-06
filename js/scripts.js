$("#btn-open-dragarea").click(function(){
    $(".drop-area").slideToggle(300);
    if(open_droparea_clicked){
        open_droparea_clicked = false;
    }
    else{
        open_droparea_clicked = true;
    }
});

$(".drop-area").droppable({
    accept: ".drag-div",
    drop: function(event, ui){
        console.log("Dropped");
        $(this).css("background-color", "green");
        ui.draggable.appendTo($(".drop-area"));
        $(".drag-div").text("Dragged");
    }
});

var drag_object;
var open_droparea_clicked = false;

$(".drag-div").draggable({
    helper: "clone",
    revert: "invalid",
    containment: "document",
    cursor: "move",
    start: function(){
        if(!open_droparea_clicked){
            drag_object_parent = $(".drag-div").parent();
            if(drag_object_parent.hasClass("drop-area")){
                console.log("aguarda!");
            }
            else{
                $(".drop-area").stop(true).slideToggle(300);
            }
        }
    },
    stop: function(){
        if(!open_droparea_clicked){
            $(".drop-area").stop(true).slideToggle(300);    
        }
    }
});