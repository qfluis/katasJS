const domainName = (url) => {
    let i = url.indexOf('//');
    if (i !== -1) url = url.substring(i+2, url.length-1);
    
    i = url.indexOf('/');
    if (i !== -1) url = url.substring(0, i);

    arrUrl = url.split('.');

    resultado = arrUrl[0];
    for (let i = 1; i < arrUrl.length; i++) {
        if (arrUrl[i].length > resultado.length) resultado = arrUrl[i];
    }

    return resultado;
}

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));

/* OTROS RESULTADOS (FALLARÍA en el caso de introducir ftp. o varios subdominios diferentes a www )
function domainName(url){
  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
}
*/