Kaynak: 
https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker
http://www.javascriptkit.com/dhtmltutors/treewalker.shtml

Sonuç:
example3.js:15 
Array[3]
0
:
Object
position left: 20
position top: 20
position type: "absolute"
text: "something"

Object
position left: 20
position top: 100
position type:"relative"
text: "anything"

Object 
position left: 20
position top: 175
position type: "fixed"
text: "otherthing"
length: 3

İlk önce bir tree walker objesi yaratıyoruz.

    var rootnode = document.querySelector(".container")
    var walker = document.createTreeWalker(rootnode, NodeFilter.SHOW_ELEMENT, null, false);

Ben şahsen querySelector metodunu kullanmayı yeğeliyorum. Sana class ya da id seçmen için olanak veriyor.
createTreeWalker 4 tane parametre alıyor. Asıl olay 2. parametre de dönüyor anladığım kadarıyla. Bu metodu 
incelememiz ve ne istediğimize tam olarak karar verip, nasıl kullanıcağımızı belirlememz gerekir diye 
düşünüyorum. Şu anlık istediğim şeyi yapıyor.

  while (walker.nextNode()) {

Ben LinkedList'i implemente ettiğim zaman bu döngüyü kullanırdım. Yani LinkedList'in tail kısmı boş alana kadar 
ilerle ve içinde ki elemanları ekrana bas. Aslında burada tam olarak yaptığımda bu.

  completeOBJ.push({
      "position top": $(walker.currentNode).offset().top,
      "position left": $(walker.currentNode).offset().left,
      "position type": $(walker.currentNode).css("position"),
      "text": $.trim($(walker.currentNode).text())

En sondan başlayarak burada neden $.trim() metodunu kullandığıma hafifçe değinmek istiyorum. text() metodu whitespace leride
hesaba katarak sana bir çıktı veriyor. $.trim() metodunun yaptığı şey whitespace lerden kurtulmak. $.trim() metodunu daha önceki
kodlarımda da kullandım. Ama daha iyi bir fikrin olursa buna da açığım.

Elemanın top ve left posiyonları x ve ye kordinatlarını vermektedir. Bu metodun javascript'te karşılığı var ama bu daha kolay
bir kullanım.

JavaScript: https://developer.mozilla.org/en-US/docs/Web/API/Range/getBoundingClientRect

Eğer walker'ın tipini kontrol edersen

console.log(typeof walker); walker'ın bir içinde istediğimiz domu tutan bir obje olduğunu göreceksin.
walker.firstChild, walker.lastChild, walker.currentNode kullanabileceğin seçenekler arasında.
currentNode deyince, div e ulaşıyorum ve sonrasında jquery fonksiyonlarını kullanıyoruz.

Hepsi bu kadar. Umarım daha güzel şeyler yaparız.

Happy Codings :)
