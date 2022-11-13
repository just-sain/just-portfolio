import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	variant: 'outlined' | 'text' | 'contained';
	size: 's' | 'm' | 'l';
	color: 'white' | 'black' | 'blue' | 'red' | 'pink' | 'orange' | 'green';
	href?: string;
	arrow?: '' | 'right' | 'up';
}
