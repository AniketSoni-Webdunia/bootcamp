let lcd="";
let lcd_l="";
let result=0;
let op=null;

function generateAction(ele){
  if(op=="="){
    op=null;
    lcd_l="";
    document.querySelector("#lcd_l").innerHTML=lcd_l;
    document.querySelector("#lcd").innerHTML=result;
  }
   if(lcd.length<10){
    
    let a=+ele.id;
    
     if(isNaN(a) == false ){
       lcd+=ele.id ;  
     }else{
       if(ele.id=="dot"){
        lcd+="." 
       }
     } 
     document.querySelector("#lcd").innerHTML=(lcd=="")?"0":lcd;
    }
}


function clearEntry(){
    lcd="";
    document.querySelector("#lcd").innerHTML=(lcd=="")?"0":lcd;
}

function BackSpace(){
   lcd=lcd.substr(0,lcd.length-1);
   document.querySelector("#lcd").innerHTML=(lcd=="")?"0":lcd;
}

function OperatorFunction(ele){
    if(lcd != "" || lcd!=0){
    let value = +lcd;
    if(op != null){
    switch(op){
      case "+": result+=value;
               break;
      case "-": result-=value;
               break; 
      case "/": result/=value;
               break;
      case "X": result*=value;
               break; 
             
      
       }
    }
    else{
      
      result=value;
    }  
    if(Number.isInteger(result)==false){
    result=result.toFixed(2);
    }
    console.log(result);

    if((result+"").length > 10){
      AllClear();
      document.querySelector("#lcd_l").innerHTML='<p style="color:red">!Device Capacity,Press C';
      return;
    }

    
    document.querySelector("#lcd").innerHTML=result;
    
    op = ele.id;
    lcd_l= lcd_l + lcd +" "+ op+" ";
    
    lcd="";
    document.querySelector("#lcd_l").innerHTML=lcd_l;
  }else{
    if(result==0){
      return;
    }
    op=ele.id;
    lcd_l=lcd_l.substr(0,lcd_l.length-2)+" "+op+" ";
    document.querySelector("#lcd_l").innerHTML=lcd_l;
  }
    
}

function AllClear(){
  lcd="",lcd_l="",result=0;
  document.querySelector("#lcd").innerHTML=result;
  document.querySelector("#lcd_l").innerHTML=lcd_l;

}

function negation(){
  if(lcd.substr(0,1)=="-"){
    lcd=lcd.substr(1);
  }else{
  lcd="-"+lcd;
  }
  document.querySelector("#lcd").innerHTML=lcd;
}