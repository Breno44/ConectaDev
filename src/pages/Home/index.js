import React from 'react';
import './styles.css';
import { Header } from './components/Header';

export function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="navbar"></div>
        <div className="feed"></div>
      </main>
    </div>
  );
}
