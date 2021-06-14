import { gql, useQuery } from "@apollo/client";
import { ProfileCircle } from "components";
import { Button } from "components";

import { Settings } from "../assets/icons";

type Props = {};

const USER_QUERY = gql`
	query {
		userGetByUsername(username: "drunkalien") {
			username
			followers
		}
	}
`;

const ProfileContainer = ({}: Props) => {
	const { data, loading, error } = useQuery(USER_QUERY);

	return (
		<div className="mt-5">
			<div className="flex justify-between">
				<h2 className="font-bold text-light-text dark:text-white">Profile</h2>
				<button>
					<Settings />
				</button>
			</div>
			<div className="flex">
				<div>
					<ProfileCircle name="" avatar={data?.data?.profilePic || "/profile-pic.jpg"} />
				</div>
				<div className="flex flex-col-reverse justify-center mb-2">
					<p className="text-xs font-bold text-light-text dark:text-white">{data?.data.length || "16k followers"}</p>
					<p className="font-bold text-light-text dark:text-white">{data?.data.followers.username || "_smithjohn"}</p>
				</div>
			</div>
			<div>
				<Button className="w-full p-3 mb-3 font-bold bg-primary-purple rounded-xl" onClick={() => {}} buttonText="Write a post" />
				<Button
					className="w-full p-3 mb-3 font-bold dark:text-white rounded-xl bg-light-grayer text-light-text dark:bg-dark-cloud"
					onClick={() => {}}
					buttonText="Personal posts"
				/>
				<Button
					className="w-full p-3 mb-3 font-bold dark:text-white rounded-xl bg-light-grayer text-light-text dark:bg-dark-cloud"
					onClick={() => {}}
					buttonText="Followers"
				/>
			</div>
		</div>
	);
};

export default ProfileContainer;
