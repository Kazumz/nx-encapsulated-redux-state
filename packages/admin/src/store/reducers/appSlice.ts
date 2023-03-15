import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from '../hooks/useSelector';
import { initialState } from '../initialState';

export interface IApp {
    irrelevantState: boolean;
    emittedState: unknown;
}

export const appSlice = createSlice({
    name: 'app',
    initialState: initialState.app,
    reducers: {
        setIrrelevantState: (
            state,
            action: PayloadAction<{
                irrelevantState: boolean;
            }>
        ) => {
            state.irrelevantState = action.payload.irrelevantState;
        },
        setEmittedState: (
            state,
            action: PayloadAction<{
                emittedState: unknown
            }>
        ) => {
            state.emittedState = action.payload.emittedState;
        },
    },
});

export function useGetIrrelevantState() {
    return useSelector((x) => x.app.irrelevantState);
}

export function useGetEmittedState () {
    return useSelector((x) => x.app.emittedState);
}

export const appActions = appSlice.actions;
export default appSlice.reducer;