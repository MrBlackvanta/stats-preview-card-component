import hero from "./images/image-header-desktop.jpg";
import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <div className="card-details">
        <h1 className="card-details-heading">
          Get <span className="purple">insights</span> that help your business
          grow.
        </h1>
        <p className="card-details-description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="card-details-stats">
          <div className="card-details-stats-box">
            <h2 className="card-details-stats-heading">10k+</h2>
            <p className="card-details-stats-title">companies</p>
          </div>
          <div className="card-details-stats-box">
            <h2 className="card-details-stats-heading">314</h2>
            <p className="card-details-stats-title">templates</p>
          </div>
          <div className="card-details-stats-box">
            <h2 className="card-details-stats-heading">12m+</h2>
            <p className="card-details-stats-title">queries</p>
          </div>
        </div>
      </div>

      <div className="card-hero">
        <div className="card-hero-overlay"></div>
        <img src={hero} alt="girls working" className="card-hero-img" />
      </div>
    </div>
  );
}

export default Card;
