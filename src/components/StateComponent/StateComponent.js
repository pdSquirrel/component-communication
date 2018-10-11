import React, { Component } from 'react';
import ComponentA from '../ComponentA/ComponentA';
import ComponentB from '../ComponentB/ComponentB';
import './StateComponent.css';

class StateComponent extends Component {
  state = {
    current: 'first'
  };

  setCurrent = newCurrent => {
    this.setState({
      current: newCurrent
    });
  };

  render() {
    return (
      <div>
        <h1>State Component</h1>
        <div className="placeholder">
          <div>
            <ComponentA
              setNewCurrent={this.setCurrent}
              current={this.state.current}
            />
          </div>
          <div>
            <ComponentB
              setNewCurrent={this.setCurrent}
              current={this.state.current}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default StateComponent;
