function doTask(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            //resolve("Success : -)");
            reject("Error : -)");
        },1000);
    });
}

doTask().then((data)=>console.log(data),(err)=>console.log(err));

/*doTask().then(function(data){
    console.log(data);}
    ,function(err){
        console.log(err);
    }
})*/