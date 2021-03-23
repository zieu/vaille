import { useTheme } from "next-themes";

const Home = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className="h-full min-h-screen">
			<button
				className="m-4 px-3 py-2 focus:outline-none focus:ring-2 ring-offset-2 rounded-lg bg-primary-purple dark:bg-white ring-primary-purple dark:ring-white ring-offset-white dark:ring-offset-dark-off text-gray-50 dark:text-black"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
				toggle theme
			</button>
		</div>
	);
};

export default Home;
