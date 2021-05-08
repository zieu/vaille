type Props = {
	name: string;
	avatar: string;
};

const ProfileCircle = ({ avatar, name }: Props) => {
	return (
		<div className="flex flex-col items-center m-2 cursor-pointer">
			<img className="mb-2 border-2 rounded-full w-14 dark:border-white border-just-gray" src={avatar} alt="avatar" />
			<p className="text-xs font-bold dark:text-white text-light-text">{name}</p>
		</div>
	);
};

export default ProfileCircle;
