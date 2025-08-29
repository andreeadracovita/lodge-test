import { useState } from "react";

export default function Child() {
	const [count, setCount] = useState(1);

	return (
		<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
	);
}