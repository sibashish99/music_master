import React  ,{Component} from 'react';

class Search extends Component{
    
  state ={artistQuery : ''};


  updateArtistQuery = event =>{
     this.setState({artistQuery : event.target.value});
   }
  
  handleKeyPress = event =>{
     if(event.key === 'Enter'){
      this.searchArtist();
     }
   }

   searchArtist = () =>{
       this.props.searchArtist(this.state.artistQuery);
   }

    render(){
        return(
            <div>
              <input 
                 onChange={thid.updateArtistQuery} 
                 onKeyPress={this.handleKeyPress}
                 placeholder='Search for an Artist'
              />
              <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}
export default Search;