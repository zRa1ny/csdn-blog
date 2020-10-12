const routes = [
    {
        path: '/foo', name: "foo", meta: {
            name: "foo",
            auth: true,
            roles: ["foo"]
        },
        component: { template: "<span>foo</span>" },
        children: [
            {
                path: '/zoo',
                name: "zoo",
                meta: {
                    name: "zoo",
                    auth: true,
                    roles: ["foo"]
                },
                component: { template: "<span>zoo</span>" },
            }
        ]
    },
    {
        path: '/bar', name: "bar",
        meta: {
            name: "bar",
            auth: true,
            roles: ["bar"]
        }, component: { template: "<span>bar</span>" }
    }
];
var r = seekRouter(routes);
console.log(r) ;

console.log('end')
function seekRouter (router, result) {
    var result = result ? result : [];
    router.forEach((value, index) => {
        var rt = deepClone(value);
        // children需要继续内部匹配
        console.log(rt.children != undefined)
        if (rt.children != undefined) {
            if (rt.meta.isChild) {
                console.log('不打平')
                rt.children = [];
                seekRouter(rt.children, rt.children)
            } else {
                console.log('打平');
               
               
                seekRouter(rt.children, result);
                delete rt.children;
               
            }
        }else{
          
            if (rt.path.indexOf('/') !== 0 && !rt.meta.isChild) {
                rt.path = "/" + rt.path;
            }
        }
     
        result.push(rt);
    })

    return result;
}


function deepClone(obj){
    return JSON.parse(JSON.stringify(obj))
}