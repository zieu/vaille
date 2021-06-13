import { ProfileCircle } from "components";

const RecommendedContainer = () => {
	const profiles = [
		{ name: "_smithjohn", img: "/profile-pic.jpg" },
		{ name: "_smithjohn", img: "/profile-pic.jpg" },
		{ name: "_smithjohn", img: "/profile-pic.jpg" },
		{ name: "_smithjohn", img: "/profile-pic.jpg" },
		{ name: "_smithjohn", img: "/profile-pic.jpg" },
		{ name: "_smithjohn", img: "/profile-pic.jpg" },
	];

	return (
		<div className="p-3 dark:bg-dark-cloud bg-light-grayish rounded-xl">
			<div className="flex flex-wrap justify-between">
				{profiles.map(({ img, name }, index) => (
					<ProfileCircle key={index} name={name} avatar={img} />
				))}
			</div>
		</div>
	);
};

export default RecommendedContainer;
