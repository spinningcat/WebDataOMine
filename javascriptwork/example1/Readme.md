Kaynak: http://www.javascriptkit.com/dhtmltutors/treewalker.shtml

Çok basit bir örnek hazırladım. Fakat bütün mevzuyu bir nevi özetliyor.
Öncelike yaptığımız DOM "n-ary tree" nin bir kısmını alarak.

var rootnode=document.getElementById("contentarea")
var walker=document.createTreeWalker(rootnode, NodeFilter.SHOW_ELEMENT, null, false

Kendi n-ary tree mizi yaratıyoruz. contentarea sadece bütün childnode 
ları wrap eden bir div. Sayfada ilerlersen göreceksin ki yaptığımız tek şey 
içlerinde dolaşmak ve filtrelemek. Sonraki örneklerde bunları yapacağım.
Üslubumun kusuruna bakma ukalaca olmuyordur umarım.

Bir kaç örnek anlatımıyla ilerleyelim. Belli metodlarımız var.
Yukarıdaki 2 satırla walker'ı bir object olarak yarattık.

"alert(typeof walker)"

while(walker.nextNode()){
	alert(walker.currentNode.innerText);
}
LinkedList yapısından hatırlarsak en uçtaki "tail" kısmı boş olana kadar 
ilerleyip değerleri alırdık. Sanırım bunu da böyle düşünebiliyoruz.

Css class larını almak, belki font özelliklerini almakta mümkün incelemek 
Ama temelde baktığımızda bir ağacı dolaşmaktan farklı değil.
Tabi bu method eski browser larda desteklenmiyor. Es6 özelliği değil sanırım.
###### Shim, babel gibi şeylere ihtiyacımız olabilir ilerleyen zamanlarda.
