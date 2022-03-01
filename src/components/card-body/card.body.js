import React from "react";

const CardBody = () => {
  return (
    <React.Fragment>
      <h1 className="title__primary">
        Get <span>insights</span> that help your business grow.
      </h1>
      <p className="content__paragraph">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div className="flex__container--space-between">
        <div>
          <h2 className="title__secondary">10k+</h2>
          <p className="content__stats">Companines</p>
        </div>

        <div>
          <h2 className="title__secondary">314</h2>
          <p className="content__stats">Templates</p>
        </div>

        <div>
          <h2 className="title__secondary">12M+</h2>
          <p className="content__stats">Queries</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardBody;
