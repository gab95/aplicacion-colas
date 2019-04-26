//comando para establecer la comunicacion
var socket = io()
var label = $('#lblNuevoTicket')

//on son par escuchar sucesos
socket.on('connect', function() {
    console.log('conectado al servidor');
})
socket.on('disconnect', function() {
    console.log('desconectado del servidor');
})


socket.on('estadoActual', function(resp) {
    label.text(resp.actual)
})



$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket)
    })
})