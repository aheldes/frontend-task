'use client'

import React from 'react';
import Link from 'next/link';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Box from '../components/Box/Box';
import { ThemeProvider } from '@mui/material/styles';
import { standartButtonTheme} from '../utils/Themes/buttonThemes';

const Page = () => {
	return (
		<Container maxWidth="sm">
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<h1>Frontend Developer Intern Task</h1>
				<Link href="/main" passHref>
					<ThemeProvider theme={standartButtonTheme}>
						<Button label="Visualize data"/>
					</ThemeProvider>
				</Link>
			</Box>
		</Container>
	);
}

export default Page;
