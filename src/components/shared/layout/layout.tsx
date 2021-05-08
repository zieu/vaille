import React from "react";

import { Left, Right } from ".";

type Props = {
	children?: React.FC | React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="flex">
			<Left />
			<div className="w-full bg-light-grayish dark:bg-dark-off">{children}</div>
			<Right />
		</div>
	);
};

export default Layout;
