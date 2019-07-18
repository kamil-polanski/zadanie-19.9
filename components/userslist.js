import React from 'react';
import User from './user'

class UsersList extends React.Component {
    get users() {
        return this.props.users.map(user => <User key={user.id} user={user}/>);
    }
  
    render() {
        return (
        <div className="user">
            {this.users}
        </div>
      );
    }
  }

  export default UsersList
