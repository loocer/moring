export default  {
    id:Date.parse(new  Date())+'',
    entityMap:new Map(),
    playerId:'zzw',
    allBleed:100,
    pColor:{
        'p1':'#00ffff',
        'p2':'#0000ff'
    },
    buttonStatus:{
        addHero:false
    },

   

    playStatusObj:{
        doingIndex:1//打开页面1，观察。2：游戏
    },
	
	box:null,
    userId:Date.parse(new  Date())+'',
    models:new Map(),
    // realBox:null,
    // box4:null,
    camera:null,
    bestGround:250,
   
    c1:null,
    c2:null,
    walkingDirection:1,//1：up,2:down,3:left,4:right
    netPlayers:null,
    isOutGropund:true,
    hitResult:new Laya.HitResult(),
    target:{
        x:0,
        y:0
    },
    // roteGun:{
    //     x:0,
    //     y:0
    // },
    // roteGunback:{
    //     x:0,
    //     y:0
    // },
    // roteGunTemp:{
    //     x:0,
    //     y:0
    // },
    // takeSpeed:{
    // 	z:0,
    // 	x:0,
    // 	y:0
    // },
    // roteLeftFlag:false,
    // roteRightFlag:false,
    heroMap:new Map(),
    // operationYype:1,//1:虚拟手柄 2:屏幕方向
    loadIndex:0,
    // fireOnOff:false,
    msType:'move',
    // updates:[],
    // firs:[],
    loadingElse:[
         ['adds','res/adds.png'],
         ['addsStop','res/add-stop.png'],
         ['addsStart','res/add-start.png'],
        // ['tdf','https://xuxin.love/img/fly/u=3199317496,3290195022&fm=26&gp=0.jpg'],
        // ['fire','https://xuxin.love/img/fly/fires.png'],
        // ['left','https://xuxin.love/img/fly/left.png'],
        // ['right','https://xuxin.love/img/fly/right.png'],
        // ['speed','https://xuxin.love/img/fly/speed.png'],
        // ['lessSpeed','https://xuxin.love/img/fly/lessSpeed.png'],
        // ['addSpeed','https://xuxin.love/img/fly/addSpeed.png']
    ],
    loadingSprite3D:[
        ['light','res/LayaScene_SampleScene/Directional Light.lh'],
        ['cube','res/LayaScene_SampleScene/Cube.lh'],
        ['camera','res/LayaScene_SampleScene/Main Camera.lh'],
        ['terrain','res/LayaScene_SampleScene/Terrain.lh'],

        // ['light','https://xuxin.love/img/fly/LayaScene/Conventional/light.lh'],
        // ['pler','https://xuxin.love/img/fly/LayaScene/Conventional/pler.lh'],
        // ['cube','https://xuxin.love/img/fly/LayaScene/Conventional/Sphere.lh'],
        // ['aum','https://xuxin.love/img/fly/LayaScene/Conventional/aum.lh'],
        // ['sun','https://xuxin.love/img/fly/LayaScene/Conventional/sun.lh'],
        // ['bullet','https://xuxin.love/img/fly/LayaScene/Conventional/b.lh'],

    ],
    getAngle:(x, y)=> {
        var l = Math.sqrt(x*x + y*y);
        var a = Math.acos(x/l);
        var ret = a * 180 / Math.PI; //弧度转角度，方便调试
        if (y < 0) {
            return 360 - ret;
        }
        return ret;
    }
}