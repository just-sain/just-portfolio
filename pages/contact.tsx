import withLayout from '../components/layout/Layout';
// interfaces
import { NextPage } from 'next';
import Head from 'next/head';
// components

const ContactPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>contact / just.sain personal portfolio</title>
			</Head>
			<ul style={{ background: 'red' }}>
				<li>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
				</li>
				<li>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
				</li>
				<li>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
					<div>COntact</div>
				</li>
			</ul>
		</>
	);
};

export default withLayout(ContactPage);
