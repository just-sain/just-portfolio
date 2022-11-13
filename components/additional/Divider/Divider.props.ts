import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	px?: '1' | '2' | '3';
	color: 'black' | 'gray' | 'transparentGray' | 'white' | 'blue' | 'orange' | 'red';
	margin?: '' | 'small' | 'medium' | 'large' | 'veryBig';
}
