function fruit(){
  var buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log(buah);
  var buahpop = buah.pop();
  console.log(buahpop);

  var buahshift = buah.shift();
  console.log(buahshift);
  return buah;
}
console.log(fruit());
