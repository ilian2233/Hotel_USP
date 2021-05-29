import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

interface Room {
	roomNumber: number;
	load: number;
}

const LoadPerRoom = (): JSX.Element => {
	const [rows, setRows] = useState<Room[] | undefined>(undefined);

	axios({
		method: "get",
		url: "localhost:5000/api/Reservations",
	})
		.then((val) =>
			setRows(
				val.data.map((i: { id: number; endDate: unknown }) => {
					return {
						roomNumber: i.id,
						endOfReservation: i.endDate,
					};
				})
			)
		)
		.catch((err) => {
			console.log(err);
			alert("Error occured while loading reservations.");
			return undefined;
		});

	return rows ? (
		<DataGrid
			columns={[
				{ field: "id", headerName: "ID", width: 70 },
				{ field: "load", headerName: "Load", width: 130 },
			]}
			rows={rows}
		/>
	) : (
		<CircularProgress />
	);
};

export default LoadPerRoom;
