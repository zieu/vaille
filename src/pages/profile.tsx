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

			<Page />
		</div>
	);
}

export default withLayout(Profile);
