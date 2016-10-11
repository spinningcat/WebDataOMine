$(function(){

function getTheStyle()
{
var cssOBJ = {};
var text = document.querySelector("#text");
var style1 = window.getComputedStyle(text, null).getPropertyValue("font-family");
var style2 = window.getComputedStyle(text, null).getPropertyValue("font-size");
var style3 = window.getComputedStyle(text, null).getPropertyValue("color");
var style4 = window.getComputedStyle(text, null).getPropertyValue("font-weight");
cssOBJ = {"font-family": style1,
					 "font-size":	style2,
           "color": style3,
           "font-weight": style4};

           alert(JSON.stringify(cssOBJ));

}
getTheStyle();
});
