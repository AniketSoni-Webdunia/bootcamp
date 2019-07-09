var studentInfo = [
   
];


let options=[]


function postScript() {

    renderOptions();

    $("#table_body").html("");
    studentInfo.forEach(student => {
        var TR = document.createElement("tr");
        $(TR).attr('id',student.id)
        TR.innerHTML =
            "<td>" +
            student.name +
            '</td><td class="t_subject">' +
            student.subject +
            "</td><td>" +
            student.marks +
            '</td><td><button class="btn btn-danger" onclick="deleteStudent('+student.id+',this)"'+ 
            student.id +
            ">Delete</button></td>";

        $("#table_body").append(TR);

        
       

    });

     //options
  
    $("#table_body").each(function () {
        $(this)
            .find("tr:even")
            .css("background-color", "gray");
    });
    $("#record").text(studentInfo.length);
}

function renderOptions(){
    document.getElementById('filterSubject').innerHTML="";
    document.getElementById('filterSubject').innerHTML='<option value="" selected>Filter by Subject:All</option>';
        
    options.forEach(sub => {
       let newsubjectoption = document.createElement("option");
       $(newsubjectoption).attr("value",sub);
       $(newsubjectoption).text(sub);
       $('#filterSubject').append(newsubjectoption)
    });

}

$(document).ready(function () {
    console.log("Application Started");
    $("#addStudentBtn").attr("disabled", true);
    console.log(studentInfo);

    postScript();

    $("#sortnamebtn").click(function () {
        console.log("sort:name btn");
        studentInfo.sort(function (a, b) {
            var a1 = a.name.toLowerCase(),
                b1 = b.name.toLowerCase();
            if (a1 == b1) return 0;
            return a1 > b1 ? 1 : -1;
        });
        postScript();
    });

    $("#sortmarksbtn").click(function () {
        console.log("sort:marks btn");
        studentInfo.sort(function (a, b) {
            return a.marks - b.marks;
        });
        postScript();
    });

    $("#filterSubject").on("change", function () {
        let val = this.value;
        $("#table_body tr .t_subject").filter(function () {
            $(this.closest("tr")).toggle(
                $(this)
                    .text()
                    .toLowerCase()
                    .indexOf(val.toLowerCase()) > -1
            );
        });
    });

    $(".studentEntry").on("keyup", function () {
        console.log("student Entry Form Event:");

        var name = $("#inputName").val();
        var subject = $("#inputSubject").val();
        var marks = $("#inputMarks").val();

        var filter = /^[1-9]\d*(\.\d+)?$/;

        if (name != "" && subject != "" && marks != "") {
            console.log("All field are field");
            if (filter.test(marks) && marks!="") {
                console.log("success");
                $("#addStudentBtn").attr("disabled", false);
                $(this).css('border',"");
            } else {
                $(this).css("border", "2px solid red");
                $("#addStudentBtn").attr("disabled", "true");
            }
        }
        else {
            
            $("#addStudentBtn").attr("disabled", "true");
        }
    });

    $("#addStudentBtn").on('click', function () {
        let name= $("#inputName").val();
        let  subject= $("#inputSubject").val();
        let  marks= $("#inputMarks").val();

        if(name != "" && subject != "" && marks != ""){
        var student = {
            id: studentInfo.length + 1,
            name: $("#inputName").val(),
            subject: $("#inputSubject").val(),
            marks: $("#inputMarks").val()
        };
        studentInfo.push(student);

        let newSubject=true;
         options.forEach(sub => {
             if(sub.toLowerCase() == subject.toLowerCase()){
                  console.log(sub+":"+subject)
                  newSubject=false;
             }
         });
         console.log(newSubject)
         if(newSubject){
             options.push(subject);  
         }
         
        postScript(); 
         $("#table_body tr:last-child").hide(0,()=>{
            $("#table_body tr:last-child").show("slow",()=>{
                console.log("completed");
            })
         })

        
        $("#inputName").val("");
        $("#inputSubject").val("");
        $("#inputMarks").val("");
        $("#addStudentBtn").attr("disabled",true);
    }else{
        alert("First fill All Value");
    }
        
    });




    

    
    

   
});


function deleteStudent(id,obj) {

   

    console.log("Deleting Student : ");
    console.log(id);

    let sub=""
    studentInfo.forEach(student => {
         if(student.id == id){
             sub = student.subject;
         }
    });
    let count=0;
    studentInfo.forEach(student => {
        if(student.subject == sub ){
            count++;
        }
   });
   
   options = $.grep(options, function (e) {
    return e != sub;
});
   

    studentInfo = $.grep(studentInfo, function (e) {
        return e.id != id;
    });

    // let tr=;
    // console.log(tr);

    $(obj).parent().parent().fadeOut(400,()=>{
        postScript(); 
    });
     

    
    
     
}




