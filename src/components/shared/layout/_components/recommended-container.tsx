import ProfileCircle from "./profile-circle";

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
		<div className="dark:bg-dark-cloud bg-light-grayish p-3 rounded-xl">
			<div className="flex flex-wrap justify-between">
				{profiles.map(({ img, name }, index) => (
					<ProfileCircle key={index} name={name} avatar={img} />
				))}
			</div>
		</div>
	);
};

export default RecommendedContainer;
