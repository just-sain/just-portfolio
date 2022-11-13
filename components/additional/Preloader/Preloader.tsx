import { IPreloaderProps } from './Preloader.props';
// styles
import cn from 'classnames';
import styles from './Preloader.module.scss';

export const Preloader = ({ className, ...props }: IPreloaderProps) => {
	return (
		<div className={cn(className, styles.preload)} {...props}>
			<div className={styles.preload__box}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
