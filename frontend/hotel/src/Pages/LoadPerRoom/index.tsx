import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

interface Room {
	roomNumber: number;
	load: number;
}

const LoadPerRoom = async (): Promise<JSX.Element> => {
	const [rows] = useState<Room[] | undefined>(
		await axios({
			method: "get",
			url: "localhost:5000/api/Rooms",
		})
			.then((val) =>
				val.data.map((i: { id: number; load: number }) => {
					return {
						roomNumber: i.id,
						load: 0, //TODO: Must calc the num days of month - num days with reservations;
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
				{ field: "load", headerName: "Load", width: 130 },
			]}
			rows={rows}
		/>
	) : (
		<CircularProgress />
	);
};

export default LoadPerRoom;
