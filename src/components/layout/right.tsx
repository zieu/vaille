import { Recommended, Profile } from "components";

const Right = () => {
	return (
		<div className="hidden lg:block dark:bg-dark-deep bg-white col-span-3 h-[100vh] sticky top-0 p-5 max-w-[320px]">
			<div className="flex items-center">
				{" "}
				<svg className="mr-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M18.678 20.107L12.963 14.391C10.4206 16.1985 6.91739 15.7564 4.90383 13.3739C2.89027 10.9915 3.03812 7.46361 5.24396 5.25802C7.44922 3.05147 10.9775 2.90298 13.3603 4.91644C15.7432 6.92989 16.1856 10.4335 14.378 12.976L20.093 18.692L18.679 20.106L18.678 20.107ZM9.48596 5.50001C7.58966 5.49958 5.95365 6.8307 5.56843 8.68745C5.18321 10.5442 6.15467 12.4163 7.89463 13.1703C9.6346 13.9242 11.6649 13.3528 12.7562 11.8021C13.8475 10.2513 13.7 8.14734 12.403 6.76402L13.008 7.36402L12.326 6.68402L12.314 6.67202C11.5657 5.9192 10.5474 5.49715 9.48596 5.50001Z"
						fill="#F2F2F2"
						className="fill-current text-light-text dark:text-[#f2f2f2]"
					/>
				</svg>
				<span className="text-lg font-bold dark:text-white text-light-text">Find</span>
			</div>

			<div className="flex items-center justify-between mt-5">
				<input
					type="text"
					className="h-10 p-2 mr-2 text-base rounded-md dark:bg-dark-cloud bg-light-grayish"
					placeholder="Search people..."
				/>
				<button className="h-10 px-4 py-2 text-base rounded-md bg-primary-purple">Search</button>
			</div>

			<Recommended />
			<Profile />
		</div>
	);
};

export default Right;
