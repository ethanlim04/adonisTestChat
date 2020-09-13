let ws = null

$(function () {
  // Only connect when username is available
  if (window.username) {
    startChat()
  }
})

function startChat () {
  ws = adonis.Ws().connect()

  ws.on('open', () => {
    $('.connection-status').addClass('connected')
    subscribeToChannel()
  })

  ws.on('error', () => {
    $('.connection-status').removeClass('connected')
  })
}

function subscribeToChannel () {
  const chat = ws.subscribe('chat')

  chat.on('error', () => {
    $('.connection-status').removeClass('connected')
  })

  chat.on('message', (message) => {
    $('.messages').append(`
      <div class="message"><h3> ${message.username} </h3> <p> ${message.body} </p> </div>
    `)
  })
}

$('#message').keyup(function (e) { //e = event (key pressed)
  if (e.which === 13) { // When e.which === 13, enter was pressed
    e.preventDefault()

    const message = $(this).val() // Message value
    $(this).val('')               // Reset message value

    ws.getSubscription('chat').emit('message', { // Sends request to websocket
      username: window.username,
      body: message
    })

    return
  }
})
