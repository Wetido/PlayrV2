import {WebSocketGateway, WebSocketServer, OnGatewayConnection} from "@nestjs/websockets";

interface Connections {
    [key: number]: any;
}

@WebSocketGateway(8010)
export class WebSocket implements OnGatewayConnection {

    @WebSocketServer()
    wss;

    connections: { [name: string]: any } = {};

    handleConnection(client){
        this.connections['1'] = client;
        console.log(this.connections);
        client.emit('connection', 'succesful');
    }
}



