import { withLayout } from "containers";

import { signIn, signOut, useSession } from "next-auth/client";
import Head from "next/head";
import Link from "next/link";

import Page from "components/pages/home";
import { PageTitle } from "components/shared";

function Home() {
	const [session, loading] = useSession();

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
			{/* <Page /> */}
			<main>
				{!session && (
					<>
						Not signed in <br />
						{/* @ts-ignore */}
						<button onClick={signIn}>Sign In</button>
					</>
				)}
				{session && (
					<>
						Signed in as {session.user?.email} <br />
						<div>You can now access our super secret pages</div>
						<button>
							<Link href="/secret">To the secret</Link>
						</button>
						{/* @ts-ignore */}
						<button onClick={signOut}>sign out</button>
						<div className="flex m-20 items-center">
							<h1 className="font-bold text-xl mr-5">{session?.user?.name}</h1>
							<img src={session?.user?.image || ""} width="50px" style={{ borderRadius: "50%" }} alt="avatar" />
						</div>
					</>
				)}
			</main>
		</div>
	);
}

export default withLayout(Home);
