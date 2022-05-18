var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_comarca_priorat_1 = new ol.format.GeoJSON();
var features_comarca_priorat_1 = format_comarca_priorat_1.readFeatures(json_comarca_priorat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comarca_priorat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comarca_priorat_1.addFeatures(features_comarca_priorat_1);
var lyr_comarca_priorat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comarca_priorat_1, 
                style: style_comarca_priorat_1,
                interactive: true,
                title: '<img src="styles/legend/comarca_priorat_1.png" /> comarca_priorat'
            });
var format_unioncapas_2 = new ol.format.GeoJSON();
var features_unioncapas_2 = format_unioncapas_2.readFeatures(json_unioncapas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_unioncapas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_unioncapas_2.addFeatures(features_unioncapas_2);
var lyr_unioncapas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_unioncapas_2, 
                style: style_unioncapas_2,
                interactive: true,
                title: '<img src="styles/legend/unioncapas_2.png" /> unioncapas'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_comarca_priorat_1.setVisible(true);lyr_unioncapas_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_comarca_priorat_1,lyr_unioncapas_2];
lyr_comarca_priorat_1.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'LEGSTATUS': 'LEGSTATUS', 'ACCURACY': 'ACCURACY', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_unioncapas_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'tipology': 'tipology', 'stars': 'stars', 'servicioD': 'servicioD', 'name_2': 'name_2', 'description': 'description', });
lyr_comarca_priorat_1.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'LEGSTATUS': 'TextEdit', 'ACCURACY': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'DateTime', 'URL_RESOUR': 'TextEdit', });
lyr_unioncapas_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'tipology': 'TextEdit', 'stars': 'TextEdit', 'servicioD': 'TextEdit', 'name_2': 'TextEdit', 'description': 'TextEdit', });
lyr_comarca_priorat_1.set('fieldLabels', {'fid': 'no label', 'INSPIREID': 'header label', 'NATIONALCO': 'header label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'LEGSTATUS': 'no label', 'ACCURACY': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_unioncapas_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'tipology': 'no label', 'stars': 'no label', 'servicioD': 'no label', 'name_2': 'no label', 'description': 'no label', });
lyr_unioncapas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});