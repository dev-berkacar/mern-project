import React from 'react';
import PropTypes from 'prop-types';

import UserList from '../UserItem/UserItem';

import './UsersList.css';

export default function UsersList({ items }) {
  if (items?.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {items?.map((user) => {
        return (
          <UserList
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
}

UsersList.propTypes = {
  items: PropTypes.string
};
