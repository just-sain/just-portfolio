import withLayout from '../components/layout/Layout';
// interfaces
import type { NextPage } from 'next';
// components
import Head from 'next/head';
import { Error } from '../components/pages';

const ErrorPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Ошибка 404, страница не найдена | Fund</title>
			</Head>
			<Error errorName='Страница не найдена' errorNumber='404'>
				Попробуйте перезагрузить станицу
			</Error>
		</>
	);
};

export default withLayout(ErrorPage);
