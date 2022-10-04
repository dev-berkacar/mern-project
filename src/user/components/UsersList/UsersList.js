import React from 'react';
import PropTypes from 'prop-types';

import UserList from '../UserItem/UserItem';
import Card from '../../../shared/components/UIElements/Card/Card';

import './UsersList.css';

export default function UsersList({ items }) {
  if (items?.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
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
  items: PropTypes.array
};
