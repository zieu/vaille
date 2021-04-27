import { PostDTO } from "types";

import { User } from ".";

type Props = PostDTO;

const PostCard = ({ title, user, content, image }: Props) => {
	return (
		<div>
			<User {...user} />
			<div className="bg-dark-cloud w-96 p-4 rounded-lg mb-4">
				<h2 className="font-bold text-lg mb-2">{title}</h2>
				<p className="text-sm">{content}</p>
			</div>
		</div>
	);
};

export default PostCard;
