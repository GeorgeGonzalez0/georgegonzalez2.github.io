const URL = "https://gateway.marvel.com:443/v1/public/characters";
var xhttp = null

const publicKey = "ea1bdd33bc6e4f522865590d3437966a";
const privateKey = "d64650e4aae877bc3c07b56d1636664a910bd2e7";

// Generar ts
var ts = new Date().getTime().toString();
// Generar hash md5
var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

var params = {
    ts: ts,
    apikey: publicKey,
    hash: hash,
    limit: 10  // Por ejemplo, obtener los primeros 10 personajes
};


function conectar(personaj