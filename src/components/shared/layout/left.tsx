import Image from "next/image";

const Left = () => {
	return (
		<div className="bg-white dark:bg-dark-deep col-span-3 lg:w-[35vw] w-[100px] p-5">
			<div>
				<Image src="/favicon.svg" width="40px" height="40px" />
			</div>
		</div>
	);
};

export default Left;
