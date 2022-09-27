import React from 'react';

import UsersList from '../components/UsersList/UsersList';

export default function Users() {
  const USERS = [
    {
      id: 'u1',
      image: 'https://i1.sndcdn.com/avatars-byFzyJgEeIOkyI3c-G4eOrQ-t500x500.jpg',
      name: 'Jonathan',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
}
