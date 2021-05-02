import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/home";
import { PageTitle } from "components/shared";

function Home() {
	return (
		<div>
			<Head>
				<title>Vaille</title>
				<link rel="icon" href="/favicon.svg" />
				<meta
					name="description"
					content="This is the brand new social network where you can share your thoughts through media including photos, videos, articles (and soon voice and video chat)."
				/>
			</Head>

			<PageTitle pageTitle="Feed" />
			<Page />
		</div>
	);
}

export default withLayout(Home);
