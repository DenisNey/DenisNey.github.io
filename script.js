// Crează harta și stabilește centrul și nivelul de zoom
var map = L.map('mapid').setView([51.505, -0.09], 4);

// Adaugă stratul de hărți pentru Europa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Datele cu coordonatele și capitalele țărilor Europei
var countriesData = [
    { name: 'Albania', capital: 'Tirana', coordinates: [41.3275, 19.8187] },
    { name: 'Andorra', capital: 'Andorra la Vella', coordinates: [42.5063, 1.5218] },
    { name: 'Austria', capital: 'Viena', coordinates: [48.2082, 16.3738] },
    { name: 'Belarus', capital: 'Minsk', coordinates: [53.9045, 27.5615] },
    { name: 'Belgia', capital: 'Bruxelles', coordinates: [50.8503, 4.3517] },
    { name: 'Bosnia și Herțegovina', capital: 'Sarajevo', coordinates: [43.8563, 18.4131] },
    { name: 'Bulgaria', capital: 'Sofia', coordinates: [42.6977, 23.3219] },
    { name: 'Cehia', capital: 'Praga', coordinates: [50.0755, 14.4378] },
    { name: 'Croația', capital: 'Zagreb', coordinates: [45.8150, 15.9819] },
    { name: 'Cipru', capital: 'Nicosia', coordinates: [35.1856, 33.3823] },
    { name: 'Danemarca', capital: 'Copenhaga', coordinates: [55.6761, 12.5683] },
    { name: 'Estonia', capital: 'Tallinn', coordinates: [59.4370, 24.7536] },
    { name: 'Finlanda', capital: 'Helsinki', coordinates: [60.1695, 24.9354] },
    { name: 'Franța', capital: 'Paris', coordinates: [48.8566, 2.3522] },
    { name: 'Germania', capital: 'Berlin', coordinates: [52.5200, 13.4050] },
    { name: 'Grecia', capital: 'Atena', coordinates: [37.9838, 23.7275] },
    { name: 'Ungaria', capital: 'Budapesta', coordinates: [47.4979, 19.0402] },
    { name: 'Islanda', capital: 'Reykjavik', coordinates: [64.1466, -21.9426] },
    { name: 'Irlanda', capital: 'Dublin', coordinates: [53.3498, -6.2603] },
    { name: 'Italia', capital: 'Roma', coordinates: [41.9028, 12.4964] },
    { name: 'Kosovo', capital: 'Priștina', coordinates: [42.6629, 21.1655] },
    { name: 'Letonia', capital: 'Riga', coordinates: [56.9496, 24.1052] },
    { name: 'Liechtenstein', capital: 'Vaduz', coordinates: [47.1410, 9.5209] },
    { name: 'Lituania', capital: 'Vilnius', coordinates: [54.6872, 25.2797] },
    { name: 'Luxemburg', capital: 'Luxemburg', coordinates: [49.6116, 6.1319] },
    { name: 'Macedonia de Nord', capital: 'Skopje', coordinates: [41.9973, 21.4280] },
    { name: 'Malta', capital: 'Valletta', coordinates: [35.8989, 14.5146] },
    { name: 'Moldova', capital: 'Chișinău', coordinates: [47.0167, 28.8497] },
    { name: 'Monaco', capital: 'Monaco', coordinates: [43.7384, 7.4246] },
    { name: 'Muntenegru', capital: 'Podgorica', coordinates: [42.4304, 19.2594] },
    { name: 'Țările de Jos', capital: 'Amsterdam', coordinates: [52.3676, 4.9041] },
    { name: 'Norvegia', capital: 'Oslo', coordinates: [59.9139, 10.7522] },
    { name: 'Polonia', capital: 'Varșovia', coordinates: [52.2297, 21.0122] },
    { name: 'Portugalia', capital: 'Lisabona', coordinates: [38.7223, -9.1393] },
    { name: 'România', capital: 'București', coordinates: [44.4268, 26.1025] },
    { name: 'Rusia', capital: 'Moscova', coordinates: [55.7558, 37.6176] },
    { name: 'San Marino', capital: 'San Marino', coordinates: [43.9424, 12.4578] },
    { name: 'Serbia', capital: 'Belgrad', coordinates: [44.7866, 20.4489] },
    { name: 'Slovacia', capital: 'Bratislava', coordinates: [48.1486, 17.1077] },
    { name: 'Slovenia', capital: 'Ljubljana', coordinates: [46.0569, 14.5058] },
    { name: 'Spania', capital: 'Madrid', coordinates: [40.4168, -3.7038] },
    { name: 'Suedia', capital: 'Stockholm', coordinates: [59.3293, 18.0686] },
    { name: 'Elveția', capital: 'Bern', coordinates: [46.9479, 7.4446] },
    { name: 'Turcia', capital: 'Ankara', coordinates: [39.9334, 32.8597] },
    { name: 'Ucraina', capital: 'Kiev', coordinates: [50.4501, 30.5234] },
    { name: 'Regatul Unit', capital: 'Londra', coordinates: [51.5074, -0.1278] },
    { name: 'Vatican', capital: 'Vatican', coordinates: [41.9029, 12.4534] }
];

// Adaugă poligoane pentru fiecare țară
countriesData.forEach(country => {
    L.marker(country.coordinates)
        .bindPopup(country.capital + ', ' + country.name)
        .addTo(map);
});
