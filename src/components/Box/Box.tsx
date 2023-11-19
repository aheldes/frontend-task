import React, { ReactNode } from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { SxProps } from '@mui/system';

interface BoxProps extends MuiBoxProps {
	children?: ReactNode;
	sx?: SxProps;
}

const Box: React.FC<BoxProps> = ({ children, ...props }) => {
	return (
		<MuiBox {...props}>
			{children}
		</MuiBox>
	);
};

export default Box;
