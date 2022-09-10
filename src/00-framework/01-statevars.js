Object.defineProperties(window, {
	V: {
		get: function() {
			return State.variables;
		},
		set: function(arg){
			State.variables.v = arg
		}
	},

	T: {
		get: function() {
			return State.temporary;
		},
		set: function(arg){
			State.temporary.t = arg
		}
	},

	S: {
		get: function(){
			return setup
		}
	},
});

