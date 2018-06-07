import React, { Component } from 'react';
import './App.css';

const NUM_BOXES = 32;

const Box = (props) => {
  const boxStyle = {
    display: 'inline-block',
    width: '12.5%',
    paddingTop: '12.5%',
    backgroundColor: props.color
  }
  
  return <div style={boxStyle} />
}

class App extends Component {
  constructor(props){
    super(props);
    const boxArr = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
    this.state = {
      boxArr
    }
    
    setInterval(() => {
      const boxArr = [...this.state.boxArr];
      const rdmBoxIndex = Math.floor(Math.random() * NUM_BOXES);
      boxArr[rdmBoxIndex] = this.getRandomColor();
      
      this.setState({boxArr});
    }, 300)
  }

  getRandomColor() {
    let rdmNum = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[rdmNum];
  }
  
  render() {
    const generateBox = this.state.boxArr.map((color, index) => <Box key={index} color={color} />)
    
    return (
      <div className="App">
        <h1>Show 32 boxes</h1>
        {generateBox}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};


export default App;
