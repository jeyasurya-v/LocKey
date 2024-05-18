import { Link } from 'react-router-dom';

function BasicFooterContact() {
	return (
		<div className="flex flex-col items-center text-center sm:items-end sm:text-end">
			<h6 className="mb-2 text-xl font-semibold">Contact us</h6>
			<p className="mb-4 text-sm text-muted">
			</p>
			<Link
				to="mailto:LocKey@dokurno.dev"
				className="link-primary font-semibold"
			>
				lockey-inventory@gmail.com
			</Link>
		</div>
	);
}

export default BasicFooterContact;
