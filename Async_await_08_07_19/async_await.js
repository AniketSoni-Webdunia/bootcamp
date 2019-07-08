var login = (username,password)=>{
    return new Promise((resolve,reject)=>{
        console.log("logging you ...")
        setTimeout(()=>{
            if(username == "aniket" && password == "ani"){
                var data={status:"success",token:"211ddcdsh1564"}
                console.log("logged in!!!");
                // alert('logged in !!!')
                resolve (data);           
            }else{
                var error={status:"error",message:"Authentication Error",errorCode:404}
                console.log("Oops !!!") 
                reject(error)
            }
        },2000);
    })
}

    var getProfileDetails=async(token)=>{
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


    var ForgettenPassword=async(err)=>{
        // alert(err.message);
        console.log(err.message);
        console.log("Getting help for you from our server")
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             reject("Sorry,can't help you !!!")
         },2000)
        });
     }


     async function App(){
         const loginResult = await login("aniket","ani");
         const profile= await getProfileDetails(loginResult.token) ;       
         console.log(profile.Fullname);        
     }

     App().catch((err)=>{
         
         if(err.errorCode==404){
             ForgettenPassword(err)
                .then(data=>{console.log(data)})
                .catch(err=>{console.log(err)});
             return;
         }
         console.log(err.message);
     });
