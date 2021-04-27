import { UserDTO } from "types";

import Image from "next/image";

type Props = UserDTO;

const User = ({ avatar, isFollowed, name }: Props) => {
	return (
		<div className="bg-dark-cloud w-96 px-4 py-3 rounded-lg mb-2 flex items-center justify-between">
			<div className="flex items-center">
				<img
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
					width="50px"
					height="50px"
					className="rounded-full border-2 mr-2"
				/>
				<span className="text-lg">{name}</span>
			</div>
			{isFollowed ? (
				<button className="bg-primary-purple border-primary-purple rounded-lg px-3 py-1 font-bold focus:outline-none focus:ring-2">
					Following
				</button>
			) : (
				<button className="border rounded-lg px-3 py-1 font-bold focus:outline-none focus:ring-2">Follow</button>
			)}
		</div>
	);
};

export default User;
