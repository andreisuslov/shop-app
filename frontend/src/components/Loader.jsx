import { Spinner } from 'react-bootstrap';

const Loader = () => {
	return (
		<Spinner
			animation="border"
			role="status"
			style={{
				width: '50px',
				height: '50px',
				margin: 'auto',
				display: 'block', // display the spinner in the center of the page
			}}
		></Spinner>
	);
};

export default Loader;
