import React from 'react';

function roll(pips, isUnlimited) {
  var value = 1 + Math.floor(Math.random() * Math.floor(pips));

  if (isUnlimited && value === pips)
  {
      value = "(" + roll(pips, isUnlimited) + "+" + roll(pips, isUnlimited) + ")";
  }

  return value;
}


class DiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  
  handleSubmit(event) {
    var result = 0;
    var trimedStr = this.state.value.toUpperCase();
    var isUnlimited = false;

    if (this.state.value == "")
      trimedStr = "OB2T6";

    if (trimedStr.startsWith("OB")) {
      isUnlimited = true;
      trimedStr = trimedStr.substring(2); 
    }

    var elements = trimedStr.split('T');
    var diceNum = parseInt(elements[0]);
    var pips = parseInt(elements[1]);
    var resultStr = "";
    for (var i = 0; i < diceNum; i++) {
      if (i !== 0) resultStr += "+";
      resultStr += roll(pips, isUnlimited);
    }

    var resultElements = resultStr.replace(/[([)]/g, '').split('+');
    for (var j = 0; j < resultElements.length; j++) {
      result += parseInt(resultElements[j]);
    }

    alert('Rollresult for \"' + this.state.value + "\": " + resultStr + "=" + result + "\n(Antal Ögon=" + pips + ", Antal_Tärningar=" + diceNum + ", Obegränsad=" + isUnlimited +")");
    event.preventDefault();
  }

  render() {
    return (<div><h4>Tärningsrullarn</h4>
      <form onSubmit={this.handleSubmit}>
        <input type="text" defaultValue="Ob2T6" name="name" onChange={this.handleChange} />
        <input type="submit" value="Roll" />
      </form></div>);
  }
}

export default DiceComponent;
