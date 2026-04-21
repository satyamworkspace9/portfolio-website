import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2026 – Present</h3>
            </div>
            <p>
              Designed custom menu cards and social media creatives for small businesses. Improved visual appeal and readability of client materials, increasing engagement. Delivered personalized design solutions based on client needs and branding goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
