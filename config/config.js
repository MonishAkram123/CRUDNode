const config = require('./environment.json');

var defaultEnv = "development";
var currentEnv = process.env.NODE_ENV || defaultEnv;

var parentConfig = config[defaultEnv];
var currentConfig = config[currentEnv];
var finalConfig = {};

for(key in parentConfig) {
  if(currentConfig[key])
    finalConfig[key] = currentConfig[key];
  else
    finalConfig[key] = parentConfig[key];
}

global.gConfig = finalConfig;

console.log(`Global Configuration: ${JSON.stringify(global.gConfig)}`);
