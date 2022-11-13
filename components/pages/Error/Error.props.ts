import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IErrorProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	errorNumber: '404' | '500' | '400';
	errorName: string;
	children: string;
}
