import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TechnologyIcon from '@mui/icons-material/Computer';
import EnergyIcon from '@mui/icons-material/FlashOn';
import HealthcareIcon from '@mui/icons-material/LocalHospital';
import EducationIcon from '@mui/icons-material/School';
import AutomotiveIcon from '@mui/icons-material/DirectionsCar';
import FoodIcon from '@mui/icons-material/Restaurant';
import FitnessIcon from '@mui/icons-material/FitnessCenter';
import MediaIcon from '@mui/icons-material/Theaters';
import FinanceIcon from '@mui/icons-material/AccountBalance';
import TravelIcon from '@mui/icons-material/Flight';
import { green, amber, grey } from '@mui/material/colors';
import { Sector, Status } from '../../data/data'
// Import error

export const getIconForStatus = (status: Status) => {
	switch (status) {
		case 'Active':
			return <CheckCircleIcon style={{ color: green[500] }} />;
		case 'Pending':
			return <PauseCircleFilledIcon style={{ color: amber[500] }} />;
		case 'Inactive':
			return <RemoveCircleOutlineIcon style={{ color: grey[500] }} />;
		default:
			return null;
	}
};

export const getIconForSector = (sector:  Sector) => {
	switch (sector) {
		case 'Technology':
			return <TechnologyIcon />;
		case 'Energy':
			return  <EnergyIcon />;
		case 'Healthcare':
			return <HealthcareIcon />;
		case 'Education':
			return <EducationIcon />;
		case 'Automotive':
			return <AutomotiveIcon />;
		case 'Food':
			return <FoodIcon />;
		case 'Fitness':
			return <FitnessIcon />;
		case 'Media':
			return <MediaIcon />;
		case 'Finance':
			return <FinanceIcon />;
		case 'Travel':
			return <TravelIcon />;
		default:
			return null;
	}
};
