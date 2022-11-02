import { useRef } from 'react';
import isEqual from 'lodash.isequal';

export const useDeepMemo = <T>(
	fn: () => T,
	deps: any[] | []
): T => {
	const firstRun = useRef(true);
	const prevDeps = useRef(deps);
	const result = useRef<T>(fn());

	if (firstRun.current) {
		firstRun.current = false;
		return result.current;
	}

	const isSame = prevDeps.current.every((d, idx) => isEqual(d, deps[idx]));

	if (!isSame) {
		result.current = fn();
		prevDeps.current = deps;
	}

	return result.current;
};