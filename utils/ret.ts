export default class Ret {
  static success(data: any) {
    return {
      code: 0,
      data,
      msg: "ok",
    };
  }
  static error(data:any){
    return {
      code:-1,
      data,
      msg:"error"
    }
  }
}
