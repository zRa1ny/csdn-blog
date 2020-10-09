"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    // anyThing.toNumber();
    // anyThing.setName();
    // anyThing.sayHello();
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
    var tom = {
        name: 'tom',
        age: 12,
        sex: "男"
    };
}
// 只读属性
{
    var tom = {
        name: 'tom',
        gender: 'male'
    };
    // tom.id = 2;
}
/********** 数组类型 **********/
{
    var fibonacci = [1, 2, 3];
}
{
    // let fibonacci:number[]=[1,2,"3"];
}
{
    var fibonacci = [1, 2, 3];
    // fibonacci.push('1')
}
{
    var fibonacci = [1, 1, 2, 3, 5];
}
{
    var fibonacci = [1, 2, 3, 4];
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
    var b = new Boolean(1);
    var e = new Error('new Error');
    var d = new Date();
    var r = new RegExp(/[a-z]/);
}
{
    var body = document.body;
    var allDiv = document.querySelectorAll('div');
    document.addEventListener('click', function (e) {
    });
}
{
    // Math.pow(10,'2')
}
{
}
{
    document.addEventListener('click', function (e) {
        // console.log(e.targetCurrent) // 类型“MouseEvent”上不存在属性“targetCurrent”。
    });
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
    var tom = ['tom', 25];
}
{
    var tom = void 0;
    tom[0] = '1';
    tom[1] = 24;
    // tom[3]=1;// 长度为 "2" 的元组类型 "[string, number]" 在索引 "3" 处没有元素。
    tom[0].slice(1);
    tom[1].toFixed(2);
}
{
    var tom = void 0;
    tom[0] = 'tom';
}
{
    var tom = void 0;
    tom = ['1', 1];
    // tom=['1'] // 类型 "[string]" 中缺少属性 "1"，但类型 "[string, number]" 中需要该属性。
}
{
    var tom = void 0;
    tom = ['1', 1];
    tom.push('male');
    // tom.push(true)  //类型“true”的参数不能赋给类型“string | number”的参数。
}
{
    var Days = void 0;
    (function (Days) {
        Days[Days["Sun"] = 0] = "Sun";
        Days[Days["Mon"] = 1] = "Mon";
        Days[Days["Tue"] = 2] = "Tue";
        Days[Days["Wed"] = 3] = "Wed";
        Days[Days["Thu"] = 4] = "Thu";
        Days[Days["Fri"] = 5] = "Fri";
        Days[Days["Sat"] = 6] = "Sat";
    })(Days || (Days = {}));
    ;
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
    var Days = void 0;
    (function (Days) {
        Days[Days["Sun"] = 7] = "Sun";
        Days[Days["Mon"] = 1] = "Mon";
        Days[Days["Tue"] = 2] = "Tue";
        Days[Days["Wed"] = 3] = "Wed";
        Days[Days["Thu"] = 4] = "Thu";
        Days[Days["Fri"] = 5] = "Fri";
        Days[Days["Sat"] = 6] = "Sat";
    })(Days || (Days = {}));
    ;
}
{
    var Days = void 0;
    (function (Days) {
        Days[Days["Sun"] = 3] = "Sun";
        Days[Days["Mon"] = 1] = "Mon";
        Days[Days["Tue"] = 2] = "Tue";
        Days[Days["Wed"] = 3] = "Wed";
        Days[Days["Thu"] = 4] = "Thu";
        Days[Days["Fri"] = 5] = "Fri";
        Days[Days["Sat"] = 6] = "Sat";
    })(Days || (Days = {}));
    ;
}
{
    // enum Days { Sun = 3, Mon = 1, Tue, Wed, Thu = <any> "T", Fri, Sat  };
}
{
    var Days = void 0;
    (function (Days) {
        Days[Days["Sun"] = 3] = "Sun";
        Days[Days["Mon"] = 1.2] = "Mon";
        Days[Days["Tue"] = 2.2] = "Tue";
        Days[Days["Wed"] = 3.2] = "Wed";
        Days[Days["Thu"] = 4.2] = "Thu";
        Days[Days["Fri"] = 5.2] = "Fri";
        Days[Days["Sat"] = 6.2] = "Sat";
    })(Days || (Days = {}));
    ;
}
{
    var Colors = void 0;
    (function (Colors) {
        Colors[Colors["Red"] = 0] = "Red";
        Colors[Colors["Green"] = 1] = "Green";
        Colors[Colors["Blue"] = 'blue'.length] = "Blue";
    })(Colors || (Colors = {}));
}
{
    var directives = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
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
    var Animal_1 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.sayHi = function () {
            return "My name is " + this.name;
        };
        return Animal;
    }());
    var a = new Animal_1('Jack');
    console.log(a.sayHi());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        Cat.prototype.sayHi = function () {
            return "Meow," + _super.prototype.sayHi.call(this);
        };
        return Cat;
    }(Animal_1));
    var c = new Cat('Tom'); // Tom
    console.log(c.sayHi()); // Meow, My name is Tom
}
{
    var Animal_2 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Object.defineProperty(Animal.prototype, "name", {
            get: function () {
                return "jack";
            },
            set: function (value) {
                console.log('setter:' + value);
            },
            enumerable: false,
            configurable: true
        });
        return Animal;
    }());
    var a = new Animal_2('Kitty'); // setter: Kitty
    a.name = 'Tom'; // setter: Tom
    console.log(a.name); // Jack
}
{
    var Animal_3 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.isAnimal = function (a) {
            return a instanceof Animal;
        };
        return Animal;
    }());
    var a = new Animal_3('Jack');
    Animal_3.isAnimal(a);
}
{
    var Animal_4 = /** @class */ (function () {
        function Animal() {
            this.name = 'jack';
        }
        return Animal;
    }());
}
{
    var Animal_5 = /** @class */ (function () {
        function Animal() {
        }
        Animal.num = 42;
        return Animal;
    }());
    console.log(Animal_5.num);
}
{
    var Animal_6 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var a = new Animal_6('Jack');
    console.log(a.name); // Jack
    a.name = 'Tom';
    console.log(a.name); // Tom
}
{
    var Animal_7 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var a = new Animal_7('Jack');
    // console.log(a.name); // 属性“name”为私有属性，只能在类“Animal”中访问。
    // a.name = 'Tom'; // 属性“name”为私有属性，只能在类“Animal”中访问。
    // console.log(a.name); // 属性“name”为私有属性，只能在类“Animal”中访问。
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            var _this = _super.call(this, name) || this;
            console.log(_this.name);
            return _this;
        }
        return Cat;
    }(Animal_7));
}
{
    var Animal_8 = /** @class */ (function () {
        function Animal(name) {
        }
        return Animal;
    }());
    // let a = new Animal('Jack');//类“Animal”的构造函数是受保护的，仅可在类声明中访问。
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name) {
            return _super.call(this, name) || this;
        }
        return Cat;
    }(Animal_8));
    var c = new Cat('c');
}
{
    var Animal_9 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
}
{
    var Animal_10 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var a = new Animal_10('A');
    console.log(a.name);
    // a.name ="a" // 无法分配到 "name" ，因为它是只读属性。
}
{
    var Animal_11 = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    // let a = new Animal() // 无法创建抽象类的实例。
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.eat = function () { };
        Cat.prototype.sayHi = function () { };
        return Cat;
    }(Animal_11)); // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“sayHi”。
    var c = new Cat();
}
{
    var Animal_12 = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.sayHi = function () {
            return "My name is " + this.name;
        };
        return Animal;
    }());
    var a = new Animal_12('Jack');
}
{
    var Door = /** @class */ (function () {
        function Door() {
        }
        return Door;
    }());
    var SecurityDoor = /** @class */ (function (_super) {
        __extends(SecurityDoor, _super);
        function SecurityDoor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SecurityDoor.prototype.alert = function () {
            console.log('SecurityDoor alert');
        };
        return SecurityDoor;
    }(Door));
    var Car = /** @class */ (function () {
        function Car() {
        }
        Car.prototype.alert = function () {
            console.log('Car alert');
        };
        Car.prototype.lightOn = function () {
            console.log('Car light on');
        };
        Car.prototype.lightOff = function () {
            console.log('Car light off');
        };
        return Car;
    }());
}
{
}
{
    var Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    var point3d = { x: 1, y: 1, z: 1 };
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
    var GenericNumber = /** @class */ (function () {
        function GenericNumber() {
        }
        return GenericNumber;
    }());
    var myGenericNumber = void 0;
    myGenericNumber = new /** @class */ (function () {
        function class_1() {
        }
        class_1.prototype.add = function (x, y) {
            return x + y;
        };
        return class_1;
    }());
    // let myGenericNumber = new GenericNumber<number>();
    // myGenericNumber.zeroValue = 0;
    // myGenericNumber.add = function (x, y) { return x + y; };
}
{
}
