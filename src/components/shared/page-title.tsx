import { useTheme } from "next-themes";

import { Moon, Sun } from "assets/icons";

import { useLoaded } from "hooks/utils";

interface Props {
	pageTitle: string;
}

const PageTitle = ({ pageTitle }: Props) => {
	const { theme, setTheme } = useTheme();
	const loaded = useLoaded();

	return (
		<div className="sticky top-0 z-10 flex items-center justify-between px-6 py-2 bg-white border-b-4 dark:bg-dark-deep dark:border-dark-lie border-light-grayer">
			<h1 className="text-xl font-bold text-light-text dark:text-white ">
				{pageTitle ? pageTitle : <span className="font-thin text-gray-500">Loading...</span>}
			</h1>
			<button
				className="p-2 rounded-md dark:bg-dark-lie bg-light-grayish focus:outline-none focus:ring-2"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
				{theme === "dark" && loaded ? <Sun /> : <Moon />}

				<a className="no-underline"></a>
			</button>
		</div>
	);
};

export default PageTitle;
