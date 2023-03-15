import { configureStore } from '@reduxjs/toolkit';
import {
    initialState,
} from './initialState';
import configReducer from './reducers/configSlice';
import { IState } from './IState';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
};

export const store =
    configureStore<IState>({
        preloadedState: {
            ...initialState,
            ...(loadState() ?? {}),
        },
        reducer: {
            config: configReducer,
        },
        devTools: true,
    });

export type RootState = ReturnType<typeof store.getState>;