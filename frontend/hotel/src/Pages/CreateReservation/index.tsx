import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import Calendar from "react-calendar";
import axios from "axios";
import { backendURL } from "../../consts";

const CreateReservation = (): JSX.Element => {
	const [reservationPeriod, setReservationPeriod] =
		useState<Date[] | undefined>(undefined);

	const postDate = () => {
		reservationPeriod
			? axios({
					method: "post",
					url: backendURL + "/api/Reservations",
					data: {
						id: Math.floor(Math.random()),
						customerId: Math.floor(Math.random()),
						startDate: reservationPeriod[0],
						endDate: reservationPeriod[1],
					},
			  })
					.then(() => alert("Reservation made succesfully."))
					.catch((err) => {
						console.log(err);
						alert("Error occured while making your reservation.");
					})
			: alert("Reservation dates seems to be empty.");
	};

	return (
		<Grid
			container
			component="form"
			direction="column"
			justify="center"
			alignItems="center"
			spacing={5}
			onSubmit={() => {
				alert(reservationPeriod);
				postDate();
			}}>
			<Grid item xs={12}>
				<Calendar
					selectRange
					returnValue="range"
					minDate={new Date()}
					onChange={(val) =>
						setReservationPeriod(
							Array.isArray(val) ? val : undefined
						)
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
