// Layer Peta
	var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '©️ OpenStreetMap'
	});
 
// Basemap
var map = L.map('mapid', {
    center: [-7.810299411031081, 110.41085293536831],
    zoom: 14,
    layers: [osm]
});
function onMapClick(e) {
    L.popup()
    .setLatLng(e.latlng)
    .setContent('Koordinat disini ' + e.latlng.toString())
    .openOn(map);
    }
    
    map.on('click', onMapClick);

var marker = L.marker([-7.810305, 110.410838]).bindPopup("<p><b>Rumah Riko</b><br>Tegalsari RT 10, Jl. Jomblangan No.64, Sorowajan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198</br></p> <img src='gambar/rumah.jpg' height='120px' width='150px'>").addTo(map);

// Layer Group Marking
var petshop = L.icon({
    iconUrl:'./gambar/petshop.ico',
    iconSize:[50,50],
    });

//JCO JCI
L.marker([-7.812054, 110.409623],{icon:petshop}).bindPopup('<b>J.CO JCI Petshop</b><br>Petshop, Jalan Wonosari km 6 No 6, Sorowajan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198' ).addTo(map);

//BLOK O
L.marker([-7.798724687238739, 110.41565017098287],{icon:petshop}).bindPopup('<b>Blok O Petshop</b><br>Petshop, Jl. Maguwo No.547, Karang Janbe, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198').addTo(map);

//POPOKI
L.marker([-7.799150211590988, 110.4005990875871],{icon:petshop}).bindPopup('<b>Popoki Petshop</b><br>Petshop, Jomblangan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198').addTo(map);

//MOCHI MOCHI
L.marker([-7.822205175308919, 110.4169915891699],{icon:petshop}).bindPopup('<b>Mochi Mochi Petshop</b><br>Petshop, Jl. Gilang Raya No.9, Wiyoro, Baturetno, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55197').addTo(map);

//ZIE
L.marker([-7.803734648061736, 110.42045466001024],{icon:petshop}).bindPopup('<b>Zie Petshop</b><br>Petshop, Jl. Amat Wahid No.160B, Pelem, Baturetno, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55197').addTo(map);

//LING LING
L.marker([-7.80266, 110.420223],{icon:petshop}).bindPopup('<b>Ling Ling Petshop</b><br>Petshop, Jl. Raya Berbah No.323, Pelem Lor, Baturetno, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55197').addTo(map);

//BELINDA
L.marker([-7.794690085695079, 110.40976068943996],{icon:petshop}).bindPopup('<b>Belinda Petshop</b><br>Petshop, Jl. Raya Janti No. 89 Yogyakarta, RT.04/RW.19, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198').addTo(map);

//KANDANGIJO
L.marker([-7.790930456531348, 110.41001180475548],{icon:petshop}).bindPopup('<b>Kandangijo Petshop</b><br>Petshop, Jl. Raya Janti No.70, Jaranan, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198').addTo(map);

//BERZA
L.marker([-7.795015, 110.397982],{icon:petshop}).bindPopup('<b>Berza Petshop</b><br>Petshop, Jl. Arjuna, Tegal Tanda, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198').addTo(map);

//1542
L.marker([-7.802112719819043, 110.40216583345618],{icon:petshop}).bindPopup('<b>1542 Petshop</b><br>Petshop, Jl. Raya Janti No.31, Jomblangan, Caturtunggal, Kec. Depok, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55281').addTo(map);

//KEi-Cathotel
L.marker([-7.80290476419427, 110.4123654159876],{icon:petshop}).bindPopup('<b>Kei Petshop</b><br>Petshop, Jl. Belibis Jl. Wonocatur No.563, RT.13/RW.26, Wonocatur, Banguntapan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198').addTo(map);