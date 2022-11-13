import { IHTagProps } from './HTag.props';
// styles
import styles from './HTag.module.scss';
import cn from 'classnames';

export const HTag = ({ children = '', tag, className, ...props }: IHTagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (
				<h1 {...props} className={cn(className, styles.h1)}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 {...props} className={cn(className, styles.h2)}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 {...props} className={cn(className, styles.h3)}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 {...props} className={cn(className, styles.h4)}>
					{children}
				</h4>
			);
		default:
			console.warn('you don`t select tag when call HTag component ');
			return (
				<h1 {...props} className={cn(className, styles.h1)}>
					{children}
				</h1>
			);
	}
};
