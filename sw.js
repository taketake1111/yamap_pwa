let marker = null
let first = true

navigator.geolocation.watchPosition(function(pos){

    const lat = pos.coords.latitude
    const lon = pos.coords.longitude

    if(marker == null){
        marker = L.marker([lat, lon]).addTo(map)
    }else{
        marker.setLatLng([lat, lon])
    }

    // 最初の1回だけ中心移動
    if(first){
        map.setView([lat, lon], 16)
        first = false
    }

})
