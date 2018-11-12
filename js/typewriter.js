
document.addEventListener('DOMContentLoaded',function(event){

  var dataText = [ "Hi, I'm Tucker Massad", "Have any questions? Send a message or email me!"];



  function typeWriter(text, i, fnCallback) {



    if (i < (text.length)) {

     document.querySelector(".headline").innerHTML = text.substring(0, i+1) +'<span class="typewriter" aria-hidden="true"></span>';


      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }

    else if (typeof fnCallback == 'function') {

      setTimeout(fnCallback, 5000);
    }
  }

   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){


          StartTextAnimation(0);

     }

    if (i < dataText[i].length) {

     typeWriter(dataText[i], 0, function(){

		 function clearText() {
			 setTimeout(function(){
			      var foo = $(".headline").html().replace('<span class="typewriter" aria-hidden="true"></span>',"");
				 if(foo.charAt(foo.length-1)===">") {
				 				      var newX= foo.substring(0,foo.length-4);
				 } else {
			      var newX= foo.substring(0,foo.length-1);
						}
				 $(".headline").html(newX+'<span class="typewriter" aria-hidden="true"></span>')
				 if(newX.length>0) {
					 clearText();
				 } else {

       				  StartTextAnimation(i + 1);
				 }
		  },50);
		 }
		  setTimeout(function() {
          clearText();
        }, 400);


     });
    } else {
	}
  }
  StartTextAnimation(0);
});
