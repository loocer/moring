/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
var View=Laya.View;
var Dialog=Laya.Dialog;
var Scene=Laya.Scene;
var REG = Laya.ClassUtils.regClass;
export class levelUI extends Scene {
	constructor(){ 
		super();
	}
	createChildren() {
		super.createChildren();
		this.loadScene("test/level");
	}
}
REG("ui.test.levelUI",levelUI);