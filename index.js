const element = (
  <div>
    <h1 className="heading">Congratulations</h1>
    <div className="container">
      <div className="image-container">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      </div>
      <h1 className="name">Winstone</h1>
      <p className="college">NxtWave</p>
      <div className="image-container">
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
