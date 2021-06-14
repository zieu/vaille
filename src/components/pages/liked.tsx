import { PostCard } from "components";
import { mock } from "services";

import Link from "next/link";

import { Scrollbars } from "react-custom-scrollbars";

const Liked = () => {
	let renderThumb = () => {
		return <div className="rounded bg-primary-purple" />;
	};

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

export default Liked;
