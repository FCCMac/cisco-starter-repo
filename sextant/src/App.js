import "./App.css";
import Exhibit from "./components/Exhibit";
import Banner from "./components/Banner";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import IPDisplay from "./components/IPDisplay";
import Latency from "./components/Latency";

function App() {
  return (
    <div className="App">
      <Banner />
      <Container>
        <div className="content my-3">
          <div className="row">
            <div className="col-lg-4">
              <Exhibit name="Your IP v4 Address">
                <IPDisplay version="4" />
              </Exhibit>
            </div>
            <div className="col-lg-4">
              <Exhibit name="Your IP v6 Address">
                <IPDisplay version="6" />
              </Exhibit>
            </div>
            <div className="col-lg-4">
              <Exhibit name="Latency">
                <Latency />
              </Exhibit>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
