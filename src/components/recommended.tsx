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
		<>
			<div className="flex items-center justify-between mt-6 mb-4">
				<h2 className="text-lg font-bold text-light-text dark:text-white">Recommended</h2>
				<button className="p-1 px-2 text-sm border rounded-lg text-light-text dark:text-white dark:border-white border-light-text">
					See more
				</button>
			</div>
			<div className="p-3 dark:bg-dark-cloud bg-light-grayish rounded-xl">
				<div className="flex flex-wrap justify-between">
					{profiles.map(({ img, name }, index) => (
						<ProfileCircle key={index} name={name} avatar={img} />
					))}
				</div>
			</div>
		</>
	);
};

export default RecommendedContainer;
