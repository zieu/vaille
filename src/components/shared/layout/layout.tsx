import React from "react";

import { Left, Right } from ".";

type Props = {
	children?: React.FC | React.ReactNode;
	pageTitle: string;
};

const Layout = ({ children, pageTitle }: Props) => {
	return (
		<div className="flex">
			<Left />
			<div className="bg-light-grayish dark:bg-dark-off w-full">
				<h1 className="text-white bg-dark-deep py-1 border-b-4 pl-6 text-lg font-bold border-dark-lie">
					{pageTitle ? pageTitle : <span className="font-thin text-gray-500">Loading...</span>}
				</h1>
				{children}
			</div>
			<Right />
		</div>
	);
};

export default Layout;
