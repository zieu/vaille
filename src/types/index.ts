import { NextPage } from "next";
import { FC } from "react";

export type PageWithLayout = NextPage & {
	Layout?: FC;
};
