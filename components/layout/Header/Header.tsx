// interfaces
import { IHeaderProps } from './Header.props';
// components
import { Logo } from '../../additional';
// styles
import cn from 'classnames';
import styles from './Header.module.scss';
import { FC } from 'react';

export const Header: FC<IHeaderProps> = ({ className, ...props }) => {
	return (
		<header className={cn(className, styles.header)} {...props}>
			<div className={styles.container}>
				<Logo size='m' />
				<div className={cn(styles.hamburgerMenu, '_outer-shadow', '_hover-in-shadow')}>
					<span></span>
				</div>
			</div>
		</header>
	);
};
