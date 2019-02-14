var THREEx = THREEx || {}

THREEx.VideoTexture	= function(url){
	// create the video element
	// var video	= document.createElement('video');
	var video	= document.getElementById('video');
	video.width	= 320;
	video.height	= 1;
	video.autoplay	= true;
	video.loop	= true;
	// video.src	= url;
	// expose video as this.video
	this.video	= video;

	// create the texture
	var texture	= new THREE.Texture( video );
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    // expose texture as this.texture
	this.texture	= texture

	/**
	 * update the object
	 */
	this.update	= function(){
		if( video.readyState !== video.HAVE_ENOUGH_DATA )	return;
		texture.needsUpdate	= true;
	}

	/**
	 * destroy the object
	 */
	this.destroy	= function(){
		video.pause()
	}
}