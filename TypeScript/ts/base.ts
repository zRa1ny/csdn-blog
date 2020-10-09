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
    // anyThing.toNumber();
    // anyThing.setName();
    // anyThing.sayHello();
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

// $('#foo') 
// declare const jQuery = function (select) {
//     return document.querySelector(select)
// }

// let cat = new Animal('tom')

{
    let b: Boolean = new Boolean(1);
    let e: Error = new Error('new Error');
    let d: Date = new Date();
    let r: RegExp = new RegExp(/[a-z]/);
}
{
    let body: HTMLElement = document.body;
    let allDiv: NodeList = document.querySelectorAll('div');
    document.addEventListener('click', function (e: MouseEvent) {

    })
}
{
    // Math.pow(10,'2')
}
{
    interface Math {
        pow(x: number, y: number): number
    }
}
{
    document.addEventListener('click', function (e) {
        // console.log(e.targetCurrent) // 类型“MouseEvent”上不存在属性“targetCurrent”。
    })
}
{
    //     interface Document extends Node,GlobalEventHandlers,DocumentEvent {

    //     }
}
{
    // type Name = string ;
    // type NameResolver = () => string;
    // type NameOrNameResolver = Name | NameResolver ;
    // function getName(n:NameOrNameResolver):Name{
    //     if(typeof n == 'string'){
    //         return n
    //     }
    //     return n()
    // }
}
// {
// type EventNames = 'click' | 'scroll' | 'mousemove';
// function handleEvent(ele: Element, event: EventNames) { }
// handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，类型“"dblclick"”的参数不能赋给类型“EventNames”的参数。
// }
{
    let tom: [string, number] = ['tom', 25]
}
{
    let tom: [string, number];
    tom[0] = '1';
    tom[1] = 24;
    // tom[3]=1;// 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。
    tom[0].slice(1);
    tom[1].toFixed(2)
}
{
    let tom: [string, number];
    tom[0] = 'tom'
}
{
    let tom: [string, number];
    tom = ['1', 1]
    // tom=['1'] // 类型 "[string]" 中缺少属性 "1"，但类型 "[string, number]" 中需要该属性。
}
{
    let tom: [string, number];
    tom = ['1', 1]
    tom.push('male')
    // tom.push(true)  //类型“true”的参数不能赋给类型“string | number”的参数。
}
{
    enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
    console.log(Days["Sun"] === 0); // true
    console.log(Days["Mon"] === 1); // true
    console.log(Days["Tue"] === 2); // true
    console.log(Days["Sat"] === 6); // true

    console.log(Days[0] === "Sun"); // true
    console.log(Days[1] === "Mon"); // true
    console.log(Days[2] === "Tue"); // true
    console.log(Days[6] === "Sat"); // true
}
{
    enum Days { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat };
}
{
    enum Days { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat };
}
{
    // enum Days { Sun = 3, Mon = 1, Tue, Wed, Thu = <any> "T", Fri, Sat  };
}
{
    enum Days { Sun = 3, Mon = 1.2, Tue, Wed, Thu, Fri, Sat };
}
{
    enum Colors { Red, Green, Blue = 'blue'.length }
}
{
    const enum Directives {
        Up,
        Down,
        Left,
        Right
    }

    let directives = [Directives.Up, Directives.Down, Directives.Left, Directives.Right]
}
// {
// declare enum Directives{
//     Up,
//     Down,
//     Left,
//     Right
// }
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// }


{
    class Animal {
        public name
        constructor(name) {
            this.name = name
        }
        sayHi() {
            return `My name is ${this.name}`
        }
    }

    let a = new Animal('Jack');
    console.log(a.sayHi())

    class Cat extends Animal {
        constructor(name) {
            super(name)
        }
        sayHi() {
            return `Meow,` + super.sayHi();
        }
    }

    let c = new Cat('Tom'); // Tom
    console.log(c.sayHi()); // Meow, My name is Tom
}

{
    class Animal {
        constructor(name) {
            this.name = name;
        }
        get name() {
            return "jack"
        }
        set name(value) {
            console.log('setter:' + value)
        }
    }

    let a = new Animal('Kitty'); // setter: Kitty
    a.name = 'Tom'; // setter: Tom
    console.log(a.name); // Jack
}

{
    class Animal {
        public name
        static isAnimal(a) {
            return a instanceof Animal
        }
        constructor(name) {
            this.name = name;
        }
    }

    let a = new Animal('Jack');
    Animal.isAnimal(a);
}

