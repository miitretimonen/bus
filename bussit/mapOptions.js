
    var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',
            thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>',
            leafletLink = '<a href="http://leafletjs.com/">Leaflet</a>',
            MMLLink = '<a href="http://maanmittauslaitos.fi/">Maanmittauslaitos</a>';
        
        var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            osmAttrib = '&copy; ' + osmLink + ' Contributors' + ' Tietolähde http://data.foli.fi/ lisenssillä Creative Commons Nimeä 4.0 Kansainvälinen (CC BY 4.0).',
            landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',
            thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink,
            leafletUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
            leafletAttrib = '&copy; ' + leafletLink + ' Contributors',
            MMLPerusUrl = 'http://tiles.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.jpg',
            MMLAttrib = '&copy; ' + MMLLink + ' Contributors',
            
            MMLTaustaUrl = 'http://tiles.kartat.kapsi.fi/taustakartta/{z}/{x}/{y}.jpg',
            MMLOrtoUrl = 'http://tiles.kartat.kapsi.fi/ortokuva/{z}/{x}/{y}.jpg';

        var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
            landMap = L.tileLayer(landUrl, {attribution: thunAttrib});
            leafletMap = L.tileLayer(leafletUrl, {attribution: leafletAttrib}),
            MMLPerusMap = L.tileLayer(MMLPerusUrl, {attribution: MMLAttrib}),
            MMLTaustaMap = L.tileLayer(MMLTaustaUrl, {attribution: MMLAttrib}),
            MMLOrtoMap = L.tileLayer(MMLOrtoUrl, {attribution: MMLAttrib});

        var baseLayers = {
            "Leaflet": leafletMap,
			"OSM Mapnik": osmMap,
			"Landscape": landMap,
			"MML Maasto" : MMLPerusMap,
			"MML Tausta" : MMLTaustaMap,
			"MML Ilmakuva" : MMLOrtoMap
		};
		
