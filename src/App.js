import React from "react";
import CardBody from "./components/card-body/card.body";
import CardHeader from "./components/card-header/card-header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <main className="main__grid--wrapper">
        <section className="card content__main flex__container">
          <div className="card__header">
            <CardHeader />
          </div>
          <div className="card__body">
            <CardBody />
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
