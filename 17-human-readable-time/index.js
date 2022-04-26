const humanReadable = (seconds) => {
    const horas = Math.floor(seconds / 3600);
    const minutos = Math.floor((seconds / 60) % 60);
    const segundos = seconds % 60;
    
    const h = (horas>9)?horas:"0"+horas;
    const m = (minutos>9)?minutos:"0"+minutos;
    const s = (segundos>9)?segundos:"0"+segundos;
    
    return `${h}:${m}:${s}`;
}

console.log(humanReadable(3720));

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


*/

/*
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}



*/