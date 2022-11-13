// interfaces
import { FC } from 'react';
import { IMenuProps } from './Menu.props';
// styles
import cn from 'classnames';
import styles from './Menu.module.scss';

export const Menu: FC<IMenuProps> = ({ className, ...props }) => {
	return (
		<menu className={cn(className, styles.menu)} {...props}>
			<nav className={'nav-menu'}>
				<div className='nav-menu__close _outer-shadow _hover-in-shadow'>×</div>
				<div className='nav-menu__inner'>
					<ul>
						<li>
							<a href='#home' className='link__item _active'>
								home
							</a>
						</li>
						<li>
							<a href='#about' className='link__item'>
								about
							</a>
						</li>
						<li>
							<a href='#portfolio' className='link__item'>
								portfolio
							</a>
						</li>
						<li>
							<a href='#contact' className='link__item'>
								contact
							</a>
						</li>
					</ul>
				</div>
				<p className='nav-menu__copyright-text'>© 2022 just.sain</p>
			</nav>
			<div className='fade-out-effect'></div>
		</menu>
	);
};
