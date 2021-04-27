import React from "react";

import * as icons from "./_menu-icons";
import MenuButton from "./menu-button";

const Menu = () => {
	const buttons = [
		{ label: "Feed", link: "/", icon: icons.home },
		{ label: "Liked", link: "/liked", icon: icons.liked },
		{ label: "Profile", link: "/profile", icon: icons.profile },
		{ label: "Messages", link: "/messages", icon: icons.messages },
		{ label: "Notifications", link: "/notifications", icon: icons.notifications },
		{ label: "Analytics", link: "/analytics", icon: icons.analytics },
		{ label: "Settings", link: "/settings", icon: icons.settings },
	];
	return (
		<div className="flex flex-col text-white">
			{buttons.map((props, index) => (
				<MenuButton key={index} {...props} />
			))}
		</div>
	);
};

export default Menu;
