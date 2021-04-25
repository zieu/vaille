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

			<Page />
		</div>
	);
}

export default withLayout(Analytics);
