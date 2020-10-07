declare class Student {
    firstName: string;
    middleInitial: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, middleInitial: string, lastName: string);
}
interface Person {
    firstName: string;
    lastName: string;
}
declare function greeter(person: Person): string;
declare let user: Student;
