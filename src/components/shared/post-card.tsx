import { PostDTO } from "types";

type Props = PostDTO;

const PostCard = ({ title, user, content, image }: Props) => {
	return (
		<div className="bg-dark-cloud w-96 p-4 rounded-lg mb-4">
			<h2 className="font-bold text-xl mb-2">{title}</h2>
			<p>{content}</p>
		</div>
	);
};

export default PostCard;
