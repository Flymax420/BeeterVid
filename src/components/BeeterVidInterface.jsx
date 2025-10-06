import React from "react";
import './BeeterVidInterface.css';

const BeeterVidInterface = () => (
  <div style={{ display: 'flex', minHeight: '100vh' }}>
    <aside className="beeter-sidebar">
      <h1>🐝 BeeterVid</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Trending</li>
          <li>Subscriptions</li>
          <li>My Library</li>
          <li>Profile</li>
        </ul>
      </nav>
    </aside>
    <main className="beeter-main">
      <section className="beeter-player-section">
        <div className="beeter-player-wrapper">
          <video controls poster="https://placehold.co/800x450?text=Bee+Adventure">
            <source src="sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="beeter-video-info">
          <h2>Epic Bee Adventure</h2>
          <span className="channel">BeeTastic</span>
          <span className="views">24,500 views • 2 hours ago</span>
        </div>
      </section>
      <section className="beeter-suggestions">
        <h3>Up Next</h3>
        <div className="beeter-video-list">
          <div className="beeter-video-card">
            <img src="https://placehold.co/70x46?text=1" alt="Epic Bee Adventure" />
            <div className="beeter-card-info">
              <h4>Epic Bee Adventure</h4>
              <span>BeeTastic</span>
              <span>24,500 views</span>
              <span className="duration">12:34</span>
            </div>
          </div>
          <div className="beeter-video-card">
            <img src="https://placehold.co/70x46?text=2" alt="Honey Harvest Tutorial" />
            <div className="beeter-card-info">
              <h4>Honey Harvest Tutorial</h4>
              <span>QueenBee</span>
              <span>8,900 views</span>
              <span className="duration">8:12</span>
            </div>
          </div>
          <div className="beeter-video-card">
            <img src="https://placehold.co/70x46?text=3" alt="The Hive Documentary" />
            <div className="beeter-card-info">
              <h4>The Hive Documentary</h4>
              <span>BeeWorld</span>
              <span>17,300 views</span>
              <span className="duration">24:11</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default BeeterVidInterface;