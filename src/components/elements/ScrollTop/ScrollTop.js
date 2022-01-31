import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollTop extends Component {   // This component will enable scroll to start from above on each page

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollTop);