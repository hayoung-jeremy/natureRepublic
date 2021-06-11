("use strict");

class ReactRenderer extends React.Component {
  render() {
    return <React.Fragment>Hello, I'm React</React.Fragment>;
  }
}

let domContainer = document.querySelector("#react_container");
ReactDOM.render(<ReactRenderer />, domContainer);
