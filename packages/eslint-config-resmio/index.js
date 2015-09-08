const reactRules = require('./react');
const base = require('./base');

// you could do this all at once if you wanted to look cool
var filename = resolve.sync('resmio-style/linters/.eslintrc');
var data = fs.readFileSync(filename, {encoding: 'utf-8'});
var dataWithoutComments = stripComments(data);
var parsed = JSON.parse(dataWithoutComments);

// manually merge in React rules
eslintrc.plugins = reactRules.plugins;
Object.keys(reactRules.rules).forEach(function assignRule(ruleId) {
  eslintrc.rules[ruleId] = reactRules.rules[ruleId];
});

module.exports = eslintrc;
