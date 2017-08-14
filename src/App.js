import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor() {
    super();

    this.state = {
      fontColor: "black",
      fontSize: 12,
      fontFamily: "Arial",
      allowEdit: true
    }

    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
    this.updateFamily = this.updateFamily.bind(this)
    this.updateEditStatus = this.updateEditStatus.bind(this)
  }

  updateColor(col) {
    this.setState({
      fontColor: col
    })
  }

  updateSize(sz) {
    this.setState({
      fontSize: sz
    })
  }

  updateFamily(fam) {
    this.setState({
      fontFamily: fam
    })
  }

  updateEditStatus(val) {
    this.setState({
      allowEdit: val
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus} />
          <ColorChanger update={this.updateColor}
            allowEdit={this.state.allowEdit} />
          <SizeChanger update={this.updateSize}
            allowEdit={this.state.allowEdit} />
          <FamilyChanger update={this.updateFamily}
            allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer fontSize={this.state.fontSize}
          fontColor={this.state.fontColor}
          fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;
