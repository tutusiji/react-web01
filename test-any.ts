// 测试文件：验证 any 类型是否被允许
const testAny: any = 'hello';
const anotherAny: any = 123;
const objectAny: any = { name: 'test' };

function testFunction(param: any): any {
  return param;
}

export { testAny, anotherAny, objectAny, testFunction };