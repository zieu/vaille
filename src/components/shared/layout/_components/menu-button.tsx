import cn from "classnames";
import { Url } from "node:url";

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
			<div
				className={cn("hover:bg-dark-cloud py-3 px-5 text-lg mb-2 font-semibold rounded-xl cursor-pointer", {
					"menu-button--active": active,
				})}>
				<a>
					<div className="flex items-center">
						<span>{active && icon ? icon[1] : icon && !active && icon[0]}</span> <span className="ml-4">{label}</span>
					</div>
				</a>
			</div>
		</Link>
	);
};

export default MenuButton;
