var React = require('react');
var ReactDOM = require('react-dom');
var Writing = require('./components/Writing.jsx');
var Printing = require('./components/Printing.jsx');

var App = React.createClass({
  getInitialState: function(){
    return {
      md: "# Here goes markdown\n\n![](https://www.unsplash.it/360)\n\n### Markdown coded by A2K"
    }
  },
  markDown: function (text) {
    this.setState({md: text});
  },
	render: function(){
    var style = {
      display: "flex",
      justifyContent: "space-around",
      header: {
        textShadow: "1px 1px 2px black, 0 0 1em red, 0 0 0.2em yellow"
      }
    };
		return(
			<div className="container">
        <h1 className="text-center text-success">
          <b style={style.header}>REACT MARKDOWN PREVIEWER</b>
        </h1>
        <div style={style}>
          <Writing md={this.state.md} markDown={this.markDown} />
          <Printing md={this.state.md} />
        </div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('main'));