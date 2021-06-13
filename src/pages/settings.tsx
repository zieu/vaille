import { PageTitle } from "components";
import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";

function Settings() {
	return (
		<div>
			<Head>
				<title>Vaille | Settings</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<PageTitle pageTitle="Settings" />
			<Page />
		</div>
	);
}

export default withLayout(Settings);
