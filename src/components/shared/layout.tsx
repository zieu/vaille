import React from "react";

import { Left, Right } from "./layout/";

type Props = {
	children?: React.FC | React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="flex">
			<Left />
			<div className="bg-light-grayish dark:bg-dark-off w-full">{children}</div>
			<Right />
		</div>
	);
};

export default Layout;
