/*:
*@param XAxis
*@desc This is the value of X.
*@default 90
*
*@param Running
*@desc Is the car running?
*@default true
*
*@param CharacterName
*@desc What is your characters name?
*@default Harold
*/

var params = PluginManager.parameters('tutorial');
var x_axis_value = Number(params['XAxis'] || 90);
var isRunning = Boolean(params['Running'] || true);
var charName = String(params['CharacterName'] || Harold);