import { useEffect } from 'react';
import { store } from '../store/store';
import { IState } from '../store/IState';

type EventListener = (state: IState) => void;
type Unsubscribe = () => void;

const listeners = new Set<EventListener>();
export function subscribe(listener: EventListener): Unsubscribe {
    listeners.add(listener);
    
    return () => {
        listeners.delete(listener);
    }
}

export default function useStateEventEmitter(): void {
    useEffect(() => {
        store.subscribe(() => {
            const currentState = store.getState();

            for (const item of listeners.values()) {
                item(currentState);
            }
        })
    }, [])
}