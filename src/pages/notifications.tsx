import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";
import { PageTitle } from "components/shared";

function Notifications() {
	return (
		<div>
			<Head>
				<title>Vaille | Notifications</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<PageTitle pageTitle="Notifications" />
			<Page />
		</div>
	);
}

export default withLayout(Notifications);
