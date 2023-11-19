import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

interface TooltipProps {
    title: React.ReactNode; // strind, jsx, etc
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
	return (
		<MuiTooltip TransitionComponent={Zoom} title={title}>
			{children}
		</MuiTooltip>
	);
};

export default Tooltip;
