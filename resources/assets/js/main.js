' use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
var marked = require('marked');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');




var App = React.createClass({
// Recupere les valeurs dans le localStorage si il y en a un.
	componentDidMount: function(){
		this.setState({
			code : localStorage.getItem("recup")
		});
	},
// Initisalise l'editeur vide, si le localStorage est vide.
	getInitialState: function(){
		return {
			code:  ""
		};
	},
// Affiche le nouveau code a chaque frappe et l'enregistre dans le localStorage.
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});
		localStorage.setItem("recup",newCode);
		$('.CodeMirror-scroll').animate({scrollTop : $('#resultat').prop('scrollHeight')}, 5);
	},
	scrollAuto: function(){
		console.log("coucuo");

	},
// Renvoie le code html et marked le code.
	render: function() {
		var myCodeMirror = {
			lineNumbers: true,
			matchBrackets: true,
			lineWrapping: true,
			mode: "markdown"	
		};
		var md = marked(this.state.code);
		return (
		<div className="contain">
			<Codemirror value={this.state.code} onChange={this.updateCode} options={myCodeMirror} />
			<div className="resultat" dangerouslySetInnerHTML={{__html: md }}></div>
		</div>
		 
		 )
	}
});

// Je renderise la variable App dans l'element container
ReactDOM.render(<App />, document.getElementById('container'));

