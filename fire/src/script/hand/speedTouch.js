 import utl from "../utl.js"
 let rots = []

 export default class newtach {
   constructor() {
     this.status = 0
     this.x = 0
     this.y = 0
     this.move = null
     this.startPoint = null
     this.endPoint = null
     this.sp = new Laya.Sprite();
     this.point = new Laya.Vector2();
     this.startP = null
     this.evList = this.eventInt()
     Laya.stage.addChild(this.sp);
   }
   eventInt(){
     let that = this
      let eventList = [{
         checkPotion:{
           x:200,
           y:Laya.stage.height - 200,
           width:150,
           height:150
         },
         callBack:()=>{
           return that.addpBack()
         }
      },
      {
         checkPotion:{
           x:0,
           y:0,
           width:400,
           height:400
         },
         callBack:()=>{
           return that.changeCamerBack()
         }
      }
      ]
      return eventList
   }
   addpBack(){
     console.log(454545)
     let msg = {
       userId: 'zzw',
       actionName:'addHero',
     }
     utl.socket.emit('123456', msg);

   }
   eventCheck(){
     let {evList} = this
     for(let item of evList){
       let checkPotion = item.checkPotion
       if (this.startPoint.x - this.endPoint.x < 10 &&
       this.startPoint.y - this.endPoint.y < 10 &&
       this.endPoint.x < checkPotion.x+checkPotion.width &&
       this.endPoint.x > checkPotion.x &&
       this.endPoint.y < checkPotion.y+checkPotion.height&&
       this.endPoint.y > checkPotion.y
       ){
         item.callBack()
         return
       }
     }
     this.changePointBack()
   }

   changeCamerBack(){
       let p = this.startPoint
       let x = p.x / 400 * 500
       let y = p.y / 400 * 500
       utl.camera.transform.position = new Laya.Vector3(-x, 30, 500 - y)
   }
   changePointBack(){
       let p = this.startPoint
       let p2 = this.trsV2ToV3(p)
       if (
         p2.x < 0 &&
         p2.z > 0 &&
         p2.x > -500 &&
         p2.z < 500) {
         if (
           Math.abs(this.startPoint.x - this.endPoint.x) < 10 &&
           Math.abs(this.startPoint.y - this.endPoint.y) < 10
         ) {
           let x = ~~p2.x
           let y = ~~p2.z

           // let heros = []
           // for (let hero of utl.entityMap.keys()) {
           //   heros.push({
           //     id: hero,
           //     coordinate: {
           //       x: -x,
           //       y
           //     }
           //   })
           // }
           for(let r of rots){
              r.coordinate = {
                 x: -x,
                 y
               }
           }
           let msg = {
             userId: 'zzw',
             actionName:'moveGroup',
             heros:rots
           }
           utl.socket.emit('123456', msg);
         }
       }
   }
   reset() {
      if (!this.startPoint) {
        return
      }
      if (!this.endPoint) {
        return
      }
      if (
           Math.abs(this.startPoint.x - this.endPoint.x) < 10 &&
           Math.abs(this.startPoint.y - this.endPoint.y) < 10
      ){
        this.eventCheck()
      // }

     // if (this.startPoint.x - this.endPoint.x < 10 &&
     //   this.startPoint.y - this.endPoint.y < 10 &&
     //   this.endPoint.x < 400 &&
     //   this.endPoint.y < 400
     // ) {
     //   let p = this.startPoint
     //   let x = p.x / 400 * 500
     //   let y = p.y / 400 * 500
     //   utl.camera.transform.position = new Laya.Vector3(-x, 30, 500 - y)
     // } else {
     //   let p = this.startPoint
     //   let p2 = this.trsV2ToV3(p)
     //   if (
     //     p2.x < 0 &&
     //     p2.z > 0 &&
     //     p2.x > -500 &&
     //     p2.z < 500) {
     //     if (
     //       Math.abs(this.startPoint.x - this.endPoint.x) < 10 &&
     //       Math.abs(this.startPoint.y - this.endPoint.y) < 10
     //     ) {
     //       let x = ~~p2.x
     //       let y = ~~p2.z

     //       // let heros = []
     //       // for (let hero of utl.entityMap.keys()) {
     //       //   heros.push({
     //       //     id: hero,
     //       //     coordinate: {
     //       //       x: -x,
     //       //       y
     //       //     }
     //       //   })
     //       // }
     //       for(let r of rots){
     //          r.coordinate = {
     //             x: -x,
     //             y
     //           }
     //       }
     //       let msg = {
     //         userId: 'zzw',
     //         heros:rots
     //       }
     //       utl.socket.emit('123456', msg);
     //     }
     //   }

     }
     this.startPoint = null
     this.endPoint = null
   }
   drawSelect(p) {
     if (this.status == 0) {
       this.startPoint = p
       this.status = 1
       this.startP = this.trsV2ToV3(p)
       return
     }
     if (this.status == 1) {
       this.endPoint = p
       let p1 = this.startPoint
       if (
         Math.abs(this.startPoint.x - this.endPoint.x) < 10 &&
         Math.abs(this.startPoint.y - this.endPoint.y) < 10
       ) {

       } else {
         this.sp.graphics.clear()
         this.sp.graphics.drawLines(p1.x, p1.y, [0, 0, p.x - p1.x, 0, p.x - p1.x, p.y - p1.y, 0, p.y - p1.y, 0, 0], "#ff0000", 5);
         this.selectAll(p)
       }

     }

   }
   trsV2ToV3(p) {

     // let point =  touch.position
     this._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
     let outs = [];
     //????????????
     utl.camera.viewportPointToRay(p, this._ray);
     //???????????????????????????
     utl.newScene.physicsSimulation.rayCastAll(this._ray, outs);
     //?????????????????????
     if (outs.length !== 0) {

       for (let i = 0; i < outs.length; i++) {
         if (outs[i].collider.owner.name == "plane") {
           return new Laya.Vector3(outs[0].point.x, outs[0].point.y, outs[0].point.z)
         }
       }
       //?????????????????????????????????????????????

     }
   }
   selectAll(p22) {

     let p1 = this.startP
     let p2 = this.trsV2ToV3(p22)
     if (!p1) {
       return
     }
     let absx1x = p1.x
     let absx2x = p2.x
     let absx1z = p1.z
     let absx2z = p2.z
     let msx = absx1x > absx2x ? absx1x : absx2x
     let msz = absx1z > absx2z ? absx1z : absx2z
     let mix = absx1x < absx2x ? absx1x : absx2x
     let miz = absx1z < absx2z ? absx1z : absx2z
     rots = []
     for (let key of utl.entityMap.keys()) {
      let en = utl.entityMap.get(key)
       let pos = en.transform.position
       let fx = pos.x
       let fz = pos.z
       if (fx < msx &&
         fx > mix &&
         fz < msz &&
         fz > miz) {
         rots.push({id: key})
         en.getChildByName('on').active = true
         en.getChildByName('off').active = false
       } else {
         en.getChildByName('on').active = false
         en.getChildByName('off').active = true
       }

     }
   }
   leftFormatMovePosition(out, tnum) {
     let xx = 0
     let zz = 0
     if (out) {
       xx = out.x.toFixed(1);
       zz = out.y.toFixed(1);
     } else {
       xx = 0
       zz = 0
     }
     if (tnum == 0) {
       this.sp.graphics.clear()
       this.status = 0
       this.reset()


       return
     }
     if (this.status == tnum) {
       let x = (this.x - xx).toFixed(1) / 10
       let z = -(this.z - zz).toFixed(1) / 10
       this.move = [x, z]
     } else {
       this.x = xx
       this.z = zz
       this.move = [0, 0]
     }
     if (tnum == 2) {
       this.sp.graphics.clear()
       utl.camera.transform.translate(new Laya.Vector3(this.move[0], this.move[1], 0), true);
       if (utl.camera.transform.position.x > 0 ||
         utl.camera.transform.position.x < -500 ||
         utl.camera.transform.position.z < 0 ||
         utl.camera.transform.position.z > 500
       ) {
         utl.camera.transform.translate(new Laya.Vector3(-this.move[0], -this.move[1], 0), true);
       }
     }
     this.status = tnum
     this.x = xx
     this.z = zz
   }
 }