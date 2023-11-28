import { lazy } from 'react';
import { Endpoints } from '../../common/enums';

const UserList = lazy(() => import('../../pages/Users/List'));

const userRoutes = [
	{
		path: Endpoints.USER_LIST,
		index: false,
		element: UserList
	}
];

export default userRoutes;
