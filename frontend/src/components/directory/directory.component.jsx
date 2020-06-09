import React, { Component } from "react";
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directoryItem.component";
import sections from "./directory-data";
class Directory extends Component {
  constructor() {
    super();
    this.state = {
      Directory: sections,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="dircetory">
          {this.state.Directory.map((item) => (
            <DirectoryItem key={item.id} item={item} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Directory;
