import ioClient from 'socket.io-client';
import { PUBLIC_API_URL } from '$env/static/public';

const socket = ioClient(PUBLIC_API_URL);

export const io = socket;
