import React, { Component } from "react";
import "./Folder.css";

class Folder extends Component {
   
    constructor() {
        super();
        this.state = {
            toggle: false,
            folder:['File1', 'File2', 'File3']
        };
    }
    folderToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    render() {
        let value=[];
        if (this.state.toggle===false){
             for(let i=0;i<this.state.folder.length;i++){
                value[i] = <li key={this.state.folder[i]}>{this.state.folder[i]}</li>;
                //value[i] = <li key=i>{this.state.folder[i]}</li>;
            }   
        }
        return(
            <div className="folder">
                <h2>Home</h2>
                {(this.state.toggle)?
                null
                :
                <div>
                    <ul>
                    {value}
                    </ul>
                </div>
                }
                <button onClick={this.folderToggle}>Toggle</button>
            </div>
        );
    }
}

export default Folder;