import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../context';





class Search extends Component {
 state ={
     trackTitle:''
 };

 onChange =(e) => {
     this.setState({[e.target.name]:e.target.value})
 }


 findTrack = (dispatch, e) =>{
     e.preventDefault();
     axios
     .get(
       `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=6142a4325a950e5e68db52d8c3106761`
     )
 .then(res => {
   dispatch({
       type: 'SEARCH_TRACKS',
        payload: res.data.message.body.track_list
   });
   this.setState({trackTitle:''});
     //this.setState({track_list: res.data.message.body.track_list});
 
 }
  )
 .catch(err => console.log(err)
 ); 
 
 }


    render() {
        return (
           <Consumer>
               {value => {
                 const { dispatch } = value;
                   return (
                       <div className="card card-body mb-8 p-6">
                        <h1 className="display-4 text-center title">
                            <i className="fas fa-music"> Search for a Song </i>
                        </h1>
                        <p className="lead text-center">
                            get the lyrics for any song
                        </p>
                        <form onSubmit={this.findTrack.bind(this, dispatch)} >
                        <div className="form-group">
                        <input value={this.state.trackTitle}
                        name="trackTitle"
                         placeholder="song title" 
                         type="text" className=" form-control form-control-lg"
                         onChange={this.onChange.bind(this)} />


                        </div>
                        <button type="submit" className="btn btn-lg btn-block mb-5" >Get Track Lyrics</button>

                        </form>
                       </div>
                   )
               }}
           </Consumer>
        )
    }
}


export default Search;