"use strict";
    
let constr = {

	_id: '',

	_canvas: '',

	_ctx: '',

	_canvasWidth: '',

	_canvasHeight: '',
    
	creatCanvas: function({id, width, height, bgColor, border}) {
       
        this._id = id;
       
        let canvas;
       
        if($("canvas").length && $("#"+id).length !== 0){
           canvas = document.getElementById(id);
        }  
        
        else{
           canvas = document.createElement('canvas');
        }
       
        let ctx = canvas.getContext('2d');
       	canvas.id = this._id;
       	canvas.setAttribute('width', width);
       	canvas.setAttribute('height', height);
       	canvas.style.border = border;
       	canvas.style.backgroundColor = bgColor;
       	document.body.appendChild(canvas);
       	this._canvas = canvas;
       	this._ctx = ctx;
       	this._canvasWidth = width;
       	this._canvasHeight = height;
       
    },

    getCanvas: function() {
    	return this._canvas;
    },

    getCtx: function() {
    	return this._ctx;
    }

}



