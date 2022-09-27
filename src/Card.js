import hero from "./images/image-header-desktop.jpg";
import heroPhone from "./images/image-header-mobile.jpg";
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
        <picture>
          <source media="(min-width: 900px)" srcset={heroPhone} />
          <img
            src={hero}
            alt="3 girls sitting on office"
            className="card-hero-img"
          />
        </picture>
        <div className="card-hero-overlay"></div>
      </div>
    </div>
  );
}

export default Card;
