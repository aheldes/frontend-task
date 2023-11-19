import React from 'react';
import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
import { SxProps } from '@mui/system';

interface SwitchProps extends MuiSwitchProps {
    sx?: SxProps;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
    ({ checked, onChange, sx, ...props }, ref) => {
        return (
            <MuiSwitch ref={ref} checked={checked} onChange={onChange} sx={sx} {...props} />
        );
    }
);

export default Switch;
