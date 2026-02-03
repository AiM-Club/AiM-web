import { useEffect, useRef, useCallback } from "react";
import { Client, type IMessage } from "@stomp/stompjs";

interface UseWebSocketTimerProps {
    challengeId: number | null;
    enabled?: boolean;
    onTimerUpdate?: (data: {
        weekNumber: number;
        stopwatchTimeSeconds: number;
        userId: number;
    }) => void;
    onError?: (error: { code: string; message: string }) => void;
}

export const useWebSocketTimer = ({
    challengeId,
    enabled = true,
    onTimerUpdate,
    onError,
}: UseWebSocketTimerProps) => {
    const clientRef = useRef<Client | null>(null);
    const subscriptionRef = useRef<any>(null);
    const onTimerUpdateRef = useRef(onTimerUpdate);
    const onErrorRef = useRef(onError);

    // 콜백 ref 업데이트 (의존성 배열에 포함하지 않기 위해)
    useEffect(() => {
        onTimerUpdateRef.current = onTimerUpdate;
        onErrorRef.current = onError;
    }, [onTimerUpdate, onError]);

    useEffect(() => {
        const wsUrl = import.meta.env.VITE_WS_DOMAIN;
        const token = localStorage.getItem("accessToken");

        if (!enabled || !challengeId || !wsUrl || !token) {
            return;
        }

        const client = new Client({
            brokerURL: wsUrl,
            connectHeaders: { Authorization: `Bearer ${token}` },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
        });

        client.onConnect = () => {
            const subscribePath = `/sub/challenge/${challengeId}`;

            // 구독 설정: /sub/challenge/{challengeId}
            try {
                subscriptionRef.current = client.subscribe(
                    subscribePath,
                    (message: IMessage) => {
                        try {
                            const data = JSON.parse(message.body);
                            // 에러 응답 처리
                            if (data.status === "ERROR") {
                                onErrorRef.current?.({
                                    code: data.code,
                                    message: data.message,
                                });
                                return;
                            }

                            // 타이머 업데이트 데이터 처리
                            if (
                                data.weekNumber !== undefined &&
                                data.stopwatchTimeSeconds !== undefined &&
                                data.userId !== undefined
                            ) {
                                onTimerUpdateRef.current?.({
                                    weekNumber: data.weekNumber,
                                    stopwatchTimeSeconds: data.stopwatchTimeSeconds,
                                    userId: data.userId,
                                });
                            }
                        } catch (error) {
                            console.error("메시지 파싱 에러:", error);
                        }
                    }
                );

                if (subscriptionRef.current) {
                    console.log("✅ 구독 설정 성공");
                } else {
                    console.error("❌ 구독 설정 실패 - subscriptionRef.current가 null입니다");
                }
            } catch (error) {
                console.error("❌ 구독 설정 중 에러 발생:", error);
            }

            clientRef.current = client;

        };

        client.onDisconnect = () => {
            console.log("WebSocket 연결 해제됨");
        };

        client.onStompError = (frame) => {
            console.error("STOMP 에러:", frame);
            console.error("에러 메시지:", frame.headers["message"]);
            console.error("에러 상세:", frame.body);
        };

        client.onWebSocketError = (event) => {
            console.error("WebSocket 연결 에러:", event);
        };

        client.activate();

        return () => {
            // 구독 해제
            if (subscriptionRef.current) {
                subscriptionRef.current.unsubscribe();
                subscriptionRef.current = null;
            }
            // 연결 해제
            if (clientRef.current && clientRef.current.connected) {
                clientRef.current.deactivate();
                clientRef.current = null;
            }
        };
    }, [challengeId, enabled]);

    // 타이머 시작/종료 요청 함수
    const publishTimer = useCallback(
        (action: "START" | "STOP") => {
            const client = clientRef.current;
            if (!client || !client.connected) {
                console.error("WebSocket이 연결되지 않았습니다.");
                return;
            }
            if (!challengeId) {
                console.error("challengeId가 없습니다.");
                return;
            }

            // 요청 전송: /pub/challenge/{challengeId}/timer
            client.publish({
                destination: `/pub/challenge/${challengeId}/timer`,
                body: JSON.stringify({ action }),
            });
        },
        [challengeId]
    );

    return { publishTimer };
};
