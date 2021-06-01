import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { backendURL } from "../../consts";

interface Reservation {
	roomNumber: number;
	endOfReservation: Date;
}

const CurrentReservations = (): JSX.Element => {
	const [rows, setRows] = useState<Reservation[] | undefined>(undefined);

	axios({
		method: "get",
		url: backendURL + "/api/Reservations",
	})
		.then((val) =>
			setRows(
				val.data.map(
					(i: {
						id: number;
						rooms?: {
							id: number;
							isBusy: boolean;
							reservationId: number;
						}[];
						endDate: unknown;
					}) => {
						return {
							id: i.id,
							roomNumber:
								i.rooms?.map((i) => i.id).join(",") || "",
							endDate: i.endDate,
						};
					}
				)
			)
		)
		.catch((err) => {
			console.log(err);
			alert("Error occured while loading reservations.");
			return undefined;
		});

	return rows ? (
		<DataGrid
			autoHeight
			columns={[
				{ field: "id", headerName: "ID", width: 170 },
				{ field: "roomNumber", headerName: "Room number", width: 200 },
				{
					field: "endDate",
					headerName: "End of reservation",
					width: 230,
				},
			]}
			rows={rows}
		/>
	) : (
		<CircularProgress />
	);
};

export default CurrentReservations;
