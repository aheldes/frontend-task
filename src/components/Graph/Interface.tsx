export interface GraphData {
	type: string;
	name: string;
	// Missing import for DataPoint
	data: DataPoint[];
	backgroundColor: string;
	borderColor: string;
	borderWidth: number;
	xAxisLabel: string;
	yAxisLabel: string;
}
