import {Socket} from "phoenix"

let socket = new Socket("/socket", {
  params: {token: window.userToken},
  logger: function(kind, message, data) {
    console.info(`[SOCKET] ${kind}: ${message}`, {data: data});
  }
});

socket.connect()

let channel = socket.channel("room:lobby", {})
channel.join()
  .receive("ok", resp => {
    console.log("Joined successfully", resp)
    setInterval(() => {
      console.log('Sending activity notification');
      channel.push('activity', {})
        .receive('ok', () => console.log('Sending succeeded'))
        .receive('error', error => console.warn('Sending failed', error));
    }, 5000);
  })
  .receive("error", resp => { console.log("Unable to join", resp) })

export default socket
