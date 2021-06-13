import { PageTitle } from "components";
import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";

function Profile() {
	return (
		<div>
			<Head>
				<title>Vaille | Profile</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<PageTitle pageTitle="Profile" />
			<Page />
		</div>
	);
}

export default withLayout(Profile);
