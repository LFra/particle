/**
 * Created by ludwigfrank on 14/01/2017.
 */
import io from 'socket.io-client'
const socket = io('http://localhost:3000')

socket.on('connection', () => {

});

export default socket
