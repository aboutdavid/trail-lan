const dns2 = require('dns2');

const { Packet } = dns2;

const server = dns2.createServer({
    udp: true,
    handle: (request, send, rinfo) => {

        const response = Packet.createResponseFromRequest(request);
        const [question] = request.questions;
        const { name } = question;
        if (request.questions[0].type == Packet.TYPE.A)
            response.answers.push({
                name,
                type: Packet.TYPE.A,
                class: Packet.CLASS.IN,
                ttl: 300,
                address: '192.168.50.10'
            });


        send(response);
    }
});



server.on('listening', () => {
    console.log(server.addresses());
});

server.on('close', () => {
    console.log('server closed');
});

server.listen({
    udp: {
        port: 53,
        address: "0.0.0.0",
        type: "udp4",
    },
    tcp: {
        port: 5333,
        address: "0.0.0.0",
    },
});
