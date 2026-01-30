import { useEffect, useRef } from "react";
import { Client } from "@stomp/stompjs";

export const useWebSocketTimer = () => {
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const wsUrl = import.meta.env.VITE_WS_DOMAIN;
    const token = localStorage.getItem("accessToken");

    if (!wsUrl || !token) {
      return;
    }

    const client = new Client({
      brokerURL: wsUrl,
      connectHeaders: { Authorization: `Bearer ${token}` },
      debug: (str) => {
        console.log("STOMP Debug:", str);
      },
    });

    client.onConnect = () => {
      console.log("Connected to server");
    };

    client.onDisconnect = () => {
      console.log("Disconnected from server");
    };

    client.onStompError = (error: any) => {
      console.error("STOMP Error:", error);
    };

    client.onWebSocketError = (event: any) => {
      console.error("WebSocket Error:", event);
      if (event.target) {
        const ws = event.target as WebSocket;
        console.error("WebSocket URL:", ws.url);
        console.error("WebSocket readyState:", ws.readyState);
      }
    };

    client.activate();
    clientRef.current = client;

    return () => {
      if (clientRef.current && clientRef.current.connected) {
        clientRef.current.deactivate();
      }
    };
  }, []);

  return clientRef.current;
};
