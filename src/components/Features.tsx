import { useEffect, useState } from "react";

import { getAllFeatures } from "api/BackendApiService";
import Child from "components/Child";

export default function Features() {
	const [features, setFeatures] = useState([]);

	useEffect(() => {
		getAllFeatures()
			.then(response => {
				if (response.data) {
					setFeatures(response.data);
				}
			})
			.catch(error => {
				console.error(error);
			});
	}, []);

	return (
		<div>
		{
			features.map((feature: any, i: number) => <span key={i}>{feature.name}, </span>)
		}
		<Child />
		</div>
	);
}