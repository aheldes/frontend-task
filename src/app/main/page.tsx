"use client";

import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import { Graph } from '../../components/Graph/Graph';
import data from '../../data/data';
import Button from '../../components/Button/Button';
import Switch from '../../components/Switch/Switch';
import Tooltip from '../../components/Tooltip/Tooltip';
import Box from '../../components/Box/Box';
import Container from '../../components/Container/Container';
import prepareGraphData from '../../utils/PrepareGraphData/prepareGraphData';
import { ThemeProvider } from '@mui/material/styles';
import { standartButtonTheme, smallButtonTheme } from '../../utils/Themes/buttonThemes';
import { modernTheme, basicTheme } from '../../utils/Themes/tableThemes';
import { Entity as CompanyData } from '../../data/data'

const Page: React.FC = () => {
    const [selectedCompany, setSelectedCompany] = useState<CompanyData | null>(null);

    const [graphType, setGraphType] = useState('type1');
    const [theme, setTheme] = useState(basicTheme);

    const handleRowSelected = (company: CompanyData) => {
        setSelectedCompany(company);
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.checked ? modernTheme : basicTheme);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ marginY: 2, marginX: 'auto', maxWidth: '100%' }}>
                <Box sx={{ display: 'flex', marginBottom: 2, gap: 0.5 }}>
                    <ThemeProvider theme={smallButtonTheme}>
                        <Switch

                            checked={theme === modernTheme}
                            onChange={handleThemeChange}
                            color='default'
                        />
                    </ThemeProvider>
                </Box>
                <Table
                    data={data}
                    columns={[
                        { key: 'company', title: 'Company' },
                        { key: 'industry', title: 'Industry' },
                        { key: 'location', title: 'Location' },
                        { key: 'employee_count', title: 'Employee Count' },
                        { key: 'year_founded', title: 'Year Founded' },
                        { key: 'status', title: 'Status' },
                        { key: 'region', title: 'Region' },
                        { key: 'sector', title: 'Sector' }
                    ]}
                    theme={theme}
                    onRowSelected={handleRowSelected}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginX: 2 }}>
				<ThemeProvider theme={standartButtonTheme}>
	                <Tooltip title="Three Separate Bar Charts with KPI">
	                     <Button
						 	label="Graph 1" onClick={() => setGraphType('type1')}
						 />
	                </Tooltip>
	                <Tooltip title="Single Bar Chart with KPI">
						<Button
							label="Graph 2" onClick={() => setGraphType('type2')}
						/>
	                </Tooltip>
	                <Tooltip title="Three Separate Line Charts with KPI">
	                     <Button
						 	label="Graph 3" onClick={() => setGraphType('type3')}
						 />
	                </Tooltip>
	                <Tooltip title="Pie chart with all KPI">
	                     <Button
						 	label="Graph 4" onClick={() => setGraphType('type4')}
						 />
	                </Tooltip>
				 </ThemeProvider>
            </Box>

            <Box>
                {selectedCompany && (
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        {graphType === 'type1' && (
                            <React.Fragment>
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [{ type: 'Revenue', graphType: 'bar', label: 'Revenue', backgroundColor: 'rgba(53, 162, 235, 0.5)', borderColor: 'rgba(53, 162, 235, 0.8)' }])} />
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [{ type: 'Expenses', graphType: 'bar', label: 'Expenses', backgroundColor: 'rgba(255, 99, 132, 0.5)', borderColor: 'rgba(255, 99, 132, 0.8)' }])} />
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [{ type: 'Profit', graphType: 'bar', label: 'Profit', backgroundColor: 'rgba(75, 192, 192, 0.5)', borderColor: 'rgba(75, 192, 192, 0.8)' }])} />
                            </React.Fragment>
                        )}
                        {graphType === 'type2' && (
                            <React.Fragment>
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [
                                    { type: 'Revenue', graphType: 'bar', label: 'Revenue', backgroundColor: 'rgba(53, 162, 235, 0.5)', borderColor: 'rgba(53, 162, 235, 0.8)' },
                                    { type: 'Expenses', graphType: 'bar', label: 'Expenses', backgroundColor: 'rgba(255, 99, 132, 0.5)', borderColor: 'rgba(255, 99, 132, 0.8)' },
                                    { type: 'Profit', graphType: 'bar', label: 'Profit', backgroundColor: 'rgba(75, 192, 192, 0.5)', borderColor: 'rgba(75, 192, 192, 0.8)' }
                                ])} />
                            </React.Fragment>
                        )}
                        {graphType === 'type3' && (
                            <React.Fragment>
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [{ type: 'Revenue', graphType: 'line', label: 'Revenue', backgroundColor: 'rgba(53, 162, 235, 0.5)', borderColor: 'rgba(53, 162, 235, 0.8)' }])} />
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [{ type: 'Expenses', graphType: 'line', label: 'Expenses', backgroundColor: 'rgba(255, 99, 132, 0.5)', borderColor: 'rgba(255, 99, 132, 0.8)' }])} />
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [{ type: 'Profit', graphType: 'line', label: 'Profit', backgroundColor: 'rgba(75, 192, 192, 0.5)', borderColor: 'rgba(75, 192, 192, 0.8)' }])} />
                            </React.Fragment>
                        )}
                        {graphType === 'type4' && (
                            <Box sx={{
                                width: '50%',
                                height: '100%'
                            }}>
                                <Graph data={prepareGraphData(selectedCompany.monthlyData, [], 'pie')} />
                            </Box>
                        )}
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Page;
