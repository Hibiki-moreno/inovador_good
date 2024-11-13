// ------------------------------------Express inicia servidor 
const express = require('express')
const app = express()

app.use(express.static(__dirname))//Carpeta de donde sirve / carpeta raiz public

const server = app.listen(8888, () => {
    console.log('Servidor web iniciado')
})

//Socket configuration --- Version utilizada (V 2.2.0)
var io = require('socket.io')(server) //Bind socket.io to our express server.

//Dentro de este socket estaran todas las funciones a conectar 
io.on('connection',(socket) => {

    socket.on('pixie', ()=>{console.log("Socket conectado")})  // Funcion solo para validar la conexion con el socket

})// Cierra socket

//***************************************************** Bloque  de Postgres
const { Client } = require('pg')
postgresdb = new Client({
    host: 'localhost',
    user: 'hibiki',
    password: 'yukimaruz7',
    database: 'alumnos',
})


//-----* Get ID
async function get(id) {
    await getid(id);
}

async function getid(id) {
    return new Promise(async resolve => {

        let codigo = id;
        let pg = "SELECT * FROM public.datos WHERE codigo='" + codigo + "'" //"SELECT * FROM test_data WHERE model='"+partn+"'"

        postgresdb.query(pg, function (err, result) {

            if (err) { console.log(err.stack); }

            else if (result.rows[0] == undefined) {


                io.emit('Qryidresponse', 0);
                resolve('resolved');
            }

            else {

                io.emit('Qryidresponse', result.rows[0]) //result.rows[0].model
                console.log("Respuesta enviada")

                resolve('resolved');
            }//Cierra else   
        });//Cierra query
    });//Cierra Promise
}
    //Dentro de este socket estaran todas las funciones a conectar 
    io.on('connection', (socket) => {

        socket.on('pixie', () => { console.log("Socket conectado") })  // Funcion solo para validar la conexion con el socket

        socket.on('connectdbon', function () { postgresdb.connect(); console.log("Postgres conectado") })

        socket.on('connectdboff', function () { postgresdb.end(); console.log("Desconectado") })
            
        socket.on('obten_registro', function (id) { get(id); console.log("ID postgres",id) })
    })


