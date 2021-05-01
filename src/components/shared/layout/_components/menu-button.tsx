import cn from "classnames";
import { Url } from "node:url";

import { useTheme } from "next-themes";
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
	const { theme } = useTheme();
	const active = pathname === link;

	return (
		<Link href={link!}>
			<div
				className={cn(
					"hover:bg-light-grayish dark:text-white text-light-text dark:hover:bg-dark-cloud py-3 px-5 text-lg mb-2 font-semibold rounded-xl cursor-pointer",
					{
						"menu-button--active menu-button--active--light": active && theme === "light",
						"menu-button--active menu-button--active--dark": active && theme === "dark",
					},
				)}>
				<a>
					<div className="flex items-center">
						<span className={cn({ "menu-icon--light": theme === "light" })}>
							{active && icon ? icon[1] : icon && !active && icon[0]}
						</span>{" "}
						<span className="ml-4">{label}</span>
					</div>
				</a>
			</div>
		</Link>
	);
};

export default MenuButton;
