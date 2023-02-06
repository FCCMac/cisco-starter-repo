import React from "react";

class IPDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      ip: null,
    };
  }

  componentDidMount() {
    let url = "https://api.ipify.org?format=text";
    if (this.props.version === "6") {
      url = "https://api64.ipify.org?format=text";
    }

    fetch(url)
      .then((response) => response.text())
      .then(
        (data) => {
          if (this.props.version === 6 && data.includes(".")) {
            data = "v6 Address Unavailable";
          }
          this.setState({
            isLoaded: true,
            ip: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, ip } = this.state;
    if (error) {
      return <h5> Error: {error.message} </h5>;
    } else if (!isLoaded) {
      return <h5> Loading... </h5>;
    } else {
      return <h5> {ip} </h5>;
    }
  }
}

export default IPDisplay;
