        // Known issues: Every new map drag should return page 1 results even if on
        // page 2. Also, selecting a state goes to a state search. Map moves are
        // tracked on state moves but not updated according to the bounding box.
        // Finally, every change on #pharmacies_form inputs should trigger change()
        $j('#pharmacies_form').change(function(){
          if($j('#maptastic_mode').is(':checked')) {
            google.maps.event.addListener(map, 'idle', function() {
              $j.ajax({
                url: "/pharmacies?&min_lat=" + map.getBounds().getSouthWest().lat() +
                     "&max_lat=" + map.getBounds().getNorthEast().lat() +
                     "&min_lng=" + map.getBounds().getSouthWest().lng() +
                     "&max_lng=" + map.getBounds().getNorthEast().lng() +
                     $j('#pharmacies_form').serialize(),
                dataType: 'script',
                success: function() {
                  for (var i = 0; i < markersArray.size(); i++) {
                    markersArray[i].setMap(null);
                  }
                  markersArray.length = 0;
                  for(var i in pharmacies) {
                    var myLatLng = new google.maps.LatLng(pharmacies[i]['lat'], pharmacies[i]['lon']);
                    var marker = new google.maps.Marker({
                      position: myLatLng,
                      map: map,
                      icon: pharmacies[i]['h24'] ? '/images/mappin-24.png' : '/images/mappin.png',
                      title: pharmacies[i]['name']
                    });
                    marker.set('html', pharmacies[i]['html']);
                    google.maps.event.addListener(marker, 'click', function() {
                      infoWindow.setContent(this.html);
                      infoWindow.open(map, this);
                    });
                    markersArray.push(marker);
                  }
                  setHome(markersArray, map);
                }
              }).change();
            });
          } else {
            google.maps.event.clearListeners(map, 'idle');
          }
});