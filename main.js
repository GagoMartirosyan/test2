  let cubes = document.querySelector(".child-cube")
$(document).ready(function() {
    $(".btn1").click(function() {
        $(".parent-cube1").append('<div class="child-cube"></div>');
        $( function() {
            $( ".child-cube" ).draggable();
          } );
    }); 
    $(".btn2").click(function() { 
        $(".parent-cube2").append('<div class="child-cube"></div>');
        $( function() {
            $( ".child-cube" ).draggable();
          } );
    }); 
    $(".btn3").click(function() { 
        $(".parent-cube3").append('<div class="child-cube"></div>');
        $( function() {
            $( ".child-cube" ).draggable();
          } );
    }); 
    $(".btn4").click(function() { 
        $(".parent-cube4").append('<div class="child-cube"></div>');
        $( function() {
            $( ".child-cube" ).draggable();
          } );
    }); 
});