

    var $mainmenuitems = $("#main-menu ul").children("li"),
totalmenuitems = $mainmenuitems.length;
var openedIndex = 2,

init = function(){
    bindEvents();
    if(validIndex(openedIndex)){
        animateItem($mainmenuitems.eq(openedIndex), true, 700);
    }

},
   


bindEvents = function(){
    $mainmenuitems.children(".images").click(function(){
    var newindex = $(this).parent().index();
    $item = $mainmenuitems.eq(newindex);
    if(openedIndex === newindex){
        animateItem($item, false, 250);
        openedIndex = -1
    }
    else{
        if(validIndex(newindex)){
        animateItem($mainmenuitems.eq(openedIndex), false, 250);
        openedIndex = newindex
        animateItem($item, true, 250);
    }
        }
    });
$(".button").hover(function(){
$(this).addClass("hovered");
},
function(){
   $(this).removeClass("hovered");
}
);
$(".button").click(function(){
    var newindex = $(this).index();
    $item = $mainmenuitems.eq(newindex);
    if(openedIndex === newindex){
        animateItem($item, false, 250);
        openedIndex = -1
    }
    else{
        if(validIndex(newindex)){
        animateItem($mainmenuitems.eq(openedIndex), false, 250);
        openedIndex = newindex
        animateItem($item, true, 250);
    }
        }
    



});
validIndex = function(indexToCheck){
    return (indexToCheck >= 0) &&(indexToCheck < totalmenuitems);


},
animateItem = function($item, toOpen, speed){
  var  $colorimage = $item.find(".color");
  itemParam = toOpen ?{width: "420px" }: {width: "140px"},
  colorImageParam = toOpen ? {left: "0px"}:{left: "140px"};

    $colorimage.animate(colorImageParam,speed);
$item.animate(itemParam,speed);


  
    
};
}
init();