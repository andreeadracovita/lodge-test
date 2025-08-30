import Features from "components/Features";

export default function Secret() {
	console.log("Rendering Secret Page");
	
	return (
		<>
			<p>This is a secret page that only an authenticated person can see.</p>
			<Features />
		</>
	);
}