window.EWA = {
	// In pseudo-load order
	/**
	 * Mini application reporter app
	 * helps get detailed error messages to devs
	 * {@link 01-error.js
	 */
	Errors: {},
	/**
	 * Registry of state schema, used for migrating Dol to new versions
	 * {@link init.js
	 */
	Versions: {},
	Perflog: {},

	/** Patch to make javascript execution more consistent (see comment below) */
	State: State,
	/** Patch to make javascript execution more consistent (see comment below) */
	setup: setup,
	/** Patch to make javascript execution more consistent (see comment below) */
	Wikifier: Wikifier,
}

/* Make each of these namespaces available at the top level as well */
window.defineGlobalNamespaces = (namespaces) => {
	Object.entries(namespaces).forEach(([name, namespaceObject]) => {
		try {
			if (window[name] && window[name] !== namespaceObject) {
				console.warn(`Attempted to set ${name} in the global namespace, but it's already in use. Skipping this assignment. Existing Object:`, window[name])
			} else {
				/* Make it more difficult to shadow/overwrite things (users can still Object.defineProperty if they really mean it) */
				Object.defineProperty(window, name, { value: namespaceObject, writeable: false });
			}
		} catch (e) {
			if (window[name] !== namespaceObject) {
				console.error(`Failed to setup global namespace object ${name}. Attempting to continue. Source Error:`, e);
			}
		}
	});
}
defineGlobalNamespaces(EWA);

