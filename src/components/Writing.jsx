var React = require('react');

var Writing = React.createClass({
    getInitialState: function () {
      return {md: this.props.md};
    },
    inputChange: function (event) {
      this.setState({md: event.target.value});
      this.props.markDown(event.target.value);
    },
  	render: function(){
  		var styles = {
			  padding: 20,
			  margin: 10,
        height: "80vh",
        width: "40%",
        resize: "none",
        overflowY: "scroll",
        border: "2px double black"
		};
		return (
			<textarea style={styles} value={this.state.md} onChange={this.inputChange}>
			</textarea>
			);
  }
});

module.exports = Writing;