import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

console.log("restarting")
const client = new Client({
    authStrategy: new LocalAuth({
        clientId: "hello_world"
    })
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('loading_screen', () => {
    console.log('Client is loading!');
});
client.on('group_join', (data) => {
    console.log('Client is joined  a group!');
    console.log(data)

});

client.on('group_leave', (data) => {
    console.log('Client has left  a group!');
    console.log(data)
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', async (message) => {
    client.sendMessage("120363149126205250@g.us", "hi from nishu")
});

client.initialize();