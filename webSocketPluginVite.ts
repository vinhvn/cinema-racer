import injectSocketIO from './server/socketIoHandler';
import type { ViteDevServer } from 'vite';

export const webSocketServer = {
  name: 'webSocketServer',
  configureServer(server: ViteDevServer) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    injectSocketIO(server.httpServer!);
  },
};
