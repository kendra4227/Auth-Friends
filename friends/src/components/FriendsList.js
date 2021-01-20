import React from 'react';
//import moment from "moment";
//import Loader from "react-loader-spinner";
//import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
     axiosWithAuth().get("/api/friends")
     .then(res => {console.log(res)
    this.setState({friends: res.data,})
    })
     .catch(err => {console.error(err)})
        }

        
    render() {
        return (
            <div>
              {this.state.friends.map(friend => (
                <div className="friends-list">
                  <p>{friend.name}</p>
                  <p>{friend.email}</p>
                  <p>{friend.age}</p>
                </div>
              ))}
            </div>
          );

    }
        
       
}
export default FriendsList;