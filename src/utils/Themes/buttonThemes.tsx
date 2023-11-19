import React from 'react';
import { createTheme} from '@mui/material/styles';

export const standartButtonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '10px 20px',
                    color: 'white',
                    backgroundColor: '#007bff',
                    '&:hover': {
                        backgroundColor: '#0056b3',
                    },
                },
            },
        },
    },
});


export const smallButtonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '0.5rem',
                    padding: '5px 10px',
                    color: 'white',
                    backgroundColor: '#007bff',
                    '&:hover': {
                        backgroundColor: '#0056b3',
                    },
                },
            },
        },
    },
});
