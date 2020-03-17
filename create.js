const http=require('http');
const root=require('./root');
const app=require('./express');

const server=http.createServer(app);
server.listen(3000,'127.0.0.1',()=>{
console.log('En cours ...');

})

   