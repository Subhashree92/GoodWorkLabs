import React, { Component } from "react";
import { render } from "react-dom";
import Flexi from "./flexi";
import "./style.css";

const flexiConfig = {
  items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": 'TextField',
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
            "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
            ]
      }
    ]
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "SomeOne",
      place: 'Somewhere',      
    };
  }

  onFlexSubmit = (val) => {
    this.setState({ name: val.name, place: val.dd });
  }

  render() {
    return (
      <div>
        <Flexi onSubmitFn={this.onFlexSubmit} config={flexiConfig.items} />
    <p><i>{this.state.name}</i> From <i>{this.state.place}</i></p>
      </div>
    );
  }
}

export default App;
