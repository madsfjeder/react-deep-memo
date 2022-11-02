import React from 'react';

type Props = {
	counter: number;
}

const Counter = ({ counter }: Props) => {
	return(
		<div>
			Counter: {counter}
		</div>
	);
};

export default Counter;