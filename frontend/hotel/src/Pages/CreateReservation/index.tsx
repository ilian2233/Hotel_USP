import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Calendar from "react-calendar";
import RoomSelector from "../../Components/RoomSelector";

const CreateReservation = (): JSX.Element => {
	const [reservationRoom, setReservationRoom] = useState(0);
	const [reservationPeriod, setReservationPeriod] =
		useState<Date[] | undefined>(undefined);

	return (
		<Grid
			container
			component="form"
			onSubmit={() => {
				alert(reservationRoom + "\n" + reservationPeriod);
			}}
		>
			<Grid item xs={12}>
				<RoomSelector period={[new Date(), new Date()]} />
			</Grid>
			<Grid item xs={12}>
				<Calendar
					selectRange
					minDate={new Date()}
					onChange={(val) =>
						setReservationPeriod(Array.isArray(val) ? val : [val])
					}
				/>
			</Grid>
			<Grid item xs={12}>
				<Button type="submit">Submit</Button>
			</Grid>
		</Grid>
	);
};

export default CreateReservation;
