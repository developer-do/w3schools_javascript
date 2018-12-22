"use strict";
var obj = { get x() { return 0 } };
console.log(obj);
console.log(obj.x = 3.14);