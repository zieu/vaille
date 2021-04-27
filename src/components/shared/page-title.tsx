import React from "react";

interface Props {
	pageTitle: string;
}

const PageTitle = ({ pageTitle }: Props) => {
	return (
		<h1 className="text-white bg-dark-deep py-1 border-b-4 pl-6 text-lg font-bold border-dark-lie">
			{pageTitle ? pageTitle : <span className="font-thin text-gray-500">Loading...</span>}
		</h1>
	);
};

export default PageTitle;
