import { ProfileActions } from "components";

import Link from "next/link";

const Profile = () => {
	return (
		<div className="h-full min-h-screen">
			<Link href="/">
				<ProfileActions />
			</Link>
		</div>
	);
};

export default Profile;
