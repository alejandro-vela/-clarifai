import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Clarifai from 'clarifai';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
identify(elem) {
	  const app = new Clarifai.App({
	    apiKey: 'b5b6fd66256541d29b6a22c6dfdd960e'
	});

    document.getElementById('results').innerHTML = "";

    app.models.predict(Clarifai.GENERAL_MODEL, elem).then(function (response) {
        var concepts = response.rawData.outputs[0].data.concepts;
        console.log(concepts)
        document.getElementById('results').innerHTML = concepts.map(
        function (concept) {
            return concept.name;
        }).join("<br>");
      }
    );
}

UsuarioLinks(elem){
	var entrada = document.getElementById("button")
	entrada = addEventListener("click", function(e){
    e.preventDefault
    var input = document.getElementById("input").value

    const app = new Clarifai.App({
	    apiKey: 'b5b6fd66256541d29b6a22c6dfdd960e'
	});

    document.getElementById('results').innerHTML = "";

    app.models.predict(Clarifai.GENERAL_MODEL, input).then(function (response) {
        var concepts = response.rawData.outputs[0].data.concepts;
        console.log(concepts)

        document.getElementById('results').innerHTML = concepts.map(
        function (concept) {
            return concept.name;
        }).join("<br>");
      }
    );
})

}





}
