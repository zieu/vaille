import { useTheme } from "next-themes";
import Link from "next/link";

const Notifications = () => {
	return (
		<div className="h-full min-h-screen">
			<h2 className="title">This is liked page</h2>
			<Link href="/">
				<a className="text-purple-700 underline">go to home</a>
			</Link>
		</div>
	);
};

export default Notifications;
