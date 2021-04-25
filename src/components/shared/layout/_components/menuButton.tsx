import cn from "classnames";
import { Url } from "node:url";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { ReactNode } from "react";

type Props = {
	label: string;
	link?: Url | string | null;
	icon?: ReactNode[];
};

const MenuButton = ({ link, label, icon }: Props) => {
	const { pathname } = useRouter();
	const active = pathname === link;
	return (
		<Link href={link!}>
			<a>
				<div
					className={cn("hover:bg-dark-cloud py-3 px-5 text-lg mb-2 font-semibold rounded-xl", {
						"menu-button--active": active,
					})}>
					<div className="flex items-center">
						<span className="">{active && icon ? icon[1] : icon && !active && icon[0]}</span>{" "}
						<span className="ml-2">{label}</span>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default MenuButton;
