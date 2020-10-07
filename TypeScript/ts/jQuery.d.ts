declare var $: (selector: string) => any;
declare class Animal {
    name:string
    constructor(name : string) 
    sayHi():string
}

declare namespace jQuery{
    function ajax(url:string,setting?:any):void;
    namespace fn{
        function extend(object:any):void
    }
}

interface AjaxSettings {
    method?:'GET' | 'POST',
    data?: any;
} 
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}
declare namespace jQuery {
    
}
declare namespace myInterface {
    interface a {
        name: string
    }
}
