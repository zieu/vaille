type Props = {
	name: string;
	avatar: string;
};

const ProfileCircle = ({ avatar, name }: Props) => {
	return (
		<div className="flex flex-col items-center m-2 cursor-pointer">
			<img className="w-14 rounded-full border-2 mb-2" src={avatar} alt="avatar" />
			<p className="font-bold text-xs">{name}</p>
		</div>
	);
};

export default ProfileCircle;
