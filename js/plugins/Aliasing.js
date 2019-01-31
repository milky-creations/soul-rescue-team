var alias_protype_createCommand_window = Scene_Title.prototype.createCommandWindow;

Scene_Title.prototype.createCommandWindow = function() {
    alias_protype_createCommand_window.call(this); //call original method
	this._commandWindow.opacity = 0;
};