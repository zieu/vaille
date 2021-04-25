import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import { Menu } from "./_components";

const Left = () => {
	return (
		<div className="bg-white dark:bg-dark-deep col-span-3 lg:w-[35vw] w-[100px] p-5">
			<div>
				<div className="inline-block">
					<Link href="/">
						<a>
							<div className="mb-14 flex items-center p-2 pl-0">
								<Image src="/favicon.svg" width="40px" height="40px" />
								<span className="text-white text-3xl font-bold ml-3">vaille</span>
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
