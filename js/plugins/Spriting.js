/*:
* @param BookParticle
* @desc The image that you are using as a book particle.
* @default BookParticle
*/

var params = PluginManager.parameters('Spriting');
var picture_name = String(params['BookParticle'] || "BookParticle");

var alias_st_create = Scene_Title.prototype.create;
var alias_st_update = Scene_Title.prototype.update;

Scene_Title.prototype.particle;

Scene_Title.prototype.create = function() {
	alias_st_create.call(this);
	// create particle here
	this.create_particle();
};

Scene_Title.prototype.create_particle = function() {
	this.particle = new TilingSprite();
	this.particle.bitmap = ImageManager.loadPicture(picture_name);
	this.particle.move(0,0, Graphics.width, Graphics.height);
	this.addChild(this.particle); //the image will not show without this
	
};

Scene_Title.prototype.update = function() {
	alias_st_update.call(this);
	this.particle.opacity = 150;
	this.particle.origin.y += 1;
};