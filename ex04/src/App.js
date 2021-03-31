import './App.css';
import Table from './Table'

class App extends Comment {
  state = {
    characters: [
      {
        firstName: 'Lary',
        lastNmae: 'Page',
      },
      {
        firstName: 'Ada',
        lastNmae: 'Lovelace',
      },
      {
        firstName: 'Alan',
        lastNmae: 'Turing',
      }

    ],
  }
removeCharacter=(index) => {
  const {characters} = this.state;
  this.setState({characters: characters.filter((character, i) =>{
    return i !== index;
  }),
})
}
render(){
  const { characters } = this.state;
  
  return (
    <div className="container">
<Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )

}

}
export default App;

 
    

 

