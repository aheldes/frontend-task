import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getIconForStatus, getIconForSector } from '../../utils/TableIcons/tableIcons';
import { TableProps, ColumnConfig } from './Interface';
import { ThemeProvider } from '@mui/material/styles';

const createMuiColumns = (columns: ColumnConfig[]): GridColDef[] => {
	// Getting TS error here
	//TS2322: Type
	//{     field: string;     headerName: string;     width: number;     renderCell: (params: GridValueGetterParams<any, any, GridTreeNodeWithRender>) => any; }[]
	//is not assignable to type  GridColDef[] 
	//Type
	//{     field: string;     headerName: string;     width: number;     renderCell: (params: GridValueGetterParams) => any; }
	//is not assignable to type  GridColDef 
	//Property  type  is missing in type
	//{     field: string;     headerName: string;     width: number;     renderCell: (params: GridValueGetterParams) => any; }
	//but required in type  GridSingleSelectColDef<any, any, any> 
	//
	//gridColDef.d.ts(267, 5):  type  is declared here.
	return columns.map(({ key, title, width }) => ({
		field: key,
		headerName: title,
		width: width || 150,
		renderCell: (params: GridValueGetterParams) => {
		if (key === 'status') {
			return (
				<span style={{ display: 'flex', alignItems: 'center' }}>
					{getIconForStatus(params.value)} {params.value}
				</span>
			);

		}
		if (key === 'sector') {
			return (
				<span style={{ display: 'flex', alignItems: 'center' }}>
					{getIconForSector(params.value)} {params.value}
				</span>
			);
		}
			return params.value;
		},
	}));
};

const Table = <T extends {}>({
	data,
	columns,
	pageSizeOptions = [5, 10, 25, 50],
	theme,
	onRowSelected,
}: TableProps<T>) => {
	// Also here
	// TS2345: Argument of type
	// {     key: keyof T;     title: string;     width?: number | undefined;     renderCell?: ((value: any, row: T) => ReactNode) | undefined; }[]
	// is not assignable to parameter of type  ColumnConfig[] 
	// Type
	// {     key: keyof T;     title: string;     width?: number | undefined;     renderCell?: ((value: any, row: T) => ReactNode) | undefined; }
	// is not assignable to type  ColumnConfig 
	// Types of property  key  are incompatible.
	// Type  keyof T  is not assignable to type  string 
	// Type  string | number | symbol  is not assignable to type  string 
	// Type  number  is not assignable to type  string 
	const muiColumns = createMuiColumns(columns);
	return (
		<ThemeProvider theme={theme}>
			<DataGrid
				rows={data}
				columns={muiColumns}
				// Also here
				pageSize={pageSizeOptions[0]}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: pageSizeOptions[0]},
					},
				}}
				pageSizeOptions={pageSizeOptions}
				onRowClick={(params) => onRowSelected?.(params.row)}
			/>
		</ThemeProvider>
	);
};

export default Table;
