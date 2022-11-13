// interfaces
import { FC } from 'react';
import { IDividerProps } from './Divider.props';
// styles
import cn from 'classnames';
import styles from './Divider.module.scss';

export const Divider: FC<IDividerProps> = ({ className, px = '1', color, margin = '', ...props }) => {
	return <div className={cn(className, styles.divider, styles[`px${px}`], styles[color], styles[margin])} {...props} />;
};
