// import { useUI } from "context/ui";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "components/menu";

import { Logo } from "..";

const Left = () => {
	return (
		<div className="sm:block hidden bg-white dark:bg-dark-deep lg:w-[35vw] w-[100px] h-[100vh] sticky top-0 p-5 max-w-[320px] sm:w-[80px] sm:p-2">
			<div>
				<div className="mb-8 lg:mb-14">
					<Link href="/">
						<a>
							<div className="flex items-center p-2 lg:pl-0">
								<Logo />
								<span className="hidden ml-3 text-3xl font-bold text-light-text dark:text-white lg:block">vaille</span>
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
