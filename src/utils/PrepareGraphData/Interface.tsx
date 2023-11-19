import { ChartData, ChartOptions } from 'chart.js';

export interface DataSetConfig {
	type: string;
	graphType: string;
	label: string;
	backgroundColor: string;
	borderColor: string;
}

export interface MonthlyData {
	date: string;
	Revenue: number;
	Expenses: number;
	Profit: number;
}

export interface ChartConfig {
	type?: string;
	datasets: {
		data: number[];
		backgroundColor: string[];
		borderColor: string[];
		borderWidth: number;
	}[];
	labels: string[];
	xAxisLabel?: string;
	yAxisLabel?: string;
}
