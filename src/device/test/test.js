import { io, Socket } from 'socket.io-client';

const DEVICE_ID = 'TV-123';
const API_KEY =
  '27b920feaa89977885d3980cf8205c6a1e499f8ac8059c2201ed305f529b1145';

const socket = io('http://localhost:4001', {
  query: {
    deviceId: DEVICE_ID,
    apiKey: API_KEY,
  },
});

socket.on('connect', () => {
  console.log('Device connected:', socket.id);
});

socket.on('disconnect', () => {
  console.log('Device disconnected');
});

socket.on('disconnect', () => {
  console.log('Device disconnected');
});

socket.on('playlist_updated', (data) => {
  console.log('Playlist updated event received:', data);

  // Example action
  // fetchPlaylist();
});

/**
 * Send heartbeat every 30 seconds
 */
setInterval(() => {
  console.log('Sending heartbeat...');

  socket.emit('heartbeat', {
    deviceId: DEVICE_ID,
    apiKey: API_KEY,
  });
}, 5000);
