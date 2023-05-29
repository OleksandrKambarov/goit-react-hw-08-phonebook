import React from 'react';
import { Link } from './App.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register" >
        Sign-Up
      </Link>
      <Link to="/login" >
        Login
      </Link>
    </div>
  );
}