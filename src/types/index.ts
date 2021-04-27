import { NextPage } from "next";

import { FC } from "react";

export type PageWithLayout = NextPage & {
	Layout?: FC;
};

export type PostDTO = {
	title: string;
	user: object;
	content: string;
	image?: string;
}