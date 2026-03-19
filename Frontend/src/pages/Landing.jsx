import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <header className="landing-nav">
        <div className="brand">Smart Business Finance Manager</div>
        <div className="nav-actions">
          <Link className="btn ghost" to="/login">Log In</Link>
          <Link className="btn" to="/register">Register</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Built for real business owners</p>
          <h1>Manage your business money without knowing accounting</h1>
          <p className="subhead">
            Just tell us what happened in your business. We handle the tracking and reports
            automatically.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/login">Get Started</Link>
            <button className="btn ghost">Watch Tutorial</button>
          </div>
          <div className="trust">
            <span>Trusted by growing shops, services, and local teams</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-title">Business Health</div>
          <div className="card-value">₹24,500</div>
          <div className="card-grid">
            <div>
              <span className="label">Money In</span>
              <span className="value">₹12,900</span>
            </div>
            <div>
              <span className="label">Money Out</span>
              <span className="value">₹7,400</span>
            </div>
            <div>
              <span className="label">Pending Payments</span>
              <span className="value">₹3,150</span>
            </div>
            <div>
              <span className="label">Customers</span>
              <span className="value">18</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section problem">
        <h2>Running a business is hard. Accounting shouldn't be.</h2>
        <ul className="bullet-grid">
          <li>Confused by accounting terms?</li>
          <li>Not sure what business reports mean?</li>
          <li>Traditional finance software feels overwhelming?</li>
          <li>Hiring a full-time expert is expensive?</li>
        </ul>
      </section>

      <section className="section solution">
        <div className="solution-text">
          <h2>Smart Business Finance Manager is built for business owners, not accountants.</h2>
          <p>
            Use everyday words to record Money In and Money Out. The system keeps everything organized
            in the background.
          </p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">Simple language interface</div>
          <div className="feature-card">AI powered automation</div>
          <div className="feature-card">Automatic business insights</div>
          <div className="feature-card">Mobile friendly dashboard</div>
        </div>
      </section>

      <section className="section how">
        <div className="how-left">
          <h2>How it works</h2>
          <div className="video-placeholder">
            <div className="play">?</div>
            <div className="video-text">Tutorial video</div>
          </div>
        </div>
        <ol className="steps">
          <li>Tell the system what happened</li>
          <li>AI records it automatically</li>
          <li>Dashboard shows your business health</li>
        </ol>
      </section>

      <section className="section ai">
        <div className="ai-card">
          <h2>AI Advantage</h2>
          <p>Let AI do the heavy lifting so you can focus on running your business.</p>
          <ul className="ai-list">
            <li>Smart entries from short sentences</li>
            <li>Automatic insights on what is going well</li>
            <li>Financial predictions to plan the next month</li>
          </ul>
          <div className="ai-actions">
            <Link className="btn" to="/login">Get Started</Link>
            <button className="btn ghost">Watch Tutorial</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>Smart Business Finance Manager</div>
        <div className="footer-links">
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
