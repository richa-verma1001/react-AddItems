var React = require('react');
var ReactDOM = require('react-dom');

var FriendList = React.createClass({
  render: function(){
    var myList = this.props.list;
    var renderList = myList.map(function(item){
      return (<li key={item}>{item}</li>);
    });
    return (<ul>{renderList}</ul>);
  }
});

var FriendsContainer = React.createClass({
  getInitialState: function(){
    return {
      name: "Richa Verma",
      friends: ["Marina", "Mansha", "Ratna"]
    }
  },
  handleBtnClick: function(friend){

    this.state.friends.push([friend]);
    this.setState({
      friends: this.state.friends
    });
  },
  handleChange: function(event){
    this.setState({
      newFriend: event.target.value
    })
  },
  render: function(){
    return (
      <div className="panes">
        <div className="leftPane">
          Name: {this.state.name}
          <FriendList list={this.state.friends} />
        </div>
        <AddFriend addNew={this.handleBtnClick}/>
      </div>
    );
  }
});

var AddFriend = React.createClass({
  render: function(){
    return (
      <div className="rightPane">
        <input value={this.state.newFriend} onChange={this.handleNameChange} />
        <button className="button" onClick={this.handleAdd}>Add Friend</button>
      </div>
    );
  },
  handleNameChange: function(event){
    this.setState({
      newFriend: event.target.value
    })
  },
  getInitialState: function(){
    return {
      newFriend: ""
    }
  },
  handleAdd: function(){
    this.props.addNew(this.state.newFriend);
  }
});

ReactDOM.render(<FriendsContainer />, document.getElementById('container'));
