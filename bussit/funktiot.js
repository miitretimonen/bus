var num, dest, lat, lon, id, op, busNumber, icon;
var foliData, kabusData, komiaData;
var followList = all + inner;


function showFoli(d2){
for (var ref in d2[0].result.vehicles){
num = d2[0].result.vehicles[ref].publishedlinename;
dest = d2[0].result.vehicles[ref].destinationname;
dep = new Date(d2[0].result.vehicles[ref].originaimeddeparturetime*1000);
id =  d2[0].result.vehicles[ref].vehicleref;
op = d2[0].result.vehicles[ref].operatorref;
busNumber = id.replace(op+"0","");
lat = d2[0].result.vehicles[ref].latitude;
lon = d2[0].result.vehicles[ref].longitude;




//Poistaa etunollan
if (busNumber.charAt(0)==0){
busNumber = busNumber.replace("0","");
}
//Jos kaksi etunollaa, poistaa vielä toisen
if (busNumber.charAt(0)==0){
busNumber = busNumber.replace("0","");
}


setPlateNum(id);
setOperator(op);
// Oikeanvärisen pömpylän valinta


if (ordinary.includes(num)){
    icon = "icons/blue.png";
    }
if (service.includes(num)){
    icon = 'icons/red.png';
} 
if (school.includes(num)){
    icon = 'icons/yellow.png';
}
if (worker.includes(num)){
    icon = 'icons/gray.png';
}
if (night.includes(num)){
    icon = 'icons/black.png';
}
if (inner.includes(num)){
    icon = 'icons/fuchsia.png';
} 

var icon = icon;

var myIcon = L.icon({
iconUrl: icon,
iconSize: [13, 13],
shadowSize: [68, 95],
shadowAnchor: [22, 94]
});


if (followList.includes(num)){
var marker = L.marker([lat,lon], {icon: myIcon, title: id}).addTo(markersLayer);
marker.bindPopup(num.bold() +" "+dest + "<br>"+ "Lähtö: "+ formatTime(dep.getHours(),dep.getMinutes())+"<br>"+ op +" " +busNumber + "<br>"+id.bold());
}

}
}


function showKabus(d1){
	for (var i in d1[0].result){

  
lat = d1[0].result[i].location.lat;
lon = d1[0].result[i].location.lng;
time = d1[0].result[i].location.timestamp;
name = d1[0].result[i].name;
altitude = d1[0].result[i].location.altitude;

if(d1[0].result[i].transportation == null){
route = "Ei linjalla";
destination ="";
}else{
route = d1[0].result[i].transportation.departure;
destination = " - " + d1[0].result[i].transportation.destination;
}



var myIcon = L.icon({
iconUrl: 'icons/white.png',
iconSize: [13, 13],
shadowSize: [68, 95],
shadowAnchor: [22, 94]
});

var marker = L.marker([lat,lon], {icon: myIcon, title:name}).addTo(markersLayer);
marker.bindPopup("SL".bold() +" "+name.bold()+ "<br>"+ route + destination);




}

}


function showKomia(d3){
	for (var i in d3[0].result){

  
lat = d3[0].result[i].location.lat;
lon = d3[0].result[i].location.lng;
time = d3[0].result[i].location.timestamp;
name = d3[0].result[i].name;
altitude = d3[0].result[i].location.altitude;

if(d3[0].result[i].transportation == null){
route = "Ei linjalla";
destination ="";
}else{
route = d3[0].result[i].transportation.departure;
destination = " - " + d3[0].result[i].transportation.destination;
}



var myIcon = L.icon({
iconUrl: 'icons/white.png',
iconSize: [13, 13],
shadowSize: [68, 95],
shadowAnchor: [22, 94]
});

var marker = L.marker([lat,lon], {icon: myIcon, title:name}).addTo(markersLayer);
marker.bindPopup("Komia".bold() +" "+name.bold()+ "<br>"+ route + destination);




}

}










