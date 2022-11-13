// interfaces
import { FC } from 'react';
import { IButtonProps } from './Button.props';
// components
import Link from 'next/link';
// styles
import cn from 'classnames';
import styles from './Button.module.scss';

export const Button: FC<IButtonProps> = ({ className, children, variant, size, color, href, arrow = '', ...props }) => {
	const Fragment = (
		<button
			className={cn(className, styles.button, {
				[styles.contained]: variant === 'contained',
				[styles.outlined]: variant === 'outlined',
				[styles.text]: variant === 'text',
				// sizes
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
				// colors
				[styles.black]: color === 'black',
				[styles.white]: color === 'white',
				[styles.blue]: color === 'blue',
				[styles.green]: color === 'green',
				[styles.orange]: color === 'orange',
				[styles.pink]: color === 'pink',
				[styles.red]: color === 'red'
			})}
			{...props}>
			{children}
			{arrow && <span className={cn(styles.arrow, styles[arrow])} />}
		</button>
	);

	if (!href) return Fragment;

	return (
		<Link href={href} passHref>
			<a>{Fragment}</a>
		</Link>
	);
};
