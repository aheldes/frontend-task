import React from 'react';
import { createTheme} from '@mui/material/styles';

export const basicTheme = createTheme({
	components: {
		MuiDataGrid: {
			styleOverrides: {
				root: {
					border: '1px solid #e0e0e0',
					borderRadius: '4px',
					borderColor: 'primary.light',
				},
				cell: {
					color: '#575757',
					fontSize: '1rem',
				},
				columnHeader: {
					backgroundColor: '#dcdcdc',
					color: '#333',
					fontSize: '1rem',
					fontWeight: 'normal',
				},
			},
		},
	},
});

export const modernTheme = createTheme({
	components: {
		MuiDataGrid: {
			styleOverrides: {
				root: {
					boxShadow: '0 4px 12px 0 rgba(0,0,0,0.2)',
					overflow: 'hidden',
					border: '2px solid #007bff',
					'& ::-webkit-scrollbar': {
						width: '8px',
						backgroundColor: '#F5F5F5',
					},
					'& ::-webkit-scrollbar-thumb': {
						borderRadius: '8px',
						backgroundColor: '#007bff',
					},
				},
				columnHeader: {
					backgroundColor: '',
					fontWeight: 'bold',
					textAlign: 'center',
					fontSize: '1rem',
					borderBottom: '2px solid #3f50b5',
					'&:hover': {
						backgroundColor: 'linear-gradient(180deg, #1c1c1c 0%, #3f50b5 100%)',
					},
				},
				cell: {
					textAlign: 'center',
					fontSize: '1rem',
					borderBottom: '1px solid #e0e0e0',
					'&:hover': {
						backgroundColor: 'rgba(63, 81, 181, 0.1)',
					},
				},
				row: {
					'&:nth-of-type(odd)': {
						backgroundColor: 'rgba(63, 81, 181, 0.05)',
					},
				},
				pagination: {
					color: '#3f50b5',
				},
			},
		},
	},
});
