import React, {useMemo, useState} from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Counter from './Counter';
import {useDeepMemo} from './useDeepMemo';

function App() {
	const [counter, setCounter] = useState(0);

	const comp = useDeepMemo(() => (
		<Counter
			counter={counter}
		/>
	), [counter]);

	return (
		<div className={styles.container}>
			{comp}
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				Increment
			</button>
			<button
				onClick={() => {
					setCounter(0);
				}}
			>
				Reset
			</button>
		</div>
	);
}

export default App;
