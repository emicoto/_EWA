'use strict';

Object.defineProperty(window, "G", {
  value: {
    config: { language: "CN" },
    functions: {}
  }
});

G.functions.setV = function(props, value) {
  const ISOBJ = Object.prototype.toString.call(value) === "[object Object]";
  console.log(Object.is(V[props], void 0));
  if (Object.is(V[props], void 0)) {
    if (ISOBJ) {
      if (!V[props])
        V[props] = {};
      Object.keys(value).forEach((v) => {
        V[props][v] = value[v];
      });
    }
    if (!ISOBJ) {
      V[props] = value;
    }
  }
};

$.getJSON("config.json", (data) => {
  if (data) {
    for (let i in data) {
      G.config[i] = data[i];
    }
    console.log("read config from local file:", data);
  }
});

window.clone = function(obj) {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Function
  if (obj instanceof Function) {
    copy = function() {
      return obj.apply(this, arguments);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
          if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
      }
      return copy;
  }

  throw new Error("Unable to copy obj as type isn't supported " + obj.constructor.name);
}