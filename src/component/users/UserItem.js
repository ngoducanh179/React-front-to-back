import React, { Component } from 'react'

class UserItem extends Component {

  constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'mojombo',
      avatar_url: ''
    }

  }
  render() {
    return (
      <div>
        UserItem
      </div>
    )
  }
}

export default UserItem
