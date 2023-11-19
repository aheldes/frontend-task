import React from 'react';
import MuiButton from '@mui/material/Button';
import { SxProps } from '@mui/system';

interface ButtonProps {
	label: string;
	onClick?: () => void;
	sx?: SxProps;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ label, onClick, sx, ...props }, ref) => {
		return (
			<MuiButton ref={ref} onClick={onClick} sx={sx} {...props}>
				{label}
			</MuiButton>
		);
	}
);

export default Button;
