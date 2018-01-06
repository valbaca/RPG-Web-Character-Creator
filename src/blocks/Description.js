import React from 'react';

export default class Description extends React.Component {
  state = {text: ''};

  componentDidMount() {
    this.checkText(this.props.text);
  }

  componentWillReceiveProps(nextProps) {
    this.checkText(nextProps.text);
  }

  checkText = (text) => {
    text = text.split(' ');
    let newString = '';
    text.forEach((word)=>{
      switch (true) {
        case word.includes('CRB'):
          newString += `<a href="http://www.drivethrurpg.com/product/228813/Genesys-Core-Rulebook" target="_blank"  target="_blank" rel="noopener noreferrer">${word}</a> `
          break;
        case word === '[blue]':
        case word === '[boost]':
          newString += '<img src="/images/blue.png" class="textSymbols" /> '
          break;
        case word === '[green]':
        case word === '[ability]':
          newString += '<img src="/images/green.png" class="textSymbols" /> '
          break;
        case word === '[yellow]':
        case word === '[proficiency]':
          newString += '<img src="/images/yellow.png" class="textSymbols" /> '
          break;
        case word === '[black]':
        case word === '[setback]':
          newString += '<img src="/images/black.png" class="textSymbols" /> '
          break;
        case word === '[purple]':
        case word === '[difficulty]':
          newString += '<img src="/images/purple.png" class="textSymbols" /> '
          break;
        case word === '[red]':
        case word === '[challenge]':
          newString += '<img src="/images/red.png" class="textSymbols" /> '
          break;
        case word === '[white]':
          newString += '<img src="/images/white.png" class="textSymbols" /> '
          break;
        case word === '[advantage]':
        case word === '[adv]':
          newString += '<img src="/images/advantage.png" class="textSymbols" /> '
          break;
        case word === '[success]':
        case word === '[suc]':
          newString += '<img src="/images/success.png" class="textSymbols" /> '
          break;
        case word === '[triumph]':
        case word === '[tri]':
          newString += '<img src="/images/triumph.png" class="textSymbols" /> '
          break;
        case word === '[threat]':
        case word === '[thr]':
          newString += '<img src="/images/threat.png" class="textSymbols" /> '
          break;
        case word === '[failue]':
        case word === '[fail]':
          newString += '<img src="/images/failure.png" class="textSymbols" /> '
          break;
        case word === '[despair]':
        case word === '[des]':
          newString += '<img src="/images/despair.png" class="textSymbols" /> '
          break;
        default:
          newString += `${word} `;
          break;
      }
    })
    this.setState({text: newString});
  }

  render() {
    const {text} = this.state;

    return <span dangerouslySetInnerHTML={{__html: text}} />

  }
}