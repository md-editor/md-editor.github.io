' use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
var marked = require('marked');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');




var App = React.createClass({
	getInitialState: function(){
		var couleur = localStorage.getItem("recup");
		var cod = marked(couleur);
		$('#resultat').html(cod);

		return {
			code: couleur
		};
	},
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});
		var test = newCode;
		 var cod = marked(newCode);
		 $('#resultat').html(cod);
		 localStorage.setItem("recup",test);


	},
	render: function() {
		var myCodeMirror = {
			lineNumbers: true,
			matchBrackets: true,
			lineWrapping: true,
			mode: "markdown"
		};
		return <Codemirror value={this.state.code} onChange={this.updateCode} options={myCodeMirror} />
	}
});

ReactDOM.render(<App />, document.getElementById('big'));













// var Message = React.createClass({
// 	render : function() {
// 		return (
// 			<div>{this.props.text}</div>
// 			);
// 	}
// });

// var Input = React.createClass({
// 	inputChange: function(e){
// 		this.props.onChange(e.target.value)
// 		console.log("inputhcnage")
// 	},
// 	componentDidMount: function(){
// 		console.log("didmount")
// 		var textArea = document.getElementById('code');
// 		var myCodeMirror = CodeMirror.fromTextArea(textarea, {
// 			lineNumbers: true,
// 			matchBrackets: true,
// 			lineWrapping: true,
// 			mode: 'markdown',	
// 		}); 
// 			 var result = myCodeMirror.getValue(); 

// 		 // function  prout(){
// 		 // 	console.log(result);
// 		 // }
// 		 // setInterval(prout, 1050)

 
// 	},
// 	handleSubmit : function(e) {
// 		console.log("fefe")
// 		e.preventDefault();
// 		this.setState({text: ' '});
// 	},
// 	render : function() {
// 		return (
// 			<form onSubmit={this.handleSubmit} >
// 				<label>Type your Markdown</label>
// 				<textarea  id="code" value={this.props.text}  cols="100" rows="20"></textarea>
// 				<button type="submit">Post</button>
// 			</form>
// 			);
// 	}
// });
// var Result = React.createClass({
// 	getInitialState: function(){
// 		return {text:''};
// 	},
// 	onChange : function (text) {
// 		this.setState({text})
// 	},
// 	render : function() {
// 		return (
// 			<div className="container">
// 			<div id="editeur"><Container onChange={this.onChange}/></div>
// 			<div className="contain">
// 			<label>Your results</label>
// 			<div id="resultat"><Message text={this.state.text}/></div>
// 			</div>
// 			</div>
// 			);
// 	}
// });

// var Container = React.createClass({
// 	getInitialState: function(){
// 		return {text:''};
// 	},
// 	render : function() {
// 		return (
// 			<Input value={this.state.text} onChange={this.props.onChange}/>
// 			);
// 	}
// });

// ReactDOM.render(
// 	<Result />,
// 	document.getElementById('big')
// );