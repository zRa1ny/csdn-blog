"use strict";
/********** 原始数据类型 **********/
// 布尔值
{
    var isDone = false;
    var isDone1 = Boolean(1);
    // var isDone:boolean = new Boolean(1); // error 返回的是一个Boolean对象
}
// 数值
{
    var decliteral = 6;
    var hexLiteral = 0xf00d; //  es6中的十六进制表示法
    var binaryLiteral = 10; // es6中的二进制表示法
    var ocatalLiteral = 484; // es6中的八进制表示法
    var notANuber = NaN;
    var infinityNuber = Infinity;
}
// 字符串
{
    var myName = 'Tom';
    var myAge = 25;
    var sentence = "hello,my name is " + myName + ",I'll be " + (myAge + 1) + " years old next month. ";
}
// 空值
function alertName() {
    alert('my name is Tom');
}
var unusable1 = undefined;
// let unusable2: void = null;
// Null 和 Undefined
{
    var u = undefined;
    var n = null;
    var s = u;
    s = n;
    var num = u;
    num = n;
    var bl = u;
    bl = n;
    var v = u;
    v = n;
}
{
    var u = void 0;
    // let num:number = u // 不能将类型“void”分配给类型“number”。
}
/********** 任意值 **********/
// 什么是任意值
{
    var myFavoriteNumber = 'seven';
    // myFavoriteNumber = 7;  // 不能将类型“7”分配给类型“string”。
}
{
    var myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
    myFavoriteNumber = new Number(7);
}
// 任意值的属性和方法
{
    var anyThing = 'hello';
    anyThing.toString();
    anyThing.length;
    anyThing.toNumber();
    anyThing.setName();
    anyThing.sayHello();
}
{
    var num = 1;
    // num.length; // 类型“number”上不存在属性“length”。
}
/********** 类型推论 **********/
// 什么是类型推论
{
    var myFavoriteNumber = 'seven';
    // myFavoriteNumber = 7;
}
//********** 联合类型 **********/
{
    var myFavoriteNumber = void 0;
    myFavoriteNumber = 7;
    myFavoriteNumber = 'seven';
    // myFavoriteNumber = true; // 不能将类型“true”分配给类型“string | number”。
}
// 访问联合类型的属性或者方法
// function getLength(something: string | number): number {
//     return something.length
// }
// 类型“string | number”上不存在属性“length”。
//   类型“number”上不存在属性“length”。
function getLength(something) {
    return something.toString();
}
// 联合类型的类型推断
{
    var myFavoriteNumber = void 0;
    myFavoriteNumber = 'seven'; // 此时类型推断为 `string`
    myFavoriteNumber.length;
    myFavoriteNumber = 7;
    // myFavoriteNumber.length; // myFavoriteNumber: number
}
/********** 对象的类型 --- 接口 **********/
{
    // let Tom: Person = {
    //     name: 'tom',
    // }
}
{
    var tom1 = {
        name: "tom"
    };
    var tom2 = {
        name: 'Tom',
        age: 25
    };
    // let tom3: Person = {
    //     name: 'Tom',
    //     age: 25,
    //     sex: "男"
    // }; // 不能将类型“{ name: string; age: number; sex: string; }”分配给类型“Person”。对象文字可以只指定已知属性，并且“sex”不在类型“Person”中。
}
// 任意属性
{
}
