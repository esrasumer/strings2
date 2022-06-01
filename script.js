// Demo : Strings

let sentence = " The quick brown fox jumps - over the lazy dog. ";

let url = "http://www.w3schools.com/js/js_strings.asp JavaScript strings example";


// cümle kaç harften oluşuyor?

console.log(sentence.length);

// kaç kelimeden oluşuyor?

console.log(sentence.trim().split(' ').length);

// tüm cümleyi küçük harfe çevir

console.log(sentence.toLowerCase());

// tüm cümleyi büyük harfe çevir

console.log(sentence.toUpperCase());

// Cümlenin başındaki ve sonundaki boşlukları sil

console.log(sentence.trim());

// '-' karakterini silin

console.log(sentence.replace('-', ''));

// url hangi protocol'u kullanmaktadır ? (http, https)

console.log(url.startsWith('http'));

console.log(url.startsWith('https'));

// url '.com 'ifadesini iiçeriyor mu?

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

//url string ifadesini geçerli bir url olarak düzenleyiniz

console.log(url.toLocaleLowerCase()
    .replace(' ', '-')
    .replace(/j/g, 'J')
    .replace(/a/g, 'A')
    .replace(/h/g, 'H')
    .replace(/t/g, 'T')
    .replace(/p/g, 'P')
    .replace(/s/g, 'S')
);