function setButtonColors(buttonID){
for (var i=0;i<all.length;i++){
    if(ordinary.includes(all[i])){
    document.getElementById(all[i]).style.color="blue";
}
 if(service.includes(all[i])){
    document.getElementById(all[i]).style.color="red";
}
 if(school.includes(all[i])){
    document.getElementById(all[i]).style.color="lime";
}
 if(worker.includes(all[i])){
    document.getElementById(all[i]).style.color="gray";
}
 if(inner.includes(all[i])){
    document.getElementById(all[i]).style.color="purple";
}
 if(night.includes(all[i])){
    document.getElementById(all[i]).style.color="black";
}

if(buttonID=="innerButton"){
    document.getElementById("innerButton").style.color="purple";
}

}
}


//Päivittää seurantalistan painetun nappulan mukaan
var buttonID;
var clickedButtons =[];
function showLine(buttonID){
if (all.includes(buttonID)){
    if (clickedButtons.includes(buttonID)){
    var index = clickedButtons.indexOf(buttonID);
    clickedButtons.splice(index,1);
    followList = clickedButtons;
    markersLayer.clearLayers();
    getData();
    document.getElementById(buttonID).style.opacity=1;
    
}   else{
    clickedButtons.push(buttonID);
	followList = clickedButtons;
	document.getElementById(buttonID).style.opacity = 0.1;
    markersLayer.clearLayers();
    getData();
}
}
	
	
if (buttonID=='allButton'){
    followList = all + inner;
    markersLayer.clearLayers();
    getData();
     for (var i=0;i<all.length;i++){
    document.getElementById(all[i]).style.opacity=1;
    }
}

if (buttonID=='innerButton'){
    followList = inner;
    markersLayer.clearLayers();
    getData();
    
}

}


//Asettaa auton rekisterinumeron id:n perusteella
function setPlateNum(vehID) {
    for (var i=0; i < plateNumbers.length; i++){
        
        if (vehID=="460070"){
            id = "Vainio 82, UZP-562";
        }
        
        
        if (plateNumbers[i].split(":")[0]== vehID){
            id = plateNumbers[i].split(":")[1];
        }
    }
    
}


// Muutta datan operaattorinumeron liikennöitsijän nimeksi
var opRef;
function setOperator(opRef){
    if (opRef == 2){
        op = "TLO";
    }
    if (opRef == 6){
        op = "Jalo Bus";
    }
    if (opRef == 8){
        op = "TuKL";
    }
    if (opRef== 11){
        op = "Savonlinja";
    }
    if (opRef == 16){
        op = "Turkubus";
    }
    if (opRef == 18){
        op = "Muurinen";
    }
    if (opRef == 20){
        op = "Nyholm";
    }
    if (opRef == 27){
        op = "Turun Citybus";
    }
    if (opRef == 28){
        op = "Vesma";
    }
    if (opRef == 41){
        op = "Länsilinjat";
    }
    if (opRef == 55){
        op = "V-S Bussipalvelut";
    }
    if (opRef == 66){
        op = "Launokorpi";
    }
    if (opRef == 67){
        op = "Vainio";
    }
    if (opRef == 68){
        op = "Päivölä";
    }
    if (opRef == 69){
        op = "Airisto Line";
    }

    
}

//Tekee linjanappulat
var out = "";
function makeButtonsCode() {
out = '<button  class="lineButton" id = "allButton"  onclick = "showLine(this.id)" >... </button>'+'<button  class="lineButton" id = "innerButton"  onclick = "showLine(this.id)" >Sis </button>';
for (i=0; i<all.length; i++){
    
out = out + '<button class="lineButton"  id ='+ all[i]+' onclick = "showLine(this.id)" >' +all[i]+' </button>';
}
    
return out;
}




//avaa linjavalikon Hae-nappulaa painettaessa
function openBubble() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



// lisää puuttuvat etunollat tunteihin ja minuutteihin
function formatTime(hour,min){
    if(hour<10){
        hour = "0"+hour;
    }
    if (min<10){
        min = "0"+min;
    }
    return hour+":"+min;
}



