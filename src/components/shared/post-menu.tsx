import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { useRef, useState } from "react";
import { useClickAway } from "react-use";

type Props = {
	classes: string;
};

const PostMenu = ({ classes }: Props) => {
	const [menuOpened, setMenuOpened] = useState<boolean>(false);

	// closing menu when clicking away
	const menuButtonRef = useRef(null);
	useClickAway(menuButtonRef, () => {
		setMenuOpened(false);
	});

	const menuMotion = {
		hidden: { y: 10, opacity: 0 },
		show: {
			y: 0,
			x: 0,
			opacity: 1,
		},
	};
	const menuItemMotion = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};
	return (
		<div ref={menuButtonRef}>
			<div
				className={` w-8 h-8 bg-white rounded-full cursor-pointer dark:bg-dark-cloud -right-10 top-4 dark:hover:bg-dark-lie hover:bg-white ${classes}`}
				onClick={() => setMenuOpened(!menuOpened)}>
				<div className="flex justify-between p-[7px] pt-[13.5px]">
					<div className="w-1 h-1 rounded-full dark:bg-white bg-light-text"></div>
					<div className="w-1 h-1 rounded-full dark:bg-white bg-light-text"></div>
					<div className="w-1 h-1 rounded-full dark:bg-white bg-light-text"></div>
				</div>
			</div>
			<AnimatePresence>
				{menuOpened && (
					<motion.ul
						key="menu"
						initial="hidden"
						animate="show"
						variants={menuMotion}
						exit={{ opacity: 0, y: 10 }}
						transition={{ type: "spring", duration: 0.2, bounce: 0.2 }}
						className="absolute top-0 right-0 z-30 w-48 px-1 py-2 bg-white shadow-lg dark:shadow-2xl lg:-right-60 rounded-xl dark:bg-dark-cloud">
						<motion.li
							variants={menuItemMotion}
							initial="hidden"
							animate="show"
							transition={{ delay: 0.01 }}
							className="p-3 rounded-lg cursor-pointer select-none dark:hover:bg-dark-lie hover:bg-light-grayish">
							Item
						</motion.li>
						<motion.li
							variants={menuItemMotion}
							initial="hidden"
							animate="show"
							transition={{ delay: 0.03 }}
							className="p-3 rounded-lg cursor-pointer select-none dark:hover:bg-dark-lie hover:bg-light-grayish">
							Item 2
						</motion.li>
						<motion.li
							variants={menuItemMotion}
							initial="hidden"
							animate="show"
							transition={{ delay: 0.05 }}
							className="p-3 rounded-lg cursor-pointer select-none dark:hover:bg-dark-lie hover:bg-light-grayish">
							Item 3
						</motion.li>
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export default PostMenu;
