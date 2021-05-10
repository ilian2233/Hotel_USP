import React, { useState } from "react";
import { Grid, Select } from "@material-ui/core";

const CreateReservation = (): JSX.Element => {
	const [reservationRoom, setReservationRoom] = useState(0);

	return (
		<Grid container>
			<Grid item xs={12}>
				<Select label="Select room:" />
			</Grid>
			<Grid item xs={12}></Grid>
		</Grid>
	);
};

export default CreateReservation;
