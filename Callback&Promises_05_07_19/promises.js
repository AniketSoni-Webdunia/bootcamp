//link : https://jsfiddle.net/r4wt3y8f/1/

var login = (username,password)=>{
    return new Promise((resolve,reject)=>{
        console.log("logging you ...")
        setTimeout(()=>{
            if(username == "aniket" && password == "ani"){
                var data={status:"success",token:"211ddcdsh1564"}
                console.log("logged in!!!")
                resolve (data);           
            }else{
                var error={status:"error",message:"Authentication Error",errorCode:404}
                console.log("Oops !!!") 
                reject(error)
            }
        },2000);
    })
}


var getProfileDetails=(token)=>{
    return new Promise((resolve,reject)=>{
        console.log("Getting Your Profile Ready...")
        setTimeout(()=>{
            if(token=="211ddcdsh1564"){
                //User Profile Details
                var data = { Fullname:"Aniket Soni",
                             Post    :"Associate Software Developer Traniee",
                             Orgainization : "Webdunia",
                             Experience : "Fresher",                         
                           }
                 console.log("All set !!!")          
                 resolve(data);          
            }else{
                var error={
                        errorCode:"500",
                        message:"Internal server Error"
                }
                console.log("Oops !!!") 
                reject(error);
            }

        },2000)
        
    })
}

 var ForgettenPassword=(err)=>{
    console.log(err.message);
    console.log("Getting help for you from our server")
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         reject("Sorry,can't help you !!!")
     },2000)
    });
 }





login("aniket","ani") // login request(1)
.then(data=>getProfileDetails(data.token)) // if request(1) resolve make request(2)
.then(data=>console.log("hi,"+data.Fullname)) // if request(2) resolve print data
.catch(error=>{
    if(error.errorCode==404){
       return ForgettenPassword(error).then(data=>console.log(data)).catch(error=>console.log(error))
    }
}); 