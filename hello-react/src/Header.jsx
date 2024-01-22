import { useContext } from "react";
import { ThemeContext } from "./Theme";

import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import {
	Checklist as ChecklistIcon,
	DeleteSweep as ClearAllIcon,
	LightMode as LightModeIcon,
	DarkMode as DarkModeIcon,
} from "@mui/icons-material";

export default function Header({ count, clear }) {
	const { mode, setMode } = useContext(ThemeContext);

	return (
		<AppBar position="static">
			<Toolbar>
				<Badge badgeContent={count} color="error">
					<ChecklistIcon />
				</Badge>
				<Typography
					variant="h6"
					sx={{ ml: 3, flexGrow: 1 }}>
					Checklist
				</Typography>
				<>
					{mode == "dark" ? (<IconButton onClick={() => {
						setMode("light")
					}} color="inherit">
						<LightModeIcon />
					</IconButton>) : (<IconButton onClick={() => {
						setMode("dark")
					}} color="inherit">
						<DarkModeIcon />
					</IconButton>)}
				</>





				<IconButton onClick={clear} color="inherit">
					<ClearAllIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}