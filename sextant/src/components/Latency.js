import React from "react";
const url = "ws://localhost:55455";
let ws = null;

class Latency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      latency: null,
    };
  }

  componentDidMount() {
    ws = new WebSocket(url);
    this.setState({
        isLoaded: true
    });
    ws.onmessage = (event) => {
      this.setState({
        latency: Date.now() - event.data,
      });
    };
  }

  componentWillUnmount(){
    ws.close();
  }

  render() {
    const { isLoaded, latency } = this.state;
    if (!isLoaded) {
      return <h5> Loading... </h5>;
    } else {
      return <div>
            <h4 className="d-inline"> {latency} </h4>
             ms
        </div>;
    }
  }
}

export default Latency;
