import { useTheme } from "next-themes";

import { Moon, Sun } from "assets/icons";

interface Props {
	pageTitle: string;
}

const PageTitle = ({ pageTitle }: Props) => {
	const { theme, setTheme } = useTheme();

	return (
		<div className=" dark:bg-dark-deep py-2 border-b-4 px-6 dark:border-dark-lie border-light-grayer sticky top-0 flex justify-between items-center bg-white">
			<h1 className="text-xl font-bold text-light-text dark:text-white ">
				{pageTitle ? pageTitle : <span className="font-thin text-gray-500">Loading...</span>}
			</h1>
			<button
				className="p-2 rounded-md dark:bg-dark-lie bg-light-grayish focus:outline-none focus:ring-2"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
				{theme === "dark" ? <Sun /> : <Moon />}
			</button>
		</div>
	);
};

export default PageTitle;
