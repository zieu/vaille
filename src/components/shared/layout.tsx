import React from "react";

import { Left, Right, Main } from "./layout/";

type Props = {
	children?: React.FC | React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Left />
			<Main>{children}</Main>
			<Right />
		</>
	);
};

export default Layout;
