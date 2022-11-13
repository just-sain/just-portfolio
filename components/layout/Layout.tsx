// interfaces
import { FunctionComponent, useState } from 'react';
import { ILayoutProps } from './Layout.props';
// components
import { Header } from './Header/Header';
// styles
import cn from 'classnames';
import styles from './Layout.module.scss';

const Layout = ({ children, ...props }: ILayoutProps) => {
	const [isDark, setIsDark] = useState<boolean>(true);

	return (
		<div className={cn(styles.wrapper, styles.dark, styles.color1, { [styles.dark]: isDark })} {...props}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	);
};

const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
): ((props: T) => JSX.Element) => {
	return (props: T): JSX.Element => (
		<Layout>
			<Component {...props} />
		</Layout>
	);
};

export default withLayout;
