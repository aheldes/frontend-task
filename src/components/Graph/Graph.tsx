import React from 'react';
import Line from '../Charts/Line/Line';
import Bar from '../Charts/Bar/Bar';
import Pie from '../Charts/Pie/Pie';
import { GraphData } from './Interface'
import { generateChartData, generateChartOptions } from '../../utils/GenerateGraphConfig/generateGraphConfig';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, BarController, LineController, ArcElement, PieController } from 'chart.js';
ChartJS.register(CategoryScale, BarController, LineController, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement, PieController);

export const Graph: React.FC<{ data: GraphData }> = ({ data }) => {
	const chartData = generateChartData(data);
	const options = generateChartOptions(data);

	if (data.type === 'pie') {
		return <Pie data={chartData} options={options} />;
	} else if (data.type === 'line') {
		return <Line data={chartData} options={options} />;
	} else {
		return <Bar data={chartData} options={options} />;
	}
};
