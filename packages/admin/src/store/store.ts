import { configureStore } from '@reduxjs/toolkit';
import {
    initialState,
} from './initialState';
import appReducer from './reducers/appSlice';
import { IState } from './IState';

export const store =
    configureStore<IState>({
        preloadedState: initialState,
        reducer: {
            app: appReducer,
        },
        devTools: true,
    });

export type RootState = ReturnType<typeof store.getState>;