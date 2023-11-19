import React from 'react';
import { Bar as ChartBar } from 'react-chartjs-2';
import { ChartProps } from '../Interface';

const Bar: React.FC<ChartProps<'bar'>> = ({ data, options }) => {
	return <ChartBar data={data} options={options} />;
};

export default Bar;
