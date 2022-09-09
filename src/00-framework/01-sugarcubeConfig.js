Config.history.controls = false;

Config.history.maxStates = 1;

//State.prng.init()

window.versionUpdateCheck = true;
window.saveUpdateCheck = true;

Config.saves.slots = 9;

Save.onLoad.add(function(save) {
	window.onLoadUpdateCheck = true;
});

let isReloading = true;
let pageLoading = false;

Save.onLoad.add(function(save) {
	pageLoading = true
	//LoadCharacters()
});

Save.onSave.add(function(save) {
	//new Wikifier(null, '<<updateFeats>>');
	//prepareSaveDetails();
});

Config.saves.id = "EWA";

/*LinkNumberify and images will enable or disable the feature completely*/
/*debug will enable or disable the feature only for new games*/
window.StartConfig = {
	"debug": false,
	"version": "0.0.3",
}

/* convert version string to numeric value */
let tmpver = StartConfig.version.replace(/[^0-9.]+/g, "").split(".");
window.StartConfig.version_numeric = tmpver[0]*1000000 + tmpver[1]*10000 + tmpver[2]*100 + tmpver[3]*1;

Config.saves.autosave = ["bookmark", "autosave", "eventend"];

Config.saves.isAllowed = function () {
	if (tags().includes("nosave")) {
		return false;
	}
	return true;
};

console.log("Game Version:", StartConfig.version);

l10nStrings.errorTitle = StartConfig.version + " Error";
Config.saves.tryDiskOnMobile = true

// delete parser that adds unneeded line breaks -ng
Wikifier.Parser.delete("lineBreak");


