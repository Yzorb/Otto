import Otto from './Structures/Clients/Otto.js';
import config from './utils/helpers/config.js';

config.EnableLogger();
config.DotEnvConfig({
	debug: true,
});

const otto = new Otto();

otto.loadListeners();

otto.connect();
