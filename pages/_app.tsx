// interfaces
import type { AppProps } from 'next/app';
// components
import { motion, AnimatePresence } from 'framer-motion';
// styles
import '../styles/globals.scss';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
	const { route } = useRouter();

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={route}
				initial='initialState'
				animate='animateState'
				exit='exitState'
				transition={{
					duration: 0.75
				}}
				variants={{
					initialState: {
						opacity: 0,
						clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%'
					},
					animateState: {
						opacity: 1,
						clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%'
					},
					exitState: {
						clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%'
					}
				}}>
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence>
	);
};

export default App;
