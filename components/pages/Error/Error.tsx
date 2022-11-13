// interfaces
import { FC } from 'react';
import { IErrorProps } from './Error.props';
// components
import { HTag } from '../../additional';
// styles
import styles from './Error.module.scss';
import cn from 'classnames';

export const Error: FC<IErrorProps> = ({ className, children = '', errorNumber = '', errorName = '', ...props }) => {
	return (
		<div className={cn(styles.wrapper)} {...props}>
			<div className={styles.content}>
				<HTag tag='h1' className={styles.number}>
					Oops... <span>{errorNumber}</span>
				</HTag>
				<HTag tag='h3' className={styles.name}>
					{errorName}
				</HTag>
				<p className={styles.text}>{children}</p>
				<div className={styles.emoji}>:(</div>
			</div>
		</div>
	);
};
