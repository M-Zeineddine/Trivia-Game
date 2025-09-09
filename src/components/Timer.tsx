import React, { useEffect, useRef, useState } from 'react';
import { Text, AppState, AppStateStatus } from 'react-native';

interface Props {
  seconds: number;
  onEnd: () => void;
}

const Timer: React.FC<Props> = ({ seconds, onEnd }) => {
  const [remaining, setRemaining] = useState(seconds);
  const startRef = useRef(Date.now());
  const appState = useRef<AppStateStatus>(AppState.currentState);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - startRef.current) / 1000);
      const left = seconds - diff;
      setRemaining(left);
      if (left <= 0) {
        clearInterval(interval);
        onEnd();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (appState.current.match(/inactive|background/) && state === 'active') {
        const diff = Math.floor((Date.now() - startRef.current) / 1000);
        setRemaining(seconds - diff);
      }
      appState.current = state;
    });
    return () => sub.remove();
  }, []);

  return <Text style={{ fontSize: 24 }}>{remaining}</Text>;
};

export default Timer;
