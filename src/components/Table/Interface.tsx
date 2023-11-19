import { Theme } from '@mui/material/styles';

export interface TableProps<T> {
	data: T[];
    columns: {
		key: keyof T;
		title: string;
		width?: number;
		renderCell?: (value: any, row: T) => React.ReactNode;
    }[];
	theme: Theme;
	pageSizeOptions?: number[];
	onRowSelected?: (row: T) => void;
}

export interface ColumnConfig {
	key: string;
	title: string;
	width?: number;
}
