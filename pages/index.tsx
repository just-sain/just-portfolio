import withLayout from '../components/layout/Layout';
// interfaces
import { NextPage } from 'next';
import Head from 'next/head';
// components

const HomePage: NextPage = () => {
	return (
		<>
			<Head>
				<title>home / just.sain personal portfolio</title>
			</Head>
			<div>asdf</div>
		</>
	);
};

export default withLayout(HomePage);
