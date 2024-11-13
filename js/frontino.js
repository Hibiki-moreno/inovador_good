let resultado  // Se almacena en una variable


    window.addEventListener('load', function () {
        let selectedDeviceId;


        const codeReader = new ZXing.BrowserMultiFormatReader()


        console.log('ZXing code reader initialized')
        codeReader.listVideoInputDevices()
            .then((videoInputDevices) => {
                const sourceSelect = document.getElementById('sourceSelect')
                selectedDeviceId = videoInputDevices[0].deviceId
                if (videoInputDevices.length >= 1) {
                    videoInputDevices.forEach((element) => {
                        const sourceOption = document.createElement('option')
                        sourceOption.text = element.label
                        sourceOption.value = element.deviceId
                        sourceSelect.appendChild(sourceOption)
                    })

                    sourceSelect.onchange = () => {
                        selectedDeviceId = sourceSelect.value;
                    };

                    const sourceSelectPanel = document.getElementById('sourceSelectPanel')
                    sourceSelectPanel.style.display = 'block'
                }

           

                document.getElementById('startButton').addEventListener('click', () => {
                    codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
                        if (result) {
                     

                            resultado = document.getElementById('codigo').value = result.text
                            getid(resultado)
                            console.log(resultado)
                        }
                        if (err && !(err instanceof ZXing.NotFoundException)) {
                            console.error(err)
                           document.getElementById('codigo').textContent = err
                        }
                    })
                    console.log(`Started continous decode from camera with id ${selectedDeviceId}`)
                })

                document.getElementById('resetButton').addEventListener('click', () => {
                    codeReader.reset()
                    document.getElementById('codigo').textContent = '';
                    document.getElementById('nombre').textContent = '';
                    document.getElementById('foto').src = '';
                    console.log('Reset.')
                })

            })
            .catch((err) => {
                console.error(err)
            })
    })

//---------------------------------------------  Funciones Backbone ---------------------------------------------------/*/
const socket = io()


function test() {
    const socket = io();
    socket.emit('pixie')   
}
function hola() {
    socket.log("Si esta")
}

function dbon() { socket.emit('connectdbon') }

function dboff() { socket.emit('connectdboff') }

dbon()

function getid(resultado) {
    console.log(resultado)
    console.log(resultado.ruta)
    socket.emit('obten_registro', resultado)

}

//**************** DB Responses
socket.on('Qryidresponse', function (data) {

    if (data != 0) {
        console.log(data)
        document.getElementById('codigo').textContent = data.codigoe
        document.getElementById('foto').src = data.ruta
        console.log(data.ruta)
        document.getElementById('nombre').textContent = data.nombre
    }
    else {
        console.log("Algo salio mal en el backend")
    }
})
