/**
 * 
 * @param {string | string[]} CN 
 * @param {string | string[]} EN 
 * @returns {string | string[]}
 */
window.lan = function(CN, EN) {
	if(Array.isArray(CN) && !EN){
		if(CN.length == 1){
			EN = CN[0]
			CN = CN[0]
		}
		else{
			EN = CN[1]
			CN = CN[0]			
		}
	}
	if (G.config.language == "CN") return CN;
	if (G.config.language == "EN") return EN;
}

Object.defineProperties(window, {
    A:{
        get:function(){
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
})