
import './highlight.css';

function Highlights() {
  return (
    <div className="highlights-container">
      <div className="highlights-title">
        <h1>HIGHLIGHTS</h1>
      </div>
      <div className="highlights-grid">
        <div className="highlight-card">
          <h2>24</h2>
          <p>Hours</p>
        </div>
        <div className="highlight-card">
          <h2>100,000</h2>
          <p>Prize Pool</p>
        </div>
        <div className="highlight-card">
          <h2>3+</h2>
          <p>Events</p>
        </div>
      </div>
      <div className="highlights-grid">
        <div className="highlight-card">
          <h2>25,000</h2>
          <p>First Prize</p>
        </div>
        <div className="highlight-card">
          <h2>15,000</h2>
          <p>Second Prize</p>
        </div>
        <div className="highlight-card">
          <h2>5,000</h2>
          <p>Third Prize</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
