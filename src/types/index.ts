import { NextPage } from "next";

import { FC } from "react";

export type PageWithLayout = NextPage & {
	Layout?: FC;
};

export type UserDTO = {
	avatar: string;
	name: string;
	isFollowed: boolean;
}

export type PostDTO = {
	title: string;
	user: UserDTO;
	content: string;
	image?: string;
}