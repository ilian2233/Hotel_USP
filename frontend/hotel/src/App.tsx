import React from "react";
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Grid,
} from "@material-ui/core";
import CreateReservation from "./Pages/CreateReservation";
import HomeIcon from "@material-ui/icons/Home";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import { Route, useHistory } from "react-router-dom";
import CurrentReservations from "./Pages/CurrentReservation";
import LoadPerRoom from "./Pages/LoadPerRoom";

const App = (): JSX.Element => {
	const history = useHistory();

	const pages: [string, JSX.Element, () => void][] = [
		[
			"Create Reservation",
			<HomeIcon key="newReservation" />,
			() => {
				history.push("/");
			},
		],
		[
			"Show current reservations",
			<EventSeatIcon key="reservations" />,
			() => {
				history.push("/reservations");
			},
		],
		[
			"Show load per room",
			<WebAssetIcon key="load" />,
			() => {
				history.push("/load");
			},
		],
	];

	return (
		<Grid container>
			<Grid item xs={2}>
				<List>
					{pages.map((item: [string, JSX.Element, () => void]) => (
						// eslint-disable-next-line react/jsx-key
						<ListItem button onClick={item[2]}>
							<ListItemIcon>{item[1]}</ListItemIcon>
							<ListItemText primary={item[0]} />
						</ListItem>
					))}
				</List>
			</Grid>
			<Grid item xs={10}>
				<Route exact path="/">
					<CreateReservation />
				</Route>
				<Route exact path="/reservations">
					<CurrentReservations />
				</Route>
				<Route exact path="/load">
					<LoadPerRoom />
				</Route>
			</Grid>
		</Grid>
	);
};

export default App;
