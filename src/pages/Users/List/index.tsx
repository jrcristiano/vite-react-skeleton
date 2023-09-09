import { useFetchUsers } from '../../../hooks';

function Users() {
	useFetchUsers();
	return <h1>Users List Example</h1>;
}

export default Users;
