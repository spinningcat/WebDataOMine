$(function() {
  var func = function() {
    var completeOBJ = [];
    var rootnode = document.querySelector(".container")
    var walker = document.createTreeWalker(rootnode, NodeFilter.SHOW_ELEMENT, null, false);
    while (walker.nextNode()) {
      completeOBJ.push({
        "position top": $(walker.currentNode).offset().top,
        "position left": $(walker.currentNode).offset().left,
        "position type": $(walker.currentNode).css("position"),
        "text": $.trim($(walker.currentNode).text())
      });

    }
    console.log(completeOBJ);
  }
  func();
});