{
    class Animal {
        name = 'jack'
        constructor() { }
    }
}

{
    class Animal {
        static num = 42
        constructor() { }
    }

    console.log(Animal.num)
}

{
    class Animal {
        public name
        public constructor(name) {
            this.name = name
        }
    }

    let a = new Animal('Jack');
    console.log(a.name); // Jack
    a.name = 'Tom';
    console.log(a.name); // Tom
}

{
    class Animal {
        protected name
        public constructor(name) {
            this.name = name
        }
    }
    let a = new Animal('Jack');
    // console.log(a.name); // 属性“name”为私有属性，只能在类“Animal”中访问。
    // a.name = 'Tom'; // 属性“name”为私有属性，只能在类“Animal”中访问。
    // console.log(a.name); // 属性“name”为私有属性，只能在类“Animal”中访问。
    class Cat extends Animal {
        constructor(name) {
            super(name);
            console.log(this.name);
        }
    }
}

{
    class Animal {
        protected constructor(name) {
        }
    }
    // let a = new Animal('Jack');//类“Animal”的构造函数是受保护的，仅可在类声明中访问。
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
    }

    let c = new Cat('c')

}
{
    class Animal {
        public constructor(public name) { }
    }
}

{
    class Animal {
        readonly name
        constructor(name) {
            this.name = name;
        }
    }
    let a = new Animal('A');
    console.log(a.name)
    // a.name ="a" // 无法分配到 "name" ，因为它是只读属性。
}

{
    abstract class Animal {
        constructor() { }
        public abstract sayHi();
    }
    // let a = new Animal() // 无法创建抽象类的实例。
    class Cat extends Animal {
        public eat() { }
        sayHi() { }
    } // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“sayHi”。

    let c = new Cat();
}
{
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHi(): string {
            return `My name is ${this.name}`
        }
    }

    let a: Animal = new Animal('Jack');
}

{
    interface Alarm {
        alert(): void;
    }
    interface Light {
        lightOn(): void;
        lightOff(): void;
    }
    class Door { }
    class SecurityDoor extends Door implements Alarm {
        alert() {
            console.log('SecurityDoor alert')
        }
    }

    class Car implements Alarm {
        alert() {
            console.log('Car alert');
        }
        lightOn() {
            console.log('Car light on');
        }
        lightOff() {
            console.log('Car light off');
        }
    }
}
{
    interface Alarm {
        alert(): void;
    }

    interface LightTableAlarm extends Alarm {
        lightOn(): void;
        lightOff(): void;
    }
}

{
    class Point {
        x: number
        y: number
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
    interface Point3d extends Point {
        z: number
    }

    let point3d: Point3d = { x: 1, y: 1, z: 1 }
}

// {
// function createArray<t>(length: number, value: t): Array<t> {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result
// }
// createArray<string>(3, 'x'); // ['x', 'x', 'x']
// }

// function swap<T, U>(tuple: [T, U]): [U, T] {
//     return [tuple[1], tuple[0]]
// }
// swap([7,'seven'])
// interface Lengthwise{
//     length:number
// }
// function loggingIdentity<T extends Lengthwise>(arg:T):T{
//     console.log(arg.length) // 类型“T”上不存在属性“length”。
//     return arg
// }

// loggingIdentity(7) // 类型“7”的参数不能赋给类型“Lengthwise”的参数。
// loggingIdentity('7') 


// function copyFields<T extends U , U>(target:T,source:U):T{
//     for (let id in source) {
//         target[id] = (<T>source)[id];
//     }
//     return target
// }

// let x = {a : 1, b:2,c:3,d:4};
// copyFields(x,{a:10})

// interface CreateArrayFunc<T> {
//     (length: number, value: T): Array<T>
// }

// let createArray: CreateArrayFunc<string>;
// createArray = function (length, value) {
//     let result = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }

{
    class GenericNumber<T>{
        zeroValue: T
        add: (x: T, y: T) => T
    }
    let myGenericNumber: GenericNumber<number>;
    myGenericNumber =new class {
        zeroValue: 0
        add(x, y) {
            return x + y
        }
    }

    // let myGenericNumber = new GenericNumber<number>();
    // myGenericNumber.zeroValue = 0;
    // myGenericNumber.add = function (x, y) { return x + y; };
}

{
    function
}

