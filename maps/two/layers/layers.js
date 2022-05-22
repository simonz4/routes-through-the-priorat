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
var format_prov_tgn_1 = new ol.format.GeoJSON();
var features_prov_tgn_1 = format_prov_tgn_1.readFeatures(json_prov_tgn_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prov_tgn_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_prov_tgn_1.addFeatures(features_prov_tgn_1);
var lyr_prov_tgn_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_prov_tgn_1, 
                style: style_prov_tgn_1,
                interactive: true,
                title: '<img src="styles/legend/prov_tgn_1.png" /> prov_tgn'
            });
var format_mun_tgn_2 = new ol.format.GeoJSON();
var features_mun_tgn_2 = format_mun_tgn_2.readFeatures(json_mun_tgn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mun_tgn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mun_tgn_2.addFeatures(features_mun_tgn_2);
var lyr_mun_tgn_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mun_tgn_2, 
                style: style_mun_tgn_2,
                interactive: true,
                title: '<img src="styles/legend/mun_tgn_2.png" /> mun_tgn'
            });
var format_comarca_priorat_3 = new ol.format.GeoJSON();
var features_comarca_priorat_3 = format_comarca_priorat_3.readFeatures(json_comarca_priorat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comarca_priorat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comarca_priorat_3.addFeatures(features_comarca_priorat_3);
var lyr_comarca_priorat_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comarca_priorat_3, 
                style: style_comarca_priorat_3,
                interactive: true,
                title: '<img src="styles/legend/comarca_priorat_3.png" /> comarca_priorat'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_prov_tgn_1.setVisible(true);lyr_mun_tgn_2.setVisible(true);lyr_comarca_priorat_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_prov_tgn_1,lyr_mun_tgn_2,lyr_comarca_priorat_3];
lyr_prov_tgn_1.set('fieldAliases', {'fid': 'fid', 'NATLEVNAME': 'NATLEVNAME', 'NAMEUNIT': 'NAMEUNIT', });
lyr_mun_tgn_2.set('fieldAliases', {'fid': 'fid', 'NAMEUNIT': 'NAMEUNIT', });
lyr_comarca_priorat_3.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'LEGSTATUS': 'LEGSTATUS', 'ACCURACY': 'ACCURACY', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_prov_tgn_1.set('fieldImages', {'fid': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NAMEUNIT': 'TextEdit', });
lyr_mun_tgn_2.set('fieldImages', {'fid': 'TextEdit', 'NAMEUNIT': 'TextEdit', });
lyr_comarca_priorat_3.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'LEGSTATUS': 'TextEdit', 'ACCURACY': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'DateTime', 'URL_RESOUR': 'TextEdit', });
lyr_prov_tgn_1.set('fieldLabels', {'fid': 'no label', 'NATLEVNAME': 'no label', 'NAMEUNIT': 'no label', });
lyr_mun_tgn_2.set('fieldLabels', {'fid': 'no label', 'NAMEUNIT': 'no label', });
lyr_comarca_priorat_3.set('fieldLabels', {'fid': 'no label', 'INSPIREID': 'header label', 'NATIONALCO': 'header label', 'COUNTRY': 'header label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'LEGSTATUS': 'no label', 'ACCURACY': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_comarca_priorat_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});