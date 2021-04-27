import React from "react";

import MenuButton from "./_menu-button";
import * as icons from "./menu-icons";

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
