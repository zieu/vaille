import cn from "classnames";
import { PostDTO } from "types";

import { PostMenu, User } from ".";

type Props = PostDTO;

const PostCard = ({ title, user, content, image }: Props) => {
	const buttonClassName =
		"dark:bg-dark-cloud bg-white dark:text-white text-light-text px-2 py-2 w-[100%] lg:w-[90px] rounded-lg text-sm font-bold flex items-center justify-center";

	return (
		<div className="w-full mb-5">
			<User {...user} />
			<div className="relative px-4 py-3 bg-white rounded-lg dark:bg-dark-cloud dark:text-white text-light-text">
				<h2 className="mb-2 text-lg font-bold">{title}</h2>
				<p className="text-sm font-medium">{content}</p>

				<PostMenu classes="sm:block hidden absolute" />
			</div>
			<div className="flex justify-between gap-2 mt-2">
				<button className={buttonClassName}>
					<svg className="mr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.124 12.1136L5.12669 12.1264C5.50897 13.9413 6.73214 15.4995 8.46323 16.2864L12 17.894V16H14C16.7614 16 19 13.7614 19 11V10C19 7.23858 16.7614 5 14 5H10C7.23858 5 5 7.23858 5 10V11C5 11.3804 5.04211 11.7485 5.12115 12.1009L5.124 12.1136ZM14 21L7.63562 18.1071C5.31787 17.0536 3.68127 14.9677 3.16963 12.5386C3.05859 12.0435 3 11.5286 3 11V10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10V11C21 14.866 17.866 18 14 18V21Z"
							fill="#F2F2F2"
							className="fill-current"
						/>
					</svg>

					<span>15k</span>
				</button>
				<button className={buttonClassName}>
					<svg className="mr-1" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5C18.9942 14.7443 14.7443 18.9942 9.5 19ZM9.5 1.9C5.30264 1.9 1.9 5.30264 1.9 9.5C1.9 13.6974 5.30264 17.1 9.5 17.1C13.6974 17.1 17.1 13.6974 17.1 9.5C17.0953 5.30459 13.6954 1.90471 9.5 1.9ZM9.5 15.2C7.99902 15.2254 6.58027 14.516 5.7 13.3C5.27257 12.7284 4.95084 12.0849 4.75 11.4H14.25C14.25 11.4 14.25 11.4 14.25 11.4076C14.0461 12.089 13.7246 12.7294 13.3 13.3C12.4196 14.5159 11.0009 15.2252 9.5 15.2ZM6.175 9.5C5.38799 9.5 4.75 8.86201 4.75 8.075C4.75 7.28799 5.38799 6.65 6.175 6.65C6.96201 6.65 7.6 7.28799 7.6 8.075C7.6 8.86201 6.96201 9.5 6.175 9.5ZM12.8183 9.4867C12.035 9.4867 11.4 8.85168 11.4 8.06835C11.4 7.28502 12.035 6.65 12.8183 6.65C13.6017 6.65 14.2367 7.28502 14.2367 8.06835C14.2357 8.85125 13.6012 9.48565 12.8183 9.4867Z"
							fill="#F2F2F2"
							className="fill-current"
						/>
					</svg>

					<span>25k</span>
				</button>
				<button className={buttonClassName}>
					<svg className="mr-1" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5C18.9942 14.7443 14.7443 18.9942 9.5 19ZM9.5 1.9C5.30264 1.9 1.9 5.30264 1.9 9.5C1.9 13.6974 5.30264 17.1 9.5 17.1C13.6974 17.1 17.1 13.6974 17.1 9.5C17.0953 5.30459 13.6954 1.90471 9.5 1.9ZM7.6 15.2C7.5867 15.2 7.467 15.1952 6.65 15.1952H5.7V15.1724C5.7 15.162 5.7 15.1487 5.7 15.1325C5.7 15.1012 5.7 15.0585 5.70665 15.0062C5.7171 14.8647 5.73325 14.7298 5.75605 14.5958C5.8272 14.1633 5.96164 13.7437 6.15505 13.3504C6.41912 12.8073 6.82229 12.3438 7.32355 12.007L7.33685 11.9985L7.35205 11.9871L7.3663 11.9795H7.372H7.37865H7.3834H7.39005L7.4005 11.9728C8.03207 11.5872 8.76007 11.3885 9.5 11.4C10.2691 11.3795 11.0268 11.5896 11.6755 12.0033C12.1763 12.3405 12.5794 12.8038 12.844 13.3465C13.0382 13.7395 13.1723 14.1593 13.242 14.592C13.2724 14.7706 13.2857 14.914 13.2914 15.0024C13.2914 15.0442 13.2971 15.086 13.2981 15.1287C13.2981 15.1449 13.2981 15.1582 13.2981 15.1686V15.1877C13.2981 15.1877 13.2601 15.1877 12.3481 15.1877C11.4874 15.1877 11.3981 15.1877 11.3981 15.1877C11.3981 15.1877 11.3981 15.1601 11.3981 15.1316C11.3981 15.0794 11.3857 14.9986 11.3686 14.8979C11.3288 14.6517 11.2533 14.4126 11.1444 14.1883C11.0268 13.9416 10.8463 13.7302 10.621 13.5755C10.2825 13.3757 9.8926 13.2799 9.5 13.3C9.10644 13.2827 8.71652 13.3819 8.379 13.585C8.15404 13.7401 7.97357 13.9513 7.85555 14.1977C7.74692 14.4222 7.6714 14.6613 7.63135 14.9074C7.61786 14.9848 7.60835 15.0628 7.60285 15.1411C7.60285 15.1677 7.60285 15.1867 7.60285 15.1962H7.6V15.2ZM6.175 9.5C5.38799 9.5 4.75 8.86201 4.75 8.075C4.75 7.28799 5.38799 6.65 6.175 6.65C6.96201 6.65 7.6 7.28799 7.6 8.075C7.6 8.86201 6.96201 9.5 6.175 9.5ZM12.8183 9.4867C12.035 9.4867 11.4 8.85168 11.4 8.06835C11.4 7.28502 12.035 6.65 12.8183 6.65C13.6017 6.65 14.2367 7.28502 14.2367 8.06835C14.2357 8.85125 13.6012 9.48565 12.8183 9.4867Z"
							fill="#F2F2F2"
							className="fill-current"
						/>
					</svg>

					<span>999</span>
				</button>
				<button className={cn(buttonClassName, "hidden sm:flex")}>
					<svg className="mr-1" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.8125 17H2.125C0.951395 17 0 16.0486 0 14.875V3.1875C0 2.01389 0.951395 1.0625 2.125 1.0625H6.375V3.1875H2.125V14.875H13.8125V10.625H15.9375V14.875C15.9375 16.0486 14.9861 17 13.8125 17ZM8.18125 10.3137L6.68313 8.81131L13.3694 2.125H9.5625V0H17V7.4375H14.875V3.62844L8.18125 10.3137Z"
							fill="#F2F2F2"
							className="fill-current"
						/>
					</svg>

					<span>Share</span>
				</button>
			</div>
		</div>
	);
};

export default PostCard;