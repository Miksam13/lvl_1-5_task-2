"use strict";
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === undefined)
            return 2022;
        if (typeof elem === "string")
            return +elem || "2022";
        if (typeof elem.cvalue === "object")
            return summ(elem.cvalue);
        return elem.cvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] == "number") {
            sum += x[i];
        }
    }
    return summ;
}
//# sourceMappingURL=index.js.map