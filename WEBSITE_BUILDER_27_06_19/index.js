var selectID = "";

function getCol(size){
    if(size==0){
        size="";
    }else{
        size="-"+size
    }
    let str;
    str='<div class="col-md'+size+' column" id="'+generateId("grid")+'" onclick="showProperties(this.id)">  </div>';
    return str;
}

function generateId(str){
    return str+"_"+Math.random().toString(36).substr(2,9);
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

function showProperties(id){

    let propwindow = document.querySelector("#proppalatte");
    console.log(propwindow)
    let element=document.querySelector("#"+id);
    selected(id);
    let s = getComputedStyle(element);
     
    let properties = `<div class="row mt-1">
    <div class="col-md-5 smtxt">
      `+"Background Color"+`
    </div>
    <div class="col-md-5 smtxt">
        `+s.backgroundColor+`
      </div>
  </div>
  <div class="row mt-1">
  <div class="col-md-5 smtxt">
    `+"Width"+`
  </div>
  <div class="col-md-5 smtxt">
      `+s.width+`
    </div>
</div>
<div class="row mt-1">
  <div class="col-md-5 smtxt">
    `+"Height"+`
  </div>
  <div class="col-md-5 smtxt">
      `+s.height+`
    </div>
</div>
<div class="row mt-1">
  <div class="col-md-5 smtxt">
    `+"Border radius"+`
  </div>
  <div class="col-md-5 smtxt">
      `+s.borderRadius+`
    </div>
</div> 
`;
    // propwindow.innerHTML="<p>"+id+"</p>";
    propwindow.innerHTML=properties;
    console.log(s.backgroundColor)
    console.log(s.height)

  
    
}

function selected(id){
    if(selectID != ""){
       let old=document.querySelector("#"+selectID);
       old.classList.remove("selected-element");       
    }
    selectID=id;
    let newS=document.querySelector("#"+selectID);
    newS.classList.add("selected-element");
}

