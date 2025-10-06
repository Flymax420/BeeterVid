import React from 'react';
import './BeeterVidInterface.css';

const videos = [
  {
    id: 1,
    title: "Epic Bee Adventure",
    channel: "BeeTastic",
    thumbnail: "/thumbs/epic-bee.jpg",
    views: "24,500",
    duration: "12:34",
  },
  {
    id: 2,
    title: "Honey Harvest Tutorial",
    channel: "QueenBee",
    thumbnail: "/thumbs/honey-harvest.jpg",
    views: "8,900",
    duration: "8:12",
  },
  // Add more video data here
];

export default function BeeterVidInterface() {
  return (
    <div className="beeter-container">
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
            <video controls src="/sample.mp4" poster="/thumbs/epic-bee.jpg" />
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
            {videos.map((vid) => (
              <div className="beeter-video-card" key={vid.id}>
                <img src={vid.thumbnail} alt={vid.title} />
                <div className="beeter-card-info">
                  <h4>{vid.title}</h4>
                  <span>{vid.channel}</span>
                  <span>{vid.views} views</span>
                  <span className="duration">{vid.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}