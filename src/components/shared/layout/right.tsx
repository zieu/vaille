import RecommendedContainer from "./_components/recommended-container";

const Right = () => {
	return (
		<div className="bg-white dark:bg-dark-deep col-span-3 lg:w-[35%] h-[100vh] sticky top-0 lg:block hidden p-5">
			<div className="flex items-center">
				{" "}
				<svg className="mr-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.678 20.107L12.963 14.391C10.4206 16.1985 6.91739 15.7564 4.90383 13.3739C2.89027 10.9915 3.03812 7.46361 5.24396 5.25802C7.44922 3.05147 10.9775 2.90298 13.3603 4.91644C15.7432 6.92989 16.1856 10.4335 14.378 12.976L20.093 18.692L18.679 20.106L18.678 20.107ZM9.48596 5.50001C7.58966 5.49958 5.95365 6.8307 5.56843 8.68745C5.18321 10.5442 6.15467 12.4163 7.89463 13.1703C9.6346 13.9242 11.6649 13.3528 12.7562 11.8021C13.8475 10.2513 13.7 8.14734 12.403 6.76402L13.008 7.36402L12.326 6.68402L12.314 6.67202C11.5657 5.9192 10.5474 5.49715 9.48596 5.50001Z"
						fill="#F2F2F2"
					/>
				</svg>
				<span className="text-lg font-bold">Find</span>
			</div>

			<div className="flex mt-5 items-center justify-between">
				<input type="text" className="p-2 text-base h-10 bg-dark-cloud rounded-md mr-2" placeholder="Search people..." />
				<button className="bg-primary-purple px-4 py-2 text-base h-10 rounded-md">Search</button>
			</div>

			<div className="flex items-center justify-between mt-6 mb-4">
				<h2 className="text-lg font-bold">Recommended</h2>
				<button className="border rounded-lg p-1 px-2 text-sm">See more</button>
			</div>

			<RecommendedContainer />
		</div>
	);
};

export default Right;
