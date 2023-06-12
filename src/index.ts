import config from './utils/helpers/config.js';

config.EnableLogger();
config.DotEnvConfig({
    debug: true,
    override: true
});