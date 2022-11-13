// interfaces
import { FC } from 'react';
import { IHomeProps } from './Home.props';
// components
// styles
import cn from 'classnames';
import styles from './Home.module.scss';

export const Home: FC<IHomeProps> = ({ className, ...props }) => {
	return (
		<>
			<section className={cn(className, styles.welcome)}>The main component</section>
		</>
	);
};
