import { GraphData, DataSetConfig } from './Interface';

const prepareGraphData = (
	data: GraphData[],
	dataSets: DataSetConfig[],
	chartType: string = 'bar'
) => {
    if (chartType === 'pie') {
        const totalRevenue = data.reduce((acc, item) => acc + item.Revenue, 0);
        const totalExpenses = data.reduce((acc, item) => acc + item.Expenses, 0);
        const totalProfit = data.reduce((acc, item) => acc + item.Profit, 0);

        return {
            type: 'pie',
            datasets: [{
            data: [totalRevenue, totalExpenses, totalProfit],
            backgroundColor: ['rgba(53, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)'],
            borderColor: ['rgba(53, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(75, 192, 192, 0.8)'],
            borderWidth: 1,
            }],
            labels: ['Revenue', 'Expenses', 'Profit'],
        };
    }

    const datasets = dataSets.map(set => ({
        type: set.graphType,
        label: set.label,
        data: data.map(item => item[set.type]),
        backgroundColor: set.backgroundColor,
        borderColor: set.borderColor,
        borderWidth: 1,
    }));

    return {
        labels: data.map(item => item.date),
        datasets,
        xAxisLabel: 'Months',
        yAxisLabel: 'Amount in USD',
    };
};

export default prepareGraphData;
