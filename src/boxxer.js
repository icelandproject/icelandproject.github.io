import React from "react";

class Boxxer extends React.Component {
  constructor(_props) {
    super(_props);
    this.state = { textbox: "" };
  }

  boxSet(text, id) {
    if (!this.state.textbox) {
      this.setState({ textbox: text });
      this.tmp_id = id;
    } else {
      if (this.tmp_id === id) {
        this.setState({ textbox: "" });
      } else {
        this.setState({ textbox: text });
        this.tmp_id = id;
      }
    }
  }
}

export { Boxxer };
