var React = require('react');
var marked = require('marked');

var Printing = React.createClass({
  	render: function(){
  		var styles = {
				padding: 20,
				margin: 10,
				height: "80vh",
				width: "40%",
				overflowY: "scroll",
				backgroundColor: "white",
        border: "2px double black"
		};
    //console.log(this.props.md);
		return (
        <div style={styles} dangerouslySetInnerHTML={{__html: marked(this.props.md)}}>
        </div>
      );
  	}
});

module.exports = Printing;