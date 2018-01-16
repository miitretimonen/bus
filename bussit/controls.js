// Merkkien selitys
var legend = L.control({position: 'bottomleft'});
legend.onAdd = function(map) {
            this._div = L.DomUtil.create('div', 'legend');
            this._div.innerHTML = legendString;
                                  
            this._div.style.backgroundColor='white';
            this._div.style.padding = '2px';
            this._div.style.margin= '0px 0px 30px';
            this._div.style.borderRadius = '4px';
            return this._div;
}

//Suodatusnappula
var buttonText = "";
var search = L.control({position: 'bottomright'});
search.onAdd = function(map) {
            this._div = L.DomUtil.create('div', 'search'); 
            this._div.innerHTML = '<div class="popup" onclick="openBubble()"> <button  class = "searchButton"> '+buttonText+' </button> <span class="popuptext" id="myPopup">  ' + makeButtonsCode();+'</span> </div>';
            this._div.style.backgroundColor='white';
            this._div.style.padding = '2px';
            this._div.style = "margin: 10px 5px";
            this._div.style.borderRadius = '4px';
            return this._div;
}