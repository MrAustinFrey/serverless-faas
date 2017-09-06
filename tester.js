"use strict"

let Faas = require("./faas");

console.log(new Faas({pluginManager: { setProvider:()=>{}, addPlugin: function(){} } },{}));


