import { PostDTO } from "types";

import { User } from ".";

type Props = PostDTO;

const PostCard = ({ title, user, content, image }: Props) => {
	return (
		<div>
			<User
				name="_johnsmith"
				avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
				isFollowed={false}
			/>
			<div className="bg-dark-cloud w-96 p-4 rounded-lg mb-4">
				<h2 className="font-bold text-xl mb-2">{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default PostCard;
