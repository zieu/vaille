import React from "react";

import { Left, Right } from "./layout/";

type Props = {
	children?: React.FC | React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="grid grid-cols-3">
			<Left />
			<div>{children}</div>
			<Right />
		</div>
	);
};

export default Layout;
