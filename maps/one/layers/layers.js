ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25831").setExtent([297649.705355, 4554984.423792, 344203.341666, 4577066.424285]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_provinciatarragona_1 = new ol.format.GeoJSON();
var features_provinciatarragona_1 = format_provinciatarragona_1.readFeatures(json_provinciatarragona_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_provinciatarragona_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provinciatarragona_1.addFeatures(features_provinciatarragona_1);
var lyr_provinciatarragona_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_provinciatarragona_1, 
                style: style_provinciatarragona_1,
                interactive: true,
                title: '<img src="styles/legend/provinciatarragona_1.png" /> provincia tarragona'
            });
var format_priorat_2 = new ol.format.GeoJSON();
var features_priorat_2 = format_priorat_2.readFeatures(json_priorat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_priorat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_priorat_2.addFeatures(features_priorat_2);
var lyr_priorat_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_priorat_2, 
                style: style_priorat_2,
                interactive: true,
                title: '<img src="styles/legend/priorat_2.png" /> priorat'
            });
var format_carreteras_3 = new ol.format.GeoJSON();
var features_carreteras_3 = format_carreteras_3.readFeatures(json_carreteras_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_carreteras_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carreteras_3.addFeatures(features_carreteras_3);
var lyr_carreteras_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_carreteras_3, 
                style: style_carreteras_3,
                interactive: true,
                title: '<img src="styles/legend/carreteras_3.png" /> carreteras'
            });
var format_intersturstico_4 = new ol.format.GeoJSON();
var features_intersturstico_4 = format_intersturstico_4.readFeatures(json_intersturstico_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_intersturstico_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersturstico_4.addFeatures(features_intersturstico_4);
var lyr_intersturstico_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_intersturstico_4, 
                style: style_intersturstico_4,
                interactive: true,
                title: '<img src="styles/legend/intersturstico_4.png" /> interés turístico'
            });
var format_gasolineras_5 = new ol.format.GeoJSON();
var features_gasolineras_5 = format_gasolineras_5.readFeatures(json_gasolineras_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_gasolineras_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gasolineras_5.addFeatures(features_gasolineras_5);
var lyr_gasolineras_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gasolineras_5, 
                style: style_gasolineras_5,
                interactive: true,
                title: '<img src="styles/legend/gasolineras_5.png" /> gasolineras'
            });
var format_restaurantes_6 = new ol.format.GeoJSON();
var features_restaurantes_6 = format_restaurantes_6.readFeatures(json_restaurantes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_restaurantes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurantes_6.addFeatures(features_restaurantes_6);
var lyr_restaurantes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_restaurantes_6, 
                style: style_restaurantes_6,
                interactive: true,
                title: '<img src="styles/legend/restaurantes_6.png" /> restaurantes'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_provinciatarragona_1.setVisible(true);lyr_priorat_2.setVisible(true);lyr_carreteras_3.setVisible(true);lyr_intersturstico_4.setVisible(true);lyr_gasolineras_5.setVisible(true);lyr_restaurantes_6.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_provinciatarragona_1,lyr_priorat_2,lyr_carreteras_3,lyr_intersturstico_4,lyr_gasolineras_5,lyr_restaurantes_6];
lyr_provinciatarragona_1.set('fieldAliases', {'fid': 'fid', 'NATLEVNAME': 'NATLEVNAME', 'NAMEUNIT': 'NAMEUNIT', });
lyr_priorat_2.set('fieldAliases', {'fid': 'fid', 'INSPIREID': 'INSPIREID', 'NATIONALCO': 'NATIONALCO', 'COUNTRY': 'COUNTRY', 'NATLEV': 'NATLEV', 'NATLEVNAME': 'NATLEVNAME', 'LEGSTATUS': 'LEGSTATUS', 'ACCURACY': 'ACCURACY', 'NAME_BOUND': 'NAME_BOUND', 'DATE_BOUND': 'DATE_BOUND', 'URL_RESOUR': 'URL_RESOUR', });
lyr_carreteras_3.set('fieldAliases', {'fid': 'fid', 'claseD': 'claseD', 'nombre': 'nombre', });
lyr_intersturstico_4.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'description': 'description', });
lyr_gasolineras_5.set('fieldAliases', {'fid': 'fid', 'servicioD': 'servicioD', });
lyr_restaurantes_6.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'tipology': 'tipology', 'stars': 'stars', });
lyr_provinciatarragona_1.set('fieldImages', {'fid': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'NAMEUNIT': 'TextEdit', });
lyr_priorat_2.set('fieldImages', {'fid': 'TextEdit', 'INSPIREID': 'TextEdit', 'NATIONALCO': 'TextEdit', 'COUNTRY': 'TextEdit', 'NATLEV': 'TextEdit', 'NATLEVNAME': 'TextEdit', 'LEGSTATUS': 'TextEdit', 'ACCURACY': 'TextEdit', 'NAME_BOUND': 'TextEdit', 'DATE_BOUND': 'DateTime', 'URL_RESOUR': 'TextEdit', });
lyr_carreteras_3.set('fieldImages', {'fid': 'TextEdit', 'claseD': 'TextEdit', 'nombre': 'TextEdit', });
lyr_intersturstico_4.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', });
lyr_gasolineras_5.set('fieldImages', {'fid': 'TextEdit', 'servicioD': 'TextEdit', });
lyr_restaurantes_6.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'tipology': 'TextEdit', 'stars': 'TextEdit', });
lyr_provinciatarragona_1.set('fieldLabels', {'fid': 'no label', 'NATLEVNAME': 'no label', 'NAMEUNIT': 'no label', });
lyr_priorat_2.set('fieldLabels', {'fid': 'no label', 'INSPIREID': 'no label', 'NATIONALCO': 'no label', 'COUNTRY': 'no label', 'NATLEV': 'no label', 'NATLEVNAME': 'no label', 'LEGSTATUS': 'no label', 'ACCURACY': 'no label', 'NAME_BOUND': 'no label', 'DATE_BOUND': 'no label', 'URL_RESOUR': 'no label', });
lyr_carreteras_3.set('fieldLabels', {'fid': 'no label', 'claseD': 'inline label', 'nombre': 'inline label', });
lyr_intersturstico_4.set('fieldLabels', {'fid': 'no label', 'name': 'inline label', 'description': 'inline label', });
lyr_gasolineras_5.set('fieldLabels', {'fid': 'no label', 'servicioD': 'inline label', });
lyr_restaurantes_6.set('fieldLabels', {'fid': 'no label', 'name': 'inline label', 'tipology': 'inline label', 'stars': 'inline label', });
lyr_restaurantes_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});