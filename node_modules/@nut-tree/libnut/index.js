const libnut = (() => {
	switch (process.platform) {
		case 'win32':
			return require(`@nut-tree/libnut-win32`);
		case 'linux':
			return require(`@nut-tree/libnut-linux`);
		case 'darwin':
			return require(`@nut-tree/libnut-darwin`);
	}
})();

module.exports = libnut;
