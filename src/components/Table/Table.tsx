import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getIconForStatus, getIconForSector } from '../../utils/TableIcons/tableIcons';
import { TableProps, ColumnConfig } from './Interface';
import { ThemeProvider } from '@mui/material/styles';

const createMuiColumns = (columns: ColumnConfig[]): GridColDef[] => {
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
	const muiColumns = createMuiColumns(columns);
	return (
		<ThemeProvider theme={theme}>
			<DataGrid
				rows={data}
				columns={muiColumns}
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
