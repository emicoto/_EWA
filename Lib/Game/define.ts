Object.defineProperty(window, "G", {
	value: {
		config: { language: "CN" },
		functions: {},
	},
});

G.functions.setV = function (props, value) {
	const ISOBJ = Object.prototype.toString.call(value) === "[object Object]";
	console.log(Object.is(V[props], undefined));
	if (Object.is(V[props], undefined)) {
		if (ISOBJ) {
			if (!V[props]) V[props] = {};

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
