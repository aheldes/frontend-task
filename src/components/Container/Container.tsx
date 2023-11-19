import React, { ReactNode } from 'react';
import MuiContainer from '@mui/material/Container';

interface ContainerProps {
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
	fixed?: boolean;
	children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ maxWidth = 'lg', fixed = false, children }) => {
	return (
		<MuiContainer maxWidth={maxWidth} fixed={fixed}>
			{children}
		</MuiContainer>
	);
};

export default Container;
