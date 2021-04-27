import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";
import { PageTitle } from "components/shared";

function Analytics() {
	return (
		<div>
			<Head>
				<title>Vaille | Analytics</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<PageTitle pageTitle="Analytics" />
			<Page />
		</div>
	);
}

export default withLayout(Analytics);
