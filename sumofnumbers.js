const numList = [1, 2, 3, 4];

function sumFor(numb) {
  let total = 0;
  for (let i = 0; i < numb.length; i++) {
    total += num;
  }
  return total;
}

console.log(sumFor(numList));

function sumWhile(numb) {
  let total = 0;
  let i = 0;
  while (i < numb.length) {
    total += numb[i];
    i++;
  }
  return total;
}

console.log(sumWhile(numList));

function sumRecursion(numb) {
  if (numb.length === 0) {
    return 0;
  }
  return numb[0] + sumRecursion(numb.slice(1, numb.length));
}

console.log(numRecursion(numList));

function sumTheSimpleWay(numb) {
  _.reduce(numb, function(memo, num){return memo + num; }, 0);
}

console.log(sumTheSimpleWay(numList));