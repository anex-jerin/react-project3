import { useState } from 'react';
import './App.css';
import Review from './Review';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Reviews</h2>
        </div>
      </section>
      <Review/>
    </main>
  );
}

export default App;
