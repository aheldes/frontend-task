import React from 'react';
import { Pie as ChartPie } from 'react-chartjs-2';
import { ChartProps } from '../Interface';

const Pie: React.FC<ChartProps<'pie'>> = ({ data, options }) => {
	return <ChartPie data={data} options={options} />;
};

export default Pie;
