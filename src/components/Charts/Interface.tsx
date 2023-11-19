import type { ChartData, ChartOptions, ChartType } from 'chart.js';

export interface ChartProps<T extends ChartType> {
    data: ChartData<T>;
    options: ChartOptions<T>;
}
