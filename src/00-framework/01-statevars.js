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
	
	A: {
		get: function() {
			return Avatars
		}
	},
	D:{
		get:function(){
			return G.data
		}
	},

	F:{
		get:function(){
			return G.functions
		}
	},
	
	Hairs:{
		get: function(){
			return Avatars.Hairs
		}
	},
	Emote:{
		get:function(){
			return Avatars.Emote
		}
	},
	AvItems:{
		get:function(){
			return Avatars.AvItems
		}
	},
	Races:{
		get: function(){
			return G.Races
		}
	},
	Chara:{
		get: function(){
			return G.Chara
		}
	},
	lang:{
		get: function(){
			return G.config.language
		},
		set: function(str){
			G.config.language = str
		}
	},
	Closet:{
		get: function(){
			return G.Closet
		}
	}
});

