import { sigServer } from '@libp2p/webrtc-star-signalling-server';

let server;
const startServer = async () => {
  server = await sigServer({
    port: 8987,
    host: '0.0.0.0',
    metrics: true,
  });
};

startServer();
