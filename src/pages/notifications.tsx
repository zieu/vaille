import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";

function Notifications() {
	return (
		<div>
			<Head>
				<title>Vaille | Notifications</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<Page />
		</div>
	);
}

export default withLayout(Notifications);
