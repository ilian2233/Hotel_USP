import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

const LoadPerRoom = (): JSX.Element => {
	const [reservationRoom, setReservationRoom] = useState(0);

	return (
		<DataGrid
			columns={[
				{ field: "id", headerName: "ID", width: 70 },
				{ field: "load", headerName: "Load", width: 130 },
			]}
			rows={[{ id: 1, load: "Snow", firstName: "Jon", age: 35 }]}
			loading
		/>
	);
};

export default LoadPerRoom;