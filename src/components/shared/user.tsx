import { UserDTO } from "types";

import Image from "next/image";

import { PostMenu } from ".";

type Props = UserDTO;

const User = ({ avatar, isFollowed, name }: Props) => {
	return (
		<div className="flex items-center justify-between w-full px-4 py-2 mb-2 bg-white rounded-lg dark:bg-dark-cloud dark:text-white text-light-text">
			<div className="flex items-center">
				<img
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
					width="40px"
					height="40px"
					className="mr-2 border-2 rounded-full"
				/>
				<span className="font-bold">{name}</span>
			</div>
			<div>
				<PostMenu classes="block sm:hidden" />
				<div className="hidden sm:block">
					{isFollowed ? (
						<button className="px-2 py-1 text-sm font-bold text-white rounded-lg bg-primary-purple border-primary-purple focus:outline-none focus:ring-2">
							Following
						</button>
					) : (
						<button className="px-2 py-1 text-sm font-bold border rounded-lg border-light-text dark:border-white focus:outline-none focus:ring-2 ">
							Follow
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default User;
