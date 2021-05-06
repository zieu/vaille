import { UserDTO } from "types";

import Image from "next/image";

type Props = UserDTO;

const User = ({ avatar, isFollowed, name }: Props) => {
	return (
		<div className="dark:bg-dark-cloud bg-white dark:text-white text-light-text w-96 px-4 py-2 rounded-lg mb-2 flex items-center justify-between">
			<div className="flex items-center">
				<img
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
					width="40px"
					height="40px"
					className="rounded-full border-2 mr-2"
				/>
				<span className="font-bold">{name}</span>
			</div>
			{isFollowed ? (
				<button className="bg-primary-purple text-sm border-primary-purple rounded-lg px-2 py-1 font-bold focus:outline-none focus:ring-2 text-white">
					Following
				</button>
			) : (
				<button className="border border-light-text dark:border-white rounded-lg px-2	text-sm py-1 font-bold focus:outline-none focus:ring-2 ">
					Follow
				</button>
			)}
		</div>
	);
};

export default User;
