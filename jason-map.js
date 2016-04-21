var geoJSONFeatures = [];

for (i in points) {
  if(!points.hasOwnProperty(i)) { continue; }
  var p = points[i];
  geoJSONFeatures.push({
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [p.loc.lat, p.loc.lng]
      },
      "properties": {
          "title": p.loc.name,
          "marker-symbol": "marker"
      }
  });
}
