import { Module } from '@nestjs/common';
import { WebSocket } from './websocket.gateway';

@Module({
    providers: [WebSocket],
})
export class WebSocketModule {}