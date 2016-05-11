' use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
var marked = require('marked');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');



// Creation de l'objet App avec react.
var App = React.createClass({
// Initialise la page avec localStorage, si des valeurs on etait enregistrees. 
	getInitialState: function(){
		var couleur = localStorage.getItem("recup");
		var cod = marked(couleur);
		$('#resultat').html(cod);

		return {
			code: couleur
		};
	},
// Fonction qui s'enclenche a chaque "onChange" actives. Elle permet le livewriting et le marked.
	updateCode: function(newCode) {
		this.setState({
			code: newCode,
		});
		var test = newCode;
		 var cod = marked(newCode);
		 $('#resultat').html(cod);
		 localStorage.setItem("recup",test);


	},
// Initialisation des settigns de codemirror. 
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