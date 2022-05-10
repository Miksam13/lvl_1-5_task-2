"use strict";

interface Obj {
  [a: string]: { cvalue: number | undefined | string | Obj } | undefined;
}

function summ(a: Obj): number {
  const x: number[] = Object.keys(a).map((k) => {
    const elem = a[k];
    if (typeof elem?.cvalue === "undefined") return 2022;
    if (typeof elem.cvalue === "string") return +elem.cvalue || 2022;
    if (typeof elem.cvalue === "number") return elem.cvalue;
    if (typeof elem.cvalue === "object") return summ(elem.cvalue);
    return +elem.cvalue;
  });
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

console.log(
  summ({
    hello: { cvalue: 1 },
    world: { cvalue: { yay: { cvalue: "2" } } },
  })
);
