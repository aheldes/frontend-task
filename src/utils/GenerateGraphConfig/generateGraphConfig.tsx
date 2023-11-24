import { GraphData} from '../../components/Graph/Interface';

// TS errors here. 
export const generateChartData = (data: GraphData) => {
	return {
		labels: data.labels,
		datasets: data.datasets,
	};
};

export const generateChartOptions = (data: GraphData) => {
	return {
		responsive: true,
		plugins: {
			legend: {
				display: true,
			},
			title: {
				display: true,
				text: data.name,
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: data.xAxisLabel,
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: data.yAxisLabel,
				},
			},
		},
	};
};
