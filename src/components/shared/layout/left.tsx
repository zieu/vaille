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
								<span className="ml-3 text-3xl font-bold text-light-text dark:text-white">vaille</span>
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
