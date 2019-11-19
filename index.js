function areBothTrue(bool1, bool2) {
  if (bool1 && bool2){
    return true
  }
  else{
    return false
  }
}

console.log(areBothTrue(true, false), '<-- should be false');
console.log(areBothTrue(true, true), '<-- should be true');