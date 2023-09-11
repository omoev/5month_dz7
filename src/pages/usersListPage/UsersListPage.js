import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './../../redux/actions/UserActions';
import { Link } from 'react-router-dom';

function UsersListPage() {
  const dispatch = useDispatch();
  const { data: users, status, error } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return (
    <div>
      <h1>Users List</h1>
      <Link to="/register" className="btn btn-primary mb-3">
        Register User
      </Link>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && users ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div>No users found.</div>
      )}
    </div>
  );
}

export default UsersListPage;
