"use strict";
/********** 原始数据类型 **********/
// 布尔值
{
    let isDone: boolean = false;
    let isDone1: boolean = Boolean(1);
    // var isDone:boolean = new Boolean(1); // error 返回的是一个Boolean对象
}

// 数值
{
    let decliteral: number = 6;
    let hexLiteral: number = 0xf00d; //  es6中的十六进制表示法
    let binaryLiteral: number = 0b1010; // es6中的二进制表示法
    let ocatalLiteral: number = 0o744; // es6中的八进制表示法
    let notANuber: number = NaN;
    let infinityNuber: number = Infinity;
}

// 字符串

{
    let myName: string = 'Tom';
    let myAge: number = 25;
    let sentence: string = `hello,my name is ${myName},I'll be ${myAge + 1} years old next month. `
}

// 空值

function alertName(): void {
    alert('my name is Tom')
}
let unusable1: void = undefined;
// let unusable2: void = null;

// Null 和 Undefined

{
    let u: undefined = undefined
    let n: null = null
    let s: string = u;
    s = n;
    let num: number = u;
    num = n;
    let bl: boolean = u;
    bl = n;
    let v: void = u;
    v = n;
}

{
    let u: void;
    // let num:number = u // 不能将类型“void”分配给类型“number”。
}

/********** 任意值 **********/
// 什么是任意值
{
    let myFavoriteNumber: string = 'seven';
    // myFavoriteNumber = 7;  // 不能将类型“7”分配给类型“string”。
}
{
    let myFavoriteNumber: any = 'seven';
    myFavoriteNumber = 7;
    myFavoriteNumber = new Number(7);
}
// 任意值的属性和方法
{
    let anyThing: any = 'hello';
    anyThing.toString();
    anyThing.length;
    anyThing.toNumber();
    anyThing.setName();
    anyThing.sayHello();
}
{
    let num: number = 1;
    // num.length; // 类型“number”上不存在属性“length”。
}

/********** 类型推论 **********/
// 什么是类型推论
{
    let myFavoriteNumber = 'seven';
    // myFavoriteNumber = 7;
}
//********** 联合类型 **********/
{
    let myFavoriteNumber: string | number;
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


function getLength(something: string | number): string {
    return something.toString()
}
// 联合类型的类型推断
{
    let myFavoriteNumber: string | number;
    myFavoriteNumber = 'seven'; // 此时类型推断为 `string`
    myFavoriteNumber.length;
    myFavoriteNumber = 7;
    // myFavoriteNumber.length; // myFavoriteNumber: number

}

/********** 对象的类型 --- 接口 **********/
{
    interface Person {
        name: string,
        age: number
    }

    // let Tom: Person = {
    //     name: 'tom',
    // }
}

{
    interface Person {
        name: string,
        age?: number
    }

    let tom1: Person = {
        name: "tom"
    }

    let tom2: Person = {
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
    interface Person {
        name: string,
        age?: number,
        [propName: string]: any
    }

    let tom：
}