import {
    useDispatch
} from 'react-redux';
import React from 'react';
import {
    configActions,
    useGetToastsEnabled
} from '../store/reducers/configSlice';

const Configuration: React.FC = () => {
    const dispatch = useDispatch();
    
    const toastsEnabled = useGetToastsEnabled();

    return (
        <div>
            Toasts Enabled Value {toastsEnabled.toString()}
            
            <input type="checkbox" id="toasts" name="toasts" checked={toastsEnabled} onChange={() => {
               dispatch(configActions.setToastsEnabled({toastEnabled: !toastsEnabled})) 
            }}/>
            <label htmlFor="toasts"> Enable Toasts</label>
        </div>
    );
};


export default Configuration;