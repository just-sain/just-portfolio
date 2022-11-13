import { ILogoProps } from './Logo.props';
// components
import Link from 'next/link';
// styles
import cn from 'classnames';
import styles from './Logo.module.scss';
import { FC } from 'react';

export const Logo: FC<ILogoProps> = ({ className, size = 'm', ...props }) => {
	return (
		<Link href='/' className={cn(className, styles.logo, styles[size])} {...props}>
			jS
		</Link>
	);
};
