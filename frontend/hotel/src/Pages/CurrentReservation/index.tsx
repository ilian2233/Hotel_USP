import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

interface Reservation {
	roomNumber: number;
	endOfReservation: Date;
}

const CurrentReservations = async (): Promise<JSX.Element> => {
	const [rows] = useState<Reservation[] | undefined>(
		await axios({
			method: "get",
			url: "localhost:5000/api/Reservations",
		})
			.then((val) =>
				val.data.map((i: { id: number; endDate: unknown }) => {
					return {
						roomNumber: i.id,
						endOfReservation: i.endDate,
					};
				})
			)
			.catch((err) => {
				console.log(err);
				alert("Error occured while loading reservations.");
				return undefined;
			})
	);

	return rows ? (
		<DataGrid
			columns={[
				{ field: "id", headerName: "ID", width: 70 },
				{ field: "endDate", headerName: "End date", width: 130 },
			]}
			rows={rows}
		/>
	) : (
		<CircularProgress />
	);
};

export default CurrentReservations;
