import { ManagedUIContext } from "context/ui";

import React from "react";

import { Left, Right } from ".";

type Props = {
	children?: React.FC | React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<ManagedUIContext>
			<div className="bg-white dark:bg-dark-deep">
				{process.env.NODE_ENV === "development" && (
					<div className="fixed top-0 right-0 z-50 flex items-center justify-center w-8 h-8 p-3 m-8 font-mono text-lg text-white bg-gray-700 rounded-full sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500">
						<div className="block sm:hidden md:hidden lg:hidden xl:hidden">al</div>
						<div className="hidden sm:block md:hidden lg:hidden xl:hidden">sm</div>
						<div className="hidden sm:hidden md:block lg:hidden xl:hidden">md</div>
						<div className="hidden sm:hidden md:hidden lg:block xl:hidden">lg</div>
						<div className="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
					</div>
				)}

				<div className="flex md:container md:mx-auto">
					<Left />
					<div className="w-full bg-light-grayish dark:bg-dark-off">{children}</div>
					<Right />
				</div>
			</div>
		</ManagedUIContext>
	);
};

export default Layout;
