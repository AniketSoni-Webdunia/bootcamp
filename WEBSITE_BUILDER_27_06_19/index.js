function getCol(size){
    if(size==0){
        size="";
    }else{
        size="-"+size
    }
    let str;
    str='<div class="col-md'+size+' column" >  </div>';
    return str;
}



function AddRowWithCols(col){
    var Website = document.querySelector("#main-area");
    var Row = document.createElement('div');
    Row.className="row";
    for(let i=0;i<col;i++){
        Row.innerHTML+=getCol(0);
    }
    Website.appendChild(Row);

    console.log(Website);
}


function webLayout(str){
    let gstring;
    if(typeof str == "string"){
        switch(str){
            case "ls" : gstring=getCol(4)+getCol(0);
                        break;
            case "rs" : gstring=getCol(8)+getCol(0);
                        break;
            case "lrs" : gstring=getCol(3)+getCol(0)+getCol(3);
                        break;
            default :gstring=getCol(0);
        }

    var Website = document.querySelector("#main-area");
    var Row = document.createElement('div');
    Row.className="row";
    Row.innerHTML = gstring;
    Website.appendChild(Row);
    console.log(Website);


    }
     
}

