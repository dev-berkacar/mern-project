import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famouns sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/2560px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg',
    address: '20 W 34th St., New York, NY 10001, United States of America',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famouns sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/2560px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg',
    address: '20 W 34th St., New York, NY 10001, United States of America',
    location: {
      lat: 40.7484405,
      lng: -73.9878531
    },
    creator: 'u2'
  }
];

export default function UserPlaces() {
  const userId = useParams().userId;
  const filteredPlaces = DUMMY_PLACES.filter((place) => place?.creator === userId);
  return <PlaceList items={filteredPlaces} />;
}
