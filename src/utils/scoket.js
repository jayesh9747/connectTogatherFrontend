import React,{useMemo} from 'react'
import { io } from 'socket.io-client';
export const socket=useMemo(()=>io(`${process.env.REACT_APP_BACKEND_URL}`),[]);

