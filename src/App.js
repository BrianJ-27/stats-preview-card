import React from "react";

function App() {
  return (
    <React.Fragment>
      <main className="main__grid--wrapper">
        <section className="card content__main flex__container">
          <div className="card__header">
            <div className="img__card"></div>
          </div>
          <div className="card__body">
            <h1 className="title__primary">
              Get <span>insights</span> that help your business grow.{" "}
            </h1>
            <p className="content__paragraph">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div className="flex__container--space-between">
              <div>
                <h2>10k+</h2>
                <p className="content__stats">Companines</p>
              </div>

              <div>
                <h2>314</h2>
                <p className="content__stats">Templates</p>
              </div>

              <div>
                <h2>12M+</h2>
                <p className="content__stats">Queries</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="attribution">
        Challenge by{" "}
        <a href="#https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#heloo">Brian Johnson</a>.
      </footer>
    </React.Fragment>
  );
}

export default App;
