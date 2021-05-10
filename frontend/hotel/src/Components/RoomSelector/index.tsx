import React from "react";
import { FormControl, InputLabel, Select } from "@material-ui/core";

const RoomSelector = (props: { period: [Date, Date] }): JSX.Element => {
	return (
		<FormControl>
			<InputLabel>Select room:</InputLabel>
			<Select />
		</FormControl>
	);
};

export default RoomSelector;
