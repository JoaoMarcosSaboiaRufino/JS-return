async function carregar() {
    let array = await fetch('https://armory.warmane.com/api/character/Cybercryx/Icecrow/summary');
    let array2 = await array.json();
    console.log(array2);
}

carregar();