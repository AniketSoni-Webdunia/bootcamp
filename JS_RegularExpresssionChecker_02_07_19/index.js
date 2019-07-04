

function SearchRegex(){
   let  reg =document.getElementById("regexString").value;
   
   let regEx=new  RegExp(reg,"g");
   // let textcontent = document.getElementById("inputString").value;
   // var res = textcontent.match(regEx);
   // // // var res = textcontent.matchAll(regEx);
   // // // let arr = Array.from(res);
   // console.log(res);

   // $('#inputString').highlightTextarea({
   //         words:[reg]
   //  } )
   
   $('#inputString').highlightWithinTextarea({
      highlight: regEx
  });

   }





   

   
