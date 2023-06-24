import io from 'socket.io-client';
import { useCallback } from 'react';

const backUrl = 'http://localhost:3095';
const sockets: { [key: string]: SocketIOClient.Socket } = {};

const useSocket = (workspace?: string): [SocketIOClient.Socket | undefined, () => void] => {
  // 소켓 연결 해제
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect();

      delete sockets[workspace];
    }
  }, [workspace]);

  if (!workspace) {
    return [undefined, disconnect];
  }

  // 중복 연결 방지
  if (!sockets[workspace]) {
    sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, {
      transports: ['websocket'],
    });
  }

  return [sockets[workspace], disconnect];
};

export default useSocket;
