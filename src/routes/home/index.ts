import { Endpoints } from '../../common/enums';
import Home from '../../pages/Home';

const homeRoutes = [
	{
		path: Endpoints.HOME,
		index: true,
		element: Home
	}
];

export default homeRoutes;
