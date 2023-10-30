// import json server

const jsonServer= require('json-server')

//  create a server for running json
const mpServer = jsonServer.create()

// set up root
const router=jsonServer.router('db.json')

// return middleearws
const middlewares=jsonServer.defaults()

const port=4000 || process.env.PORT

mpServer.use(middlewares)
mpServer.use(router)

mpServer.listen(port,()=>{
    console.log(`To do list server started at portb:${port} and waiting for request`);
})