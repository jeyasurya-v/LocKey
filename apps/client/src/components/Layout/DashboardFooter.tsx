import { Link } from 'react-router-dom';
import Container from '../Container';

function DashboardFooter() {
	const stockedUpLink = (
		<Link
			to="/"
			className="link-muted"
		>
			Lockey
		</Link>
	);

	return (
		<footer className="border-t border-gray-300 bg-gray-200 px-4 py-8">
			<Container className="flex justify-between text-sm text-muted">
				<div>
					<span className="font-bold">LocKey</span> • Inventory Management System
				</div>
				<div>
					{stockedUpLink} &copy; {new Date().getFullYear()}
				</div>
			</Container>
		</footer>
	);
}

export default DashboardFooter;
