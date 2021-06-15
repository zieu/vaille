import { ProfileCircle, Button } from "components";
import { PostCard } from "components";
import { mock } from "services";

import { Scrollbars } from "react-custom-scrollbars";

const ProfileActions = () => {
	let renderThumb = () => {
		return <div className="rounded bg-primary-purple" />;
	};

	return (
		<Scrollbars universal style={{ height: "calc(100vh - 60px)" }} renderThumbVertical={renderThumb} thumbSize={50}>
			<div className="w-3/5 mt-5 ml-10">
				<div className="p-4 rounded-xl bg-light-grayer dark:bg-dark-cloud">
					<div className="flex">
						<div>
							<ProfileCircle name="" avatar={"/profile-pic.jpg"} />
						</div>
						<div className="flex flex-col-reverse justify-center mb-2">
							<p className="text-xs font-bold text-light-text dark:text-white">{"16k followers"}</p>
							<p className="font-bold text-light-text dark:text-white">{"_smithjohn"}</p>
						</div>
					</div>
					<div className="mt-5">
						<Button
							className="w-full p-4 mb-3 font-bold bg-primary-purple rounded-xl"
							onClick={() => {}}
							buttonText="Write a post"
						/>
						<Button
							className="w-full p-4 mb-3 font-bold text-white rounded-xl text-light-text bg-primary-purple"
							onClick={() => {}}
							buttonText="Personal posts"
						/>
						<Button
							className="w-full p-4 mb-3 font-bold text-white rounded-xl text-light-text bg-primary-pink"
							onClick={() => {}}
							buttonText="Logout"
						/>
					</div>
				</div>
				<div className="text-xl font-bold mt-7">
					<div className="mb-8">
						<h1>Posts</h1>
					</div>
					<div className="h-full min-h-screen sm:pr-10 pr-0 md:w-full lg:w-[450px]">
						<div>
							{mock.map((props, index) => (
								<PostCard {...props} key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</Scrollbars>
	);
};

export default ProfileActions;
