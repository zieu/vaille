import { useTheme } from "next-themes";
import Link from "next/link";

const Home = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className="h-full min-h-screen">
			<button
				className="m-4 px-3 py-2 focus:outline-none focus:ring-2 ring-offset-2 rounded-lg bg-primary-purple dark:bg-white ring-primary-purple dark:ring-white ring-offset-white dark:ring-offset-dark-off text-gray-50 dark:text-black"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
				toggle theme
			</button>
			<Link href="another-page">
				<a className="text-purple-700 underline">go to another page</a>
			</Link>
		</div>
	);
};

export default Home;
