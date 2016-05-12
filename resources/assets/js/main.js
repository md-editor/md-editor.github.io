' use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
var marked = require('marked');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');




var App = React.createClass({
	componentDidMount: function(){
		this.setState({
			code : localStorage.getItem("recup")
		});
	},
	getInitialState: function(){
		return {
			code:  ""
		};
	},
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});

		localStorage.setItem("recup",newCode);


	},
	render: function() {
		var md = marked(this.state.code);
		var myCodeMirror = {
			lineNumbers: true,
			matchBrackets: true,
			lineWrapping: true,
			mode: "markdown"
		};
		return (
		<div className="contain">
			<Codemirror value={this.state.code} onChange={this.updateCode} options={myCodeMirror} />
			<div className="resultat" dangerouslySetInnerHTML={{__html: md }}></div>
		</div>
		 
		 )
	}
});

ReactDOM.render(<App />, document.getElementById('big'));