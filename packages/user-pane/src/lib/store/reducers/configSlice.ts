import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from '../hooks/useSelector';
import { initialState } from '../initialState';

export interface IConfigSlice {
    toastsEnabled: boolean;
}

export const configSlice = createSlice({
    name: 'config',
    initialState: initialState.config,
    reducers: {
        setToastsEnabled: (
            state,
            action: PayloadAction<{
                toastEnabled: boolean;
            }>
        ) => {
            state.toastsEnabled = action.payload.toastEnabled;
        },
        
    },
});

export function useGetToastsEnabled() {
    return useSelector((x) => x.config.toastsEnabled);
}

export const configActions = configSlice.actions;
export default configSlice.reducer;