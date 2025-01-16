import React from 'react';
import Login from './Login';
import { Profile } from './Profile';

type Private = {
  isLoggedIn: boolean;
  component: React.ComponentType<Profile>;
};

export default function Private({ isLoggedIn, component: Profile }: Private) {
  if (isLoggedIn) return <Profile name="Alex" />;
  return <Login />;
}
