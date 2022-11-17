export default class Ret {
  static success(data: any) {
    return {
      code: 0,
      data,
      msg: "ok",
    };
  }
}
