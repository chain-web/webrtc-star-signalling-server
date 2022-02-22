import { start } from 'libp2p-webrtc-star-signalling-server';

let server;
const startServer = async () => {
  server = await start({
    port: 8988,
    host: '0.0.0.0',
    metrics: false,
  });
};

startServer();
