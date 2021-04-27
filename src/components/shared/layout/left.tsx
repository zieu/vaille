import Image from "next/image";
import Link from "next/link";

import { Logo } from "..";
import { Menu } from "./_components";

const Left = () => {
	return (
		<div className="bg-white dark:bg-dark-deep col-span-3 lg:w-[35vw] w-[100px] h-[100vh] sticky top-0 p-5">
			<div>
				<div className="mb-14">
					<Link href="/">
						<a>
							<div className="flex items-center p-2 pl-0">
								<Logo />
								<span className="text-light-text dark:text-white text-3xl font-bold ml-3">vaille</span>
							</div>
						</a>
					</Link>
				</div>

				<Menu />
			</div>
		</div>
	);
};

export default Left;
