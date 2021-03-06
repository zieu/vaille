import { PageTitle } from "components";
import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";

function Messages() {
	return (
		<div>
			<Head>
				<title>Vaille | Messages</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<PageTitle pageTitle="Messages" />
			<Page />
		</div>
	);
}

export default withLayout(Messages);
