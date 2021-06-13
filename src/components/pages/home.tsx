import { gql, useQuery } from "@apollo/client";
import { PostCard } from "components";
import { mock } from "services";

import { Scrollbars } from "react-custom-scrollbars";

const Home = () => {
	let renderThumb = () => {
		return <div className="rounded bg-primary-purple" />;
	};

	// const POST_QUERY = gql`
	// 	query {
	// 		posts: posts {
	// 			title
	// 		}
	// 	}
	// `;

	// const { data, loading, error } = useQuery(POST_QUERY);

	return (
		<Scrollbars universal style={{ height: "calc(100vh - 60px)" }} renderThumbVertical={renderThumb} thumbSize={50}>
			<div className="h-full min-h-screen sm:pr-10 pr-0 md:w-full lg:w-[450px]">
				<div className="p-6">
					{mock.map((props, index) => (
						<PostCard {...props} key={index} />
					))}
				</div>
			</div>
		</Scrollbars>
	);
};

export default Home;
