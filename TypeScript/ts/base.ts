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
        [propName: string]: number | string
    }

    let tom: Person = {
        name: 'tom',
        age: 12,
        sex: "男"
    }

}

// 只读属性
{
    interface Person {
        readonly id?: number,
        name: string,
        age?: number,
        [propName: string]: number | string
    }

    let tom: Person = {
        name: 'tom',
        gender: 'male'
    }
    // tom.id = 2;
}

/********** 数组类型 **********/
{
    let fibonacci: number[] = [1, 2, 3];
}
{
    // let fibonacci:number[]=[1,2,"3"];
}
{
    let fibonacci: number[] = [1, 2, 3];
    // fibonacci.push('1')
}
{
    let fibonacci: Array<number> = [1, 1, 2, 3, 5]
}
{
    interface NumberArray {
        [index: number]: number;
    }

    let fibonacci: NumberArray = [1, 2, 3, 4]
}

// function sum(){
//     let args:number[]=arguments; // 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 15 项。
// }

// function sum(){
//     interface args  {
//         [index:number] : number ,

//     }

//     let args:args=arguments;

//     // let args:{
//     //     [index:number]:number ,
//     //     length:number,
//     //     callee:Function
//     // } = arguments
// }


// function sum(){
//     let args:IArguments = arguments;
// }
// function sum(x: number, y: number): number {
//     return x + y
// }

// sum(1,'2')


// let sum: (x: number, y: number) => number =  (x: number, y: number): number => {
//     return x + y
// }

// interface SearchFunc {
//     (souce: string, subString: string): boolean
// }
// let mySearch: SearchFunc;
// mySearch = function (a: string, b: string): boolean {
//     return a === b
// }

// function buildName(firstName: string = 'tom', lastName: string): string {
//     if (lastName) {
//         return firstName + " " + lastName
//     } else {
//         return firstName
//     }
// }
// buildName('tom', 'cat')
// buildName(undefined, 'cat')
// buildName( 'tom')

// function push(array:number[],...items:any[]){
//     items.forEach(function(item){
//         array.push(item)
//     })
// }

// let a = [];
// push(a,1,2,3)
// function reverse(x: string): string;
// function reverse(x: number | string): number | string {
//     return x.toString().split('').reverse().join('')
// }


// // reverse(123)
// interface Cat{
//     name:string,
//     run():void;
// }

// interface Fish{
//     name:string;
//     swim():void;
// }

// function isFish(animal:Cat | Fish ){
//      (animal as Fish).swim()
// }

// interface ApiError extends Error{
//     code:number = 0
// }

// interface HttpError extends Error{
//     statusCode:number 
// }

// function isApiError(error:Error){
//     if(error instanceof ApiError){
//         return true
//     }
//     return false
// }

// const foo:number = 1
// foo.length = 1
// (window as any).foo=1

// function getCacheData(key:string):any{
//     return (window as any).cache[key]
// }

// interface Cat{
//     name:string,
//     run():void
// }

// const tom = getCacheData('tom') as Cat;
// tom.run()

// interface Cat  {
//     name:string
//     run():void
// }
// interface Fish  {
//     name:string
//     swim():void
// }


// function testCat(cat:Cat){
//     return (cat as any as Fish)
// }

// function toBoolean(something:any):boolean{
//     return Boolean(something)
// }

// function getCacheData<T>(key:string):T{
//     return (window as any).cache[key]
// }
// interface Cat{
//     name:string
  
// }

// let tom = getCacheData<Cat>('tom') 

$('#foo') 

