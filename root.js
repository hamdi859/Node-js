const fs=require('fs');
const url=require('url');
const app=require('./express');

function HandleRequest(filepath,res){

    fs.readFile(filepath,null,(error,data)=>{
         if(error){
             res.end('File is not found');
         }else{
             res.end(data);
         }
    })
 
 }
    function root(req,res){
    const path=url.parse(req.url).pathname;
    
    switch(path){
        case '/index':
         HandleRequest('./index.html',res);
            break;
            case '/user':
             HandleRequest('./user.html',res);
                break;
                case '/os':
                    res.end('./os.html',res);
                    break;
                    default:
                        res.end('Page not found',res);
                        break;
   
    
 }

}
module.exports=root;