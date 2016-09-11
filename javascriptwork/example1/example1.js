
var rootnode=document.getElementById("contentarea1")
var walker=document.createTreeWalker(rootnode, NodeFilter.SHOW_ELEMENT, null, false);

alert(walker.currentNode.tagName);
alert(walker.firstChild().tagName);
while(walker.nextNode()){
		alert(walker.currentNode.tagName);
}
