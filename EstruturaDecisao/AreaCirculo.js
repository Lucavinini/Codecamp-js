
const raio = 2.0;
const pi =  3.14159;
const area = pi*(raio*raio);

const areafixada = area.toFixed(4);
console.log(areafixada);

if(raio == 2.0){
    console.log(`A=${areafixada}`);
}