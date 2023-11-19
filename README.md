# Frontend Intern Task

## Prerequisites
You will need [Node.js](https://nodejs.org) version 18.17.0 or higher installed on your system.

## Setup
Get the code by either cloning this repository using git
```
git clone https://github.com/ITsiareshkin/frontend-task.git
```
... or [downloading source code](https://github.com/ITsiareshkin/frontend-task/archive/refs/heads/main.zip) code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

Then start the example app with:

```
npm run dev
```

The app should now be up and running at http://localhost:3000

## Documentation

### Routes
1. Index / Home Page: This is the starting screen of the application. From here, users can navigate to the main screen featuring visualized data.
2. Main page: This page displays visualized data.

### Components
1. Box, Button, Container, Switch, Tooltip - Customized components based on the MUI UI components.
2. Charts(Bar, Line, Pie) - Set of customized charts based on the the Chart.js library.
3. Table -  Table component displaying company data.
4. Graph - Graph component to visualize KPI data, uses Charts.


### Table
The Table component in React is a dynamic data grid built with Material-UI's DataGrid. It's designed for displaying and interacting with tabular data. Key features include:

1. Dynamic Columns: Configures columns dynamically using ColumnConfig objects, allowing for custom titles and widths.
2. Custom Rendering of Cells: It employs a function createMuiColumns to map these configurations to GridColDef objects required by the DataGrid. This mapping includes custom rendering logic for cells in the 'status' and 'sector' columns, where icons (retrieved using getIconForStatus and getIconForSector utils) are displayed alongside the cell value.
3. Pagination Options: Supports customizable pagination with predefined pageSizeOptions.
4. Theming: Integrates with Material-UI's theming using ThemeProvider.
5. Row Interaction: Provides a callback onRowSelected for row click events, enhancing interactivity.
6. TypeScript Support: The component is TypeScript-enabled, ensuring type safety. It uses a generic type <T> to handle different data types for rows.


### Graph
The Graph component in React dynamically renders different chart types (Pie, Line, Bar) based on the provided data. It's a versatile component for data visualization using Chart.js and React-Chartjs-2.
Key features include:

1. Dynamic Chart Type Rendering: Based on the type attribute in the GraphData, it conditionally renders a Pie, Line, or Bar chart.
2. Data and Options Generation: Utilizes generateChartData and generateChartOptions utils functions to prepare the chart's data and configuration options.

Sub-components:
1. Pie: Renders a pie chart using ChartPie from react-chartjs-2 when data.type is 'pie'.
2. Line: Displays a line chart using ChartLine if data.type is 'line'.
3. Bar: Shows a bar chart through ChartBar when data.type is anything else, defaulting to 'bar'.
