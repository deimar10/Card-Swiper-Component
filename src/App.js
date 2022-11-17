import logo from './logo.svg';
import React from 'react';
import './Assets/App.css';
import { FaHeart } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'


function App() {
  return (
  <div class="card-swiper">
    <div class="card-groups">
      <div className="card-group" data-index="0" data-status="active">
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="card-group" data-index="1" data-status="unknown">
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
      <div className="card-group" data-index="2" data-status="unknown">
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="little-card card">

        </div>
        <div class="big-card card">
          <h2> Hello World</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
    <div class="card-swiper-buttons">
        <button id="hate-button">
          <FaTimes />
        </button>
        <button id="love-button">
        <FaHeart />
        </button>
      </div>
  </div>
  );
}

export default App;
