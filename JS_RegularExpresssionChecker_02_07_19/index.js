

function SearchRegex(){
   let  reg =document.getElementById("regexString").value;
   
   let regEx=new  RegExp(reg,"g");
   let textcontent = document.getElementById("inputString").value;
   var res = textcontent.matchAll(regEx);
   let arr = Array.from(res);
//    res.forEach(element => {
//        textcontent.search
//    });
//    console.log(typeof regEx);
//    console.log(textcontent);
//    console.log(typeof a);
//    console.log(arr);
   var inputVal = document.getElementById("inputString");
   
//    arr.forEach(element => {
    //    console.log(element[0].length)
    //    console.log(element.index)
   inputVal.setSelectionRange(3, 5);
   inputVal.focus();  
//    });
     
   
}

// function checkFilled() {
//     var inputVal = document.getElementById("inputString");
    
//     inputVal.setSelectionRange(0, 3); // Highlights "Cup"
//     inputVal.focus();
    
// }

