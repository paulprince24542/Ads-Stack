import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';
import { DeviceService } from './device.service';

@WebSocketGateway({
  cors: true,
})
export class DeviceGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private deviceService: DeviceService) {}

  async handleConnection(client: Socket) {
    const { deviceId, apiKey } = client.handshake.query;

    const device = await this.deviceService.validateDevice(
      deviceId as string,
      apiKey as string,
    );

    if (!device) {
      client.disconnect();
      return;
    }

    client.data.deviceId = deviceId;

    console.log(`Device connected: ${deviceId}`);
  }

  async handleDisconnect(client: Socket) {
    const deviceId = client.data.deviceId;

    if (deviceId) {
      await this.deviceService.setOffline(deviceId);
    }

    console.log(`Device disconnected: ${deviceId}`);
  }

  @SubscribeMessage('heartbeat')
  async handleHeartbeat(client: Socket) {
    const deviceId = client.data.deviceId;

    await this.deviceService.updateLastSeen(deviceId);

    return {
      event: 'heartbeat_ack',
      data: { status: 'alive' },
    };
  }
}