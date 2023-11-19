import React from 'react';
import { Line as ChartLine } from 'react-chartjs-2';
import { ChartProps } from '../Interface';

const Line: React.FC<ChartProps<'line'>> = ({ data, options }) => {
	return <ChartLine data={data} options={options} />;
};

export default Line;
