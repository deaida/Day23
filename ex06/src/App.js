import './App.css';

class App extends Comment {
  state = {
    characters: [],
  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
}
export default App;