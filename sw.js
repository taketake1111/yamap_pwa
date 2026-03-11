let marker = null;
let firstFix = true;

navigator.geolocation.watchPosition(function(position){

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // マーカー生成
    if(!marker){
        marker = L.marker([lat, lon]).addTo(map);
    }else{
        marker.setLatLng([lat, lon]);
    }

    // 最初の1回だけ地図を移動
    if(firstFix){
        map.setView([lat, lon], 16);
        firstFix = false;
    }

});
