import { PageTitle } from "components";
import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";

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
