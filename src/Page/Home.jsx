import React from 'react'
import { useAuth } from '../Hooks/useAuth'
import { Link } from 'react-router-dom';

export default function Home() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      Home
      <Link to="/me">Go to my Profile</Link>
    </div>
  )
}
