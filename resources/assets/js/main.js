' use strict'
var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');
var marked = require('marked');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

$(document).ready(function(){
	$("#help").on("click", function(){
		$("#regles").show();
		$(this).hide();
	});
	$("#close").on("click", function(){
		$("#regles").hide();
		$("#help").show();
	});
});


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
			<div id="regles">
				<button id="close">X</button>
				<h3 class="title">How to use Markdown</h3>
				<p>Mettre du text en italique : *italique* ou  _mot italique_</p>
				<p>Mettre du text en gras : **italique** ou  __mot italique__</p>
				<p>Mettre du text en balise HTML : Mon texte `code` fin de mon texte</p>
				<p>Pour faire un paragraphe : Mettre 4 espaces avant de commencer a r&eacute;diger</p>
				<p>Faire une citation : > citation </p>
				<p>Faire une liste non ordonnée : *liste, pour une sous liste faire 4 espaces</p>
				<p>Faire un titre : # Gros titre, ## Plus petit titre, ### etc..</p>
				<p> Pour un lien : [texte du lien](url_du_lien "texte pour le titre, facultatif")</p>
				<p>Pour une image : ![Texte alternatif](url_de_l'image "texte pour le titre, facultatif")</p>
				<p>Pour faire une barre horizontale : ***</p>
			</div> 
			<div className="resultat" dangerouslySetInnerHTML={{__html: md }}></div>
		</div>
		 
		 )
	}
});

// Je renderise la variable App dans l'element container
ReactDOM.render(<App />, document.getElementById('container'));

