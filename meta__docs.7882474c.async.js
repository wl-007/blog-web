"use strict";(self.webpackChunkblog_web=self.webpackChunkblog_web||[]).push([[904],{58:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(81543),o={}},26581:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(89182),o={}},74150:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(14952),o={}},3506:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(61951),o={}},22058:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(46282),o={}},99662:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(35856),o={}},89222:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(7726),o={}},41134:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(17),o={}},14332:function(a,n,e){e.r(n),e.d(n,{demos:function(){return o}});var t=e(78504),r=e(79524),o={}},16210:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(81543);const r=[{value:"TypeScript\uFF0C\u662F JavaScript \u7684\u8D85\u96C6\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A TS \u662F JS \u7684\u5347\u7EA7\u7248\u3002",paraId:0,tocIndex:0},{value:`npm i -g typescript
`,paraId:1,tocIndex:2},{value:`tsc -v
`,paraId:2,tocIndex:3},{value:"\u521B\u5EFA\u4E00\u4E2A\u4EE5 ",paraId:3,tocIndex:4},{value:".ts",paraId:3,tocIndex:4},{value:" \u4E3A\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u5728\u8BE5\u6587\u4EF6\u4E2D\u53EF\u4EE5\u7F16\u5199 JS \u4EE3\u7801\uFF1A",paraId:3,tocIndex:4},{value:`var a = 1;\r
console.log(a);\r
let b = 2;\r
console.log(b);
`,paraId:4,tocIndex:4},{value:`tsc \u6587\u4EF6\u540D.ts
`,paraId:5,tocIndex:6},{value:"\u5C06\u7EC8\u7AEF\u5B9A\u4F4D\u5230\u5F53\u524D\u76EE\u5F55\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF1A",paraId:6,tocIndex:8},{value:`tsc --init
`,paraId:7,tocIndex:8},{value:"\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u627E\u5230 ",paraId:8,tocIndex:9},{value:"outDir",paraId:8,tocIndex:9},{value:" \u5C5E\u6027\uFF0C\u5C06\u7F16\u8BD1\u540E\u7684 JS \u6587\u4EF6\u7684\u5B58\u50A8\u8DEF\u5F84\uFF0C\u8BBE\u7F6E\u4E3A ",paraId:8,tocIndex:9},{value:"./js",paraId:8,tocIndex:9},{value:" \u6587\u4EF6\u5939\u8DEF\u5F84\uFF1A",paraId:8,tocIndex:9},{value:`{\r
     "outDir": "./js", \r
}
`,paraId:9,tocIndex:9},{value:"\u3010\u7EC8\u7AEF\u3011-\u3010\u8FD0\u884C\u4EFB\u52A1\u3011-\u3010typescript\u3011-\u3010\u76D1\u89C6 tsconfig.json\u3011",paraId:10,tocIndex:10},{value:`var a: number = 1;
`,paraId:11,tocIndex:12},{value:"\u5728 TS \u4E2D\uFF0C\u5B9A\u4E49\u53D8\u91CF\u65F6\uFF0C\u9700\u8981\u901A\u8FC7 ",paraId:12,tocIndex:12},{value:":\u6570\u636E\u7C7B\u578B",paraId:12,tocIndex:12},{value:" \u6765\u7EA6\u675F\u53D8\u91CF\u7684\u6570\u636E\u7C7B\u578B\u3002",paraId:12,tocIndex:12},{value:"\u4F46\u662F\u5927\u90E8\u5206\u65F6\u5019\uFF0CTS \u90FD\u53EF\u4EE5\u5E2E\u6211\u4EEC\u53BB\u505A\u81EA\u52A8\u7684\u7C7B\u578B\u63A8\u5BFC\uFF0C\u6240\u4EE5\u6709\u4E9B\u4EE3\u7801\u662F\u53EF\u4EE5\u4E0D\u5199\u7C7B\u578B\u7EA6\u675F\u7684\u3002",paraId:13,tocIndex:12},{value:"\u6570\u5B57 number",paraId:14,tocIndex:14},{value:"\u5B57\u7B26\u4E32 string",paraId:14,tocIndex:14},{value:"\u5E03\u5C14\u503C boolean",paraId:14,tocIndex:14},{value:"\u7A7A\u503C null",paraId:14,tocIndex:14},{value:"\u672A\u5B9A\u4E49 undefined",paraId:14,tocIndex:14},{value:`var a: number = 1;\r
let b: string = 'hello';\r
const c: boolean = true;\r
let d: undefined = undefined;\r
let e: null = null;
`,paraId:15,tocIndex:14},{value:"TS \u4E2D\uFF0C\u8981\u6C42\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20\uFF0C\u5FC5\u987B\u662F\u540C\u4E00\u4E2A\u6570\u636E\u7C7B\u578B\u3002",paraId:16,tocIndex:15},{value:`const arr: number[] = [1, 2, 3];
`,paraId:17,tocIndex:15},{value:"\u5728 TS \u4E2D\uFF0C\u5BF9\u8C61\u7684\u7C7B\u578B\u7EA6\u675F\uFF0C\u9700\u8981\u5C06\u952E\u548C\u503C\u5168\u90E8\u4E00\u4E00\u5BF9\u5E94\uFF1A",paraId:18,tocIndex:16},{value:`let student: { name: string, age: number } = {\r
    name: '\u5F20\u4E09',\r
    age: 20\r
}
`,paraId:19,tocIndex:16},{value:"\u5982\u679C\u5BF9\u8C61\u4E2D\u7684\u67D0\u4E00\u4E9B\u5C5E\u6027\uFF0C\u53EF\u6709\u53EF\u65E0\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",paraId:20,tocIndex:16},{value:"?:",paraId:20,tocIndex:16},{value:" \u5F62\u5F0F\u6765\u8BBE\u7F6E\u53EF\u9009\u5C5E\u6027\uFF1A",paraId:20,tocIndex:16},{value:`let student: { name: string, age: number, gender?: string } = {\r
    name: '\u5F20\u4E09',\r
    age: 20\r
}
`,paraId:21,tocIndex:16},{value:"any \u548C unknown \u90FD\u53EF\u4EE5\u4EE5\u7528\u6765\u8868\u793A\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u3002",paraId:22,tocIndex:17},{value:"any \u548C unknown \u7684\u533A\u522B\u5728\u4E8E\uFF0Cany \u53EF\u4EE5\u8D4B\u503C\u7ED9\u5176\u4ED6\u4EFB\u610F\u7C7B\u578B\uFF0C\u4F46\u662F unknown \u53EA\u80FD\u8D4B\u503C\u7ED9 any \u548C unknown\u3002",paraId:23,tocIndex:17},{value:`var a: number = 1;\r
let b: string = 'hello';\r
\r
let f: any = "1";\r
let g: unknown = 1;\r
\r
a = f;\r
b = g;  // \u62A5\u9519
`,paraId:24,tocIndex:17},{value:"\u5143\u7EC4\uFF0C\u7C7B\u4F3C\u6570\u7EC4\u3002\u5B83\u548C\u6570\u7EC4\u4E0D\u540C\u7684\u5730\u65B9\u5728\u4E8E\uFF0C\u5143\u7EC4\u4E2D\u53EF\u4EE5\u4FDD\u5B58\u4E0D\u540C\u7C7B\u578B\u7684\u6570\u636E\u3002",paraId:25,tocIndex:18},{value:`let i: [number, number, string] = [1, 2, "3"];
`,paraId:26,tocIndex:18},{value:"\u5143\u7EC4\u4E2D\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u5FC5\u987B\u6309\u7167\u4F4D\u7F6E\u4E00\u4E00\u5BF9\u5E94\uFF0C\u6BCF\u4E00\u4E2A\u5143\u7D20\u90FD\u9700\u8981\u8BBE\u7F6E\u5BF9\u5E94\u7684\u6570\u636E\u7C7B\u578B\u3002",paraId:27,tocIndex:18},{value:"\u679A\u4E3E\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u7528\u6765\u5BF9\u6570\u636E\u4E2D\u7684\u4E00\u4E9B\u201C\u9B54\u9B3C\u6570\u5B57\u201D\u6765\u8FDB\u884C\u6807\u8BB0\uFF0C\u7ED9\u6240\u6709\u7684\u6570\u5B57\u5B9A\u4E49\u4E00\u4E2A\u5BF9\u5E94\u542B\u4E49\u7684\u82F1\u6587\u5355\u8BCD\u3002",paraId:28,tocIndex:19},{value:`enum GoodState {\r
    unsale = 0,\r
    sale = 1,\r
}\r
\r
const goodItem: { name: string, state: GoodState } = {\r
    name: '\u82F9\u679C',\r
    state: GoodState.sale\r
}
`,paraId:29,tocIndex:19},{value:"\u679A\u4E3E\u4E2D\u7684\u6570\u5B57\u53EF\u4EE5\u7701\u7565\u4E0D\u5199\uFF0C\u9ED8\u8BA4\u4ECE 0 \u5F00\u59CB\u9012\u589E\uFF1A",paraId:30,tocIndex:19},{value:`enum GoodState {\r
    unsale,\r
    sale\r
}
`,paraId:31,tocIndex:19},{value:"\u6CA1\u6709\u4EFB\u4F55\u7C7B\u578B\u3002\u901A\u5E38\u7528\u6765\u7EA6\u675F\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u3002",paraId:32,tocIndex:20},{value:`function foo(): void {\r
\r
}
`,paraId:33,tocIndex:20},{value:"\u8868\u793A\u6C38\u4E0D\u5B58\u5728\u7684\u503C\u7684\u7C7B\u578B\uFF0C\u901A\u5E38\u5F53\u7A0B\u5E8F\u62A5\u9519\u65F6\uFF0C\u629B\u51FA\u7684\u62A5\u9519\u5C31\u662F never \u7C7B\u578B\u3002",paraId:34,tocIndex:21},{value:"\u5728 TS \u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u5BF9\u51FD\u6570\u7684\u53C2\u6570\uFF0C\u4EE5\u53CA\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u8FDB\u884C\u7C7B\u578B\u7EA6\u675F\u3002",paraId:35,tocIndex:22},{value:`function \u51FD\u6570\u540D(\u5F62\u53C2: \u6570\u636E\u7C7B\u578B): \u8FD4\u56DE\u503C\u7684\u6570\u636E\u7C7B\u578B {\r
    return \u8FD4\u56DE\u503C;\r
}\r
\u51FD\u6570\u540D(\u5B9E\u53C2)\r

`,paraId:36,tocIndex:24},{value:`const \u51FD\u6570\u540D = function(\u5F62\u53C2: \u6570\u636E\u7C7B\u578B): \u8FD4\u56DE\u503C\u7684\u6570\u636E\u7C7B\u578B {\r
    return \u8FD4\u56DE\u503C;\r
}\r
\u51FD\u6570\u540D(\u5B9E\u53C2)\r

`,paraId:37,tocIndex:25},{value:"\u4EE3\u7801\uFF1A",paraId:38,tocIndex:25},{value:`function foo(x: number, y: string): number {\r
    return x;\r
}\r
foo(1, '2');\r

`,paraId:39,tocIndex:25},{value:`function foo(x: number, y: number = 1) {\r
\r
}\r
\r
foo(10, 20);\r

`,paraId:40,tocIndex:27},{value:"\u53C2\u6570\u7684\u9ED8\u8BA4\u503C\uFF0C\u5FC5\u987B\u653E\u5728\u6240\u6709\u7684\u5F62\u53C2\u6700\u540E\u3002",paraId:41,tocIndex:27},{value:`const bar = (x: number, y?: number) => {\r
\r
}\r
\r
bar(1, 2);\r

`,paraId:42,tocIndex:28},{value:"\u53EF\u9009\u53C2\u6570\uFF0C\u5FC5\u987B\u653E\u5728\u6240\u6709\u7684\u5F62\u53C2\u6700\u540E\u3002",paraId:43,tocIndex:28},{value:`const bar = (x: number, ...rest: number[]) => {\r
    console.log(rest);  // [2, 3, 4]\r
\r
}\r
\r
bar(1, 2, 3, 4)\r

`,paraId:44,tocIndex:29},{value:"\u4E0D\u5B9A\uFF08rest\uFF09\u53C2\u6570\uFF0C\u5FC5\u987B\u653E\u5728\u6240\u6709\u7684\u5F62\u53C2\u6700\u540E\u3002",paraId:45,tocIndex:29},{value:`const foo: (x: number, y: number) => number = (x, y) => {\r
    return x + y;\r
}\r

`,paraId:46,tocIndex:30},{value:`\u7C7B\u578B\u4E00 | \u7C7B\u578B\u4E8C | \u7C7B\u578B\u4E09\r

`,paraId:47,tocIndex:33},{value:`const arr: (number | string)[] = [1, 2, '3'];\r
let a: number | string = "10";\r

`,paraId:48,tocIndex:34},{value:`type NameProtocal = {name: string}\r
type PersonLikeProtocal = {age: number; say: () => void}\r
\r
type Student = NameProtocal & PersonLikeProtocal
`,paraId:49,tocIndex:35},{value:"\u7C7B\u578B\u522B\u540D\uFF0C\u662F\u5BF9\u4E00\u4E2A\u5DF2\u6709\u7684\u7C7B\u578B\u53D6\u4E00\u4E2A\u65B0\u7684\u540D\u5B57\u3002",paraId:50,tocIndex:36},{value:`type \u65B0\u540D\u5B57 = \u7C7B\u578B\r

`,paraId:51,tocIndex:37},{value:`type NsType = number | string;\r
\r
const arr: NsType[] = [1, 2, '3'];\r
\r
let a: NsType = "10";\r
\r
function bar(x: NsType) {\r
\r
}\r

`,paraId:52,tocIndex:38},{value:`\u503C as \u7C7B\u578B;\r
<\u7C7B\u578B>\u503C;\r

`,paraId:53,tocIndex:40},{value:`const arr = [1, 2, 3, 4];\r
\r
// const result: number = <number>arr.find(item => item >= 3);\r
const result: number = arr.find(item => item >= 3) as number;\r

`,paraId:54,tocIndex:41},{value:`interface \u63A5\u53E3\u540D {\r
    \u5C5E\u6027\u540D: \u6570\u636E\u7C7B\u578B;\r
    \u5C5E\u6027\u540D: \u6570\u636E\u7C7B\u578B;\r
    // ...\r
}\r

`,paraId:55,tocIndex:43},{value:"\u793A\u4F8B\u4EE3\u7801\uFF1A",paraId:56,tocIndex:43},{value:`interface Person {\r
    name: string;\r
    age: number;\r
    gender: string\r
}\r
\r
const student: Person = {\r
    name: '\u5F20\u4E09',\r
    age: 20,\r
    gender: '\u7537'\r
}\r

`,paraId:57,tocIndex:43},{value:`interface Person {\r
    name: string;\r
    age: number;\r
    gender?: string\r
}\r

`,paraId:58,tocIndex:44},{value:`interface Person {\r
    readonly id: number;\r
    name: string;\r
    age: number;\r
    gender?: string\r
}\r

`,paraId:59,tocIndex:45},{value:"\u5728\u4E00\u4E2A\u63A5\u53E3\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u63A5\u53E3\uFF0C\u4E5F\u53EF\u4EE5\u5F53\u524D\u63A5\u53E3\u81EA\u8EAB\u3002",paraId:60,tocIndex:46},{value:`interface MenuItem {\r
    title: string,\r
    path: string,\r
    children?: MenuItem[]\r
}\r
\r
const menusData: MenuItem[] = [\r
    {\r
        title: '\u9996\u9875',\r
        path: '/home'\r
    },\r
    {\r
        title: '\u7528\u6237\u7BA1\u7406',\r
        path: '/users',\r
        children: [\r
            {\r
                title: '\u7528\u6237\u5217\u8868',\r
                path: '/users/list'\r
            },\r
            {\r
                title: '\u65B0\u589E\u7528\u6237',\r
                path: '/users/add'\r
            }\r
        ]\r
    }\r
]\r

`,paraId:61,tocIndex:46},{value:`function \u51FD\u6570\u540D<\u6CDB\u578B\u53D8\u91CF>(\u53C2\u6570\u540D: \u6CDB\u578B\u53D8\u91CF): \u6CDB\u578B\u53D8\u91CF {\r
    \r
}\r
\u51FD\u6570\u540D<\u6570\u636E\u7C7B\u578B>(\u5B9E\u53C2)\r

`,paraId:62,tocIndex:49},{value:"\u793A\u4F8B\u4EE3\u7801\uFF1A",paraId:63,tocIndex:49},{value:`function bar<T>(x: T, y: T): T {\r
    return x;\r
}\r
\r
bar(1, 2);\r
bar<string>('1', '2');\r
bar<boolean>(true, false);\r
\r

`,paraId:64,tocIndex:49},{value:`function bar<T, K>(x: T, y: K) {\r
    \r
}\r
bar<number, string>(1, 'hello');\r

`,paraId:65,tocIndex:50},{value:`interface \u63A5\u53E3\u540D<\u6CDB\u578B\u53D8\u91CF> {\r
    \u5C5E\u6027\u540D: \u6570\u636E\u7C7B\u578B;\r
    \u5C5E\u6027\u540D: \u6CDB\u578B\u53D8\u91CF;\r
}\r

`,paraId:66,tocIndex:52},{value:"\u793A\u4F8B\u4EE3\u7801\uFF1A",paraId:67,tocIndex:52},{value:`interface Person<T> {\r
    name: string;\r
    age: T\r
}\r
\r
const student: Person<number> = {\r
    name: '\u5F20\u4E09',\r
    age: 20,\r
}\r
\r
const teacher: Person<string> = {\r
    name: '\u5F20\u4E09',\r
    age: '20',\r
}\r

`,paraId:68,tocIndex:52},{value:"\u901A\u5E38\u9664\u4E86 extends\uFF0C\u8FD8\u6709\u51E0\u4E2A\u5173\u952E\u5B57\u975E\u5E38\u5E38\u7528\uFF0C\u5206\u522B\u662F\uFF1Akeyof\u3001typeof",paraId:69,tocIndex:54},{value:"\u7528\u4E8E\u7C7B\u578B\u63A8\u5BFC",paraId:70,tocIndex:54},{value:`type Pick<T, K extends keyof T> = {\r
    [P in K]: T[P]\r
}\r
\r
interface A {\r
    name: string;\r
    age: number;\r
    sex: number;\r
}\r
\r
type A1 = Pick<A, 'name'|'age'>
`,paraId:71,tocIndex:54},{value:"\u7528\u4E8E\u7C7B\u578B\u7EA6\u675F",paraId:72,tocIndex:54},{value:`type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
`,paraId:73,tocIndex:54},{value:"\u6709\u6CA1\u6709\u60F3\u8FC7\uFF0C\u5047\u5982\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u51FD\u6570\uFF0C\u6B64\u523B\u6211\u4EEC\u60F3\u83B7\u53D6\u53C2\u6570\u7684\u7C7B\u578B\uFF0C\u600E\u4E48\u505A\uFF1F",paraId:74,tocIndex:56},{value:`type ParamType<T> = T extends (arg: infer P) => any ? P : T;
`,paraId:75,tocIndex:56},{value:"\u4F7F\u7528",paraId:76,tocIndex:56},{value:`interface User {\r
  name: string;\r
  age: number;\r
}\r
\r
type Func = (user: User) => void;\r
\r
type Param = ParamType<Func>; // Param = User\r
type AA = ParamType<string>; // string
`,paraId:77,tocIndex:56},{value:`type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;
`,paraId:78,tocIndex:57},{value:"\u7C7B\u578B\u5B88\u536B\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A\u901A\u8FC7\u7C7B\u578B\u5224\u65AD\u6216\u8005\u7C7B\u578B\u4E2D\u67D0\u4E2A\u5C5E\u6027\u662F\u5426\u6EE1\u8DB3\u4ECE\u800C\u63A8\u5BFC\u5BF9\u5E94\u7C7B\u578B\u3002",paraId:79,tocIndex:58},{value:"\u6BD4\u5982\u5224\u65AD\u4E00\u4E2A\u7C7B\u578B\u662F\u5426\u662F\u9884\u671F",paraId:80,tocIndex:58},{value:`const dom = document.querySelector('dom')\r
\r
dom?.addEventListener('mousedown', (ev) => {\r
    const t = ev.target\r
\r
    // \u7C7B\u578B\u5B88\u536B\r
    if (t instanceof HTMLDivElement) {\r
        t.classList.add('active')\r
    }\r
}, false)
`,paraId:81,tocIndex:58},{value:"\u7C7B\u578B\u4FDD\u62A4",paraId:82,tocIndex:58},{value:"\u662F\u5728\u7C7B\u578B\u5B88\u536B\u57FA\u7840\u4E0A\uFF0C\u5C06\u7C7B\u578B\u7684\u5224\u65AD\u7EA6\u675F\u8FDB\u884C\u5C01\u88C5\uFF0C\u5728\u4F7F\u7528\u7684\u4F4D\u7F6E\u901A\u8FC7\u8C03\u7528\u5BF9\u5E94\u65B9\u6CD5\u8FDB\u884C\u5224\u65AD\u6765\u5904\u7406\u3002",paraId:82,tocIndex:58},{value:`function isHTMLElement(e:EventTarget | null):e is HTMLElement {\r
    return e instanceof HTMLElement\r
}
`,paraId:83,tocIndex:58}]},14442:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(89182);const r=[{value:"\u8F93\u51FA\uFF1A",paraId:0},{value:"\u63A7\u5236\u53F0\u8F93\u51FA",paraId:1},{value:"\u9875\u9762\u8F93\u51FA",paraId:2},{value:"\u5728\u5F53\u524D\u9875\u9762\u8FDB\u884C\u5185\u5BB9\u663E\u793A",paraId:3},{value:"\u5F39\u7A97\u8F93\u51FA",paraId:4},{value:"\u5728\u5F53\u524D\u9875\u9762\u4F5C\u4E3A\u5F39\u7A97\u8F93\u51FA\u5185\u5BB9",paraId:5},{value:`console.log("\u8F93\u51FA\u7684\u5185\u5BB9")\r
document.write('\u8F93\u51FA\u5185\u5BB9')\r
alert("\u8F93\u51FA\u5185\u5BB9")
`,paraId:6},{value:"\u5F39\u7A97\u8F93\u51FA\u786E\u8BA4\u4E4B\u540E\u624D\u4F1A\u663E\u793A\u9875\u9762\u8F93\u51FA",paraId:7},{value:`prompt("\u63D0\u793A\u6027\u4FE1\u606F")\r
document.write(prompt("\u63D0\u793A\u6027\u4FE1\u606F"))
`,paraId:8,tocIndex:0},{value:"\u5728\u7A0B\u5E8F\u4E2D\uFF0C\u53D8\u91CF\u5C31\u662F\u4E00\u4E2A\u5B58\u50A8\u6570\u636E\u7684\u5BB9\u5668",paraId:9,tocIndex:2},{value:"\u53D8\u91CF\u7684\u547D\u540D\uFF1A",paraId:10,tocIndex:2},{value:"\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C_\u4EE5\u53CA$",paraId:11,tocIndex:2},{value:"\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934,\u4E0D\u80FD\u5305\u542B\u5176\u4ED6\u7279\u6B8A\u5B57\u7B26",paraId:11,tocIndex:2},{value:"\u4E0D\u80FD\u4EE5\u5173\u952E\u5B57\u547D\u540D",paraId:11,tocIndex:2},{value:"\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u547D\u540D\u5BF9\u5927\u5C0F\u5199\u654F\u611F",paraId:11,tocIndex:2},{value:"\u63A8\u8350\uFF1A\u5927\u5C0F\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF0C\u5C3D\u91CF\u89C1\u8BCD\u8FBE\u610F",paraId:11,tocIndex:2},{value:"\u5927\u9A7C\u5CF0\uFF1A\u6BCF\u4E2A\u5355\u8BCD\u9996\u5B57\u6BCD\u5927\u5199UserName\uFF1B\u4E00\u822C\u7528\u4E8E\u7C7B\u53D6\u540D",paraId:12,tocIndex:2},{value:"\u5C0F\u9A7C\u5CF0\uFF1A\u7B2C\u4E8C\u4E2A\u5355\u8BCD\u5F00\u59CB\u9996\u5B57\u6BCD\u5927\u5199userName\uFF1B\u4E00\u822C\u7528\u4E8E\u53D8\u91CF\u548C\u5176\u4ED6\u51FD\u6570\u547D\u540D",paraId:13,tocIndex:2},{value:"\u6CE8\u610F\uFF1A",paraId:14,tocIndex:2},{value:"\u53EA\u58F0\u660E\u672A\u8D4B\u503C\uFF0C\u8F93\u51FA\u4E3Aundefined",paraId:15,tocIndex:2},{value:"\u6CA1\u6709\u5B9A\u4E49\u53D8\u91CF\u76F4\u63A5\u4F7F\u7528\uFF0C\u5219\u7A0B\u5E8F\u62A5\u9519",paraId:16,tocIndex:2},{value:"var\uFF0Clet\uFF0Cconst",paraId:17,tocIndex:3},{value:"var\u65F6\u53EF\u4EE5\u5728\u5B9A\u4E49\u53D8\u91CF\u4E4B\u524D\u4F7F\u7528\uFF1Blet\uFF0Cconst\u4E0D\u80FD\u5728\u5B9A\u4E49\u53D8\u91CF\u4E4B\u524D\u4F7F\u7528\uFF0C\u7A0B\u5E8F\u4F1A\u76F4\u63A5\u62A5\u9519",paraId:18,tocIndex:3},{value:"var\u53EF\u4EE5\u91CD\u590D\u5B9A\u4E49\u540C\u4E00\u53D8\u91CF\uFF1Blet\uFF0Cconst\u4E0D\u80FD\u91CD\u590D\u5B9A\u4E49\u540C\u4E00\u53D8\u91CF",paraId:18,tocIndex:3},{value:"var\u3001let\u53EF\u4EE5\u4FEE\u6539\u53D8\u91CF\u503C\uFF1Bconst\u4F5C\u4E3A\u4E00\u4E2A\u5E38\u91CF\uFF0C\u4E0D\u80FD\u91CD\u65B0\u8D4B\u503C\uFF0C\u800C\u4E14\u5728\u58F0\u660E\u53D8\u91CF\u540C\u65F6\u5FC5\u987B\u8D4B\u503C\u3002",paraId:18,tocIndex:3},{value:"\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF087\u949F\uFF09",paraId:19,tocIndex:3},{value:"number\uFF1A\u8868\u793A\u6570\u5B57\uFF0C1\uFF0C-1\uFF0C3.14",paraId:19,tocIndex:3},{value:"string\uFF1A\u8868\u793A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u7528\u5F15\u53F7\u5305\u88F9\u8D77\u6765\u7684\u6570\u636E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u201D\u4E2D\u56FD\u201D,\u201D20\u201D",paraId:19,tocIndex:3},{value:"boolean\uFF1A\u5E03\u5C14\u7C7B\u578B\u3002\u5224\u65AD\u771F\u5047\u4F7F\u7528",paraId:19,tocIndex:3},{value:"true\uFF1A\u8868\u793A\u4E3A\u771F\uFF08\u6B63\u786E\uFF09",paraId:19,tocIndex:3},{value:"false\uFF1A\u8868\u793A\u5047\uFF08\u9519\u8BEF\uFF09",paraId:19,tocIndex:3},{value:"undefined\uFF1A\u672A\u5B9A\u4E49\uFF0C\u5982\u679C\u53D8\u91CF\u53EA\u58F0\u660E\u4F46\u672A\u8D4B\u503C\u5219\u4E3A\u672A\u5B9A\u4E49\u3002",paraId:19,tocIndex:3},{value:"null\uFF1A\u8868\u793A\u7A7A\u503C",paraId:19,tocIndex:3},{value:"symbol\uFF1A\u8868\u793A\u552F\u4E00\u503C",paraId:19,tocIndex:3},{value:"bigint\uFF1A\u8868\u793A\u8D85\u5927\u6570\uFF0C\u4E00\u822C\u7528\u4E8E\u79D1\u5B66\u8BA1\u7B97",paraId:19,tocIndex:3},{value:"\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF081\u79CD\uFF09",paraId:19,tocIndex:3},{value:"object\uFF1A\u8868\u793A\u5BF9\u8C61",paraId:19,tocIndex:3},{value:`typeof  \u6570\u636E/\u53D8\u91CF\u540D
`,paraId:20,tocIndex:3},{value:"\u4E3A\u4EC0\u4E48typeof null\u7684\u7C7B\u578Bobject",paraId:21,tocIndex:3},{value:"Number()",paraId:22,tocIndex:5},{value:"parseInt()\uFF1A\u53D6\u6574\u64CD\u4F5C",paraId:22,tocIndex:5},{value:"parseFloat\uFF1A\u4FDD\u7559\u5C0F\u6570\u8F6C\u4E3A\u6570\u5B57",paraId:22,tocIndex:5},{value:`console.log(Number(true))//1\r
console.log(Number(false))//0\r
console.log(Number(undefined))//NaN\r
console.log(Number(null))//0
`,paraId:23,tocIndex:5},{value:"\u6CE8\u610F\uFF1A",paraId:24,tocIndex:5},{value:"\u5B57\u7B26\u4E32\uFF1A\u80FD\u8F6C\u6570\u5B57\u76F4\u63A5\u8F6C\u6570\u5B57\uFF0C\u4E0D\u80FD\u8F6C\u662FNaN",paraId:24,tocIndex:5},{value:"\u5E03\u5C14\u7C7B\u578B\uFF1Atrue\u662F1\uFF0Cfalse\u662F0",paraId:24,tocIndex:5},{value:"undefined\uFF1A\u662FNaN",paraId:24,tocIndex:5},{value:"null\uFF1A\u662F0",paraId:24,tocIndex:5},{value:`console.log(parseInt("123.4abc"))//123\r
console.log(parseInt(true))//NaN\r
console.log(parseInt(false))//NaN\r
console.log(parseInt(undefined))//NaN\r
console.log(parseInt(null))//NaN
`,paraId:25,tocIndex:5},{value:"\u5B57\u7B26\u4E32\uFF1A\u53EA\u8981\u662F\u6570\u5B57\u5F00\u5934\uFF0C\u90FD\u53EF\u4EE5\u8F6C\u6362\u4E3A\u6570\u5B57\u5E76\u4E14\u4E3A\u6574\u6570\u3002\u4E0D\u80FD\u8F6C\u662FNaN",paraId:26,tocIndex:5},{value:"\u5E03\u5C14\u7C7B\u578B\uFF1A\u662FNaN",paraId:26,tocIndex:5},{value:"undefined\uFF1A\u662FNaN",paraId:26,tocIndex:5},{value:"null\uFF1A\u662FNaN",paraId:26,tocIndex:5},{value:`console.log(parseFloat("123.4abc"))//123.4\r
console.log(parseFloat(true))//NaN\r
console.log(parseFloat(false))//NaN\r
console.log(parseFloat(undefined))//NaN\r
console.log(parseFloat(null))//NaN
`,paraId:27,tocIndex:5},{value:"\u5B57\u7B26\u4E32\uFF1A\u53EA\u8981\u662F\u6570\u5B57\u5F00\u5934\uFF0C\u90FD\u53EF\u4EE5\u8F6C\u6362\u4E3A\u6570\u5B57\u5E76\u4E14\u53EF\u4EE5\u4FDD\u7559\u5C0F\u6570\u3002\u4E0D\u80FD\u8F6C\u662FNaN",paraId:28,tocIndex:5},{value:"\u5E03\u5C14\u7C7B\u578B\uFF1A\u662FNaN",paraId:28,tocIndex:5},{value:"undefined\uFF1A\u662FNaN",paraId:28,tocIndex:5},{value:"null\uFF1A\u662FNaN",paraId:28,tocIndex:5},{value:"toString",paraId:29,tocIndex:6},{value:`let num = 222;\r
console.log(typeof num.toString())\r
instanceof\r
console.log(person instanceof Object); // \u53D8\u91CFperson\u662FObject\u5417\uFF1F\r
console.log(colors instanceof Array); // \u53D8\u91CFcolors\u662FArray\u5417\uFF1F\r
console.log(pattern instanceof RegExp); // \u53D8\u91CFpattern\u662FRegExp\u5417\uFF1F
`,paraId:30,tocIndex:6},{value:"Boolean\uFF08\uFF09",paraId:31,tocIndex:7},{value:`console.log(Boolean("123abc"))//true\r
console.log(Boolean(""))//false\r
console.log(Boolean(123))//true\r
console.log(Boolean(NaN))//false\r
console.log(Boolean(undefined))//false\r
console.log(Boolean(null))//false
`,paraId:32,tocIndex:7},{value:"+\uFF1A\u52A0\u6CD5",paraId:33,tocIndex:8},{value:"-\uFF1A\u51CF\u6CD5",paraId:33,tocIndex:8},{value:"*\uFF1A\u4E58\u6CD5\u8FD0\u7B97",paraId:33,tocIndex:8},{value:"/\uFF1A\u9664\u6CD5\u8FD0\u7B97",paraId:33,tocIndex:8},{value:"%\uFF1A\u53D6\u4F59\uFF0C\u53D6\u6A21",paraId:33,tocIndex:8},{value:`console.log(3 + 4)//7\r
console.log("3" + "4")//\u5B57\u7B26\u4E32\u62FC\u63A5\u300234\r
console.log(3 + "4")//\u9690\u5F0F\u8F6C\u5316\u300234\r
\r
let str = 5 + ""\r
console.log(typeof str)//string
`,paraId:34,tocIndex:8},{value:"\u6CE8\u610F\uFF1A",paraId:35,tocIndex:8},{value:"\u52A0\u53F7\u4E24\u8FB9\u5747\u4E3A\u6570\u5B57\u7C7B\u578B\uFF0C\u8FDB\u884C\u76F8\u52A0",paraId:36,tocIndex:8},{value:"\u52A0\u53F7\u6709\u4E00\u8FB9\u4E3A\u5B57\u7B26\u7C7B\u578B\uFF0C\u8FDB\u884C\u5B57\u7B26\u4E32\u7684\u62FC\u63A5",paraId:36,tocIndex:8},{value:`console.log("3" - "4")//\u9690\u5F0F\u8F6C\u5316\uFF0C\u8F6C\u4E3A\u6570\u5B57\u518D\u8BA1\u7B97\u3002-1\r
console.log(3 - "4")//\u9690\u5F0F\u8F6C\u5316\uFF0C\u8F6C\u4E3A\u6570\u5B57\u518D\u8BA1\u7B97\u3002-1\r
console.log(3 - "a")//\u9690\u5F0F\u8F6C\u5316\uFF0C\u8F6C\u5316\u4E0D\u4E86\u4E3ANaN\r
\r
let num = "5" - 0\r
console.log(typeof num)
`,paraId:37,tocIndex:8},{value:"\u6CE8\u610F\uFF1A",paraId:38,tocIndex:8},{value:"\u51CF\u53F7\u4E24\u8FB9\u65E0\u8BBA\u662F\u5B57\u7B26\u8FD8\u662F\u6570\u5B57\uFF0C\u76F4\u63A5\u8F6C\u6362\u4E3A\u6570\u5B57",paraId:39,tocIndex:8},{value:"\u5B57\u7B26\u8F6C\u4E0D\u4E86\u6570\u5B57\u7684\u60C5\u51B5\u4E0B\uFF0C\u8F93\u51FANaN",paraId:39,tocIndex:8},{value:"=\uFF1A\u8D4B\u503C\u64CD\u4F5C",paraId:40,tocIndex:9},{value:"+=\uFF1A\u5728\u6570\u636E\u539F\u672C\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u6570\u636E\u76F8\u52A0\uFF0C\u5E76\u628A\u7ED3\u679C\u8D4B\u7ED9\u5DE6\u8FB9\u7684\u53D8\u91CF",paraId:40,tocIndex:9},{value:"-=\uFF1A\u5728\u6570\u636E\u539F\u672C\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u6570\u636E\u76F8\u51CF\uFF0C\u5E76\u628A\u7ED3\u679C\u8D4B\u7ED9\u5DE6\u8FB9\u7684\u53D8\u91CF",paraId:40,tocIndex:9},{value:"*=\uFF1A\u5728\u6570\u636E\u539F\u672C\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u6570\u636E\u76F8\u4E58\uFF0C\u5E76\u628A\u7ED3\u679C\u8D4B\u7ED9\u5DE6\u8FB9\u7684\u53D8\u91CF",paraId:40,tocIndex:9},{value:"/=\uFF1A\u5728\u6570\u636E\u539F\u672C\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u6570\u636E\u76F8\u9664\uFF0C\u5E76\u628A\u7ED3\u679C\u8D4B\u7ED9\u5DE6\u8FB9\u7684\u53D8\u91CF",paraId:40,tocIndex:9},{value:"\u7528\u4E8E\u5224\u65AD\u6570\u636E\u4E4B\u95F4\u7684\u5173\u7CFB\uFF0C\u8FD4\u56DE\u6570\u636E\u4E3A\u4E00\u4E2A\u5E03\u5C14\u7C7B\u578B",paraId:41,tocIndex:10},{value:"==\uFF1A\u5224\u65AD\u4E24\u8FB9\u6570\u636E\u662F\u5426\u76F8\u7B49\uFF0C\u4E0D\u4F1A\u8003\u8651\u6570\u636E\u7C7B\u578B",paraId:41,tocIndex:10},{value:"!=\uFF1A\u5224\u65AD\u4E24\u8FB9\u6570\u636E\u662F\u5426\u4E0D\u76F8\u7B49\uFF0C\u4E0D\u4F1A\u8003\u8651\u6570\u636E\u7C7B\u578B",paraId:41,tocIndex:10},{value:">\uFF1A\u5224\u65AD\u5DE6\u8FB9\u6570\u636E\u662F\u5426\u5927\u4E8E\u53F3\u8FB9\u6570\u636E\uFF0C\u4E0D\u4F1A\u8003\u8651\u6570\u636E\u7C7B\u578B",paraId:41,tocIndex:10},{value:"<\uFF1A\u5224\u65AD\u5DE6\u8FB9\u6570\u636E\u662F\u5426\u5C0F\u4E8E\u53F3\u8FB9\u6570\u636E\uFF0C\u4E0D\u4F1A\u8003\u8651\u6570\u636E\u7C7B\u578B",paraId:41,tocIndex:10},{value:">=\uFF1A\u5224\u65AD\u5DE6\u8FB9\u6570\u636E\u662F\u5426\u5927\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u6570\u636E\uFF0C\u4E0D\u4F1A\u8003\u8651\u6570\u636E\u7C7B\u578B",paraId:41,tocIndex:10},{value:"<=\uFF1A\u5224\u65AD\u5DE6\u8FB9\u6570\u636E\u662F\u5426\u5C0F\u4E8E\u7B49\u4E8E\u53F3\u8FB9\u6570\u636E\uFF0C\u4E0D\u4F1A\u8003\u8651\u6570\u636E\u7C7B\u578B",paraId:41,tocIndex:10},{value:"===\uFF1A\u5168\u7B49\u53F7\uFF0C\u5224\u65AD\u4E24\u8FB9\u6570\u636E\u662F\u5426\u5168\u7B49\u3002",paraId:41,tocIndex:10},{value:"\u6982\u5FF5\uFF1A\u5C31\u662F\u4E00\u5806\u6709\u5E8F\u7684\u6570\u636E\u7684\u96C6\u5408\u3002\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u6570\u636E\u90FD\u6709\u81EA\u5DF1\u4E13\u5C5E\u7684\u7F16\u53F7\u2014\u2014\u4E0B\u6807\uFF0C\u7528\u6765\u5FEB\u901F\u67E5\u627E\u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u6570\u636E.",paraId:41,tocIndex:10},{value:"\u5B9A\u4E49\u6570\u7EC4",paraId:42,tocIndex:11},{value:"\u6570\u7EC4\u7684\u57FA\u672C\u4F7F\u7528\uFF1A",paraId:43,tocIndex:11},{value:"\u6570\u7EC4\u7684\u957F\u5EA6",paraId:44,tocIndex:11},{value:"\u4E0B\u6807\uFF08\u7D22\u5F15\uFF09",paraId:44,tocIndex:11},{value:"\u6982\u5FF5\uFF1A\u5176\u5B9E\u672C\u8D28\u5C31\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u8868\u793A\u8BE5\u6570\u636E\u5728\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E\u3002\u4E0B\u6807\u4ECE0\u5F00\u59CB\uFF0C\u6700\u540E\u4E00\u4E2A\u4E0B\u6807\u4E3Alength-1\u3002",paraId:45,tocIndex:11},{value:"\u67E5\u8BE2\u6570\u636E",paraId:46,tocIndex:11},{value:"\u6570\u636E\u4FEE\u6539",paraId:46,tocIndex:11},{value:"\u6570\u636E\u65B0\u589E\uFF1A\u672B\u5C3E\u6DFB\u52A0\u6570\u636E",paraId:46,tocIndex:11},{value:"\u5220\u9664\u6570\u636E\uFF1A\u672B\u5C3E\u5220\u9664\u6570\u636E",paraId:46,tocIndex:11},{value:`//\u5B9A\u4E49\u6570\u7EC4\r
let arr1 = new Array()//new\u5173\u952E\u5B57\u5B9A\u4E49\r
let arr2 = []//\u63A8\u8350\u4F7F\u7528\uFF0C\u5B57\u9762\u91CF\u5B9A\u4E49\r
let arr1 = new Array(\u6570\u636E1,\u6570\u636E2,\u6570\u636E3....)\r
let arr2 = [\u6570\u636E1,\u6570\u636E2,\u6570\u636E3....]\r
\r
//\u6570\u7EC4\u7684\u957F\u5EA6\u5C5E\u6027\r
\u6570\u7EC4\u540D.length\r
\r
//\u4F7F\u7528\u6570\u7EC4\u83B7\u53D6\u503C\r
\u6570\u7EC4\u540D[\u4E0B\u6807]\r
\r
//\u8D4B\u503C\u8BED\u53E5\r
\u6570\u7EC4\u540D[\u4E0B\u6807] = \u65B0\u6570\u636E
`,paraId:47,tocIndex:11},{value:"\u4E0B\u6807\u4E3A0\uFF0C\u8868\u793A\u67E5\u627E\u7B2C\u4E00\u4E2A\u6570\u636E\uFF0C\u4EE5\u6B64\u7C7B\u63A8",paraId:48,tocIndex:11},{value:"\u627E\u4E0D\u5B58\u5728\u7684\u4E0B\u6807\uFF0C\u6570\u636E\u8FD4\u56DE\u4E3Aundefined",paraId:48,tocIndex:11},{value:`for(\u5FAA\u73AF\u53D8\u91CF\u521D\u59CB\u5316;\u5FAA\u73AF\u5224\u65AD\u6761\u4EF6;\u53D8\u91CF\u63A7\u5236\u6761\u4EF6){\r
    \u5FAA\u73AF\u4F53\r
}
`,paraId:49,tocIndex:13},{value:`while (\u5FAA\u73AF\u5224\u65AD\u6761\u4EF6) {\r
        \u5FAA\u73AF\u4F53\r
    } 
`,paraId:50,tocIndex:14},{value:`do{\r
    \u5FAA\u73AF\u4F53\r
}while(\u5FAA\u73AF\u6761\u4EF6)
`,paraId:51,tocIndex:15},{value:`if(\u5224\u65AD\u6761\u4EF6){\r
    //\u5728\u6761\u4EF6\u6210\u7ACB\u65F6\u6267\u884C\r
    \u6267\u884C\u4EE3\u7801\r
} else if(\u5224\u65AD\u6761\u4EF6){\r
    //\u5728\u524D\u4E00\u4E2A\u6761\u4EF6\u4E0D\u6210\u7ACB\uFF0C\u5F53\u524D\u6761\u4EF6\u6210\u7ACB\u65F6\r
    \u6267\u884C\u4EE3\u7801\r
}else{\r
    //\u5728\u6240\u6709\u6761\u4EF6\u4E0D\u6210\u7ACB\u7684\u65F6\u5019\u6267\u884C\r
    \u6267\u884C\u4EE3\u7801\r
}
`,paraId:52,tocIndex:17},{value:`switch(\u8981\u5224\u65AD\u7684\u6570\u636E){\r
    case \u6570\u636E1\uFF1A\u5F53\u6EE1\u8DB3\u6570\u636E1\u65F6\u8981\u6267\u884C\u7684\u4EE3\u7801;break;\r
    case \u6570\u636E2\uFF1A\u5F53\u6EE1\u8DB3\u6570\u636E2\u65F6\u8981\u6267\u884C\u7684\u4EE3\u7801;break;\r
    case \u6570\u636E3\uFF1A\u5F53\u6EE1\u8DB3\u6570\u636E3\u65F6\u8981\u6267\u884C\u7684\u4EE3\u7801;break;\r
    case \u6570\u636E4\uFF1A\u5F53\u6EE1\u8DB3\u6570\u636E4\u65F6\u8981\u6267\u884C\u7684\u4EE3\u7801;break;\r
    .....\r
    default:\r
        \u5F53\u4E0A\u8BC9\u6570\u636E\u90FD\u4E0D\u6EE1\u8DB3\u65F6\u8981\u6267\u884C\u7684\u4EE3\u7801;break;\r
}
`,paraId:53,tocIndex:18},{value:"\u6982\u5FF5\uFF1A\u7528\u4E8E\u5173\u7CFB\u8868\u8FBE\u5F0F\u4E4B\u95F4\u7684\u8FDE\u63A5\u8BCD",paraId:54,tocIndex:19},{value:"&&\uFF1A\u8868\u793A\u5E76\u4E14\u3002\u4E24\u8FB9\u8868\u8FBE\u5F0F\u540C\u65F6\u4E3A\u771F\uFF0C\u5219\u8FD4\u56DE\u4E3Atrue\uFF0C\u4EFB\u610F\u4E00\u8FB9\u4E3A\u5047\uFF0C\u5219\u8FD4\u56DEfalse",paraId:54,tocIndex:19},{value:"||\uFF1A\u8868\u793A\u6216\u8005\u3002\u4E24\u8FB9\u8868\u8FBE\u5F0F\u6709\u4E00\u8FB9\u4E3A\u771F\uFF0C\u5219\u8FD4\u56DEtrue\u3002\u4E24\u8FB9\u90FD\u4E3A\u5047\uFF0C\u5219\u8FD4\u56DEfalse",paraId:54,tocIndex:19},{value:"!:\u8868\u793A\u975E\uFF0C\u5BF9\u7ED3\u679C\u8FDB\u884C\u53D6\u53CD\u64CD\u4F5C\u3002",paraId:54,tocIndex:19},{value:"break\u8868\u793A\u7ED3\u675F\u5FAA\u73AF\uFF0Ccontinue\u8868\u793A\u672C\u6B21\u5FAA\u73AF\u8DF3\u8FC7\u540E\u9762\u7684\u8BED\u53E5\u3002",paraId:55,tocIndex:20},{value:`//\u5B57\u9762\u91CF\u5F62\u5F0F, \u5927\u4F6C\u63A8\u8350\u4F7F\u7528\u6B64\u65B9\u6CD5\r
let users1 = [\r
    ["xiaoming", "ad123"],\r
    ["xiaohong", "ad123"],\r
    ["xiaowang", "ad123"]\r
];\r
console.log(users1);\r
//new\u5173\u952E\u5B57\r
let users2 = new Array(\r
    new Array("xiaoming", "ad123"),\r
    new Array("xiaohong", "ad123"),\r
    new Array("xiaowang", "ad123"),\r
)\r
console.log(users2);
`,paraId:56,tocIndex:22},{value:"\u65B9\u6CD5",paraId:57,tocIndex:24},{value:"\u8BF4\u660E",paraId:57,tocIndex:24},{value:"\u662F\u5426\u6539\u53D8\u539F\u6570\u7EC4",paraId:57,tocIndex:24},{value:"\u8FD4\u56DE\u503C",paraId:57,tocIndex:24},{value:"unshift()",paraId:57,tocIndex:24},{value:"\u5411\u6570\u7EC4\u5F00\u5934\u6279\u91CF\u6DFB\u52A0\u6570\u636E",paraId:57,tocIndex:24},{value:"\u662F",paraId:57,tocIndex:24},{value:"\u6570\u7EC4\u957F\u5EA6",paraId:57,tocIndex:24},{value:"push()",paraId:57,tocIndex:24},{value:"\u5411\u6570\u7EC4\u672B\u5C3E\u6279\u91CF\u6DFB\u52A0\u6570\u636E",paraId:57,tocIndex:24},{value:"\u662F",paraId:57,tocIndex:24},{value:"\u6570\u7EC4\u957F\u5EA6",paraId:57,tocIndex:24},{value:"shift()",paraId:57,tocIndex:24},{value:"\u5220\u9664\u6570\u7EC4\u5F00\u5934\u7B2C\u4E00\u4E2A\u6570\u636E",paraId:57,tocIndex:24},{value:"\u662F",paraId:57,tocIndex:24},{value:"\u88AB\u5220\u9664\u7684\u6570\u636E",paraId:57,tocIndex:24},{value:"pop()",paraId:57,tocIndex:24},{value:"\u5220\u9664\u6570\u7EC4\u672B\u5C3E\u6700\u540E\u4E00\u4E2A\u6570\u636E",paraId:57,tocIndex:24},{value:"\u662F",paraId:57,tocIndex:24},{value:"\u88AB\u5220\u9664\u7684\u6570\u636E",paraId:57,tocIndex:24},{value:"splice()",paraId:57,tocIndex:24},{value:"\u5B8C\u6210\u6307\u5B9A\u4F4D\u7F6E\u7684\u63D2\u5165\u6216\u5220\u9664\u6570\u636E",paraId:57,tocIndex:24},{value:"\u662F",paraId:57,tocIndex:24},{value:"\u88AB\u5220\u9664\u7684\u6570\u636E\u65B0\u6570\u7EC4",paraId:57,tocIndex:24},{value:"indexOf()",paraId:57,tocIndex:24},{value:"\u83B7\u53D6\u7684\u662F\u67D0\u4E2A\u6570\u636E\u5728\u6570\u7EC4\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4E0B\u6807",paraId:57,tocIndex:24},{value:"\u5426",paraId:57,tocIndex:24},{value:"\u4E0B\u6807\uFF0C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE -1",paraId:57,tocIndex:24},{value:"lastIndexOf()",paraId:57,tocIndex:24},{value:"\u83B7\u53D6\u7684\u662F\u67D0\u4E2A\u6570\u636E\u5728\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u6B21\u51FA\u73B0\u7684\u4E0B\u6807",paraId:57,tocIndex:24},{value:"\u5426",paraId:57,tocIndex:24},{value:"\u4E0B\u6807\uFF0C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE -1",paraId:57,tocIndex:24},{value:"includes()",paraId:57,tocIndex:24},{value:"\u83B7\u53D6\u67D0\u4E2A\u6570\u636E\u662F\u5426\u5728\u6570\u7EC4\u4E2D",paraId:57,tocIndex:24},{value:"\u5426",paraId:57,tocIndex:24},{value:"\u6709\u5219\u8FD4\u56DEtrue\uFF0C\u6CA1\u6709\u5219\u8FD4\u56DEfalse",paraId:57,tocIndex:24},{value:"concat()",paraId:57,tocIndex:24},{value:"\u53EF\u4EE5\u5C06\u591A\u4E2A\u6570\u636E\u8FDB\u884C\u5408\u5E76",paraId:57,tocIndex:24},{value:"\u5426",paraId:57,tocIndex:24},{value:"\u5408\u5E76\u540E\u7684\u65B0\u6570\u7EC4",paraId:57,tocIndex:24},{value:"slice()",paraId:57,tocIndex:24},{value:"\u622A\u53D6\u6570\u7EC4\u4E2D\u7684\u4E00\u90E8\u5206\u6570\u636E",paraId:57,tocIndex:24},{value:"\u5426",paraId:57,tocIndex:24},{value:"\u622A\u53D6\u540E\u7684\u65B0\u6570\u7EC4",paraId:57,tocIndex:24},{value:"join()",paraId:57,tocIndex:24},{value:"\u80FD\u591F\u5C06\u6570\u7EC4\u91CC\u7684\u6570\u636E\u62FC\u63A5\u4E3A\u5B57\u7B26\u4E32",paraId:57,tocIndex:24},{value:"\u5426",paraId:57,tocIndex:24},{value:"\u5B57\u7B26\u4E32",paraId:57,tocIndex:24},{value:`left.unshift(1,2,3)   \u5728\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u503C\u5E76\u8FD4\u56DE\u65B0\u6570\u7EC4\u957F\u5EA6,\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\r
push() \u5728\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u503C\u5E76\u8FD4\u56DE\u65B0\u6570\u7EC4\u957F\u5EA6,\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\r
left.shift()   \u5220\u9664\u7B2C\u4E00\u4E2A\u503C\u5E76\u8FD4\u56DE\u8BE5\u503C\r
pop() \u5220\u9664\u6700\u540E\u4E00\u4E2A\u503C\u5E76\u8FD4\u56DE\u8BE5\u503C\r
slice()  \u8BE5\u51FD\u6570\u4E0D\u4F1A\u6539\u53D8\u5143\u6570\u7EC4\r
	\u53D6\u5B57\u7B26\u4E32\u7684\u67D0\u4E2A\u90E8\u5206\uFF0C\u5E76\u4EE5\u65B0\u7684\u5B57\u7B26\u4E32\u8FD4\u56DE\u88AB\u63D0\u53D6\u7684\u90E8\u5206\u3002  \r
  start \u4E3A\u8D77\u59CB\u503C\uFF0C\u5FC5\u987B\u8981\uFF1B \u7B97start \u4E0D\u7B97end\r
  arr.slice(start, end); \r
\r
splice(first,second,third)  \u4F1A\u6539\u53D8\u539F\u6570\u7EC4\r
  first \u4E3A\u8D77\u59CB\u503C\uFF0C\u5FC5\u987B\u8981\uFF1B second\u9700\u5220\u9664\u7684\u5143\u7D20\u4E2A\u6570 \uFF1Bthird\uFF0C\u8981\u589E\u52A0\u7684\u5143\u7D20\r
indexOf()\u548ClastIndexOf()\u90FD\u8FD4\u56DE\u8981\u67E5\u627E\u7684\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E\uFF0C\r
   \u5982\u679C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE-1\u3002\r
includes()\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u81F3\u5C11\u627E\u5230\r
concat()\r
\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\uFF0C\u5E76\u5C06\u65B0\u7684\u6570\u7EC4\u8FD4\u56DE\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u5BF9\u539F\u6570\u7EC4\u4EA7\u751F\u5F71\u54CD\r
    var arr2 = [5,6,7,8];\r
    var arr3 = arr.concat(arr2);\r
    console.log(arr3); // \u8FDE\u63A5\u4E4B\u540E\u8FD4\u56DE\u7684\u6570\u7EC4\u4E3A\uFF1A[1, 2, 3, 4, 5, 6, 7, 8]\r
join() \u628A\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\u653E\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u5143\u7D20\u901A\u8FC7\u6307\u5B9A\u7684\u5206\u9694\u7B26\u8FDB\u884C\u5206\u9694\u3002\r
  var arr = ['xiao','lin','qiqi','mingtian'];\r
  var arr2 = arr.join(',');\r
  console.log(arr2); \r
  // \u6839\u636E','\u9694\u5F00\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\u4E3A\uFF1A"xiao,lin,qiqi,mingtian"\r
every()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u5982\u679C\u5BF9\u6BCF\u4E00\u9879\u51FD\u6570\u90FD\r
\u8FD4\u56DEtrue\uFF0C\u5219\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DEtrue\u3002\r
filter()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u8FD4\u56DEtrue\u7684\u9879\u4F1A\r
\u7EC4\u6210\u6570\u7EC4\u4E4B\u540E\u8FD4\u56DE\u3002\r
forEach()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C\u3002\r
map()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u8FD4\u56DE\u7531\u6BCF\u6B21\u51FD\u6570\u8C03\u7528\u7684\r
\u7ED3\u679C\u6784\u6210\u7684\u6570\u7EC4\u3002\r
some()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u5982\u679C\u6709\u4E00\u9879\u51FD\u6570\u8FD4\u56DE\r
true\uFF0C\u5219\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DEtrue\u3002\r
\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u4E0D\u6539\u53D8\u8C03\u7528\u5B83\u4EEC\u7684\u6570\u7EC4\u3002
`,paraId:58,tocIndex:24},{value:`//\u51FD\u6570\u58F0\u660E\u5F0F\r
function \u51FD\u6570\u540D(){\r
    //\u51FD\u6570\u4F53\uFF0C\u4E4B\u540E\u88AB\u6267\u884C\u7684\u4E00\u6BB5\u4EE3\u7801\r
}\r
//\u51FD\u6570\u7684\u8868\u8FBE\u5F0F\r
let getMin = function () {\r
            //\u51FD\u6570\u4F53\r
            console.log("\u627E\u5230\u4E00\u4E2A\u6700\u5C0F\u503C")\r
}\r
//\u8C03\u7528\u51FD\u6570;\r
\u51FD\u6570\u540D();
`,paraId:59,tocIndex:26},{value:`// arguments \u7C7B\u6570\u7EC4\uFF0C \u7BAD\u5934\u51FD\u6570 \u6CA1\u6709arguments \r
function getArr() {\r
    for (let index = 0; index < arguments.length; index++) {\r
      const element = arguments[index];\r
      console.log(element);   \r
    }\r
}\r
// \u6269\u5C55\u8FD0\u7B97\u7B26 ...\r
let fuc=(...more)=>{\r
\r
}
`,paraId:60,tocIndex:27},{value:"\u6982\u5FF5\uFF1A\u6839\u636E\u53D8\u91CF\u5B9A\u4E49\u7684\u4F4D\u7F6E\u4E0D\u540C\u5C06\u53D8\u91CF\u8FDB\u884C\u5206\u7C7B\uFF0C\u5206\u4E3A\u5168\u5C40\u53D8\u91CF\u548C\u5C40\u90E8\u53D8\u91CF",paraId:61,tocIndex:28},{value:"\u5168\u5C40\u53D8\u91CF\uFF1A\u5728\u51FD\u6570\u5916\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\u5219\u6210\u4E3A\u5168\u5C40\u53D8\u91CF",paraId:61,tocIndex:28},{value:"\u53EF\u4EE5\u5728\u7A0B\u5E8F\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528\uFF0C\u65E0\u8BBA\u662F\u51FD\u6570\u5185\u90E8\u8FD8\u662F\u5916\u90E8",paraId:61,tocIndex:28},{value:"\u5C40\u90E8\u53D8\u91CF\uFF1A\u5728\u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\u53D8\u91CF\u5219\u6210\u4E3A\u5C40\u90E8\u53D8\u91CF",paraId:61,tocIndex:28},{value:"\u5C40\u90E8\u53D8\u91CF\u53EA\u80FD\u5728\u5B9A\u4E49\u5B83\u7684\u51FD\u6570\u5185\u90E8\u4F7F\u7528\uFF0C\u5176\u4ED6\u5730\u65B9\u76F4\u63A5\u62A5\u9519",paraId:61,tocIndex:28},{value:"\u51FD\u6570\u5185\u90E8\u5F62\u53C2\u4E5F\u662F\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u53EA\u80FD\u5728\u51FD\u6570\u5185\u90E8\u4F7F\u7528",paraId:61,tocIndex:28},{value:"\u5728\u51FD\u6570\u5185\u90E8\uFF0C\u5982\u679C\u5168\u5C40\u548C\u5C40\u90E8\u6709\u540C\u540D\u53D8\u91CF\u65F6\u4F7F\u7528\u5C40\u90E8\u53D8\u91CF\uFF08\u5982\u679C\u8981\u4F7F\u7528\u5168\u5C40\u53D8\u91CF\u53EF\u4EE5\u901A\u8FC7this\uFF0Cwindow\u8C03\u7528\uFF09",paraId:61,tocIndex:28},{value:"\u6CE8\u610F\uFF1A\u5982\u679C\u4E00\u4E2A\u53D8\u91CF\u53EA\u8FDB\u884C\u4E86\u8D4B\u503C\u6CA1\u6709\u58F0\u660E\u5219\u9ED8\u8BA4\u53D8\u4E3A\u5168\u5C40\u53D8\u91CF",paraId:61,tocIndex:28},{value:"ES6\u63D0\u4F9B\u7684\u4E00\u79CD\u53EF\u4EE5\u7B80\u5316\u51FD\u6570\u5B9A\u4E49\u683C\u5F0F\u7684\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8F85\u52A9\u51FD\u6570\u5B9A\u4E49\uFF0C\u8BED\u6CD5\u66F4\u52A0\u7B80\u6D01",paraId:62,tocIndex:29},{value:"\u5199\u6CD5\uFF1A",paraId:62,tocIndex:29},{value:"\u5982\u679C\u53EA\u6709\u4E00\u4E2A\u5F62\u53C2\u53EF\u4EE5\u7701\u7565()\u4E0D\u5199",paraId:62,tocIndex:29},{value:"\u5982\u679C\u51FD\u6570\u4F53\u4E2D\u53EA\u6709return\u6CA1\u6709\u5176\u4ED6\u4EE3\u7801\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7701\u7565{}\u548Creturn\u4E0D\u5199",paraId:62,tocIndex:29},{value:`//\u51FD\u6570\u8868\u8FBE\u5F0F\r
let demo = function(){\r
    //\u51FD\u6570\u4F53()\r
}\r
//\u7BAD\u5934\u51FD\u6570\r
let demo1 = () => {\r
    //\u51FD\u6570\u4F53\r
}
`,paraId:63,tocIndex:29},{value:"\u7701\u7565function\uFF0C\u5E76\u4E14\u5728\u5C0F\u62EC\u53F7\u548C\u5927\u62EC\u53F7\u4E4B\u95F4\u7528=>",paraId:64,tocIndex:29},{value:`let add1 = (num) =>{\r
    return num + 5\r
}\r
\r
let add1 = num =>{\r
    return num + 5\r
}
`,paraId:65,tocIndex:29},{value:"\u5982\u679C\u51FD\u6570\u4F53\u4E2D\u53EA\u6709return\u6CA1\u6709\u5176\u4ED6\u4EE3\u7801\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7701\u7565{}\u548Creturn\u4E0D\u5199",paraId:66,tocIndex:29},{value:`let add1 = num =>{\r
    return num + 5\r
}\r
\r
let add1 = num => num + 5
`,paraId:67,tocIndex:29},{value:"\u80CC\u666F\uFF1A\u5BF9\u4E8E\u590D\u6742\u7684\u6570\u636E\uFF0C\u7528\u591A\u7EF4\u6570\u636E\u8868\u793A\u4E0D\u65B9\u4FBF\u8FDB\u884C\u6570\u636E\u7BA1\u7406\u3002\u8BB0\u4F4F\u4E0B\u6807\uFF0C\u6570\u7EC4\u5D4C\u5957\u3002",paraId:68,tocIndex:30},{value:"\u6982\u5FF5\uFF1A\u5728Javascript\u4E2D\u4E13\u95E8\u7528\u6765\u63CF\u8FF0\u590D\u5408\u578B\u6570\u636E\u7684\u6570\u636E\u7C7B\u578B",paraId:68,tocIndex:30},{value:"\u590D\u5408\u578B\u6570\u636E\uFF1A\u672C\u8EAB\u662F\u4E00\u4E2A\u6574\u4F53\uFF0C\u5176\u4E2D\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u591A\u4E2A\u6570\u636E\u7C7B\u578B\u8FDB\u884C\u8868\u8FF0",paraId:68,tocIndex:30},{value:`//\u521B\u5EFA\u7A7A\u5BF9\u8C61\r
let student = new Object();\r
let student = {}//\u5B57\u9762\u91CF\u5F62\u5F0F\r
console.log(student);\r
//\u521B\u5EFA\u5E26\u6709\u6570\u636E\u7684\u5BF9\u8C61\r
let \u5BF9\u8C61\u53D8\u91CF\u540D = new Object();\r
\u5BF9\u8C61\u53D8\u91CF\u540D.\u5C5E\u6027\u540D1 = \u5C5E\u6027\u503C1;\r
st\u5BF9\u8C61\u53D8\u91CF\u540Dudent.\u5C5E\u6027\u540D2 = \u5C5E\u6027\u503C2;\r
let \u5BF9\u8C61\u53D8\u91CF\u540D = {\r
    \u5C5E\u6027\u540D1:\u5C5E\u6027\u503C1,\r
    \u5C5E\u6027\u540D2:\u5C5E\u6027\u503C2,\r
    \u5C5E\u6027\u540D3:\u5C5E\u6027\u503C3,\r
    ...\r
    \u5C5E\u6027\u540Dn:\u5C5E\u6027\u503Cn\r
}
`,paraId:69,tocIndex:31},{value:"\u952E\u503C\u5BF9\uFF1A\u5C5E\u6027\u540D\u4E3A\u952E\uFF0C\u5C5E\u6027\u503C\u4E3A\u503C\u3002\u5C5E\u6027\u540D\u548C\u5C5E\u6027\u503C\u4E00\u4E00\u5BF9\u5E94\u3002",paraId:70,tocIndex:31},{value:'\u5C5E\u6027\u540D\uFF1A\u7C7B\u578B\u4E3A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u7B80\u5199""',paraId:70,tocIndex:31},{value:"\u5C5E\u6027\u503C\uFF1A\u53EF\u4EE5\u653E\u4EFB\u610F\u6570\u636E\u7C7B\u578B\u3002",paraId:70,tocIndex:31},{value:`//\u4E66\u5199\u65B9\u5F0F\r
student.\u5C5E\u6027\u540D;\r
student["\u5C5E\u6027\u540D"];\r
student[\u53D8\u91CF\u540D]
`,paraId:71,tocIndex:32},{value:`//for-in\uFF0C\u9488\u5BF9\u5BF9\u8C61\u904D\u5386,\u6BCF\u6B21\u904D\u5386\u5C06\u5C5E\u6027\u540D\u8D4B\u503C\u7ED9\u53D8\u91CF key\r
for(let item in student){\r
    //\u5FAA\u73AF\u4F53\r
    console.log(item);//\u8F93\u51FA\u5C5E\u6027\u540D\r
    console.log(student[item]);//item\u8868\u793A\u53D8\u91CF\uFF0C\u8F93\u51FA\u5C5E\u6027\u503C\r
}
`,paraId:72,tocIndex:33},{value:`\u67E5\u627E\u5B57\u7B26\u4E32indexOf()\r
let stringValue = "hello world";\r
console.log(stringValue.indexOf("o", 6)); // 7\r
console.log(stringValue.lastIndexOf("o", 6)); // 4\r
\r
repeat() \u8868\u793A\u8981\u5C06\u5B57\u7B26\u4E32\u590D\u5236\u591A\u5C11\u6B21\r
let stringValue = "na ";\r
console.log(stringValue.repeat(16) + "batman");\r
// na na na na na na na na na na na na na na na na batman\r
\r
search()\u65B9\u6CD5 \u5B57\u7B26\u4E32\u641C\u7D22\u8FD4\u56DE\u6A21\u5F0F\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u4F4D\u7F6E\u7D22\u5F15\uFF0C\u5982\u679C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE-1\u3002\r
let text = "cat, bat, sat, fat";\r
let pos = text.search(/at/);\r
console.log(pos); // 1\r
\r
replace()\u65B9\u6CD5 \u66FF\u6362\r
let text = "cat, bat, sat, fat";\r
let result = text.replace("at", "ond");\r
console.log(result); // "cond, bat, sat, fat"\r
result = text.replace(/at/g, "ond");\r
console.log(result); // "cond, bond, sond, fond"\r
\r
// \u5339\u914D\u9996\u90E8\r
let str="abcd123";\r
console.log(str.startsWith("ab")); //true\r
// \u5339\u914D\u5C3E\u90E8\r
let str="abcd123";\r
console.log(str.endsWith("23")); //true\r
\u622A\u53D6\u5B57\u7B26  \r
subStr(index,number)  index:\u5F00\u59CB\u7D22\u5F15 number\uFF1A\u5F80\u53F3\u622A\u53D6\u7684\u5B57\u7B26\u6570\u91CF\r
substring(start,end)  \u5F00\u59CB\u7D22\u5F15\u4E0E\u7ED3\u675F\u7D22\u5F15\uFF0C\u5305\u542B\u5F00\u59CB\u4E0D\u5305\u542B\u7D22\u5F15\r
slice(start,end) \u5F00\u59CB\u7D22\u5F15\u4E0E\u7ED3\u675F\u7D22\u5F15\uFF0C\u5305\u542B\u5F00\u59CB\u4E0D\u5305\u542B\u7ED3\u675F,\u53EF\u4E3A\u8D1F\u6570\r
\r
\r
split("^") \u6309\u6307\u5B9A\u5B57\u7B26\u62C6\u5206\u4E4B\u540E\u8FD4\u56DE\u62C6\u5206\u540E\u7684\u6570\u636E\u7EC4\u6210\u7684\u6570\u7EC4\r
\r
JS\u5B57\u7B26(\u5B57\u6BCD)\u4E0EASCII\u7801\u8F6C\u6362\r
\u5927\u5199\u5B57\u6BCDA-Z\u5BF9\u5E94\u7684ASCII\u7801\u503C\u662F65-90\r
\r
\u5C0F\u5199\u5B57\u6BCDa-z\u5BF9\u5E94\u7684ASCII\u7801\u503C\u662F97-122\r
var str = "A";\r
str.charCodeAt();  // 65\r
"Z".charCodeAt() // 90\r
var str1 = 'a';\r
str1.charCodeAt();  // 97\r
\r
var num = 65;\r
String.fromCharCode(num);  // 'A'\r
\r
var num1 = 97;\r
String.fromCharCode(num1);  // 'a'
`,paraId:73,tocIndex:34},{value:`html\u6807\u7B7E\u5C5E\u6027\r
.attributes\r
getAttribute  \r
setAttribute("index","123")  \u6709\u5C31\u4FEE\u6539\uFF0C\u6CA1\u6709\u5C31\u589E\u52A0\r
\u6807\u7B7E\u53D8\u91CF\u540D.removeAttribute("\u5C5E\u6027\u540D")\r
oul.removeAttribute("index")  \u5220\u9664\r
\r
\u6DFB\u52A0\u6807\u7B7E\r
document.createElement() appendChild  insertBefore\r
\u5220\u9664\u6807\u7B7E\r
removeChild\r
\r
getComputedStyle(\u6807\u7B7E\u53D8\u91CF\u540D,\u4F2A\u5143\u7D20)\r
previousElementSibling \u4E0A\u4E00\u4E2A\u5144\u5F1F\u6807\u7B7E  \r
nextElementSibling  \u4E0B\u4E00\u4E2A\u5144\u5F1F\u6807\u7B7E\r
\u83B7\u53D6\u5B50\u6807\u7B7E\r
firstElementChild  lastEllementChild   children\r
\u83B7\u53D6\u7236\u6807\u7B7E\r
parentElemnent\r
\r
innerHTML \uFF1A\u83B7\u53D6\u6807\u7B7E\u5185\u90E8\u7684HTML\u4EE3\u7801\u3002\u4E00\u822C\u9488\u5BF9\u4E8E <\u6807\u7B7E\u540D></\u6807\u7B7E\u540D> \u8FD9\u79CD\u6807\u7B7E\r
innerText\uFF1A\u83B7\u53D6\u6807\u7B7E\u5185\u7684\u6587\u672C\u5185\u5BB9\u3002\u4E00\u822C\u9488\u5BF9\u4E8E <\u6807\u7B7E\u540D></\u6807\u7B7E\u540D> \u8FD9\u79CD\u6807\u7B7E\r
\r
// \u4F5C\u4E3A\u524D\u4E00\u4E2A\u540C\u80DE\u8282\u70B9\u63D2\u5165\r
element.insertAdjacentHTML("beforebegin", "<p>Hello world!</p>");\r
element.insertAdjacentText("beforebegin", "Hello world!");\r
// \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\u63D2\u5165\r
element.insertAdjacentHTML("afterbegin", "<p>Hello world!</p>");\r
element.insertAdjacentText("afterbegin", "Hello world!");\r
// \u4F5C\u4E3A\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\u63D2\u5165\r
element.insertAdjacentHTML("beforeend", "<p>Hello world!</p>");\r
element.insertAdjacentText("beforeend", "Hello world!");
`,paraId:74,tocIndex:35},{value:"\u7528\u6237\u548C\u9875\u9762\u4E4B\u95F4\u7684\u6240\u6709\u4EA4\u4E92\u52A8\u4F5C\u79F0\u4E3A\u4E8B\u4EF6\u3002\u4E00\u4E2A\u52A8\u4F5C\u5C31\u662F\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u70B9\u51FB\uFF0C\u53CC\u51FB\uFF0C\u9F20\u6807\u4E8B\u4EF6\uFF0C\u952E\u76D8\u4E8B\u4EF6",paraId:75,tocIndex:37},{value:"\u5F53js\u89E6\u53D1\u4E8B\u4EF6\u662F\uFF0C\u6267\u884C\u6307\u5B9A\u4EE3\u7801",paraId:75,tocIndex:37},{value:"\u4E8B\u4EF6\u4E09\u8981\u6570\uFF1A",paraId:75,tocIndex:37},{value:"\u4E8B\u4EF6\u6E90\uFF1A\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20",paraId:76,tocIndex:37},{value:"\u4E8B\u4EF6\u7C7B\u578B\uFF1A",paraId:76,tocIndex:37},{value:"\u9F20\u6807\u4E8B\u4EF6",paraId:77,tocIndex:37},{value:"\u952E\u76D8\u4E8B\u4EF6",paraId:77,tocIndex:37},{value:"\u70B9\u51FB",paraId:77,tocIndex:37},{value:"\u53CC\u51FB",paraId:77,tocIndex:37},{value:"\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF1A\u89E6\u53D1\u4E8B\u4EF6\u662F\u6267\u884C\u7684\u76F8\u5173\u4EE3\u7801",paraId:78,tocIndex:37},{value:"\u4E8B\u4EF6\u7684\u53D1\u5C55",paraId:79,tocIndex:37},{value:"DOM0\u7EA7&1\u7EA7\u4E8B\u4EF6\uFF1A\u6CA1\u6709\u7EDF\u4E00\u6807\u51C6\uFF0C\u662F\u6D4F\u89C8\u5668\u5382\u5546\u81EA\u5DF1\u5F00\u53D1\u5B9E\u73B0\u7684\uFF0C\u5927\u6982\u5B9E\u572898\u5E74\u5DE6\u53F3\uFF0C\u51FA\u73B0\u7B2C\u4E00\u4E2A\u89C4\u8303 DOM1\u7EA7",paraId:80,tocIndex:37},{value:"DOM2\u7EA7\uFF1A\u6709\u89C4\u8303\uFF0C\u80FD\u591F\u5BF9\u9875\u9762\u8FDB\u884C\u589E\u5220\u67E5\u6539\u4EE5\u53CAcss\u6837\u5F0F\u76F8\u5173\u64CD\u4F5C\uFF0C\u76EE\u524D\u6700\u666E\u53CA\u7684\u7248\u672C",paraId:80,tocIndex:37},{value:"DOM3\u7EA7\uFF1A\u9488\u5BF9xml\uFF0C\u5BF9DOM\u8FDB\u884C\u4E86\u6A21\u5757\u5316\uFF0C\u6DFB\u52A0\u4E86\u5F88\u591A\u65B0\u7279\u65B0\u3002",paraId:80,tocIndex:37},{value:`window.onload=function(){ // \u9875\u9762\u521D\u59CB\u5316\u540E\u6267\u884C\u7684\u51FD\u6570\u4EE3\u7801\r
};\r
\r
\r
// \u52A8\u6001\u7ED1\u5B9A,\u81EA\u5DF1\u5BFB\u627E\u4E8B\u4EF6\u6E90,\u7ED1\u5B9A\u4E8B\u4EF6\r
const obtn = document.querySelector("#btn")\r
obtn.onclick = function(){\r
    console.log(123);\r
}\r
// \u5355\u51FB\u4E8B\u4EF6\r
obtn.addEventListener("click",function(){\r
    console.log(123);\r
},false)\r
\r
// \u805A\u7126\u4E8B\u4EF6\r
obj.onfocus=function (){\r
    console.log(this.value);\r
}\r
// \u5931\u7126\u4E8B\u4EF6\r
obj.onblur=function (e){\r
    console.log(this.value);\r
}\r
\r
// \u591A\u9009\u7684\u4E8B\u4EF6\u7ED1\u5B9A\r
obj = document.querySelectorAll("[name='xueli']");\r
for (let I = 0; I < obj.length; I++) {\r
    const element = obj[I];\r
    element.onchange = function () {\r
        console.log(this.checked); //\u5224\u65AD\u9009\u4E2D\u72B6\u6001\r
        console.log(this.value);\r
    };\r
}\r
// \u79FB\u5165\r
  obj.onmouseenter=function (){\r
      console.log("onmouseenter");\r
  }\r
  // \u79FB\u9664\r
  obj.onmouseleave=function (){\r
      console.log("onmouseleave");\r
  }\r
  // \u76D6\u4F4F\r
  obj.onmouseover=function (){\r
      console.log("onmouseover");\r
  }\r
  // \u51FA\u76D6\r
  obj.onmouseout=function (){\r
      console.log("onmouseout");\r
  }\r
\r
// \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\r
e.stopPropagation()
`,paraId:81,tocIndex:38},{value:`\u5185\u8054\u7684\u5220\u9664\r
\u6807\u7B7E\u53D8\u91CF\u540D.removeAttribute("on\u4E8B\u4EF6\u7C7B\u578B");\r
\r
\u6807\u7B7E\u53D8\u91CF\u540D.on\u4E8B\u4EF6\u7C7B\u578B = null\r
\r
\u6807\u7B7E\u53D8\u91CF\u540D.removeEventListener("\u4E8B\u4EF6\u7C7B\u578B",\u51FD\u6570\u540D)
`,paraId:82,tocIndex:39},{value:"\u6982\u5FF5\uFF1A\u5728\u4E8B\u4EF6\u7ED1\u5B9A\u65F6\u81EA\u52A8\u4F20\u5165\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5728\u8BE5\u5BF9\u8C61\u8EAB\u4E0A\u627E\u5230\u4E00\u4E9B\u4E8B\u4EF6\u89E6\u53D1\u7684\u76F8\u5173\u4FE1\u606F",paraId:83,tocIndex:40},{value:"\u5E38\u7528",paraId:84,tocIndex:40},{value:`target\uFF1A\u8868\u793A\u7528\u6237\u5F53\u524D\u64CD\u4F5C\u7684\u6807\u7B7E\r
currentTarget\uFF1A\u8868\u793A\u4E8B\u4EF6\u9636\u6BB5\u6B63\u5728\u5904\u7406\u7684\u6807\u7B7E\r
pageX/pageY\uFF1A\u8868\u793A\u9F20\u6807\u76F8\u5BF9\u4E8E\u9875\u9762\u7684\u5750\u6807\r
clientX/clientY\uFF1A\u8868\u793A\u9F20\u6807\u76F8\u5BF9\u4E8E\u7A97\u53E3\u7684\u5750\u6807\r
offsetX/offsetY\uFF1A\u8868\u793A\u9F20\u6807\u76F8\u5BF9\u4E8E\u89E6\u53D1\u4E8B\u4EF6\u6807\u7B7E\u5DE6\u4E0A\u89D2\u7684\u4F4D\u7F6E\uFF08\u4E0D\u5305\u542B\u8FB9\u6846\uFF09\r
\r
preventDefault()\uFF1A\u963B\u6B62\u6807\u7B7E\u7684\u9ED8\u8BA4\u884C\u4E3A\r
stopPropagation()\uFF1A\u963B\u6B62\u4E8B\u4EF6\u6D41\u7684\u4F20\u64AD
`,paraId:85,tocIndex:40},{value:`let \u5B9A\u65F6\u5668\u6807\u8BC6\u7B26 = setTimeout(function () {\r
    //\u9700\u8981\u5EF6\u8FDF\u6267\u884C\u7684\u4EE3\u7801\r
},\u5EF6\u8FDF\u65F6\u95F4)//\u5355\u4F4D\u4E3A\u6BEB\u79D2\r
clearTimeout(\u5B9A\u65F6\u5668\u6807\u8BC6\u7B26)\r
\r
let \u5B9A\u65F6\u5668\u6807\u8BC6\u7B26 = setInterval(function () {\r
    //\u6BCF\u9694\u4E00\u6BB5\u65F6\u95F4\u9700\u8981\u6267\u884C\u7684\u4EE3\u7801\r
},\u95F4\u9694\u65F6\u95F4)//\u5355\u4F4D\u4E3A\u6BEB\u79D2\r
clearInterval(\u5B9A\u65F6\u5668\u6807\u8BC6\u7B26)
`,paraId:86,tocIndex:41},{value:"window\uFF1A\u6D4F\u89C8\u5668\u7A97\u53E3\u5BF9\u8C61",paraId:87,tocIndex:42},{value:"location\uFF1A\u6D4F\u89C8\u5668url\u5730\u5740\u5BF9\u8C61",paraId:88,tocIndex:42},{value:"history\uFF1A\u6D4F\u89C8\u5668\u6D4F\u89C8\u5386\u53F2\u8BB0\u5F55\u5BF9\u8C61",paraId:88,tocIndex:42},{value:"screen\uFF1A\u5C4F\u5E55\u5BF9\u8C61",paraId:88,tocIndex:42},{value:"navigator\uFF1A\u6D4F\u89C8\u5668\u5BFC\u822A\u5BF9\u8C61",paraId:88,tocIndex:42},{value:`location.href\uFF1A\u83B7\u5F97\u5F53\u524Durl\u4E2D\u5B8C\u6574\u5730\u5740\r
location.search\uFF1A\u83B7\u53D6\u4ECE\u5176\u4ED6\u7F51\u9875\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\uFF0C\u4ECE\u95EE\u597D\u5F00\u59CB\uFF0C\u9700\u8981\u914D\u5408api\u8F6C\u6362\u6570\u636E\r
\u9875\u9762\u8DF3\u8F6C\uFF1A\r
location.href\uFF1A\u4F1A\u751F\u6210\u4E00\u6761\u8BB0\u5F55\uFF0C\u80FD\u591F\u8FDB\u884C\u56DE\u9000\r
location.assign()\uFF1A\u4F1A\u751F\u6210\u4E00\u6761\u8BB0\u5F55\uFF0C\u80FD\u591F\u8FDB\u884C\u56DE\u9000\r
location.replace()\uFF1A\u4E0D\u4F1A\u751F\u6210\u4E00\u6761\u8BB0\u5F55\uFF0C\u4E0D\u80FD\u591F\u8FDB\u884C\u56DE\u9000
`,paraId:89,tocIndex:42},{value:`//1.\u5B57\u9762\u91CF  /\u6B63\u5219\u89C4\u5219/\u4FEE\u9970\u7B26\r
let regExp = /a/;\r
//2.new\u5173\u952E\u5B57  new RegExp("\u6B63\u5219\u89C4\u5219","\u4FEE\u9970\u7B26")\r
let regExp1 = new regExp("a","i")\r
\r
test()	\u5B57\u7B26\u4E32	\u68C0\u6D4B\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u89C4\u5219	\u5E03\u5C14\u7C7B\u578B\r
exec()	\u5B57\u7B26\u4E32	\u68C0\u6D4B\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u89C4\u5219	\u4E0D\u5305\u542B\u8FD4\u56DEnull\u6216\u8005\u662F\u6570\u7EC4\r
compilte()	\u5B57\u7B26\u4E32	\u4FEE\u6539\u6B63\u5219\u89C4\u5219	\u65E0\r
\r
const userExp = new RegExp(username);\r
userExp.test(element['username']);
`,paraId:90,tocIndex:43},{value:"\u65B9\u62EC\u53F7\u89C4\u5219",paraId:91,tocIndex:44},{value:"\u8868\u8FBE\u5F0F",paraId:92,tocIndex:44},{value:"\u63CF\u8FF0",paraId:92,tocIndex:44},{value:"/[abc]/",paraId:92,tocIndex:44},{value:"\u5305\u542B[]\u4E2D\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26",paraId:92,tocIndex:44},{value:"/[^abc]/",paraId:92,tocIndex:44},{value:"\u5305\u542B\u9664\u4E86[]\u4E2D\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26",paraId:92,tocIndex:44},{value:"/[0-9]/",paraId:92,tocIndex:44},{value:"\u5305\u542B\u4EFB\u610F\u6570\u5B57",paraId:92,tocIndex:44},{value:"/[a-z]/",paraId:92,tocIndex:44},{value:"\u5305\u542B\u4EFB\u610F\u5C0F\u5199\u5B57\u6BCD",paraId:92,tocIndex:44},{value:"/[A-Z]/",paraId:92,tocIndex:44},{value:"\u5305\u542B\u4EFB\u610F\u5927\u5199\u5B57\u6BCD",paraId:92,tocIndex:44},{value:"/[A-Za-z0-9]/",paraId:92,tocIndex:44},{value:"\u5305\u542B\u6240\u6709\u5B57\u6BCD\u548C\u6570\u5B57",paraId:92,tocIndex:44},{value:`\u5143\u5B57\u7B26\r
|   \u8868\u8FBE\u5F0F   | \u63CF\u8FF0     |\r
| ---- | ---- | ---- |\r
| /\\w/ | \u5305\u542B\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u4EE5\u53CA\u4E0B\u5212\u7EBF\u4E2D\u4EFB\u610F\u5B57\u7B26/[A-Za-z0-9_]/ |\r
| /\\W/ | \u5305\u542B\u9664\u4E86\u6570\u5B57\u3001\u5B57\u6BCD\u3001\u4EE5\u53CA\u4E0B\u5212\u7EBF\u4E2D\u4EFB\u610F\u5B57\u7B26/[^A-Za-z0-9_]/ |\r
| /\\d/ | \u5305\u542B\u4EFB\u610F\u6570\u5B57/[0-9]/ |\r
| /\\D/ | \u5305\u542B\u9664\u4E86\u4EFB\u610F\u6570\u5B57\u4E4B\u5916\u7684\u5B57\u7B26/[^0-9]/ |\r
| /\\s/ | \u5305\u542B\u7A7A\u683C\u5B57\u7B26 |\r
| /\\S/ | \u5305\u542B\u9664\u4E86\u7A7A\u767D\u5B57\u7B26\u4EE5\u5916\u7684\u4EFB\u610F\u5B57\u7B26 |`,paraId:93,tocIndex:44},{value:`\u91CF\u8BCD\r
|   \u8868\u8FBE\u5F0F   | \u63CF\u8FF0     |\r
| ---- | ---- |\r
| /n+/ | \u5305\u542B\u7684\u5B57\u7B26n\u81F3\u5C11\u51FA\u73B0\u4E00\u6B21 |\r
| /n*/ | \u5305\u542B\u7684\u5B57\u7B26nk\u53EF\u6709\u53EF\u65E0\uFF0C\u6B21\u6570>=0 |\r
| /n?/ | \u5305\u542B\u7684\u5B57\u7B26n\u53EA\u80FD\u51FA\u73B01\u6B21\u62160\u6B21 |\r
| /n{x}/ | \u5305\u542B\u7684\u5B57\u7B26n\u53EA\u80FD\u51FA\u73B0x\u6B21 |\r
| /n{x,}/ | \u5305\u542B\u7684\u5B57\u7B26n\u81F3\u5C11\u51FA\u73B0x\u6B21 |\r
| /n{x,y}/ | \u5305\u542B\u7684\u5B57\u7B26n\u81F3\u5C11\u51FA\u73B0x\u6B21\uFF0C\u6700\u591A\u51FA\u73B0y\u6B21 |`,paraId:94,tocIndex:44},{value:"\u5F00\u59CB\u548C\u7ED3\u675F",paraId:95,tocIndex:44},{value:"\u8868\u8FBE\u5F0F",paraId:96,tocIndex:44},{value:"\u63CF\u8FF0",paraId:96,tocIndex:44},{value:"/^n/",paraId:96,tocIndex:44},{value:"\u5339\u914D\u4EE5n\u5F00\u5934",paraId:96,tocIndex:44},{value:"/n$/",paraId:96,tocIndex:44},{value:"\u5339\u914D\u4EE5n\u7ED3\u5C3E",paraId:96,tocIndex:44},{value:`\u5176\u5B83\u5B57\u7B26\r
|   \u8868\u8FBE\u5F0F   | \u63CF\u8FF0     |\r
| ---- | ---- |\r
| | | \u6216\u8005 |\r
| () | \u5206\u7EC4 |\r
| \\ | \u8F6C\u4E49\u7B26 |`,paraId:97,tocIndex:44},{value:"\u8868\u8FBE\u5F0F",paraId:98,tocIndex:45},{value:"\u63CF\u8FF0",paraId:98,tocIndex:45},{value:"i",paraId:98,tocIndex:45},{value:"\u4E0D\u533A\u5206\u5927\u5C0F\u5199",paraId:98,tocIndex:45},{value:"g",paraId:98,tocIndex:45},{value:"\u5BF9\u6240\u6709\u5B57\u7B26\u4E32\u90FD\u8981\u8FDB\u884C\u5339\u914D",paraId:98,tocIndex:45},{value:"m",paraId:98,tocIndex:45},{value:"\u591A\u884C\u5339\u914D",paraId:98,tocIndex:45},{value:"var  \u4F5C\u7528\u57DF\u4E3A\u51FD\u6570\u4F53\u5185\u90E8",paraId:99,tocIndex:46},{value:"let \u4F5C\u7528\u57DF\u4E3A\u5757\u7EA7",paraId:99,tocIndex:46},{value:"const  \u7528\u5B83\u58F0\u660E\u53D8\u91CF\u65F6\u5FC5 \u987B\u540C\u65F6\u521D\u59CB\u5316\u53D8\u91CF\uFF0C\u4E14\u5C1D\u8BD5\u4FEE\u6539const\u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u5BFC\u81F4\u8FD0\u884C\u65F6\u9519\u8BEF\u3002",paraId:99,tocIndex:46},{value:`ECMAScript 6\u89C4\u8303\u65B0\u589E\u4E86Object.is()\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E0E===\u5F88\u50CF\uFF0C\r
console.log(Object.is(true, 1)); // false\r
console.log(Object.is({}, {})); // false\r
console.log(Object.is("2", 2)); // false\r
// \u6B63\u786E\u76840\u3001-0\u3001+0\u76F8\u7B49/\u4E0D\u7B49\u5224\u5B9A\r
console.log(Object.is(+0, -0)); // false\r
console.log(Object.is(+0, 0)); // true\r
console.log(Object.is(-0, 0)); // false\r
// \u6B63\u786E\u7684NaN\u76F8\u7B49\u5224\u5B9A\r
console.log(Object.is(NaN, NaN)); // true
`,paraId:100,tocIndex:47},{value:`let message = "some string";\r
console.log(typeof message); // "string"\r
console.log(typeof(message)); // "string"\r
console.log(typeof 95); // "number"\r
\r
"undefined"\u8868\u793A\u503C\u672A\u5B9A\u4E49\uFF1B\r
"boolean"\u8868\u793A\u503C\u4E3A\u5E03\u5C14\u503C\uFF1B\r
"string"\u8868\u793A\u503C\u4E3A\u5B57\u7B26\u4E32\uFF1B\r
"number"\u8868\u793A\u503C\u4E3A\u6570\u503C\uFF1B\r
"object"\u8868\u793A\u503C\u4E3A\u5BF9\u8C61\uFF08\u800C\u4E0D\u662F\u51FD\u6570\uFF09\u6216null\uFF1B\r
"function"\u8868\u793A\u503C\u4E3A\u51FD\u6570\uFF1B\r
"symbol"\u8868\u793A\u503C\u4E3A\u7B26\u53F7\u3002
`,paraId:101,tocIndex:48},{value:`\u8F6C\u4E3A\u6570\u503C\r
Number()\r
let num1 = Number("Hello world!"); // NaN\r
let num2 = Number(""); // 0\r
let num3 = Number("000011"); // 11\r
let num4 = Number(true); // 1\r
\r
parseInt()\r
let num1 = parseInt("1234blue"); // 1234\r
let num2 = parseInt(""); // NaN\r
let num3 = parseInt("0xA"); // 10\uFF0C\u89E3\u91CA\u4E3A\u5341\u516D\u8FDB\u5236\u6574\u6570\r
let num4 = parseInt(22.5); // 22\r
let num5 = parseInt("70"); // 70\uFF0C\u89E3\u91CA\u4E3A\u5341\u8FDB\u5236\u503C\r
let num6 = parseInt("0xf"); // 15\uFF0C\u89E3\u91CA\u4E3A\u5341\u516D\u8FDB\u5236\u6574\u6570\r
let num1 = parseInt("10", 2); // 2\uFF0C\u6309\u4E8C\u8FDB\u5236\u89E3\u6790\r
let num2 = parseInt("10", 8); // 8\uFF0C\u6309\u516B\u8FDB\u5236\u89E3\u6790\r
let num3 = parseInt("10", 10); // 10\uFF0C\u6309\u5341\u8FDB\u5236\u89E3\u6790\r
let num4 = parseInt("10", 16); // 16\uFF0C\u6309\u5341\u516D\u8FDB\u5236\u89E3\u6790\r
\r
parseFloat()\r
let num1 = parseFloat("1234blue"); // 1234\uFF0C\u6309\u6574\u6570\u89E3\u6790\r
let num2 = parseFloat("0xA"); // 0\r
let num3 = parseFloat("22.5"); // 22.5\r
let num4 = parseFloat("22.34.5"); // 22.34\r
let num5 = parseFloat("0908.5"); // 908.5\r
let num6 = parseFloat("3.125e7"); // 31250000
`,paraId:102,tocIndex:49},{value:`\u65B0\u589E\u5B9A\u4E49\u65B9\u6CD5\r
let lastName = \`Jingleheime\r
rschmidt\`; // \u53EF\u6362\u884C \u53EF\u8FDB\u884C\u63D2\u503C\r
let value = 5;\r
// \u4EE5\u524D\uFF0C\u5B57\u7B26\u4E32\u63D2\u503C\u662F\u8FD9\u6837\u5B9E\u73B0\u7684\uFF1A\r
let interpolatedString =\r
value + ' to the ' + (value * value);\r
// \u73B0\u5728\uFF0C\u53EF\u4EE5\u7528\u6A21\u677F\u5B57\u9762\u91CF\u8FD9\u6837\u5B9E\u73B0\uFF1A\r
let interpolatedTemplateLiteral =\r
\`\${ value } to the  power is \${ value * value }\`;\r
\r
\r
\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\r
toString()\r
let age = 11;\r
let ageAsString = age.toString(); // \u5B57\u7B26\u4E32"11"\r
let found = true;\r
let foundAsString = found.toString(); // \u5B57\u7B26\u4E32"true"\r
 \u8F6C\u6362\u6570\u503C\u65F6\u53EF\u63A5\u53D7\u53C2\u6570\uFF0C\u8868\u793A\u8FD4\u56DE\u7684\u6570\u503C\u7684\u8FDB\u5236\r
let num = 10;\r
console.log(num.toString()); // "10"\r
console.log(num.toString(2)); // "1010"\r
console.log(num.toString(8)); // "12"\r
console.log(num.toString(10)); // "10"\r
console.log(num.toString(16)); // "a"
`,paraId:103,tocIndex:50},{value:`1.\u6570\u5B57\r
const num = 2333333;   \r
num.toLocaleString('zh',{style:'decimal'});  //2,333,333              \r
num.toLocaleString('zh',{style:'percent'});   // 233,333,300%                  \r
num.toLocaleString('zh',{style:'currency'});     //  \u62A5\u9519  \r
let num = 2333.3;\r
//\u6574\u6570\u6700\u5C11\u4F4D\r
num.toLocaleString('zh', { minimumIntegerDigits: 5 }); \r
//02,333.3//\u5982\u679C\u4E0D\u60F3\u6709\u5206\u9694\u7B26\uFF0C\u53EF\u4EE5\u6307\u5B9AuseGrouping\u4E3Afalse\r
num.toLocaleString('zh', { minimumIntegerDigits: 5, useGrouping: false }); //02333.3\r
//\u5C0F\u6570\u6700\u5C11\u4F4D\r
num.toLocaleString('zh', { minimumFractionDigits: 2, useGrouping: false }); //2333.30\r
num = 666.666\r
//\u5C0F\u6570\u6700\u591A\u4F4D\r
num.toLocaleString('zh', { maximumFractionDigits: 2, useGrouping: false }); //666.67\r
\r
const num = 1234.5;\r
//\u6700\u5C11\u6709\u6548\u4F4D\u6570\r
num.toLocaleString('zh', { minimumSignificantDigits: 6, useGrouping: false }); //1234.50\r
//\u6700\u5927\u6709\u6548\u4F4D\u6570\r
num.toLocaleString('zh', { maximumSignificantDigits: 4, useGrouping: false }); //1235\r
\r
2.\u8D27\u5E01\r
const num = 2333333\r
num.toLocaleString('zh',{style:'currency' , currency:'CNY' }); //\uFFE52,333,333.00\r
// CNY2,333,333.00\r
num.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'code' });  \r
 //2,333,333.00\u4EBA\u6C11\u5E01\r
num.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'name' }); \r
hour12 \u8868\u793A\u7684\u662F\u4F7F\u7528\u5341\u4E8C\u5C0F\u65F6\u5236\u8FD8\u662F\u4F7F\u7528\u4E8C\u5341\u56DB\u5C0F\u65F6\u5236\r
const date = new Date();\r
date.toLocaleString('zh', { hour12: true });  //2018/4/4 \u4E0B\u53486:57:36\r
date.toLocaleString('zh', { hour12: false });  //2018/4/4 18:57:36\r
\r
\u5269\u4E0B\u7684\u683C\u5F0F\u5316\u5C31\u662F\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u661F\u671F\u7B49\u9009\u9879\u4E86\uFF0C\u5177\u4F53\u7684\u5C5E\u6027\u4E00\u5171\u6709\u4E5D\u4E2A\uFF0C\u5206\u522B\u662F \r
weekday\u3001era\u3001year\u3001month\u3001day\u3001hour\u3001minute\u3001second \u4E0E timeZoneName
`,paraId:104,tocIndex:51},{value:`\u67E5\u627E\u5B57\u7B26\u4E32indexOf()\r
let stringValue = "hello world";\r
console.log(stringValue.indexOf("o", 6)); // 7\r
console.log(stringValue.lastIndexOf("o", 6)); // 4\r
\r
repeat() \u8868\u793A\u8981\u5C06\u5B57\u7B26\u4E32\u590D\u5236\u591A\u5C11\u6B21\r
let stringValue = "na ";\r
console.log(stringValue.repeat(16) + "batman");\r
// na na na na na na na na na na na na na na na na batman\r
\r
search()\u65B9\u6CD5 \u5B57\u7B26\u4E32\u641C\u7D22\u8FD4\u56DE\u6A21\u5F0F\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\u4F4D\u7F6E\u7D22\u5F15\uFF0C\u5982\u679C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE-1\u3002\r
let text = "cat, bat, sat, fat";\r
let pos = text.search(/at/);\r
console.log(pos); // 1\r
\r
replace()\u65B9\u6CD5 \u66FF\u6362\r
let text = "cat, bat, sat, fat";\r
let result = text.replace("at", "ond");\r
console.log(result); // "cond, bat, sat, fat"\r
result = text.replace(/at/g, "ond");\r
console.log(result); // "cond, bond, sond, fond"\r
\r
// \u5339\u914D\u9996\u90E8\r
let str="abcd123";\r
console.log(str.startsWith("ab")); //true\r
// \u5339\u914D\u5C3E\u90E8\r
let str="abcd123";\r
console.log(str.endsWith("23")); //true\r
\u622A\u53D6\u5B57\u7B26  \r
substr(index,number)  index:\u5F00\u59CB\u7D22\u5F15 number\uFF1A\u5F80\u53F3\u622A\u53D6\u7684\u5B57\u7B26\u6570\u91CF\r
substring(start,end)  \u5F00\u59CB\u7D22\u5F15\u4E0E\u7ED3\u675F\u7D22\u5F15\uFF0C\u5305\u542B\u5F00\u59CB\u4E0D\u5305\u542B\u7D22\u5F15\r
slice(start,end) \u5F00\u59CB\u7D22\u5F15\u4E0E\u7ED3\u675F\u7D22\u5F15\uFF0C\u5305\u542B\u5F00\u59CB\u4E0D\u5305\u542B\u7D22\u5F15,\u53EF\u4E3A\u8D1F\u6570\r
\r
\r
split("^") \u6309\u6307\u5B9A\u5B57\u7B26\u62C6\u5206\u4E4B\u540E\u8FD4\u56DE\u62C6\u5206\u540E\u7684\u6570\u636E\u7EC4\u6210\u7684\u6570\u7EC4\r
\r
JS\u5B57\u7B26(\u5B57\u6BCD)\u4E0EASCII\u7801\u8F6C\u6362\r
\u5927\u5199\u5B57\u6BCDA-Z\u5BF9\u5E94\u7684ASCII\u7801\u503C\u662F65-90\r
\r
\u5C0F\u5199\u5B57\u6BCDa-z\u5BF9\u5E94\u7684ASCII\u7801\u503C\u662F97-122\r
var str = "A";\r
str.charCodeAt();  // 65\r
"Z".charCodeAt() // 90\r
var str1 = 'a';\r
str1.charCodeAt();  // 97\r
\r
var num = 65;\r
String.fromCharCode(num);  // 'A'\r
\r
var num1 = 97;\r
String.fromCharCode(num1);  // 'a'\r
\r
\u8F6C\u5927\u5199\r
let str1 = "AbCdEf"\r
str1.toUpperCase()\r
console.log(str1) // \u8F93\u51FA\uFF1AABCDEF\r
\r
\u8F6C\u5C0F\u5199\r
let str3 = "AbCdEf"\r
str3.toLowerCase()\r
console.log(str3) // \u8F93\u51FA\uFF1Aabcdef
`,paraId:105,tocIndex:52},{value:`let s = "Nicholas";\r
let b = true;\r
let i = 22;\r
let u;\r
let n = null;\r
let o = new Object();\r
console.log(typeof s); // string\r
console.log(typeof i); // number\r
console.log(typeof b); // boolean\r
console.log(typeof u); // undefined\r
console.log(typeof n); // object\r
console.log(typeof o); // object
`,paraId:106,tocIndex:54},{value:"typeof\u867D\u7136\u5BF9\u539F\u59CB\u503C\u5F88\u6709\u7528\uFF0C\u4F46\u5B83\u5BF9\u5F15\u7528\u503C\u7684\u7528\u5904\u4E0D\u5927\u3002\u6211\u4EEC\u901A\u5E38\u4E0D\u5173 \u5FC3\u4E00\u4E2A\u503C\u662F\u4E0D\u662F\u5BF9\u8C61\uFF0C\u800C\u662F\u60F3\u77E5\u9053\u5B83\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u5BF9\u8C61\u3002   \u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A \u95EE\u9898\uFF0CECMAScript\u63D0\u4F9B\u4E86instanceof\u64CD\u4F5C\u7B26",paraId:107,tocIndex:55},{value:`console.log(person instanceof Object); // \u53D8\u91CFperson\u662FObject\u5417\uFF1F\r
console.log(colors instanceof Array); // \u53D8\u91CFcolors\u662FArray\u5417\uFF1F\r
console.log(pattern instanceof RegExp); // \u53D8\u91CFpattern\u662FRegExp\u5417\uFF1F
`,paraId:108,tocIndex:55},{value:`Object.prototype.toString.call('stjd')\r
//"[object String]"\r
 \r
Object.prototype.toString.call(1)\r
//"[object Number]"\r
 \r
Object.prototype.toString.call(true)\r
//"[object Boolean]"\r
\r
Object.prototype.toString.call(null)\r
//"[object Null]"\r
\r
Object.prototype.toString.call(undefined)\r
//"[object Undefined]"
`,paraId:109,tocIndex:56},{value:`\u6807\u7B7E\u51FD\u6570\u4F1A\u63A5\u6536\u88AB\u63D2\u503C\u8BB0\u53F7\u5206\u9694\u540E\u7684\u6A21\u677F\u548C\u5BF9\u6BCF\u4E2A\u8868\u8FBE\u5F0F\u6C42\u503C\u7684\u7ED3\u679C\u3002\u6807\u7B7E\u51FD\u6570\u672C\u8EAB\u662F\u4E00\u4E2A\u5E38\u89C4\u51FD\u6570\uFF0C\r
\u901A\u8FC7\u524D\u7F00\u5230\u6A21\u677F\u5B57\u9762\u91CF\u6765\u5E94\u7528\u81EA\u5B9A\u4E49\u884C\u4E3A\uFF0C\u5982\u4E0B\u4F8B\u6240\u793A\u3002\r
let a = 6;\r
let b = 9;\r
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {\r
console.log(strings);\r
console.log(aValExpression);\r
console.log(bValExpression);\r
console.log(sumExpression);\r
return 'foobar';\r
}\r
let untaggedResult = \`\${ a } + \${ b } = \${ a + b }\`;\r
let taggedResult = simpleTag\`\${ a } + \${ b } = \${ a + b }\`;\r
// ["", " + ", " = ", ""]\r
// 6\r
// 9\r
// 15\r
console.log(untaggedResult); // "6 + 9 = 15"\r
console.log(taggedResult); // "foobar"\r
\r
##\r
\r
\u56E0\u4E3A\u8868\u8FBE\u5F0F\u53C2\u6570\u7684\u6570\u91CF\u662F\u53EF\u53D8\u7684\uFF0C\u6240\u4EE5\u901A\u5E38\u5E94\u8BE5\u4F7F\u7528\u5269\u4F59\u64CD\u4F5C\u7B26\r
\uFF08rest operator\uFF09\u5C06\u5B83\u4EEC\u6536\u96C6\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\uFF1A\r
let a = 6;\r
let b = 9;\r
function simpleTag(strings, ...expressions) {\r
console.log(strings);\r
for(const expression of expressions) {\r
console.log(expression);\r
}\r
return 'foobar';\r
}\r
let taggedResult = simpleTag\`\${ a } + \${ b } = \${ a + b }\`;\r
// let taggedResult = simpleTag(\`\${ a } + \${ b } = \${ a + b }\`);\r
// ["", " + ", " = ", ""]\r
// 6\r
// 9\r
// 15\r
console.log(taggedResult); // "foobar"
`,paraId:110,tocIndex:58},{value:"ECMAScript\u6570\u7EC4\u4E5F\u662F\u4E00\u7EC4\u6709\u5E8F\u7684\u6570\u636E\uFF0C\u4F46\u8DDF\u5176\u4ED6\u8BED\u8A00\u4E0D\u540C \u7684\u662F\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u69FD\u4F4D\u53EF\u4EE5\u5B58\u50A8\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\u3002",paraId:111,tocIndex:60},{value:`let arr = new Array();\r
arr[0] = 1;\r
arr[1] = 2;\r
let colors = new Array("red", "blue", "green");\r
let arr = [1, "2", 3, "4", 5, "6", 7, "8", 9];
`,paraId:112,tocIndex:61},{value:`\u957F\u5EA6 arr.length)
`,paraId:113,tocIndex:62},{value:`\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u6570\u7EC4\uFF0C\u5E76\u5C06\u65B0\u7684\u6570\u7EC4\u8FD4\u56DE\uFF0C\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u5BF9\u539F\u6570\u7EC4\u4EA7\u751F\u5F71\u54CD\r
var arr2 = [5,6,7,8];\r
var arr3 = arr.concat(arr2);\r
console.log(arr3); // \u8FDE\u63A5\u4E4B\u540E\u8FD4\u56DE\u7684\u6570\u7EC4\u4E3A\uFF1A[1, 2, 3, 4, 5, 6, 7, 8]
`,paraId:114,tocIndex:63},{value:`join() \u628A\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\u653E\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u5143\u7D20\u901A\u8FC7\u6307\u5B9A\u7684\u5206\u9694\u7B26\u8FDB\u884C\u5206\u9694\u3002\r
var arr = ['xiao','lin','qiqi','mingtian'];\r
var arr2 = arr.join(',');\r
console.log(arr2); \r
// \u6839\u636E','\u9694\u5F00\u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\u4E3A\uFF1A"xiao,lin,qiqi,mingtian"
`,paraId:115,tocIndex:64},{value:`\u5728\u7B2C\u4E00\u4E2A\u4F4D\u7F6E\u63D2\u503C\u5E76\u8FD4\u56DE\u65B0\u6570\u7EC4\u957F\u5EA6,\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\r
left.unshift(1,2,3)  \r
\u5220\u9664\u7B2C\u4E00\u4E2A\u503C\u5E76\u8FD4\u56DE\u8BE5\u503C\r
left.shift()  \r
  \r
pop()  push()\r
\r
\u53D6\u5B57\u7B26\u4E32\u7684\u67D0\u4E2A\u90E8\u5206\uFF0C\u5E76\u4EE5\u65B0\u7684\u5B57\u7B26\u4E32\u8FD4\u56DE\u88AB\u63D0\u53D6\u7684\u90E8\u5206\u3002  \r
start \u4E3A\u8D77\u59CB\u503C\uFF0C\u5FC5\u987B\u8981\uFF1B \u7B97start \u4E0D\u7B97end\r
arr.slice(start, end); \r
\r
\u53D6\u5B57\u7B26\u4E32\u7684\u67D0\u4E2A\u90E8\u5206\uFF0C\u5E76\u4EE5\u65B0\u7684\u5B57\u7B26\u4E32\u8FD4\u56DE\u88AB\u63D0\u53D6\u7684\u90E8\u5206\u3002 \r
\u8FD9\u79CD\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u59CB\u6570\u7EC4\u3002\r
splice(first,second,third)\r
first \u4E3A\u8D77\u59CB\u503C\uFF0C\u5FC5\u987B\u8981\uFF1B second\u9700\u5220\u9664\u7684\u5143\u7D20\u4E2A\u6570 \uFF1Bthird\uFF0C\u8981\u589E\u52A0\u7684\u5143\u7D20\r
\r
indexOf()\u548ClastIndexOf()\u90FD\u8FD4\u56DE\u8981\u67E5\u627E\u7684\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u4F4D\u7F6E\uFF0C\r
\u5982\u679C\u6CA1\u627E\u5230\u5219\u8FD4\u56DE-1\u3002includes()\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8868\u793A\u662F\u5426\u81F3\u5C11\u627E\u5230\r
\u4E00\u4E2A\u4E0E\u6307\u5B9A\u5143\u7D20\u5339\u914D\u7684\u9879\u3002\r
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];\r
alert(numbers.indexOf(4)); // 3\r
alert(numbers.lastIndexOf(4)); // 5\r
alert(numbers.includes(4)); // true\r
\r
\u5B57\u7B26\u4E32\u8F6C\u6570\u7EC4 split()\r
var str ="\u4E0A\u6D77@\u4E0A\u6D77\u5E02@\u95F5\u884C\u533A@\u5434\u4E2D\u8DEF";\r
var splitAdd = str.split("@");\r
console.log(splitAdd) // ["\u4E0A\u6D77", "\u4E0A\u6D77\u5E02", "\u95F5\u884C\u533A", "\u5434\u4E2D\u8DEF"]\r
\r
every()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u5982\u679C\u5BF9\u6BCF\u4E00\u9879\u51FD\u6570\u90FD\r
\u8FD4\u56DEtrue\uFF0C\u5219\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DEtrue\u3002\r
filter()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u51FD\u6570\u8FD4\u56DEtrue\u7684\u9879\u4F1A\r
\u7EC4\u6210\u6570\u7EC4\u4E4B\u540E\u8FD4\u56DE\u3002\r
forEach()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C\u3002\r
map()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u8FD4\u56DE\u7531\u6BCF\u6B21\u51FD\u6570\u8C03\u7528\u7684\r
\u7ED3\u679C\u6784\u6210\u7684\u6570\u7EC4\u3002\r
some()\uFF1A\u5BF9\u6570\u7EC4\u6BCF\u4E00\u9879\u90FD\u8FD0\u884C\u4F20\u5165\u7684\u51FD\u6570\uFF0C\u5982\u679C\u6709\u4E00\u9879\u51FD\u6570\u8FD4\u56DE\r
true\uFF0C\u5219\u8FD9\u4E2A\u65B9\u6CD5\u8FD4\u56DEtrue\u3002\r
\u8FD9\u4E9B\u65B9\u6CD5\u90FD\u4E0D\u6539\u53D8\u8C03\u7528\u5B83\u4EEC\u7684\u6570\u7EC4\u3002\r
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];\r
let everyResult = numbers.every((item, index, array) => item > 2);\r
alert(everyResult); // false\r
let someResult = numbers.some((item, index, array) => item > 2);\r
alert(someResult); // true
`,paraId:116,tocIndex:65},{value:`let arr=[97, 57, 32, 87, 65, 78, 89];\r
//\u6CA1\u6709\u521D\u59CB\u503C\r
let sum = arr.reduce(function(prev, cur, index, array){\r
    return prev + cur;\r
    });\r
//\u6709\u521D\u59CB\u503C 0\r
let sum = arr.reduce(function(prev, cur, index, array){\r
    return prev + cur;\r
    },0);
`,paraId:117,tocIndex:66},{value:"BOM-\uFF08browser Object model\uFF09-\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B",paraId:118,tocIndex:68},{value:" \u3002JavaScript\u4F1A\u628A\u6D4F\u89C8\u5668 \u7684\u4E00\u4E2A\u6807\u7B7E\u9875(\u5373\u7F51\u9875)\u4F5C\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u5B58\u5728\u4E8E\u7A0B\u5E8F\u5F53\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u7684api\u6765\u64CD\u4F5C\u6807\u7B7E\u9875\u672C\u8EAB\u3002\u6BD4\u5982\u65B0\u5EFA\u6216\u5173\u95ED\u6807\u7B7E\u9875\uFF0C\u8DF3\u8F6C\u9875\u9762\u3001\u524D\u8FDB\u6216\u540E\u9000\u7B49\u529F\u80FD\u3002",paraId:118,tocIndex:68},{value:`alert()  : \u7A97\u53E3\u5F39\u51FA \uFF1Bprompt  \u7A97\u53E3\u8F93\u5165\uFF1B\r
confirm :\u9875\u9762\u4E0A\u5F39\u51FA\u4E00\u4E2A\u786E\u8BA4\u6846\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2Atrue\u6216false\u3002\u70B9\u51FB\u786E\u5B9A\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse\r
open :\u65B0\u5EFA\u4E00\u4E2A\u9875\u9762\u3002\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u53D7\u6D4F\u89C8\u5668\u7684\u5B89\u5168\u673A\u5236\uFF0C\u53EF\u80FD\u65E0\u6CD5\u6267\u884C\u3002\r
close \uFF1A\u5173\u95ED\u5F53\u524D\u9875\u9762\r
setInterval : \u95F4\u9694\u5668 clearInterval :\u6E05\u9664\u95F4\u9694\u5668 setTimeout :\u5B9A\u65F6\u5668 clearTimeout\uFF1A\u6E05\u9664\u5B9A\u65F6\u5668
`,paraId:119,tocIndex:69},{value:`setTimeout(() => {\r
            \r
}, timeout);\r
timeout \u4E3A\u5EF6\u8FDF\u65F6\u95F4 \u5355\u4F4D\u6BEB\u79D2 1000\u6BEB\u79D2=1\u79D2
`,paraId:120,tocIndex:70},{value:`\u505C\u6B62\u8FD8\u672A\u6267\u884C\u7684\u5B9A\u65F6\u5668\r
clearTimeout(\u5B9A\u65F6\u5668\u6807\u8BC6)\r
let timer setTimeout(() => {\r
            \r
}, timeout);\r
clearTimeout();
`,paraId:121,tocIndex:71},{value:`\u6BCF\u9694\u4E00\u5B9A\u65F6\u95F4\u53CD\u590D\u6267\u884C\r
let inv= setInterval(() => {\r
    console.log("\u5495");\r
}, 20000);
`,paraId:122,tocIndex:72},{value:`\u6E05\u9664\u5B9A\u65F6\u5668\r
let inv2= setInterval(() => {\r
    console.log("\u5471");\r
}, 20000);\r
\r
let timer3 =setTimeout(() => {\r
    clearInterval(inv2);       \r
}, 20000);
`,paraId:123,tocIndex:73},{value:"location\u5C5E\u6027\u4E00\u822C\u5F15\u7528\u81EALocation\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u7528\u4E8E\u83B7\u53D6\u6216\u8005\u8BBE\u7F6E\u5F53\u524D\u7684URL\u3002",paraId:124,tocIndex:74},{value:`window.location === document.location;  //true  \u5747\u5F15\u7528\u81EALocation\u5BF9\u8C61\uFF1B\r
URL\u7684\u4E00\u822C\u7EC4\u6210\u5305\u62EC\r
eg: protocol://[user[:password]@]hostname:[port][/path][?query][#fragment]\r
\r
\u83B7\u53D6url\u7684\u65B9\u6CD5\r
location.href\r
location.toString()\r
location.toLocaleString()\r
document.URL\r
\r
\u8BBE\u7F6Eurl\u7684\u65B9\u6CD5\r
location.href = " xxx";	//\u4E0D\u52A0\u534F\u8BAE\u4F1A\u9ED8\u8BA4\u4E3A\u76F8\u5BF9\u8DEF\u5F84\uFF0Clocation="xxx"\u7C7B\u4F3C\r
\r
\u5176\u4ED6\u5C5E\u6027\r
location.host  			//\u4E3B\u673A\u52A0\u7AEF\u53E3\u53F7\r
location.hostname 		//\u4E3B\u673A\r
location.port			//\u7AEF\u53E3\u53F7\r
location.protocol  		//\u534F\u8BAE\r
location.pathname 		//\u8DEF\u5F84\r
location.hash			//\u7247\u6BB5\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u7528\u4E8E\u4FDD\u5B58\u7F51\u9875\u72B6\u6001\r
location.search			//\u8FD4\u56DE\u94FE\u63A5\u5185\u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u83B7\u53D6\u9875\u9762\u5730\u5740\u4E2D\u7684\u6570\u636E\r
\r
let strCode=decodeURIComponent(location.search	);  //\u6C49\u5B57\u4E71\u7801\u5904\u7406\r
\u65B9\u6CD5\r
location.assign('http://www.baidu.com'); \u5728\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u4E2D\u589E\u52A0\u4E00\u6761\u65B0\u7EAA\u5F55;\r
location.replace()	//\u4F7F\u7528\u65B0URL\u8986\u76D6\u6D4F\u89C8\u5668\u7684\u5F53\u524D\u5386\u53F2\u8BB0\u5F55\uFF1B\r
location.reload(true)	// \u5F3A\u5236\u4ECE\u670D\u52A1\u5668\u7AEF\u52A0\u8F7D //\u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u9875\u9762\uFF0C\u9ED8\u8BA4\u4E0D\u4F20\u53C2\u5982\u679C\u5B58\u5728\u7F13\u5B58\u4F1A\u4ECE\r
\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\u52A0\u8F7D\uFF1B\u5982\u679C\u4F20\u5165Boolean\u7C7B\u578B\u7684true\uFF0C\u5219\u4F1A\u5F3A\u5236\u4ECE\u670D\u52A1\u5668\u52A0\u8F7D\uFF1B
`,paraId:125,tocIndex:74},{value:"\u6817\u5B50",paraId:126,tocIndex:74},{value:`location.assign("\u76EE\u6807url") ; //\r
location.relpace("\u76EE\u6807url") ; //\r
location.href("\u76EE\u6807url") ; //\r
location.reload();
`,paraId:127,tocIndex:74},{value:"History \u5BF9\u8C61\u6700\u521D\u8BBE\u8BA1\u6765\u8868\u793A\u7A97\u53E3\u7684\u6D4F\u89C8\u5386\u53F2\u3002\u4F46\u51FA\u4E8E\u9690\u79C1\u65B9\u9762\u7684\u539F\u56E0\uFF0CHistory \u5BF9\u8C61\u4E0D\u518D\u5141\u8BB8\u811A\u672C\u8BBF\u95EE\u5DF2\u7ECF\u8BBF\u95EE\u8FC7\u7684\u5B9E\u9645 URL\u3002\u552F\u4E00\u4FDD\u6301\u4F7F\u7528\u7684\u529F\u80FD\u53EA\u6709 back()\u3001forward() \u548C go() \u65B9\u6CD5\u3002",paraId:128,tocIndex:75},{value:`    window.history.go(-2);  //\u540E\u9000\u4E24\u9875   \r
    window.history.go(-1);  //\u540E\u9000\u4E00\u9875   \r
    window.history.go(1);   //\u524D\u8FDB\u4E00\u9875\r
    window.history.go(2);   //\u524D\u8FDB\u4E24\u9875\r
   \r
    window.history.back();//\u540E\u9000\u4E00\u9875\r
    window.history.forward();//\u524D\u8FDB\u4E00\u9875\r
// \u540E\u9000\u4E00\u9875\r
history.go(-1);\r
// \u524D\u8FDB\u4E00\u9875\r
history.go(1);\r
// \u524D\u8FDB\u4E24\u9875\r
history.go(2);
`,paraId:129,tocIndex:75},{value:"\u6536\u96C6\u4E86\u8DDF\u6D4F\u89C8\u5668\u672C\u8EAB\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u6D4F\u89C8\u5668\u7248\u672C\uFF0C\u5F53\u524D\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7248\u672C\u7B49",paraId:130,tocIndex:76},{value:`\u8FD4\u56DE\u6D4F\u89C8\u5668\u7684\u7248\u672C\u4FE1\u606F\r
navigator.userAgent
`,paraId:131,tocIndex:76},{value:"\u6982\u5FF5\uFF1A\u6536\u96C6\u5C4F\u5E55\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u6BD4\u5982\u662F\u5426\u6A2A\u5C4F\u3001\u8272\u5F69\u5EA6\u4E4B\u7C7B\u7684.HTML5\u9488\u5BF9screen\u65B0\u589E\u4E86\u6765\u83B7\u53D6\u5C4F\u5E55\u7684\u89D2\u5EA6\u4FE1\u606F\uFF0C\u7AD6\u5C4F\u6A21\u5F0F\u89D2\u5EA6\u8FD4\u56DE0\uFF0C\u6A2A\u5C4F\u8FD4\u56DE90",paraId:132,tocIndex:77},{value:`conslog.log(screen);\r
conslog.log(screen.orientation.angle)
`,paraId:133,tocIndex:77},{value:"\u6982\u5FF5",paraId:134,tocIndex:78},{value:"DOM(\u6587\u6863\u5BF9\u8C61\u6A21\u578B-document object model)\u3002JavaScript\u4F1A\u5C06\u6587\u6863(HTML\u9875\u9762)\u770B\u6210\u4E00\u7CFB\u5217\u6807\u7B7E\u7684\u96C6\u5408\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u7684api\u6765\u64CD\u4F5CHTML\u6587\u6863\uFF0C\u6BD4\u5982\u5BF9\u6807\u7B7E\u8FDB\u884C\u589E\u5220\u67E5\u6539\u64CD\u4F5C\uFF0C\u6216\u8005\u4FEE\u6539css\u3002\u8FD9\u6837\u7684\u7684\u8BDD\u501F\u52A9JavaScript\u80FD\u591F\u5B9E\u73B0\u52A8\u6001\u9875\u9762\u3002",paraId:135,tocIndex:78},{value:`html\u6807\u7B7E\u5C5E\u6027\r
.attributes\r
getAttribute  \r
setAttribute("index","123")  \u6709\u5C31\u4FEE\u6539\uFF0C\u6CA1\u6709\u5C31\u589E\u52A0\r
\r
oul.removeAttribute("index")  \u5220\u9664\r
\u6DFB\u52A0\u6807\u7B7E\r
document.createElement() appendChild  insertBefore\r
\u5220\u9664\u6807\u7B7E\r
removeChild()\r
\r
getComputedStyle(\u6807\u7B7E\u53D8\u91CF\u540D,\u4F2A\u5143\u7D20)\r
previousElementSibling \u4E0A\u4E00\u4E2A\u5144\u5F1F\u6807\u7B7E  \r
nextElementSibling  \u4E0B\u4E00\u4E2A\u5144\u5F1F\u6807\u7B7E\r
\u83B7\u53D6\u5B50\u6807\u7B7E\r
firstElementChild  lastElementChild   children\r
\u83B7\u53D6\u7236\u6807\u7B7E\r
parentElemnent\r
\r
innerHTML \uFF1A\u83B7\u53D6\u6807\u7B7E\u5185\u90E8\u7684HTML\u4EE3\u7801\u3002\u4E00\u822C\u9488\u5BF9\u4E8E <\u6807\u7B7E\u540D></\u6807\u7B7E\u540D> \u8FD9\u79CD\u6807\u7B7E\r
innerText\uFF1A\u83B7\u53D6\u6807\u7B7E\u5185\u7684\u6587\u672C\u5185\u5BB9\u3002\u4E00\u822C\u9488\u5BF9\u4E8E <\u6807\u7B7E\u540D></\u6807\u7B7E\u540D> \u8FD9\u79CD\u6807\u7B7E
`,paraId:136,tocIndex:79},{value:`//\u6839\u636E\u552F\u4E00\u7684id\u6765\u83B7\u53D6\u8FD9\u4E2A\u8282\u70B9\r
document.getElementById() \r
//\u6839\u636Eclassname\u6765\u83B7\u53D6\u591A\u4E2A\u8282\u70B9\r
document.getElementsByClassName()\r
//\u6839\u636E\u6807\u7B7E\u540D\u5B57\u6765\u83B7\u53D6\u8282\u70B9\r
document.getElementByTabName()\r
//\u6839\u636E\u6807\u7B7E\u8EAB\u4E0Aname\u5C5E\u6027\r
document.getElementByName()\r
\r
//\u901A\u7528api\r
document.querySelector("\u9009\u62E9\u5668")  //\u9ED8\u8BA4\u8FD4\u56DE\u627E\u5230\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9\r
document.querySelectorAll() //\u9ED8\u8BA4\u8FD4\u56DE\u4E00\u4E2A\u4F2A\u6570\u7EC4\uFF0C\u901A\u8FC7[\u4E0B\u6807\u7F16\u53F7] \u53EF\u4EE5\u4F7F\u7528 forEach\r
\r
\u901A\u8FC7 document.getElement\u83B7\u53D6\u662F\u52A8\u6001\u7684 \uFF1B document.querySelector\u662F\u9759\u6001\u7684\uFF0C\r
\r
# \u83B7\u53D6\u6240\u6709\u5C5E\u6027 attributes\r
attributes\u5C5E\u6027\u4E2D\u7684\u6BCF\u4E2A\u8282\u70B9\u7684nodeName\u662F\u5BF9\u5E94\u5C5E\u6027\u7684\u540D\u5B57\uFF0CnodeValue\u662F\u5C5E\u6027\u7684\u503C\u3002\r
\r
let att = element.attributes;\r
let id=att["id"].nodeValue;\r
\r
getComputedStyle\u5F97\u5230\u7ED3\u679C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u5F53\u524D\u8FD9\u4E2A\u6807\u7B7E\u6700\u7EC8\u6837\u5F0F\u3002\u8C8C\u4F3C\u8FD8\u662F\u52A8\u6001\r
\u6240\u6709\u7ED3\u679C\u90FD\u662Fread-only\uFF0C\u53EA\u8BFB\u4E0D\u53EF\u4FEE\u6539
`,paraId:137,tocIndex:80},{value:`// \u4FEE\u6539\u6587\u672C\u5185\u5BB9\uFF0C\u7565low\uFF0C\u5E94\u7528\u573A\u666F\u5F88\u5C0F\r
const comment = prompt("\u8BF7\u8F93\u5165\u4F60\u7684\u8BC4\u8BBA")\r
// innerHTML\u5C06\u4E00\u4E32\u6807\u7B7E\u5B57\u7B26\u4E32,\u8986\u76D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u5143\u7D20\r
const oul = document.querySelector(".oul")\r
//\u5148\u83B7\u53D6\u539F\u672C\u7684\u5185\u5BB9\r
let temp = oul.innerHTML\r
temp+=\`<li>\${comment}</li>\`\r
// \u5C06\u62FC\u63A5\u597D\u7684\u7ED3\u679C,\u8986\u76D6\u4E4B\u524D\u7ED3\u679C\r
oul.innerHTML = temp\r
console.log(temp);\r
// document.createElement\u521B\u5EFA\u4E00\u4E2AHTML\u8282\u70B9\r
const oul = document.querySelector(".oul")\r
const oli = document.createElement("li")\r
console.log(oli);\r
oli.innerText = "\u8BC4\u8BBA\u4E09\uFF1A"\r
// appendChild\u5F97\u5230\u4E00\u4E2A\u8282\u70B9\uFF0C\u9ED8\u8BA4\u5C06\u8FD9\u4E2A\u8282\u70B9\u6DFB\u52A0\u5230\u6307\u5B9A\u7236\u7EA7\u4E0B\u9762\r
// \u9ED8\u8BA4\u6DFB\u52A0\u5230\u6700\u540E\r
oul.appendChild(oli)\r
//oul.insertBefore(oli,oli1)  oli\u662F\u65B0\u52A0\u5165\u7684\u8282\u70B9,oli1 \u662F\u53C2\u7167\u8282\u70B9
`,paraId:138,tocIndex:81},{value:`// \r
const oli = document.querySelector(".com")\r
// \u8FD9\u4E2A\u51FD\u6570remove\u53EF\u4EE5\u5B9E\u73B0\u5220\u9664\u81EA\u5DF1\r
oli.remove()\r
const oli = document.querySelector(".com")\r
// \u65B9\u6848\u4E8C:\r
const oul = document.querySelector(".oul")\r
oul.removeChild(oli)
`,paraId:139,tocIndex:82},{value:`window.onload=function(){ // \u9875\u9762\u521D\u59CB\u5316\u540E\u6267\u884C\u7684\u51FD\u6570\u4EE3\u7801\r
};\r
\r
\r
// \u52A8\u6001\u7ED1\u5B9A,\u81EA\u5DF1\u5BFB\u627E\u4E8B\u4EF6\u6E90,\u7ED1\u5B9A\u4E8B\u4EF6\r
const obtn = document.querySelector("#btn")\r
obtn.onclick = function(){\r
    console.log(123);\r
}\r
// \u5355\u51FB\u4E8B\u4EF6\r
obtn.addEventListener("click",function(){\r
    console.log(123);\r
},false)\r
\r
// \u805A\u7126\u4E8B\u4EF6\r
obj.onfocus=function (){\r
    console.log(this.value);\r
}\r
// \u5931\u7126\u4E8B\u4EF6\r
obj.onblur=function (e){\r
    console.log(this.value);\r
}\r
\r
// \u591A\u9009\u7684\u4E8B\u4EF6\u7ED1\u5B9A\r
obj = document.querySelectorAll("[name='xueli']");\r
for (let I = 0; I < obj.length; I++) {\r
    const element = obj[I];\r
    element.onchange = function () {\r
        console.log(this.checked); //\u5224\u65AD\u9009\u4E2D\u72B6\u6001\r
        console.log(this.value);\r
    };\r
}\r
// \u79FB\u5165\r
  obj.onmouseenter=function (){\r
      console.log("onmouseenter");\r
  }\r
  // \u79FB\u9664\r
  obj.onmouseleave=function (){\r
      console.log("onmouseleave");\r
  }\r
  // \u76D6\u4F4F\r
  obj.onmouseover=function (){\r
      console.log("onmouseover");\r
  }\r
  // \u51FA\u76D6\r
  obj.onmouseout=function (){\r
      console.log("onmouseout");\r
  }\r
\r
// \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\r
e.stopPropagation()
`,paraId:140,tocIndex:84},{value:`\u589E\u52A0\u4E8B\u4EF6\r
let scr=window.addEventListener("scroll", (event) => {\r
        if (document.compatMode == "CSS1Compat") {\r
        console.log("CSS1Compat",document.documentElement.scrollTop);\r
        changeHeadr(document.documentElement.scrollTop);\r
\r
        } else {\r
        console.log(document.body.scrollTop);\r
        }\r
        });\r
\r
scrollTop  \u4E3A\u8DDD\u79BB\u9876\u90E8\u5F80\u4E0B\u79FB\u52A8\u4E86\u591A\u5C11px\u3002\r
/**\r
 * todo \u6839\u636E\u6EDA\u52A8\u8DDD\u79BB\u5B9E\u73B0\u4E0D\u540C\u5934\u90E8\u5207\u6362\r
 * @param {\u6EDA\u52A8\u8DDD\u79BB} scrollTop \r
 */\r
function changeHeadr(scrollTop) {\r
    let objFirst= document.getElementById("js-header-first");\r
    let objSecond= document.getElementById("js-header-second");\r
\r
    if (scrollTop>140) {\r
        // objSecond.setAttribute("opacity",1);\r
        // objSecond.setAttribute("opacity",1);\r
        // objFirst.setAttribute("opacity",0);\r
        let num=parseFloat(scrollTop/600);\r
        if (num>1) {\r
            num=1;\r
        }\r
        // mark \u672C\u6B21\u6D4B\u8BD5\u4F7F\u7528\u7684\u5185\u8054\uFF0C\u4E0D\u5E94\u8BE5\u7528\u5185\u8054\uFF0C\u540E\u9762\u5C1D\u8BD5\u4FEE\u6B63\r
        objSecond.style.opacity=num;\r
        objFirst.style.opacity="0";\r
\r
        console.log(num);\r
    }else{\r
        objSecond.style.opacity="0";\r
        objFirst.style.opacity="1";\r
    }\r
}
`,paraId:141,tocIndex:85},{value:`const obtn = document.querySelector(".btn")\r
obtn.removeAttribute("onclick")\r
\r
const obtn = document.querySelector(".btn")\r
obtn.onclick = function(){\r
alert(123)\r
}\r
// function\u4EE3\u8868\u6CA1\u6709\u4EFB\u4F55\u4E00\u4E2A\u5730\u65B9\u4F7F\u7528,\u5185\u5B58\u56DE\u6536function\r
obtn.onclick = null\r
\r
\r
obtn.removeEventListener("click",play,false)
`,paraId:142,tocIndex:86},{value:`click : \u5355\u51FB\u4E8B\u4EF6  element.onclick = function () { };\r
\r
focus\uFF1A\u5F53\u5143\u7D20\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u4E0D\u5192\u6CE1\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\r
\u652F\u6301\u3002\r
blur\uFF1A\u5F53\u5143\u7D20\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\u3002\u8FD9\u4E2A\u4E8B\u4EF6\u4E0D\u5192\u6CE1\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\r
\u6301\u3002\r
\r
change\uFF1A\u7528\u4E8E\u4E0B\u62C9\u6846\uFF0C
`,paraId:143,tocIndex:87},{value:"\u4E0D\u8003\u8651\u5B89\u5168\u6027\u4EE5\u53CA\u5E76\u53D1\u5EA6",paraId:144,tocIndex:88},{value:"ajax+php+mysql \u611F\u89C9\u76F4\u63A5\u8D77\u98DE",paraId:145,tocIndex:88},{value:`$.ajax({\r
    url:"http://localhost:81/test.php",\r
    type:"post",\r
    data:{"id":"123","pwd":"123456"},\r
    dataType:"text",\r
    success:function(data,textStatus,jqxhr){\r
        console.log("__\u6210\u529F__");\r
        console.log(data);\r
        console.log(textStatus);\r
        console.log(jqxhr);\r
        console.log("______");\r
    },\r
    error:function(jqxhr,textStatus,error){\r
        console.log("__\u5931\u8D25__");\r
        console.log(error);\r
        console.log(textStatus);\r
        console.log(jqxhr);\r
        console.log("******");  \r
    \r
    }\r
})
`,paraId:146,tocIndex:88},{value:"\u7406\u89E3JSON\u6700\u5173\u952E\u7684\u4E00\u70B9\u662F\u8981\u628A\u5B83\u5F53\u6210\u4E00\u79CD\u6570\u636E\u683C\u5F0F\uFF0C\u800C\u4E0D\u662F\u7F16\u7A0B\u8BED \u8A00\u3002JSON\u4E0D\u5C5E\u4E8EJavaScript\uFF0C\u5B83\u4EEC\u53EA\u662F\u62E5\u6709\u76F8\u540C\u7684\u8BED\u6CD5\u800C\u5DF2\u3002",paraId:147,tocIndex:89},{value:`JSON.stringify()\u548CJSON.parse()\u3002\r
stringify()\u53EF\u4EE5\u628Ajavascript json\u5BF9\u8C61\u8F6C\u4E3A\u5B57\u7B26\u4E32;\r
let book = {\r
title: "Professional JavaScript",\r
authors: [\r
"Nicholas C. Zakas",\r
"Matt Frisbie"\r
],\r
edition: 4,\r
year: 2017\r
};\r
let jsonText = JSON.stringify(book);\r
\r
parse() \u53EF\u4EE5\u628Ajson\u683C\u5F0F\u5B57\u7B26\u4E32\u8F6C\u4E3AJavaScript\u5BF9\u8C61;\r
let jsonObj = JSON.parse(jsonText);
`,paraId:148,tocIndex:89},{value:`\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u8FC7\u6EE4\u5668\uFF0C\u53EF\u4EE5\u662F\u6570\u7EC4\u6216\u51FD\u6570\uFF1B\r
\u5982\u679C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u90A3\u4E48JSON.stringify()\u8FD4\u56DE\u7684\u7ED3\u679C\u53EA\u4F1A\u5305\u542B\u8BE5\u6570\u7EC4\u4E2D\u5217\u51FA\u7684\u5BF9\u8C61\u5C5E\u6027\u3002\r
\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\uFF1A\r
  let book = {\r
    title: "Professional JavaScript",\r
    authors: [\r
      "Nicholas C. Zakas",\r
      "Matt Frisbie"\r
    ],\r
    edition: 4,\r
    year: 2017\r
  };\r
  let jsonText = JSON.stringify(book, ["title", "edition"]);\r
\r
JSON\u5B57\u7B26\u4E32\u4E2D\u53EA\u4F1A\u5305\u542B\u8FD9\u4E24\u4E2A\u5C5E\u6027\uFF1A\r
{"title":"Professional JavaScript","edition":4}\r
\r
\u5982\u679C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5219\u884C\u4E3A\u53C8\u6709\u4E0D\u540C\u3002\u63D0\u4F9B\u7684\u51FD\u6570\u63A5\u6536\u4E24\r
\u4E2A\u53C2\u6570\uFF1A\u5C5E\u6027\u540D\uFF08key\uFF09\u548C\u5C5E\u6027\u503C\uFF08value\uFF09\u3002\u4E0B\u9762\u770B\u4E00\u4E2A\u6817\u5B50\uFF1A\r
    let book = {\r
    title: "Professional JavaScript",\r
    authors: [\r
    "Nicholas C. Zakas",\r
    "Matt Frisbie"\r
    ],\r
    edition: 4,\r
    year: 2017\r
    };\r
    let jsonText = JSON.stringify(book, (key, value) => {\r
    switch(key) {\r
    case "authors":\r
    return value.join(",")\r
    case "year":\r
    return 5000;\r
    case "edition":\r
    return undefined;\r
    default:\r
    return value;  //\u7B2C\u4E00\u6B21\u8C03\u7528\u5176\u5B9Ekey\u7B49\u4E8E""\r
    }\r
    });\r
\r
\u6700\u7EC8\u5F97\u5230\u7684JSON\u5B57\u7B26\u4E32\u662F\u8FD9\u6837\u7684\uFF1A\r
{"title":"Professional JavaScript","authors":"Nicholas C. Zakas,Matt\r
Frisbie","year":5000}\r
JSON.stringify()\u65B9\u6CD5\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u63A7\u5236\u7F29\u8FDB\u548C\u7A7A\u683C\uFF0C\u5728\u8FD9\u4E2A\u53C2\u6570\u662F\u6570\u503C\u65F6\uFF0C\u8868\u793A\u6BCF\u4E00\u7EA7\u7F29\u8FDB\u7684\u7A7A\u683C\u6570\u3002\r
\u4F8B\u5982\uFF0C\u6BCF\u7EA7\u7F29\u8FDB4\u4E2A\u7A7A\u683C\uFF0C\u53EF\u4EE5\u8FD9\u6837\uFF1A\r
let book = {\r
title: "Professional JavaScript",\r
authors: [\r
"Nicholas C. Zakas",\r
"Matt Frisbie"\r
],\r
edition: 4,\r
year: 2017\r
};\r
let jsonText = JSON.stringify(book, null, 4);\r
\u8FD9\u6837\u5F97\u5230\u7684jsonText\u683C\u5F0F\u5982\u4E0B\uFF1A\r
{\r
    "title": "Professional JavaScript",\r
    "authors": [\r
        "Nicholas C. Zakas",\r
        "Matt Frisbie"\r
    ],\r
    "edition": 4,\r
    "year": 2017\r
}\r
\u6CE8\u610F\uFF0C\u9664\u4E86\u7F29\u8FDB\uFF0CJSON.stringify()\u65B9\u6CD5\u8FD8\u4E3A\u65B9\u4FBF\u9605\u8BFB\u63D2\u5165\u4E86\u6362\u884C\u7B26\u3002\u8FD9\u4E2A\u884C\u4E3A\u5BF9\u4E8E\u6240\u6709\u6709\u6548\u7684\u7F29\u8FDB\u53C2\u6570\r
\u90FD\u4F1A\u53D1\u751F\u3002\uFF08\u53EA\u7F29\u8FDB\u4E0D\u6362\u884C\u4E5F\u6CA1\u4EC0\u4E48\u7528\u3002\uFF09\u6700\u5927\u7F29\u8FDB\u503C\u4E3A10\uFF0C\u5927\u4E8E10\u7684\u503C\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u4E3A10\u3002
`,paraId:149,tocIndex:90},{value:"JSON.parse()\u65B9\u6CD5\u4E5F\u53EF\u4EE5\u63A5\u6536\u4E00\u4E2A\u989D\u5916\u7684\u53C2\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u4F1A\u9488\u5BF9\u6BCF\u4E2A\u952E/ \u503C\u5BF9\u90FD\u8C03\u7528\u4E00\u6B21\u3002\u4E3A\u533A\u522B\u4E8E\u4F20\u7ED9JSON.stringify()\u7684\u8D77\u8FC7\u6EE4\u4F5C\u7528\u7684\u66FF\u4EE3 \u51FD\u6570\uFF08replacer\uFF09\uFF0C\u8FD9\u4E2A\u51FD\u6570\u88AB\u79F0\u4E3A\u8FD8\u539F\u51FD\u6570\uFF08reviver\uFF09\u3002\u5B9E\u9645\u4E0A\u5B83\u4EEC\u7684 \u683C\u5F0F\u5B8C\u5168\u4E00\u6837\uFF0C\u5373\u8FD8\u539F\u51FD\u6570\u4E5F\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u5C5E\u6027\u540D\uFF08key\uFF09\u548C\u5C5E\u6027\u503C \uFF08value\uFF09\uFF0C\u53E6\u5916\u4E5F\u9700\u8981\u8FD4\u56DE\u503C\u3002 \u5982\u679C\u8FD8\u539F\u51FD\u6570\u8FD4\u56DEundefined\uFF0C\u5219\u7ED3\u679C\u4E2D\u5C31\u4F1A\u5220\u9664\u76F8\u5E94\u7684\u952E\u3002\u5982\u679C\u8FD4\u56DE \u4E86\u5176\u4ED6\u4EFB\u4F55\u503C\uFF0C\u5219\u8BE5\u503C\u5C31\u4F1A\u6210\u4E3A\u76F8\u5E94\u952E\u7684\u503C\u63D2\u5165\u5230\u7ED3\u679C\u4E2D\u3002\u8FD8\u539F\u51FD\u6570\u7ECF \u5E38\u88AB\u7528\u4E8E\u628A\u65E5\u671F\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3ADate\u5BF9\u8C61\u3002\u4F8B\u5982\uFF1A",paraId:150,tocIndex:91},{value:`let book = {\r
title: "Professional JavaScript",\r
authors: [\r
"Nicholas C. Zakas",\r
"Matt Frisbie"\r
],\r
edition: 4,\r
year: 2017,\r
releaseDate: new Date(2017, 11, 1)\r
};\r
let jsonText = JSON.stringify(book);\r
let bookCopy = JSON.parse(jsonText,\r
(key, value) => key == "releaseDate" ? new Date(value) : value);\r
alert(bookCopy.releaseDate.getFullYear());\r
\r
\u4EE5\u4E0A\u4EE3\u7801\u5728book\u5BF9\u8C61\u4E2D\u589E\u52A0\u4E86releaseDate\u5C5E\u6027\uFF0C\u662F\u4E00\u4E2ADate\u5BF9\u8C61\u3002\u8FD9\u4E2A\r
\u5BF9\u8C61\u5728\u88AB\u5E8F\u5217\u5316\u4E3AJSON\u5B57\u7B26\u4E32\u540E\uFF0C\u53C8\u88AB\u91CD\u65B0\u89E3\u6790\u4E3A\u4E00\u4E2A\u5BF9\r
\u8C61bookCopy\u3002\u8FD9\u91CC\u7684\u8FD8\u539F\u51FD\u6570\u4F1A\u67E5\u627E"releaseDate"\u952E\uFF0C\u5982\u679C\u627E\u5230\u5C31\u4F1A\u6839\r
\u636E\u5B83\u7684\u65E5\u671F\u5B57\u7B26\u4E32\u521B\u5EFA\u65B0\u7684Date\u5BF9\u8C61\u3002\u5F97\u5230\u7684bookCopy.releaseDate\u5C5E\r
\u6027\u53C8\u53D8\u56DE\u4E86Date\u5BF9\u8C61\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8C03\u7528\u5176getFullYear()\u65B9\u6CD5\u3002
`,paraId:151,tocIndex:91}]},49359:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(14952);const r=[{value:`globalThis  : \u6D4F\u89C8\u5668nodejs\u7EDF\u4E00\u5168\u5C40\u5BF9\u8C61  \u6D4F\u89C8\u5668\u7684window\uFF0Cnode\u7684global\r
__dirname :\u5F53\u524D\u6A21\u5757\u7684\u76EE\u5F55\u540D\r
\u2014\u2014filename: \u5F53\u524D\u6A21\u5757\u7684\u6587\u4EF6\u540D  // \u6253\u5370: /Users/mjr   \u8DEF\u5F84\u52A0\u6587\u4EF6\u540D\r
setImmediate(callback[, ...args]) // \u5728\u672C\u8F6E Node.js \u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F\u65F6\u8C03\u7528\u7684\u51FD\u6570\r
process.nextTick(callback[, ...args]) //\u5728 JavaScript \u5806\u6808\u4E0A\u7684\u5F53\u524D\u64CD\u4F5C\u8FD0\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u4E14\u5728\u5141\u8BB8\u4E8B\u4EF6\u5FAA\u73AF\u7EE7\u7EED\u4E4B\u524D\uFF0C\u6B64\u961F\u5217\u5C06\u88AB\u5B8C\u5168\u6392\u7A7A\u3002
`,paraId:0,tocIndex:1},{value:"\u540E\u7AEF\u6A21\u5757\u5316\uFF1AcommonJs\u89C4\u8303",paraId:1,tocIndex:2},{value:"\u66B4\u9732  module.exports\u5728\u4E00\u4E2Ajs\u4E2D\u53EA\u80FD\u66B4\u9732\u4E00\u6761\u6570\u636E\uFF0C\u90A3\u5982\u679C\u9700\u8981\u66B4\u9732\u591A\u4E2A\u6570\u636E\u53EF\u4EE5\u653E\u5728\u4E00\u4E2A\u5BF9\u8C61\u4E2D",paraId:2,tocIndex:2},{value:`const a = 10;\r
function fn(){\r
    return 100\r
}\r
// \u53D8\u91CFa\u88AB\u66B4\u9732\u4E86\r
// module.exports = a\r
// module.exports = fn\r
module.exports = {\r
    a,\r
    fn\r
}
`,paraId:3,tocIndex:2},{value:"\u5F15\u5165",paraId:4,tocIndex:2},{value:`// \u8FD9\u4E2A\u5730\u65B9\u7684{}\u662F\u5728 \u7ED3\u6784\u8D4B\u503C\r
const {a,fn} = require('./a')\r
console.log(a)\r
console.log(fn())
`,paraId:5,tocIndex:2},{value:"events \u6A21\u5757\u53EA\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF1A events.EventEmitter\u3002EventEmitter \u7684\u6838\u5FC3\u5C31 \u662F\u4E8B\u4EF6\u53D1\u5C04\u4E0E\u4E8B\u4EF6\u76D1\u542C\u5668\u529F\u80FD\u7684\u5C01\u88C5\u3002",paraId:6,tocIndex:4},{value:"EventEmitter\u5E38\u7528\u7684API\u3002",paraId:7,tocIndex:4},{value:"EventEmitter.on(event, listener) \u4E3A\u6307\u5B9A\u4E8B\u4EF6\u6CE8\u518C\u4E00\u4E2A\u76D1\u542C\u5668\uFF0C\u63A5\u53D7\u4E00\u4E2A\u5B57 \u7B26\u4E32 event \u548C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570 listener\u3002",paraId:8,tocIndex:4},{value:"EventEmitter.emit(event, [arg1], [arg2], [...]) \u53D1\u5C04 event \u4E8B\u4EF6\uFF0C\u4F20 \u9012\u82E5\u5E72\u53EF\u9009\u53C2\u6570\u5230\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u53C2\u6570\u8868\u3002",paraId:8,tocIndex:4},{value:"EventEmitter.once(event, listener) \u4E3A\u6307\u5B9A\u4E8B\u4EF6\u6CE8\u518C\u4E00\u4E2A\u5355\u6B21\u76D1\u542C\u5668\uFF0C\u5373 \u76D1\u542C\u5668\u6700\u591A\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21\uFF0C\u89E6\u53D1\u540E\u7ACB\u523B\u89E3\u9664\u8BE5\u76D1\u542C\u5668\u3002",paraId:8,tocIndex:4},{value:"EventEmitter.removeListener(event, listener) \u79FB\u9664\u6307\u5B9A\u4E8B\u4EF6\u7684\u67D0\u4E2A\u76D1\u542C \u5668\uFF0Clistener \u5FC5\u987B\u662F\u8BE5\u4E8B\u4EF6\u5DF2\u7ECF\u6CE8\u518C\u8FC7\u7684\u76D1\u542C\u5668\u3002",paraId:8,tocIndex:4},{value:"EventEmitter.removeAllListeners([event]) \u79FB\u9664\u6240\u6709\u4E8B\u4EF6\u7684\u6240\u6709\u76D1\u542C\u5668\uFF0C \u5982\u679C\u6307\u5B9A event\uFF0C\u5219\u79FB\u9664\u6307\u5B9A\u4E8B\u4EF6\u7684\u6240\u6709\u76D1\u542C\u5668\u3002",paraId:8,tocIndex:4},{value:"emitter.eventNames()\uFF1A\u8FD4\u56DE\u5F53\u524D EventEmitter\u5BF9\u8C61\u6CE8\u518C\u7684\u4E8B\u4EF6\u5B57\u7B26\u4E32\u6570\u7EC4\uFF1B",paraId:8,tocIndex:4},{value:`var events = require('events');\r
var emitter = new events.EventEmitter();\r
emitter.on('someEvent', function(arg1, arg2) {\r
	console.log('listener1', arg1, arg2);\r
});\r
emitter.on('someEvent', function(arg1, arg2) {\r
	console.log('listener2', arg1, arg2);\r
});\r
emitter.emit('someEvent', 'byvoid', 1991);
`,paraId:9,tocIndex:4},{value:"fs \u6A21\u5757\u662F\u6587\u4EF6\u64CD\u4F5C\u7684\u5C01\u88C5\uFF0C\u5B83\u63D0\u4F9B\u4E86\u6587\u4EF6\u7684\u8BFB\u53D6\u3001\u5199\u5165\u3001\u66F4\u540D\u3001\u5220\u9664\u3001\u904D\u5386\u76EE\u5F55",paraId:10,tocIndex:5},{value:"fs.readFile(path[, options], callback)\uFF1A\u8BFB\u53D6\u6587\u4EF6\u7684\u5185\u5BB9\uFF1B",paraId:11,tocIndex:5},{value:"fs.writeFile(file, data[, options], callback)\uFF1A\u5728\u6587\u4EF6\u4E2D\u5199\u5165\u5185\u5BB9\uFF1B",paraId:12,tocIndex:5},{value:"fs.open() \u65B9\u6CD5\u7528\u4E8E\u5206\u914D\u65B0\u7684\u6587\u4EF6\u63CF\u8FF0\u7B26\u3002",paraId:13,tocIndex:5},{value:"fs.mkdirSync()\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\u5939\uFF1A",paraId:14,tocIndex:5},{value:"fs.readdir(path[, options], callback)  :\u8BFB\u53D6\u76EE\u5F55\u7684\u5185\u5BB9\u3002",paraId:15,tocIndex:5},{value:`// \u5982\u679CuploadDir\u76EE\u5F55\u4E0D\u5B58\u5728\u5C31\u521B\u5EFA\u76EE\u5F55\r
// existsSync \u5982\u679C\u8DEF\u5F84\u5B58\u5728\u5219\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002\r
// mkdirSync \u540C\u6B65\u5730\u521B\u5EFA\u76EE\u5F55\u3002 \u8FD4\u56DE undefined \u6216\u521B\u5EFA\u7684\u7B2C\u4E00\u4E2A\u76EE\u5F55\u8DEF\u5F84\uFF08\u5982\u679C recursive \u4E3A true\uFF09\r
if (!fs.existsSync(uploadDir)) {\r
    fs.mkdirSync(uploadDir)\r
}
`,paraId:16,tocIndex:5},{value:"Node.js\u4E2D\u6709\u56DB\u79CD\u57FA\u672C\u6D41\u7C7B\u578B\uFF1A",paraId:17,tocIndex:6},{value:"Writable\uFF1A\u53EF\u4EE5\u5411\u5176\u5199\u5165\u6570\u636E\u7684\u6D41\uFF08\u4F8B\u5982 fs.createWriteStream()\uFF09\u3002",paraId:18,tocIndex:6},{value:"Readable\uFF1A\u53EF\u4EE5\u4ECE\u4E2D\u8BFB\u53D6\u6570\u636E\u7684\u6D41\uFF08\u4F8B\u5982 fs.createReadStream()\uFF09\u3002",paraId:18,tocIndex:6},{value:"Duplex\uFF1A\u540C\u65F6\u4E3AReadable\u548CWritable\uFF08\u4F8B\u5982 net.Socket\uFF09\u3002",paraId:18,tocIndex:6},{value:"Transform\uFF1ADuplex\u53EF\u4EE5\u5728\u5199\u5165\u548C\u8BFB\u53D6\u6570\u636E\u65F6\u4FEE\u6539\u6216\u8F6C\u6362\u6570\u636E\u7684\u6D41\uFF08\u4F8B\u5982zlib.createDeflate()\uFF09\u3002",paraId:18,tocIndex:6},{value:"\u6817\u5B50\uFF1A",paraId:19,tocIndex:6},{value:`//\u521B\u5EFA\u6587\u4EF6\u7684Readable\r
 const read = fs.createReadStream("./foo.txt");\r
// \u4E8B\u4EF6\u76D1\u542C\r
//\u76D1\u542C\u8BFB\u53D6\u5230\u7684\u6570\u636E\r
read.on('data', (data) => {\r
  console.log(data);\r
});\r
read.on('open', () => {\r
  console.log(\`\u6587\u4EF6\u88AB\u6253\u5F00\`);\r
});\r
read.on('end', () => {\r
  console.log('\u6587\u4EF6\u8BFB\u53D6\u7ED3\u675F');\r
}); \r
read.on('close', () => {\r
  console.log('\u6587\u4EF6\u88AB\u5173\u95ED');\r
}); 
`,paraId:20,tocIndex:7},{value:`const writer = createWriteStream("./foo.txt",{\r
    flags:"a+"\r
});\r
wrriter.write("\u4F60\u597D\u554A",err=>{\r
    console.log("\u5199\u5165\u5B8C\u6BD5")\r
})
`,paraId:21,tocIndex:8},{value:`const reader = fs.createReadStream("./foo.txt");\r
const writer = createWriteStream('./bar.txt');
`,paraId:22,tocIndex:9},{value:"\u6817\u5B50",paraId:23,tocIndex:10},{value:`var http = require('http');\r
var server = new http.Server();\r
server.on('request', function (req, res) {\r
    res.writeHead(200, { 'Content-Type': 'text/html' });\r
    res.write('<h1>Node.js</h1>');\r
    res.end('\u4E5F\u53EF\u4EE5\u662F\u6570\u636E');\r
});\r
server.listen(9000, () => {\r
    console.log('\u670D\u52A1\u542F\u52A8\uFF0C\u7AEF\u53E3\u53F79000');\r
});
`,paraId:24,tocIndex:10},{value:`\u5B89\u88C5\u811A\u624B\u67B6\r
npm install -g express-generator\r
\u521B\u5EFA\u9879\u76EE\r
express express-demo\r
\u5B89\u88C5\u4F9D\u8D56\r
npm install\r
\u542F\u52A8\u9879\u76EE\r
node bin/www
`,paraId:25,tocIndex:12},{value:`//\u6539\u9020\u9879\u76EE\u542F\u52A8\r
// module.exports = app;\r
const port=8001;\r
app.listen(port,()=>{\r
  console.log("\u670D\u52A1\u5DF2\u542F\u52A8\uFF0C\u7AEF\u53E3\u53F7\u4E3A"+port);\r
})\r

`,paraId:26,tocIndex:13},{value:`//\u5BF9\u7F51\u7EDC\u8BF7\u6C42\u7684\u6570\u636E\u5904\u7406\uFF0Cexpress\u6709\u5BF9\u5E94\u7684\u81EA\u5E26\u4E2D\u95F4\u4EF6\u5904\u7406 ,\u4F8B\u5982\r
app.use(express.json());\r
app.use(express.urlencoded({ extended: false }));\r
//\u6587\u4EF6\u4E0A\u4F20\u4E2D\u95F4\u4EF6\r
multer
`,paraId:27,tocIndex:14},{value:`//  routers/user.js\r
var express = require('express');\r
var router = express.Router();\r
const {currentUser}=require("../controllers/UsersController");\r
//  \u5F53\u524D\u7528\u6237\r
router.post('/currentUser', currentUser);\r
\r
// app\u6302\u8F7D\r
var usersRouter = require('./routes/users');\r
app.use('/movies', usersRouter);
`,paraId:28,tocIndex:15},{value:"\u65B9\u5F0F\u4E00\uFF1A\u901A\u8FC7get\u8BF7\u6C42\u4E2D\u7684URL\u7684params\uFF1B  \u8BF7\u6C42\u5730\u5740\uFF1A",paraId:29,tocIndex:16},{value:"http://localhost:8000/login/abc/why",paraId:29,tocIndex:16},{value:"\u65B9\u5F0F\u4E8C\uFF1A\u901A\u8FC7get\u8BF7\u6C42\u4E2D\u7684URL\u7684query\uFF1B  \u8BF7\u6C42\u5730\u5740\uFF1A",paraId:29,tocIndex:16},{value:"http://localhost:8000/login?username=why&password=123",paraId:29,tocIndex:16},{value:"\u65B9\u5F0F\u4E09\uFF1A\u901A\u8FC7post\u8BF7\u6C42\u4E2D\u7684body\u7684json\u683C\u5F0F\uFF08\u4E2D\u95F4\u4EF6\u4E2D\u5DF2\u7ECF\u4F7F\u7528\u8FC7\uFF09\uFF1B",paraId:29,tocIndex:16},{value:"\u65B9\u5F0F\u56DB\uFF1A\u901A\u8FC7post\u8BF7\u6C42\u4E2D\u7684body\u7684x-www-form-urlencoded\u683C\u5F0F\uFF08\u4E2D\u95F4\u4EF6\u4F7F\u7528\u8FC7\uFF09\uFF1B",paraId:29,tocIndex:16},{value:"\u65B9\u5F0F\u4E94\uFF1A\u901A\u8FC7post\u8BF7\u6C42\u4E2D\u7684form-data\u683C\u5F0F\uFF08\u4E2D\u95F4\u4EF6\u4E2D\u4F7F\u7528\u8FC7\uFF09\uFF1B",paraId:29,tocIndex:16},{value:`req.body;
`,paraId:30,tocIndex:16},{value:`app.use("/public",express.static(path.join(__dirname, 'public')));
`,paraId:31,tocIndex:17},{value:`//\u67E5\u8BE2\r
db.sub.find();\r
\r
//\u63D2\u5165\r
//db.sub.insert({_id:"0323",code:"gfgg" ,name:"gj", gender:1});\r
//\u63D2\u5165\r
//db.sub.insert({_id:"0323" ,name:"gj", gender:1});
`,paraId:32,tocIndex:19},{value:`\u7B49\u4E8E\uFF1A \u9ED8\u8BA4\u662F\u7B49\u4E8E\u5224\u65AD\uFF0C \u6CA1\u6709\u8FD0\u7B97\u7B26\r
\u5C0F\u4E8E\uFF1A$lt \uFF08less than\uFF09\r
\u5C0F\u4E8E\u4E8E\u7B49\u4E8E\uFF1A$lte \uFF08less than equal\uFF09\r
\u5927\u4E8E\uFF1A$gt \uFF08greater than\uFF09\r
\u5927\u4E8E\u7B49\u4E8E\uFF1A$gte\r
\u4E0D\u7B49\u4E8E\uFF1A$ne\r
\u683C\u5F0F\uFF1Adb.\u96C6\u5408\u540D\u79F0.find({age:{$gte:18}})
`,paraId:33,tocIndex:20},{value:`UsersModel.find({age:{$lte:45}});
`,paraId:34,tocIndex:20},{value:"\u5B89\u88C5  npm install mongoose",paraId:35,tocIndex:21},{value:`// \u5BFC\u5165 mongoose \u6A21\u5757\r
const mongoose = require('mongoose');\r
\r
mongoose.set('strictQuery', false);\r
// \u8BBE\u7F6E\u9ED8\u8BA4 mongoose \u8FDE\u63A5\r
const mongoDB = 'mongodb://127.0.0.1:27017/moviesApp';\r
mongoose.connect(mongoDB,(err)=>{\r
    if(!err){\r
        console.log("movieApp\u6570\u636E\u5E93\u94FE\u63A5\u6210\u529F")\r
    }else{\r
        console.log("movieApp\u6570\u636E\u5E93\u94FE\u63A5\u5931\u8D25")\r
    }\r
}\r
);
`,paraId:36,tocIndex:22},{value:`const { Schema, model, SchemaType } = require('mongoose');\r
const mongoose = require('mongoose');\r
// \u5B9A\u4E49\u9A8C\u8BC1\u51FD\u6570\r
function Int8(key, options) {\r
    mongoose.SchemaType.call(this, key, options, 'Int8');\r
}\r
Int8.prototype = Object.create(mongoose.SchemaType.prototype);\r
Int8.prototype.cast = function (val) {\r
    var _val = Number(val);\r
    if (isNaN(_val)) {\r
        throw new mongoose.SchemaType.CastError("Int8",'Int8: ' + val + ' is not a number',"age");\r
    }\r
    _val = Math.round(_val);\r
    if (_val < -0x80 || _val > 0x7f) {\r
        throw new mongoose.SchemaType.CastError(\r
            'Int8: ' + val + ' is outside of the range of valid 8-bit ints'\r
        );\r
    }\r
    return _val;\r
};\r
// \u5C06\u76F8\u5E94\u7684\u5C5E\u6027\u6DFB\u52A0\u5230 mongoose.Schema.Types\r
mongoose.Schema.Types.Int8 = Int8;\r
\r
// \u6620\u5C04\u6570\u636E\u6A21\u578B\u7684\u6240\u6709\u5B57\u6BB5\r
const UsersSchema = new Schema(\r
    {\r
        username: { type: String, required: true },\r
        password: String,\r
        order: Array,\r
        age: Int8,//\u4F7F\u7528\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u7C7B\u578B\r
        img: String,\r
        creatDate: { type: Date, default: Date.now },\r
        birthday: { type: Date, default: new Date('2020-10-10 08:00:00') },\r
        phone: {\r
            type: String,\r
            validate: { //\u81EA\u5B9A\u4E49\u9A8C\u8BC1\u5668\r
                validator: function (v) {\r
                    return /\\d{3}-\\d{3}-\\d{4}/.test(v);\r
                },\r
                message: '{VALUE} is not a valid phone number!',\r
            },\r
            required: [true, 'User phone number required'],\r
        },\r
    },\r
    { versionKey: false }//\u4E0D\u5F00\u542F\u7248\u672C\u53F7\r
); \r
//  \u6A21\u578B\u540D\u79F0 , \u6620\u5C04, \u8868\u540D\r
module.exports = model('UsersModel', UsersSchema, 'users');\r

`,paraId:37,tocIndex:23},{value:"Model.find(conditions, [projection], [options], [callback])",paraId:38,tocIndex:24},{value:`//\u67E5\u8BE2\u6210\u7EE9\u5927\u4E8E60\u4EE5\u4E0A\u7684\u6570\u636E\r
UsersModel.find({grades:{$gte:60}},(err,docs) => {\r
    if(!err){\r
         console.log(docs)\r
     }\r
 })
`,paraId:39,tocIndex:24},{value:"Model.findById(id, [projection], [options], [callback])",paraId:40,tocIndex:25},{value:`await UsersModel.findById("6426b1772b18beace7139703");
`,paraId:41,tocIndex:25},{value:"Model.findOne([conditions], [projection], [options], [callback])",paraId:42,tocIndex:26},{value:`const regexp = new RegExp(username, 'i'); // \u6B63\u5219\u6A21\u7CCA\u5339\u914D\r
const users = await UsersModel.find({ username: regexp });\r
\r
const users = await UsersModel.find({username:'lisi',age:20})\r
\r
\u53E6\u4E00\u79CD\r
const users = await UsersModel.find({username:{$regex:'s',$options:'$i'}})
`,paraId:43,tocIndex:27},{value:`await UsersModel.find({score:{$lte:tscore}});\u6216\u8005UsersModel.find().where('score').lt(7);\r
\r
\r
\u2F29\u4E8E\uFF1A$lt \uFF08less than\uFF09\r
\u2F29\u4E8E\u7B49\u4E8E\uFF1A$lte \uFF08less than equal\uFF09\r
\u2F24\u4E8E\uFF1A$gt \uFF08greater than\uFF09\r
\u2F24\u4E8E\u7B49\u4E8E\uFF1A$gte\r
\u4E0D\u7B49\u4E8E\uFF1A$ne
`,paraId:44,tocIndex:28},{value:`"movies": [\r
      {\r
        type:Schema.Types.ObjectId,\r
        ref:'MoviesModel'\r
      }\r
\r
const data = await OperasModel.find().populate({\r
    path:'movies',\r
    select:['title','movieType','score'],\r
     populate:{\r
        path:'movieType'\r
    }\r
})
`,paraId:45,tocIndex:29},{value:`//\u6761\u4EF6\u5185\u90E8\u4F5C\u7528\u57DF\u8C8C\u4F3C\u4E0D\u4E00\u6837\uFF0C\u65E0\u6CD5\u4F7F\u7528\u5916\u90E8\u53D8\u91CF\r
await UsersModel.find({\r
          $where:function() {\r
              return this.age==null;}\r
       });
`,paraId:46,tocIndex:30},{value:"Model.updateOne(conditions, doc, [options], [callback])",paraId:47,tocIndex:31},{value:`UsersModel.updateOne({ _id: id }, { password });
`,paraId:48,tocIndex:31},{value:"await UsersModel.updateOne({ _id: id }, { password });",paraId:49,tocIndex:32},{value:"Model.update(conditions, doc, [options], [callback])",paraId:50,tocIndex:33},{value:`options
`,paraId:50,tocIndex:33},{value:"runValidators  \uFF0C\u66F4\u65B0\u9A8C\u8BC1 \u5668   4.0   \u9ED8\u8BA4\u662F\u5173\u95ED\u7684",paraId:51,tocIndex:33},{value:"multi  \u662F\u5426\u5168\u90E8\u66F4\u65B0",paraId:51,tocIndex:33},{value:`var opts = { runValidators: true,multi:true };\r
UsersModel.update({ _id: id }, { password },opts);
`,paraId:52,tocIndex:33},{value:"Model.create(doc(s), [callback])  \u64CD\u4F5C\u6A21\u578B",paraId:53,tocIndex:34},{value:"Model.prototype.save([options], [options.safe], [options.validateBeforeSave], [fn])  \u64CD\u4F5C\u6587\u6863",paraId:53,tocIndex:34},{value:`UsersModel.create({ username, password });\r
\r
UsersModel.({ username, password }).save();\r
\r
OrdersModel.insertMany({ username, password })
`,paraId:54,tocIndex:34},{value:"Model.deleteOne(conditions\uFF0C[options] )",paraId:55,tocIndex:35},{value:`await UsersModel.deleteOne({ _id: id });
`,paraId:56,tocIndex:35},{value:"Model.deleteMany(conditions\uFF0C[options] )",paraId:57,tocIndex:36},{value:`\u601D\u8DEF\uFF1A\u5148\u5C06\u6570\u636E\u8F6C\u884C\u6210\u4E0E\u5BF9\u8C61id\u7B49\u957F\u7684\u5B57\u7B26\u4E32\uFF0C\u518D\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u5BF9\u8C61id\r
\u4E0A\u4EE3\u7801--------\r
\r
Schema\u6A21\u578B\r
 movieType: [\r
            {\r
                // type: String,// \u5148\u5C06\u5B57\u6BB5\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u5B57\u7B26\u4E32\uFF0C\u4FBF\u4E8E\u8F6C\u6362\u6210\u5BF9\u8C61id\u957F\u5EA6\u7684\u5B57\u7B26\r
                type:  Schema.Types.ObjectId,\r
                ref:'TestModel'\r
            },\r
        ],
`,paraId:58,tocIndex:38},{value:` async update(req, res, next) {\r
        res.send("\u63A5\u53E3\u672A\u5F00\u901A");\r
        return;\r
        try {\r
            // \u6570\u636E\u5E93\u67E5\u8BE2\u6570\u636E\u7684\u65B9\u6CD5,find\u65B9\u6CD5\u53EF\u4EE5\u4F20\u53C2\r
            let rtn = { code: 1, msg: '\u6210\u529F', data: [] };\r
            const users = await MoviesModel.find({}, { movieType: 1 });\r
            users.forEach(async (items) => {\r
                let movieTypeArr = items.movieType;\r
                if (movieTypeArr) {\r
                    let tempArr = [];\r
                    for (let i = 0; i < movieTypeArr.length; i++) {\r
                        let element = movieTypeArr[i][0]?movieTypeArr[i][0]:movieTypeArr[i].toString();\r
                        console.log(typeof element);\r
                        if (typeof element == 'number' || typeof element == 'string') {\r
                            element = formatSchemaObject(element);\r
                            // log(element);\r
                            // let t = new Schema.Types.ObjectId('' + element);\r
                            tempArr.push(element);\r
                        } else {\r
                            element = formatSchemaObject(element);\r
                            tempArr.push(element);\r
                        }\r
                        console.log(tempArr);\r
                        let _id = items._id.toString();\r
                        await MoviesModel.updateOne({ _id }, { movieType: tempArr });\r
                    }\r
                }\r
            });\r
            rtn.data = users;\r
            res.send(rtn);\r
        } catch (error) {\r
            res.send(error.message);\r
        }\r
    }\r

`,paraId:59,tocIndex:38},{value:"app.js \u5F15\u5165\u8DEF\u7531",paraId:60,tocIndex:40},{value:`var filesRouter=require('./routes/files')\r
app.use('/files', filesRouter);
`,paraId:61,tocIndex:40},{value:"routes",paraId:62,tocIndex:40},{value:`//\u914D\u7F6E\u8DEF\u7531\r
var express = require('express');\r
var router = express.Router();\r
const {fileUp,updateUserHeadImg} = require('../controllers/FilesController')\r
//1. \u6587\u4EF6\u4E0A\u4F20\uFF0C\u8BF7\u6C42\u65B9\u5F0F\u4E00\u5B9A\u662Fpost\r
router.post('/fileUp',fileUp);\r
// \u786E\u8BA4\u4FEE\u6539\r
router.post('/updateUserHeadImg',updateUserHeadImg);\r
module.exports = router;\r

`,paraId:63,tocIndex:40},{value:`//\u5199\u6587\u4EF6\u4E0A\u4F20\u7684\u903B\u8F91\u4EE5\u53CA\u8FD4\u56DE\r
const { uploadFiles,moveFiles } = require('../utils/filesUtil')\r
const Utils = require('../utils/utils');\r
const UsersModel = require('../models/UsersModel');\r
class FilesController {\r
    fileUp(req, res) {\r
        const uploading = uploadFiles()\r
        uploading(req, res, (err) => {\r
            if (err) {\r
                res.send({\r
                    code: 0,\r
                    msg: '\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25'\r
                })\r
            } else {\r
                //\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\r
                //req.files\u5C31\u662F\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u540E\u7684\u4E00\u4E9B\u76F8\u5173\u7684\u6587\u4EF6\u4FE1\u606F\r
                console.log(req.files)\r
                if (req.files.length > 0) {\r
                    res.send({\r
                        code: 1,\r
                        msg: '\u6587\u4EF6\u4E0A\u4F20\u6210\u529F',\r
                        data: \`/temp/\${req.files[0].filename}\`\r
                    })\r
                } else {\r
                    res.send({\r
                        code: 0,\r
                        msg: '\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25'\r
                    })\r
                }\r
            }\r
        })\r
    }\r
    //\u540E\u7AEF\u4FEE\u6539\u7528\u6237\u4FE1\u606F\u7684\u63A5\u53E3\r
    async updateUserHeadImg(req, res) {\r
        const bearerToken = req.get('Authorization')\r
        console.log(bearerToken)\r
        if (bearerToken) {\r
            //\u89E3\u7801token\r
            const decode=Utils.verifyToken(bearerToken);\r
            const {filename} = req.body\r
            // \r
            console.log(filename);\r
            const fromPath='public/temp/'\r
            const toPath='public/images/'\r
            if (filename) {\r
                //\u5C06\u56FE\u7247\u79FB\u52A8\u5230images\u6587\u4EF6\u5939\u4E0B\r
                try {\r
                    moveFiles({\r
                        fromPath,\r
                        toPath,\r
                        filename\r
                    })\r
                    // \u4FEE\u6539\u7528\u6237\u4FE1\u606F\r
                    console.log(toPath+filename );\r
                    const data = await UsersModel.updateOne({ _id: decode._id }, { img:filename });\r
                    res.send({\r
                        code: 1,\r
                        msg: '\u4FEE\u6539\u6210\u529F',\r
                    })\r
                } catch (error) {\r
                    res.send({\r
                        code: 0,\r
                        msg: '\u5934\u50CF\u4FEE\u6539\u5931\u8D25',\r
                    })\r
                }\r
            }\r
        } else {\r
            res.send({\r
                code: 0,\r
                msg: 'token\u5931\u6548'\r
            })\r
        }\r
    }\r
}\r
module.exports = new FilesController();
`,paraId:64,tocIndex:41},{value:`const multer = require('multer');\r
const fs = require("fs");\r
const path = require('path');\r
\r
// \u4E0A\u4F20\u6587\u4EF6\r
module.exports.uploadFiles = ({ dir = "./public/temp", key = "file", size = 10000 } = {}) => {\r
    // 1. \u5BF9\u53C2\u6570\u8FDB\u884C\u89E3\u6784\u5E76\u8BBE\u7F6E\u9ED8\u8BA4\u503C\r
    // 2. \u8BBE\u7F6E multer \u7684\u53C2\u6570\uFF0C\u914D\u7F6E diskStorage\uFF0C\u6765\u63A7\u5236\u6587\u4EF6\u5B58\u50A8\u7684\u4F4D\u7F6E\u4EE5\u53CA\u6587\u4EF6\u540D\u5B57\u7B49\r
    const storage = multer.diskStorage({\r
        // 2.1 \u786E\u5B9A\u56FE\u7247\u5B58\u50A8\u7684\u4F4D\u7F6E\r
        destination: function (req, file, cb) {\r
            // \u5F53 dir \u6240\u5BF9\u5E94\u76EE\u5F55\u4E0D\u5B58\u5728\u65F6\uFF0C\u5219\u81EA\u52A8\u521B\u5EFA\u8BE5\u6587\u4EF6\r
            try {\r
                fs.accessSync(dir);\r
            } catch (error) {\r
                fs.mkdirSync(dir);\r
            }\r
            cb(null, dir);\r
        },\r
        // 2.2 \u786E\u5B9A\u56FE\u7247\u5B58\u50A8\u65F6\u7684\u540D\u5B57\u3002\uFF08\u6CE8\u610F\uFF1A\u5982\u679C\u4F7F\u7528\u539F\u540D\uFF0C\u53EF\u80FD\u4F1A\u9020\u6210\u518D\u6B21\u4E0A\u4F20\u540C\u4E00\u5F20\u56FE\u7247\u7684\u65F6\u5019\u7684\u51B2\u7A81\uFF09\r
        filename: function (req, file, cb) {\r
            var changedName = new Date().getTime() + parseInt(Math.random() * 10) + path.extname(file.originalname);\r
            cb(null, changedName);\r
        }\r
    });\r
    // 3. \u914D\u7F6E\u56FE\u7247\u9650\u5236\r
    const limits = {\r
        // \u9650\u5236\u6587\u4EF6\u5927\u5C0F\r
        fileSize: 1024 * size,\r
        // \u9650\u5236\u6587\u4EF6\u6570\u91CF\r
        files: 10\r
    };\r
    // 4.\u751F\u6210\u7684\u4E13\u95E8\u5904\u7406\u4E0A\u4F20\u7684\u4E00\u4E2A\u5DE5\u5177\uFF0C\u53EF\u4EE5\u4F20\u5165 storage\u3001limits \u7B49\u914D\u7F6E\r
    const upload = multer({ storage, limits });\r
    // 5. \u8FD4\u56DE\u591A\u6587\u4EF6\u4E0A\u4F20\u7684\u8BBE\u7F6E\u4FE1\u606F\uFF08\u540C\u6837\u53EF\u7528\u4E8E\u5355\u6587\u4EF6\u4E0A\u4F20\uFF09\r
    return upload.array(key);\r
}\r
\r
// \u79FB\u52A8\u6587\u4EF6\r
module.exports.moveFiles = ({ fromPath, toPath, filename } = {}) => {\r
    if (!filename) {\r
        console.log('========== \u6587\u4EF6\u79FB\u52A8\u5931\u8D25: filename \u6587\u4EF6\u540D\u4E0D\u80FD\u4E3A\u7A7A ==========');\r
        return;\r
    }\r
    // \u8981\u79FB\u52A8\u7684\u6587\u4EF6\u7684\u539F\u8DEF\u5F84\r
    const sourceFile = path.join(fromPath, filename);\r
    // \u5224\u65AD\u6E90\u6587\u4EF6\u662F\u5426\u5B58\u5728\r
    try {\r
        fs.accessSync(sourceFile);\r
    } catch (error) {\r
        console.log('========== \u6587\u4EF6\u79FB\u52A8\u5931\u8D25\uFF1A' + sourceFile + ' \u8BE5\u6587\u4EF6\u4E0D\u5B58\u5728\u3002==========');\r
        return;\r
    }\r
    // \u5224\u65AD\u6587\u4EF6\u8981\u79FB\u52A8\u7684\u65B0\u8DEF\u5F84\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\r
    try {\r
        fs.accessSync(toPath);\r
    } catch (error) {\r
        fs.mkdirSync(toPath);\r
    }\r
    // \u6587\u4EF6\u79FB\u52A8\u540E\u7684\u65B0\u8DEF\u5F84\r
    const newFile = path.join(toPath, filename);\r
    fs.renameSync(sourceFile, newFile);\r
    return { newPath: newFile };\r
}\r

`,paraId:65,tocIndex:42},{value:`// \u9ED8\u8BA4\u5F02\u6B65  jquery  Promise\r
export  function $cn({ url, method="post", data, async = true, dataType = "json", timeout = 3000 } = {}) {\r
    url = URL_NODE_SERVER + url;\r
    const token=getLocal("token");\r
    data=JSON.stringify(data);  //  contentType:"application/json"\u7684\u65F6\u5019\u5FC5\u987B\u4E32json\u5B57\u7B26\u4E32\r
    const exclude= /\\/login|\\/register/;\r
    if (token==""&&!exclude.test(url)) {\r
        return {code:-901,msg:"\u6CA1\u6709token"};\r
    }\r
    return  new Promise((resolve,reject) => {\r
        $.ajax({\r
            type: method,url: url,data,dataType,async,timeout, // \u8D85\u65F6\u8BBE\u7F6E \u5355\u4F4D\u6BEB\u79D2\r
            contentType:"application/json", //"application/json"\r
            headers:{\r
                //\u5C06token\u6BCF\u6B21\u8BF7\u6C42\u7684\u65F6\u5019\u653E\u5728\u8BF7\u6C42\u5934\u4E2D\uFF0C\u7136\u540E\u9700\u8981\u5728token\u4E4B\u524D\u62FC\u63A5'Bearer '\r
                Authorization:'Bearer ' + token  \r
            },\r
            success:(res)=>{\r
               if (res.data) {\r
                if( res.data.img){\r
                    res.data.img=URL_NODE_SERVER+ res.data.img;\r
                }\r
               }\r
               \r
                resolve(res);\r
            },\r
            error:(res)=>{\r
                reject(res);\r
            },\r
        });\r
    })\r
}\r
// \u7528\u4E8E\u6587\u4EF6\u4F20\u8F93  \u5934\u50CF\r
export  function $upFile(data) {\r
    const  url = URL_NODE_SERVER + '/files/fileUp';\r
    const token=getLocal("token");\r
    const exclude= /\\/login|\\/register/;\r
    if (token==""&&!exclude.test(url)) {\r
        return {code:-901,msg:"\u6CA1\u6709token"};\r
    }\r
    return  new Promise((resolve,reject) => {\r
        $.ajax({\r
            type: "post",url: url,data, // \u8D85\u65F6\u8BBE\u7F6E \u5355\u4F4D\u6BEB\u79D2\r
           //\u7981\u6B62jqueryAjax\u5BF9\u4F20\u8F93\u7684\u6570\u636E\u683C\u5F0F\u8FDB\u884C\u5185\u90E8\u5904\u7406\r
        contentType:false,\r
        processData:false,\r
            headers:{\r
                //\u5C06token\u6BCF\u6B21\u8BF7\u6C42\u7684\u65F6\u5019\u653E\u5728\u8BF7\u6C42\u5934\u4E2D\uFF0C\u7136\u540E\u9700\u8981\u5728token\u4E4B\u524D\u62FC\u63A5'Bearer '\r
                Authorization:'Bearer ' + token  \r
            },\r
            success:(res)=>{\r
                resolve(URL_NODE_SERVER+res.data);\r
            },\r
            error:(res)=>{\r
                reject(res);\r
            },\r
        });\r
    })\r
}
`,paraId:66,tocIndex:43},{value:`const flag = true;\r
    // \u786E\u8BA4\u4FEE\u6539\r
    $("#changeImg").on('click', async function (e) {\r
        if (flag) {\r
            confirm("\u8BF7\u5148\u9009\u62E9\u5934\u50CF");\r
            return;\r
        }\r
        let filename = $("#headImg").css("background-image");\r
        filename = filename.substring(filename.lastIndexOf("/") + 1);\r
        filename = filename.replace(\`")\`, "");\r
        let option = {\r
            url: "/files/updateUserHeadImg",\r
            data: {\r
                filename\r
            }\r
        }\r
        const res = await $cn(option);\r
        console.log(res);\r
        return\r
    });\r
    // \u53D1\u9001\u6587\u4EF6\u6570\u636E\r
    $("#fileImg").on('change', async function (e) {\r
        flag = false;\r
        // console.dir(this.files[0]);\r
        // 1.\u62FF\u6587\u4EF6\u6570\u636E\r
        const fileInfo = this.files[0]\r
        // 2.\u901A FormData \u6784\u9020\u51FD\u6570\u5BF9\u6587\u4EF6\u6570\u636E\u8FDB\u884C\u683C\u5F0F\u8F6C\u6362\uFF0C\u8F6C\u6362\u6210\u4E8C\u8FDB\u5236\u6D41\r
        const fd = new FormData();\r
        fd.append('file', fileInfo);\r
        const res = await $upFile(fd);\r
        $("#headImg").css("background-image", \`url(\${res})\`);\r
    });
`,paraId:67,tocIndex:44},{value:"\u57FA\u4E8Ecrypto\uFF0C nodejs\u63D0\u4F9B\u7684\u4E00\u4E2A\u5185\u7F6E\u6A21\u5757\uFF0C\u7528\u4E8E\u6570\u636E\u52A0\u5BC6",paraId:68,tocIndex:45},{value:`/**\r
     * \u5BF9\u6570\u636E\u8FDB\u884C\u52A0\u5BC6   \u5BC6\u7801\u52A0\u5BC6\u4F7F\u7528\r
     * @param {Sting} str \r
     * @param {Sting} secret \r
     * @returns \r
     */\r
getCrypto(str, secret = '') {\r
    const md5 = Crypto.createHash('md5')\r
    // return md5.update('\u9700\u8981\u52A0\u5BC6\u7684\u5B57\u7B26\u4E32'+'\u79D8\u94A5').digest('hex')\r
    return md5.update(str + secret).digest('hex')\r
}
`,paraId:69,tocIndex:45},{value:"\u751F\u6210\u968F\u673A\u79D8\u94A5\uFF1A",paraId:70,tocIndex:45},{value:"https://www.avast.com/zh-cn/random-password-generator#mac",paraId:70,tocIndex:45},{value:"\u7528\u6237\u7684\u8BDD\u53EF\u4EE5\u7528\u7528\u6237code\u505A\u5BC6\u94A5\uFF0C\u4FDD\u8BC1\u5BF9\u4E00\u4E2A\u7528\u6237\u6765\u8BF4\u4E0D\u53D8\u7684\u90A3\u4E2A\u503C\uFF0Ccode\u8981\u53D8\u5C31\u4E0D\u884C",paraId:71,tocIndex:45},{value:"\u524D\u7AEF\u8FDB\u884C\u767B\u5F55\u64CD\u4F5C\uFF0C\u5C06\u767B\u5F55\u7684\u4FE1\u606F\u53D1\u9001\u7ED9\u540E\u7AEF\uFF0C\u540E\u7AEF\u5C31\u4F1A\u6BD4\u5BF9\u4FE1\u606F\u5224\u65AD\u662F\u5426\u767B\u5F55\u6210\u529F",paraId:72,tocIndex:47},{value:"\u5982\u679C\u767B\u5F55\u6210\u529F\uFF0C\u540E\u7AEF\u4F1A\u751F\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32token\uFF0C\u540E\u7AEF\u4F1A\u5C06token\u8FD4\u56DE\u7ED9\u524D\u7AEF",paraId:72,tocIndex:47},{value:"\u524D\u7AEF\u62FF\u5230\u767B\u5F55\u6210\u529F\u7684\u6D88\u606F\uFF0C\u4F1A\u5728\u8DF3\u8F6C\u9875\u9762\u4E4B\u524D\u5C06token\u4FDD\u5B58\u5230\u672C\u5730\u50A8\u5B58",paraId:72,tocIndex:47},{value:"\u524D\u7AEF\u5728\u8FDB\u5165\u67D0\u4E9B\u9700\u8981\u8FDB\u884C\u767B\u5F55\u9A8C\u8BC1\u7684\u9875\u9762\u65F6\uFF0C\u4F1A\u9996\u5148\u53BB\u9A8C\u8BC1\u672C\u5730\u50A8\u5B58\u4E2D\u662F\u5426\u5305\u542Btoken\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5C31\u4F1A\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762",paraId:72,tocIndex:47},{value:"\u540C\u65F6\u9700\u8981\u540E\u7AEF\u5BF9token\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u662F\u5426\u8D85\u671F\u6216\u8005\u662F\u767B\u5F55\u5931\u6548\uFF0C\u5982\u679C\u540E\u7AEF\u9A8C\u8BC1\u5931\u8D25\uFF0C\u5C31\u4F1A\u8FD4\u56DE\u7ED3\u679C401\u7ED9\u524D\u7AEF\uFF0C",paraId:72,tocIndex:47},{value:"\u524D\u7AEF\u62FF\u5230401\u4E4B\u540E\u5C31\u4F1A\u8FDB\u884C\u63D0\u793A\uFF0C\u63D0\u793A\u767B\u5F55\u5931\u6548\u8BF7\u91CD\u65B0\u767B\u5F55\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762",paraId:72,tocIndex:47},{value:"\u67D0\u4E9B\u8BF7\u6C42\u4E5F\u9700\u8981\u5BF9\u767B\u5F55\u4FE1\u606F\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1\u3002\u6BD4\u5982\uFF1A\u8BA2\u5355\uFF0C\u4E2A\u4EBA\u4E2D\u5FC3\u2026.\uFF0C\u8BA4\u8BC1\u4E0D\u901A\u8FC7\u4E5F\u4F1A\u8FD4\u56DE401",paraId:72,tocIndex:47},{value:"\u4E0B\u8F7D\u63D2\u4EF6 jsonwebtoken",paraId:73,tocIndex:48},{value:`npm install jsonwebtoken
`,paraId:74,tocIndex:48},{value:"\u751F\u6210token",paraId:75,tocIndex:48},{value:` /**\r
     *@Desc: \u83B7\u53D6\u5BC6\u94A5\r
     *@Author: Wanglei\r
     *@Date: 2023-04-07 15:10:45\r
     *@param {Sting} type  \u7C7B\u578B\r
     */\r
    getSecret(type = 'token') {\r
        return 'wCQZSgytEhB66Meu'\r
    }\r
    /**\r
     *@Desc: \u751F\u6210token\r
     *@Author: Wanglei\r
     *@Date: 2023-04-07 15:10:45\r
     *@param {String} id \u7528\u6237\u8868_id\r
     *@param {String} secret \u5BC6\u94A5\r
     *@param {Number} timeLimit \u65F6\u6548 \u79D2\r
     */\r
    getToken(id,secret="" ,timeLimit = 60 * 60,) {\r
         secret = this.getSecret();\r
        //\u751F\u6210token\r
        const token = Jwt.sign(\r
            { _id: id}, //\u7528\u4E8E\u4FDD\u5B58\u7528\u6237\u7684\u76F8\u5173\u4FE1\u606F\r
            secret, //\u79D8\u94A5\uFF0C\u4E0D\u80FD\u516C\u5E03\u51FA\u53BB\r
            { expiresIn: timeLimit } //\u8BBE\u7F6Etoken\u7684\u6709\u6548\u671F,\u65F6\u95F4\u4EE5\u79D2\u4E3A\u5355\u4F4D\r
        )\r
        console.log(token);\r
        return token\r
    }\r
    /**\r
     *@Desc: \u89E3\u6790token\r
     *@Author: Wanglei\r
     *@Date: 2023-04-07 15:10:45\r
     *@param {String} bearerToken \u524D\u7AEF\u4F20\u9012\u7684 Authorization\r
     *@param {String} secret \u5BC6\u94A5\r
     */\r
    verifyToken(bearerToken) {\r
        const  secret = this.getSecret();\r
        //\u83B7\u53D6\u5230\u771F\u5B9E\u7684token\r
        const token = bearerToken.split(' ')[1];\r
        //\u89E3\u7801token\r
        const decode = Jwt.verify(\r
            token,\r
            secret //\u79D8\u94A5\r
        )\r
        return decode\r
    }
`,paraId:76,tocIndex:48},{value:"3 \u6302\u8F7D\u5230app",paraId:77,tocIndex:48},{value:`const {expressjwt} = require('express-jwt');\r
const jwtAuth = expressjwt({\r
    secret, //\u79D8\u94A5 \u4E0E\u767B\u5F55\u65F6\u7684\u79D8\u94A5\u4E00\u81F4\r
    algorithms:['HS256'], //jwt\u7684\u9A8C\u8BC1\u7B97\u6CD5\r
    //\u524D\u7AEF\u5982\u679C\u6CA1\u6709\u53D1\u9001token\u8FC7\u6765\uFF0C\u4E5F\u4F1A\u76F4\u63A5\u8FD4\u56DE401\u7684\u72B6\u6001\r
    //false\u4EE3\u8868\u9A8C\u8BC1\u662F\u5426\u5305\u542Btoken\r
    credentialsRequired:true\r
}).unless({\r
    //\u7528\u4E8E\u914D\u7F6E\u4E0D\u9700\u8981\u8EAB\u4EFD\u8BA4\u8BC1\u7684\u63A5\u53E3\r
    path:[\r
        /\\/login/,/\\/reg/,/\\/temp/,/\\/images/\r
    ]\r
})\r
app.use(jwtAuth);
`,paraId:78,tocIndex:48},{value:`const jwt = require('jsonwebtoken');\r
const fs = require('fs');\r
\r
// \u8BFB\u53D6\u516C\u94A5\u548C\u79C1\u94A5\u6587\u4EF6\r
const publicKey = fs.readFileSync('public.pem');\r
const privateKey = fs.readFileSync('private.pem');\r
\r
// \u7B7E\u53D1 JWT\r
function signToken(payload, expiresIn) {\r
  return jwt.sign(payload, privateKey, { expiresIn });\r
}\r
\r
// \u9A8C\u8BC1 JWT\r
function verifyToken(token) {\r
  try {\r
    return jwt.verify(token, publicKey);\r
  } catch (error) {\r
    throw new Error('Invalid token');\r
  }\r
}
`,paraId:79,tocIndex:49},{value:"/\u4F7F\u7528\u793A\u4F8B",paraId:80,tocIndex:49},{value:`const payload = { userId: 123, username: 'john.doe' };\r
\r
// \u7B7E\u53D1 JWT\r
const token = signToken(payload, '1h');\r
console.log('Token:', token);\r
\r
// \u9A8C\u8BC1 JWT\r
try {\r
  const decodedToken = verifyToken(token);\r
  console.log('Decoded Token:', decodedToken);\r
} catch (error) {\r
  console.error(error.message);\r
}
`,paraId:81,tocIndex:49}]},95023:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(61951);const r=[{value:`pnpm create vite music-web --template react-ts
`,paraId:0,tocIndex:2},{value:"\u5176\u4E2D\uFF0C",paraId:1,tocIndex:2},{value:"react-demo",paraId:1,tocIndex:2},{value:" \u662F\u5F53\u524D\u9879\u76EE\u6839\u76EE\u5F55\u7684\u6587\u4EF6\u540D\uFF0C\u53EF\u81EA\u884C\u5B9A\u4E49\u3002",paraId:1,tocIndex:2},{value:`cd react-demoyarn
`,paraId:2,tocIndex:3},{value:`yarn dev# \u6216npm run dev
`,paraId:3,tocIndex:4},{value:"React \u5B98\u65B9\u57FA\u4E8E webpack \u53D1\u5E03\u4E86\u4E00\u4E2A\u811A\u624B\u67B6\u5DE5\u5177 Create React App\uFF08\u7B80\u79F0 CRA\uFF09\uFF0C\u7528\u6765\u642D\u5EFA React \u9879\u76EE\u3002",paraId:4,tocIndex:5},{value:`npx create-react-app react-project
`,paraId:5,tocIndex:6},{value:"\u901A\u8FC7\u4EE5\u4E0A\u547D\u4EE4\u521B\u5EFA\u7684 React \u9879\u76EE\uFF0C\u4F1A\u81EA\u52A8\u5C06\u9879\u76EE\u6240\u9700\u7684\u6240\u6709\u4F9D\u8D56\u5305\u90FD\u4E0B\u8F7D\u4E0B\u6765\u3002",paraId:6,tocIndex:6},{value:`yarn start# \u6216npm start
`,paraId:7,tocIndex:7},{value:"JSX \u8BED\u6CD5\uFF1A\u5141\u8BB8\u5C06HTML \u8BED\u6CD5\u76F4\u63A5\u52A0\u5165\u5230 JavaScript \u4EE3\u7801\u4E2D\uFF0C\u518D\u901A\u8FC7\u7FFB\u8BD1\u5668\u8F6C\u6362\u5230\u7EAF JavaScript \u540E\u7531\u6D4F\u89C8\u5668\u6267\u884C\u3002\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0CJSX \u5728\u4EA7\u54C1\u6253\u5305\u9636\u6BB5\u90FD\u5DF2\u7ECF\u7F16\u8BD1\u6210\u7EAF JavaScript\uFF0C\u4E0D \u4F1A\u5E26\u6765\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u53CD\u800C\u4F1A\u8BA9\u4EE3\u7801\u66F4\u52A0\u76F4\u89C2\u5E76\u6613\u4E8E\u7EF4\u62A4\u3002",paraId:8,tocIndex:8},{value:"\u5728\u6807\u7B7E\u5185\u90E8\u53EF\u4EE5\u4F7F\u7528",paraId:9,tocIndex:9},{value:"{}",paraId:9,tocIndex:9},{value:" \u5199js\u4EE3\u7801",paraId:9,tocIndex:9},{value:"JSX \u4E2D\u8981\u6C42\u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u5FC5\u987B\u6709\u4E00\u4E2A\u6839\u8282\u70B9\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7A7A\u6807\u7B7E\u6765\u4F5C\u4E3A\u7EC4\u4EF6\u7684\u6839\u8282\u70B9\uFF1A",paraId:10,tocIndex:10},{value:`export default class App extends Component {\r
    // \u6E32\u67D3\u7EC4\u4EF6\r
    render() {\r
        return (\r
            <>\r
                <h1>\u4F60\u597D</h1>\r
                <HelloWorld></HelloWorld>\r
            </>\r
        )\r
    }\r
}
`,paraId:11,tocIndex:10},{value:`let name = '\u5F20\u4E09';\r
export default class MyComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <h1>\u4F60\u597D\uFF0C{name}</h1>\r
            </div>\r
        )\r
    }\r
}
`,paraId:12,tocIndex:11},{value:`let key = 'username';\r
export default class MyComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <input type="text" name={key} />\r
            </div>\r
        )\r
    }\r
}
`,paraId:13,tocIndex:12},{value:`et num1 = 100;\r
let num2 = 20;\r
export default class MyComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <h1>{num1 + num2}</h1>\r
            </div>\r
        )\r
    }\r
}
`,paraId:14,tocIndex:13},{value:`let age = 20;\r
export default class MyComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <h1>{age >= 20 ? '\u6210\u5E74' : '\u672A\u6210\u5E74'}</h1>\r
            </div>\r
        )\r
    }\r
}
`,paraId:15,tocIndex:14},{value:`function isAge() {\r
    if (age >= 18) {\r
        return '\u6210\u5E74'\r
    }\r
    return '\u672A\u6210\u529F'\r
}\r
export default class MyComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <h1>{isAge()}</h1>\r
            </div>\r
        )\r
    }\r
}
`,paraId:16,tocIndex:15},{value:`<div className='box'></div>\r
<label htmlFor="username"></label>
`,paraId:17,tocIndex:16},{value:"\u4FDD\u8BC1{}\u5185\u662F\u6570\u7EC4\u5C31\u53EF\u4EE5",paraId:18,tocIndex:17},{value:`let arr = ['\u5F20\u4E09', '\u674E\u56DB', '\u738B\u4E94'];\r
export default class MyComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <ul>\r
                    {\r
                        arr.map((item, index) => {\r
                            return <li key={index}>{item}</li>\r
                        })\r
                    }\r
                </ul>\r
            </div>\r
        )\r
    }\r
}
`,paraId:19,tocIndex:17},{value:"React \u4E2D\u6839\u636E\u7EC4\u4EF6\u7684\u5F62\u5F0F\u5206\u4E3A\u4E24\u79CD\u7EC4\u4EF6\uFF1A",paraId:20,tocIndex:18},{value:"\u7C7B\u7EC4\u4EF6\uFF1A\u7528\u7684 ES6 \u4E2D class \u7684\u8BED\u6CD5\u6765\u521B\u5EFA\u7EC4\u4EF6",paraId:21,tocIndex:18},{value:"\u51FD\u6570\u7EC4\u4EF6\uFF1A\u7528\u7684\u51FD\u6570\u7684\u8BED\u6CD5\u6765\u521B\u5EFA\u7EC4\u4EF6",paraId:21,tocIndex:18},{value:`import React, { Component } from 'react'\r
export default class App extends Component {\r
    // \u6E32\u67D3\u7EC4\u4EF6\r
    render() {\r
        return (\r
            <h1>\u4F60\u597D</h1>\r
        )\r
    }\r
}
`,paraId:22,tocIndex:20},{value:"\u5FEB\u6377\u952E\uFF1Arcc",paraId:23,tocIndex:20},{value:`import React, { Component } from 'react'\r
import HelloWorld from './components/helloWorld/HelloWorld'\r
export default class App extends Component {\r
    // \u6E32\u67D3\u7EC4\u4EF6\r
    render() {\r
        return (\r
            <div>\r
                <h1>\u4F60\u597D</h1>\r
                <HelloWorld></HelloWorld>\r
            </div>\r
        )\r
    }\r
}
`,paraId:24,tocIndex:21},{value:`<h1 style={{ color: 'red', backgroundColor: '#eee' }}>\u4F60\u597D</h1>
`,paraId:25,tocIndex:23},{value:"\u5916\u90E8\u7684\u5168\u5C40\u6837\u5F0F\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u6587\u4EF6\u540D\u6CA1\u6709\u7279\u6B8A\u8981\u6C42\uFF0C\u6309\u7167\u5E38\u89C4\u7684\u6837\u5F0F\u6587\u4EF6\u540E\u7F00\u540D\uFF08\u4F8B\u5982\uFF1A",paraId:26,tocIndex:25},{value:".css",paraId:26,tocIndex:25},{value:"\u3001",paraId:26,tocIndex:25},{value:".scss",paraId:26,tocIndex:25},{value:"\u3001",paraId:26,tocIndex:25},{value:".less",paraId:26,tocIndex:25},{value:"\uFF09\u5373\u53EF\u3002",paraId:26,tocIndex:25},{value:"\u5728\u4EFB\u610F\u4E00\u4E2A\u7EC4\u4EF6\u4E2D\u901A\u8FC7 ",paraId:27,tocIndex:25},{value:"import",paraId:27,tocIndex:25},{value:" \u5F15\u5165\u540E\uFF0C\u90FD\u4F1A\u4F5C\u7528\u4E8E\u5F53\u524D\u9879\u76EE\u4E2D\u6240\u6709\u7684\u7EC4\u4EF6\u3002",paraId:27,tocIndex:25},{value:`import './index.css';\r

`,paraId:28,tocIndex:25},{value:"\u5916\u90E8\u7684\u5C40\u90E8\u6837\u5F0F\u6587\u4EF6\uFF0C\u9700\u8981\u6EE1\u8DB3\u4EE5\u4E0B\u51E0\u4E2A\u6761\u4EF6\uFF1A",paraId:29,tocIndex:26},{value:"\u6587\u4EF6\u540D\u5FC5\u987B\u4EE5 ",paraId:30,tocIndex:26},{value:".module.css",paraId:30,tocIndex:26},{value:"\u3001",paraId:30,tocIndex:26},{value:".module.scss",paraId:30,tocIndex:26},{value:" \u7B49\u4E3A\u7ED3\u5C3E\uFF1B",paraId:30,tocIndex:26},{value:"\u6837\u5F0F\u9009\u62E9\u5668\u53EA\u80FD\u4F7F\u7528 class \u7C7B\u9009\u62E9\u5668\uFF1B",paraId:30,tocIndex:26},{value:"\u5728\u5F15\u5165\u5C40\u90E8\u6837\u5F0F\u6587\u4EF6\u65F6\uFF0C\u9700\u8981\u901A\u8FC7 ",paraId:31,tocIndex:26},{value:"import ... from",paraId:31,tocIndex:26},{value:" \u6765\u5F15\u5165\uFF1A",paraId:31,tocIndex:26},{value:`import styles from './index.module.css';\r

`,paraId:32,tocIndex:26},{value:"\u4F7F\u7528\u65F6\uFF0C\u5C06\u7C7B\u9009\u62E9\u5668\u4F5C\u4E3A ",paraId:33,tocIndex:26},{value:"styles",paraId:33,tocIndex:26},{value:" \u8EAB\u4E0A\u7684\u4E00\u4E2A\u5C5E\u6027\u6765\u4F7F\u7528\uFF1A",paraId:33,tocIndex:26},{value:`<h1 className={styles.bgColor}>hello</h1>\r

`,paraId:34,tocIndex:26},{value:"\u5FEB\u6377\u952E\uFF1Arce",paraId:35,tocIndex:27},{value:"\u8FD9\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u771F\u6B63\u5199\u5168\u662F\u5B9A\u4E49\u5728  construct\u91CC\u9762",paraId:36,tocIndex:28},{value:`export default class StateComponent extends Component {\r
    state = {\r
        count: 10,\r
        msg: 'hello'\r
    }\r
    render() {\r
        return (\r
            <div>StateComponent</div>\r
        )\r
    }\r
}
`,paraId:37,tocIndex:28},{value:"\u63A8\u8350\u89E3\u6784",paraId:38,tocIndex:29},{value:`export default class StateComponent extends Component {\r
    state = {\r
        count: 10,\r
        msg: 'hello'\r
    }\r
    render() {\r
        const { count, msg } = this.state;\r
        return (\r
            <div>\r
                <h1>{this.state.count}</h1>\r
                <h2>{count}</h2>\r
                <h1>{this.state.msg}</h1>\r
                <h1>{msg}</h1>\r
            </div>\r
        )\r
    }\r
}
`,paraId:39,tocIndex:29},{value:"\u4F7F\u7528this.setState()",paraId:40,tocIndex:30},{value:`export default class StateComponent extends Component {\r
    state = {\r
        count: 10,\r
        msg: 'hello'\r
    }\r
    render() {\r
        const { count, msg } = this.state;\r
        return (\r
            <div>\r
                <h1>{this.state.count}</h1>\r
                <h2>{count}</h2>\r
                <h1>{this.state.msg}</h1>\r
                <h1>{msg}</h1>\r
                <button onClick={() => {\r
                    // \u4FEE\u6539state\u6570\u636E\r
                    this.setState({\r
                        msg: '\u4F60\u597D',\r
                        count: count + 1\r
                    });\r
                }}>\u4FEE\u6539 msg</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:41,tocIndex:30},{value:"\u5982\u679C\u8981\u67E5\u770B\u4FEE\u6539\u540E\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u901A\u8FC7 setState \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570 \u2014\u2014 \u56DE\u8C03\u51FD\u6570\uFF0C\u6765\u8F93\u51FA\u67E5\u770B\uFF1A",paraId:42,tocIndex:32},{value:`this.setState({\r
    msg: '\u4F60\u597D',\r
    count: count + 1\r
}, () => {\r
    console.log(this.state.msg, this.state.count);\r
});
`,paraId:43,tocIndex:32},{value:"\u66F4\u65B0\u7EC4\u4EF6\u72B6\u6001\uFF1AsetState \u4FEE\u6539\u5B8C\u6570\u636E\u540E\uFF0C\u4F1A\u91CD\u65B0\u89E6\u53D1 render \u65B9\u6CD5\u7684\u6267\u884C\uFF0C\u8BA9\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\uFF0C\u66F4\u65B0\u9875\u9762\u3002",paraId:44,tocIndex:33},{value:"\u5408\u5E76\u66F4\u65B0\uFF1AsetState\u65B9\u6CD5\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6539\u53D8\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u800C\u662F\u5C06\u8981\u66F4\u65B0\u7684\u72B6\u6001\u5408\u5E76\u5230\u5F53\u524D\u72B6\u6001\u4E2D\uFF0C\u7136\u540E\u5728\u4E0B\u4E00\u4E2A\u81EA\u7136\u6E32\u67D3\u5468\u671F\u4E2D\u5E94\u7528\u8FD9\u4E9B\u72B6\u6001\u7684\u53D8\u5316\u3002\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u4F18\u5316\u6027\u80FD\uFF0C\u9632\u6B62\u9891\u7E41\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:45,tocIndex:33},{value:"\u6700\u597D\u90FD\u5199\u4E00\u5C42\u7BAD\u5934\u51FD\u6570 (e)=>{}\uFF0C\u4F46\u5F97\u6CE8\u610F\u7EC4\u4EF6\u5237\u65B0\u51FD\u6570\u5730\u5740\u4F1A\u53D8\u52A8\uFF0C\u6709\u4E9B\u9690\u60A3\u3002",paraId:46,tocIndex:35},{value:`export default class EventComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <button onClick={() => {\r
                    console.log('\u4E8B\u4EF6\u7ED1\u5B9A\u6210\u529F');\r
                }}>\u6309\u94AE</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:47,tocIndex:35},{value:`export default class EventComponent extends Component {\r
    sayHello = () => {\r
        console.log('hello');\r
    }\r
    render() {\r
        return (\r
            <div>\r
                <button onClick={this.sayHello}>\u6309\u94AE</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:48,tocIndex:36},{value:`export default class EventComponent extends Component {\r
    sayHello = (name) => {\r
        console.log('hello', name);\r
    }\r
    render() {\r
        return (\r
            <div>\r
                <button onClick={() => {\r
                    this.sayHello('\u5F20\u4E09');\r
                }}>\u5F20\u4E09</button>\r
                <button onClick={() => this.sayHello('\u674E\u56DB')}>\u674E\u56DB</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:49,tocIndex:37},{value:"\u662F\u5408\u6210\u5BF9\u8C61\uFF0C\u4F46\u6709target",paraId:50,tocIndex:38},{value:`export default class EventComponent extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <button onClick={(event) => {\r
                    event.preventDefault();\r
                    event.stopPropagation();\r
                }}>\u6309\u94AE</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:51,tocIndex:38},{value:"React \u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A ",paraId:52,tocIndex:40},{value:"createRef",paraId:52,tocIndex:40},{value:" \u7684\u65B9\u6CD5\uFF0C\u7528\u6765\u6CE8\u518C\u7ED1\u5B9A\u8282\u70B9\uFF1A",paraId:52,tocIndex:40},{value:`import React, { Component, createRef } from 'react'\r
export default class TodoList extends Component {\r
    // \u8C03\u7528 createRef\uFF0C\u5F97\u5230\u4E00\u4E2A ref \u5BF9\u8C61\r
    inputRef = createRef();\r
    render() {\r
        return (\r
            <>\r
                <div>\r
                    {/* \u901A\u8FC7 ref \u5C5E\u6027\uFF0C\u7ED1\u5B9A ref \u5BF9\u8C61 */}\r
                    <input type="text" ref={this.inputRef} />\r
                    <button>\u65B0\u589E</button>\r
                </div>\r
            </>\r
        )\r
    }\r
}
`,paraId:53,tocIndex:40},{value:"\u5F53\u8282\u70B9\u8EAB\u4E0A\u901A\u8FC7 ref \u5C5E\u6027\u7ED1\u5B9A\u4E86 createRef \u7684\u5BF9\u8C61\u540E\uFF0C\u540E\u7EED\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7 createRef \u7684\u5BF9\u8C61\u6765\u83B7\u53D6\u5BF9\u5E94\u8282\u70B9\uFF1A",paraId:54,tocIndex:41},{value:`import React, { Component, createRef } from 'react'\r
export default class TodoList extends Component {\r
    inputRef = createRef();\r
    addTodo = () => {\r
        // \u83B7\u53D6 input \u8282\u70B9\r
        console.log(this.inputRef.current);\r
    }\r
    render() {\r
        return (\r
            <>\r
                <div>\r
                    <input type="text" ref={this.inputRef} />\r
                    <button onClick={this.addTodo}>\u65B0\u589E</button>\r
                </div>\r
            </>\r
        )\r
    }\r
}
`,paraId:55,tocIndex:41},{value:"\u53EF\u4EE5\u4F7F\u7528\u4ED6\u7684current\u5B58\u50A8\u6570\u636E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6570\u636E\u66F4\u65B0\u4E0D\u4F1A\u89E6\u53D1\u9875\u9762\u66F4\u65B0\u3002\u5F53\u6570\u636E\u53D8\u52A8\u4E0D\u9700\u8981\u9875\u9762\u66F4\u65B0\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u3002",paraId:56,tocIndex:42},{value:"render \u65B9\u6CD5\uFF0C\u4F1A\u5728\u7EC4\u4EF6\u9996\u6B21\u6E32\u67D3\u548C\u7EC4\u4EF6\u66F4\u65B0\u65F6\u6267\u884C\u3002\u4F5C\u7528\u662F\uFF1A\u7528\u4E8E\u6E32\u67D3\u9996\u6B21\u6302\u8F7D\u7684\u865A\u62DF\u8282\u70B9\uFF0C\u4EE5\u53CA\u540E\u7EED\u6BCF\u6B21\u6570\u636E\u66F4\u65B0\u540E\uFF0C\u6E32\u67D3\u65B0\u7684\u865A\u62DF\u8282\u70B9\u3002\u8FD9\u91CC\u80FD\u83B7\u53D6\u6570\u636E\uFF0C\u5728\u6E32\u67D3\u5668\u66F4\u6539\u6570\u636E\u3002",paraId:57,tocIndex:45},{value:"componentDidMount \u65B9\u6CD5\uFF0C\u4F1A\u5728\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u540E\u6267\u884C\u3002\u4F5C\u7528\u662F\uFF1A\u7528\u6765\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u3002",paraId:58,tocIndex:46},{value:"componentWillUnmount \u65B9\u6CD5\uFF0C\u4F1A\u5728\u7EC4\u4EF6\u5378\u8F7D\u524D\u6267\u884C\u3002\u4F5C\u7528\u662F\uFF1A\u6E05\u9664\u7EC4\u4EF6\u4E2D\u7684\u8BA1\u65F6\u5668\u3002",paraId:59,tocIndex:47},{value:`export default class ClassLifecycle extends Component {    \r
    componentDidMount() {        console.log('componentDidMount \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210');    }   \r
    componentWillUnmount() {        console.log('componentWillUnmount \u7EC4\u4EF6\u5378\u8F7D\u524D');    }   \r
    render() {       \r
        console.log('render')        \r
        return ( <div>ClassLifecycle</div>        )    \r
    }\r
}
`,paraId:60,tocIndex:48},{value:"\u5728 React \u4E2D\uFF0C\u7C7B\u7EC4\u4EF6\u662F\u5426\u66F4\u65B0\uFF0C\u4E0D\u662F\u53D6\u51B3\u4E8E\u6570\u636E\u662F\u5426\u53D1\u751F\u6539\u53D8\uFF0C\u800C\u662F\u770B\u662F\u5426\u8C03\u7528\u4E86 ",paraId:61,tocIndex:50},{value:"setState()",paraId:61,tocIndex:50},{value:" \u65B9\u6CD5\u3002\u4E00\u65E6 ",paraId:61,tocIndex:50},{value:"setState()",paraId:61,tocIndex:50},{value:" \u65B9\u6CD5\u88AB\u8C03\u7528\uFF0C",paraId:61,tocIndex:50},{value:"render()",paraId:61,tocIndex:50},{value:" \u65B9\u6CD5\u5C31\u4F1A\u91CD\u65B0\u6267\u884C\uFF0C\u7136\u540E\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u3002",paraId:61,tocIndex:50},{value:"\u8FD9\u6837\u7684\u5904\u7406\u65B9\u5F0F\uFF0C\u4F1A\u5BFC\u81F4\u51FA\u73B0\u5F88\u591A\u6CA1\u6709\u5FC5\u8981\u7684 ",paraId:62,tocIndex:50},{value:"render",paraId:62,tocIndex:50},{value:" \u6E32\u67D3\u3002\u56E0\u6B64\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u501F\u52A9 ",paraId:62,tocIndex:50},{value:"shouldComponentUpdate",paraId:62,tocIndex:50},{value:" \u751F\u547D\u5468\u671F\u51FD\u6570\u3002",paraId:62,tocIndex:50},{value:"\u5728\u8BE5\u51FD\u6570\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u83B7\u53D6\u5230\u53D8\u5316\u540E\u7684 state\uFF0C\u4EE5\u53CA\u53D8\u5316\u7684\u524D\u7684 state\u3002\u901A\u8FC7\u5BF9\u4E24\u4E2A state \u8FDB\u884C\u6BD4\u8F83\uFF0C\u6765\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u51B3\u5B9A render \u662F\u5426\u8981\u6267\u884C\u3002",paraId:63,tocIndex:50},{value:`import React, { Component } from 'react'\r
export default class LifeCycle extends Component {\r
    state = {\r
        count: 1\r
    }\r
    shouldComponentUpdate(props, state) {\r
         if(state.count == this.state.count) {\r
             return false;\r
         }\r
         return true;\r
    }\r
    render() {\r
        return (\r
            <div>\r
                <button onClick={() => {\r
                    this.setState({\r
                        count: 1\r
                    });\r
                }}>\u6309\u94AE</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:64,tocIndex:50},{value:"PureComponent \u7EAF\u7EC4\u4EF6\u5185\u90E8\u5DF2\u7ECF\u5C06 shouldComponentUpdate \u81EA\u52A8\u5904\u7406\u597D\u4E86\u3002",paraId:65,tocIndex:51},{value:"\u4F46\u662F\u662F\u5BF9state\u8FDB\u884C\u7684\u6D45\u6BD4\u8F83\u3002",paraId:65,tocIndex:51},{value:`import React, { PureComponent } from 'react'\r
 export default class ClassLifeCycle extends PureComponent { \r
     render() {\r
         return (\r
             <div></div>\r
         )\r
     }\r
 }
`,paraId:66,tocIndex:51},{value:"\u901A\u8FC7\u5C5E\u6027\u4F20\u503C",paraId:67,tocIndex:53},{value:`export default class Father extends Component {\r
    state = {\r
        gender: '\u7537'\r
    }\r
    render() {\r
        return (\r
            <div>\r
                Father\r
                <Child name="\u5F20\u4E09" age={20} gender={this.state.gender}></Child>\r
            </div>\r
        )\r
    }\r
}
`,paraId:68,tocIndex:54},{value:`export default class Child extends Component {\r
    // constructor(props) {\r
    //     super(props);\r
    // }\r
    render() {\r
        const { name, age, gender } = this.props;\r
        return (\r
            <div>\r
                <p>{name}</p>\r
                <p>{age}</p>\r
                <p>{gender}</p>\r
            </div>\r
        )\r
    }\r
}
`,paraId:69,tocIndex:55},{value:"\u6CE8\u610F\uFF1A\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 props \u63A5\u6536\u5230\u6570\u636E\u662F\u201C\u53EA\u8BFB\u201D\u6570\u636E\uFF0C\u4E0D\u80FD\u4FEE\u6539 props \u7684\u6570\u636E\u3002",paraId:70,tocIndex:55},{value:`export default class Child extends Component {\r
    static defaultProps = {\r
        gender: '\u5973'\r
    }\r
}\r

`,paraId:71,tocIndex:56},{value:`import React, { Component } from 'react'\r
import pt from 'prop-types'\r
export default class Child extends Component {\r
    // \u8BBE\u7F6E props \u7684\u7C7B\u578B\r
    static propTypes = {\r
        age: pt.number,\r
        name:pt.oneOfType([pt.string, pt.number]) //\u8BBE\u7F6E\u591A\u79CD\r
    }\r
}
`,paraId:72,tocIndex:57},{value:"\u5217\u4E3E\u51E0\u4E2A\u5E38\u7528\u7684\u7C7B\u578B\uFF1A",paraId:73,tocIndex:57},{value:"\u5B57\u7B26\u4E32\uFF1A",paraId:74,tocIndex:57},{value:"pt.string",paraId:74,tocIndex:57},{value:"\u6570\u5B57\uFF1A",paraId:74,tocIndex:57},{value:"pt.number",paraId:74,tocIndex:57},{value:"\u5E03\u5C14\u503C\uFF1A",paraId:74,tocIndex:57},{value:"pt.bool",paraId:74,tocIndex:57},{value:"\u6570\u7EC4\uFF1A",paraId:74,tocIndex:57},{value:"pt.array",paraId:74,tocIndex:57},{value:"\u5BF9\u8C61\uFF1A",paraId:74,tocIndex:57},{value:"pt.object",paraId:74,tocIndex:57},{value:"\u51FD\u6570\uFF1A",paraId:74,tocIndex:57},{value:"pt.func",paraId:74,tocIndex:57},{value:"\u591A\u4E2A\u7C7B\u578B\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\uFF1A",paraId:74,tocIndex:57},{value:"pt.oneOfType([pt.string, pt.number, ...])",paraId:74,tocIndex:57},{value:`export default class Father extends Component {\r
    getChildData = (data) => {\r
        console.log('\u5B50\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E', data);\r
    }\r
    render() {\r
        return (\r
            <div>\r
                Father\r
                <Child getChildData={this.getChildData}></Child>\r
            </div>\r
        )\r
    }\r
}
`,paraId:75,tocIndex:59},{value:`export default class Child extends Component {\r
    render() {\r
        const { getChildData } = this.props;\r
        return (\r
            <div>\r
                <button onClick={() => {\r
                    getChildData('hello');\r
                }}>\u4F20\u503C</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:76,tocIndex:60},{value:`yarn add events
`,paraId:77,tocIndex:63},{value:"\u6211\u4EEC\u624B\u52A8\u521B\u5EFA\u4E00\u4E2A ",paraId:78,tocIndex:64},{value:"events.js",paraId:78,tocIndex:64},{value:" \u6587\u4EF6\uFF1A",paraId:78,tocIndex:64},{value:`import { EventEmitter } from 'events';\r
const events = new EventEmitter();\r
export default events;
`,paraId:79,tocIndex:64},{value:"\u5728\u8D1F\u8D23",paraId:80,tocIndex:65},{value:"\u63A5\u6536\u6570\u636E\u7684\u7EC4\u4EF6",paraId:80,tocIndex:65},{value:"\u4E2D\uFF0C\u5F15\u5165\u4E8B\u4EF6\u603B\u7EBF\u5BF9\u8C61\uFF0C\u5E76\u6DFB\u52A0\u4E8B\u4EF6\uFF1A",paraId:80,tocIndex:65},{value:`import events from './events'\r
export default class ChildB extends Component {\r
    componentDidMount() {\r
        // \u5F80 events \u8EAB\u4E0A\u6DFB\u52A0\u4E86\u4E00\u4E2A getData \u7684\u65B9\u6CD5\uFF0C\u540E\u7EED\u8C01\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u4F20\u503C\u7ED9\u7EC4\u4EF6B\r
        events.addListener('getData', (data) => {\r
            console.log('\u63A5\u6536\u5144\u5F1F\u7EC4\u4EF6\u4F20\u9012\u7684\u53C2\u6570', data);\r
        });\r
    }\r
    render() {\r
        return (\r
            <div>ChildB</div>\r
        )\r
    }\r
}
`,paraId:81,tocIndex:65},{value:"\u5728\u8D1F\u8D23",paraId:82,tocIndex:66},{value:"\u4F20\u9012\u6570\u636E\u7684\u7EC4\u4EF6",paraId:82,tocIndex:66},{value:"\u4E2D\uFF0C\u5F15\u5165\u4E8B\u4EF6\u603B\u7EBF\u5BF9\u8C61\uFF0C\u5E76\u89E6\u53D1\u4E8B\u4EF6\uFF1A",paraId:82,tocIndex:66},{value:`import events from './events'\r
export default class ChildA extends Component {\r
    render() {\r
        return (\r
            <div>\r
                ChildA\r
                <button onClick={() => {\r
                    // \u8C03\u7528 events \u8EAB\u4E0A\u7ED1\u5B9A\u7684 getData \u65B9\u6CD5\uFF0C\u5E76\u4F20\u503C\r
                    events.emit('getData', '\u4F60\u597D');\r
                }}>\u4F20\u503C</button>\r
            </div>\r
        )\r
    }\r
}
`,paraId:83,tocIndex:66},{value:"\u6211\u4EEC\u624B\u52A8\u521B\u5EFA\u4E00\u4E2A context.js \u6587\u4EF6\uFF0C\u7528\u6765\u521B\u5EFA Context \u5BF9\u8C61\uFF1A",paraId:84,tocIndex:68},{value:`import { createContext } from "react";\r
const Context = createContext();\r
export default Context;
`,paraId:85,tocIndex:68},{value:`import React, { Component } from 'react'\r
import ChildA from './ChildA'\r
// \u5F15\u5165\u5916\u90E8\u7684 Context\r
import Context from './context'\r
export default class Father extends Component {\r
    state = {\r
        name: '\u5F20\u4E09'\r
    }\r
    render() {\r
        return (\r
            {/* \u901A\u8FC7 Context.Provider \u8BBE\u7F6E\u9700\u8981\u4F20\u9012\u7684\u6570\u636E\uFF0C value \u5BF9\u8C61\u7528\u6765\u8BBE\u7F6E\u9700\u8981\u4F20\u9012\u7684\u6570\u636E */}\r
            {/* \u53EA\u8981\u662F Context.Provider \u5305\u88F9\u7684\u540E\u4EE3\u90FD\u53EF\u4EE5\u63A5\u6536\u503C*/}\r
            <Context.Provider value={{ name: this.state.name, age: 20 }}>\r
                <ChildA></ChildA>\r
            </Context.Provider>\r
        )\r
    }\r
}
`,paraId:86,tocIndex:69},{value:"\u8FD9\u4E2A\u540E\u4EE3\u7EC4\u4EF6\u4E0D\u7BA1\u662F\u7B2C\u51E0\u5C42\u90FD\u53EF\u4EE5\u63A5\u6536",paraId:87,tocIndex:70},{value:`import React, { Component } from 'react'\r
import Context from './context'\r
export default class Test extends Component {\r
    render() {\r
        return (\r
            <Context.Consumer>\r
                {\r
                    (value) => {\r
                        // value \u7528\u6765\u63A5\u6536\u9876\u5C42\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E\r
                        console.log(value);\r
                        return (\r
                            <div>\r
                                <h1>\u7B2C\u56DB\u5C42\u5B50\u7EC4\u4EF6</h1>\r
                            </div>\r
                        )\r
                    }\r
                }\r
            </Context.Consumer>\r
        )\r
    }\r
}
`,paraId:88,tocIndex:70},{value:"\u8FD9\u662F\u7C7B\u4F3Cvue\u63D2\u69FD\u7684\u529F\u80FD\uFF0C\u8F83\u771F\u7684\u8BF4\u5E76\u4E0D\u662F\u63D2\u69FD\u3002\u662F\u5229\u7528props\u4E0A\u7684children\u800C\u5DF2",paraId:89,tocIndex:71},{value:"\u63D2\u69FD\u7684\u4F5C\u7528\uFF0C\u5C31\u662F\u7236\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\u4F20\u9012\u8282\u70B9\u7ED9\u5B50\u7EC4\u4EF6\uFF0C\u5B50\u7EC4\u4EF6\u4E2D\u63A5\u6536\u5230\u8282\u70B9\u540E\u8FDB\u884C\u6E32\u67D3\u3002",paraId:90,tocIndex:71},{value:"\u6211\u4EEC\u5728\u7236\u7EC4\u4EF6 CouponsAdd \u4E2D\uFF0C\u4F7F\u7528\u5B50\u7EC4\u4EF6 CoverModal\uFF0C\u5E76\u5F80\u5B50\u7EC4\u4EF6\u4E2D\u5305\u88F9\u4E00\u7EC4\u6807\u7B7E\uFF1A",paraId:91,tocIndex:72},{value:`import CoverModal from './CoverModal'\r
export default class CouponsAdd extends Component {\r
    render() {\r
        return (\r
            <div>\r
                <CoverModal>\r
                    <h3>\u65B0\u589E\u4F18\u60E0\u5238</h3>\r
                    <div>\r
                        <label>\u4F18\u60E0\u5238\u540D\u79F0</label>\r
                        <input type="text" />\r
                    </div>\r
                    <div>\r
                        <label>\u4F18\u60E0\u5238\u9762\u503C</label>\r
                        <input type="text" />\r
                    </div>\r
                </CoverModal>\r
            </div>\r
        )\r
    }\r
}
`,paraId:92,tocIndex:72},{value:"\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 ",paraId:93,tocIndex:73},{value:"this.props.children",paraId:93,tocIndex:73},{value:" \u63A5\u6536\u5230\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u8282\u70B9\uFF0C\u5E76\u6E32\u67D3\uFF1A",paraId:93,tocIndex:73},{value:`export default class CoverModal extends Component {\r
    render() {\r
        return (\r
            <div className='cover'>\r
                <div className='form'>\r
                    {this.props.children}\r
                </div>\r
            </div>\r
        )\r
    }\r
}
`,paraId:94,tocIndex:73},{value:"\u5FEB\u6377\u952E\uFF1Arface",paraId:95,tocIndex:74},{value:"\u5728 React 16.8 \u7248\u672C\u4E4B\u524D\uFF0C\u51FD\u6570\u7EC4\u4EF6\u4E5F\u79F0\u4E3A\u201C\u65E0\u72B6\u6001\u7EC4\u4EF6\u201D\uFF0C\u51FD\u6570\u7EC4\u4EF6\u6CA1\u6709\u81EA\u5DF1\u7684\u5185\u90E8\u6570\u636E\uFF0C\u4E5F\u6CA1\u6709\u81EA\u5DF1\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u3002",paraId:96,tocIndex:74},{value:"\u4ECE 16.8 \u5F00\u59CB\uFF0CReact \u4E2D\u4E13\u95E8\u4E3A\u51FD\u6570\u7EC4\u4EF6\u65B0\u589E\u4E86 Hook \u65B9\u6CD5\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u5C31\u662F\u7528\u6765\u89E3\u51B3\u51FD\u6570\u7EC4\u4EF6\u6CA1\u6709\u72B6\u6001\u3001\u6CA1\u6709\u751F\u547D\u5468\u671F\u7684\u95EE\u9898\u3002",paraId:97,tocIndex:74},{value:"useState \u7528\u4E8E\u5728\u51FD\u6570\u7EC4\u4EF6\u5185\u90E8\u5B9A\u4E49\u6570\u636E\u3002",paraId:98,tocIndex:76},{value:`import { useState } from 'react';\r
const App = () => {\r
    const [\u53D8\u91CF, \u65B9\u6CD5] = useState(\u521D\u59CB\u503C);\r
    return (...)\r
}
`,paraId:99,tocIndex:76},{value:"\u8BF4\u660E\uFF1A",paraId:100,tocIndex:76},{value:"\u53D8\u91CF",paraId:101,tocIndex:76},{value:"\uFF1A\u7528\u4E8E\u63A5\u6536 useState \u4E2D\u5B9A\u4E49\u7684\u6570\u636E\uFF1B",paraId:101,tocIndex:76},{value:"\u65B9\u6CD5",paraId:101,tocIndex:76},{value:"\uFF1A\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u7528\u4E8E\u4FEE\u6539\u53D8\u91CF\u7684\u6570\u636E\u503C\uFF0C\u7B49\u540C\u4E8E\u7C7B\u7EC4\u4EF6\u4E2D\u7684 ",paraId:101,tocIndex:76},{value:"this.setState()",paraId:101,tocIndex:76},{value:"\uFF1B",paraId:101,tocIndex:76},{value:"\u6817\u5B50:",paraId:102,tocIndex:76},{value:`const RolesPage = () => {\r
    const [rolesData, setRolesData] = useState([\r
        { _id: 1, name: '\u8D85\u7EA7\u7BA1\u7406\u5458', createTime: '2020' },\r
        { _id: 2, name: '\u666E\u901A\u7BA1\u7406\u5458', createTime: '2022' },\r
        { _id: 3, name: '\u8D22\u52A1', createTime: '2023' }\r
    ]);\r
     // \u5220\u9664\u89D2\u8272\r
    const deleteRole = (id) => {\r
        // \u8C03\u7528setRolesData \u4FEE\u6539 rolesData\r
        setRolesData(rolesData.filter(item => item._id != id));\r
    }\r
    return (\r
        {/*\u4F7F\u7528rolesData */}\r
        <Table columns={columns} dataSource={rolesData} rowKey="_id" />\r
    )\r
}
`,paraId:103,tocIndex:76},{value:`import { useRef } from 'react';\r
const Father = () => {\r
    const childRef = useRef();\r
    return (\r
        <Child ref={childRef}></Child>\r
    )\r
}
`,paraId:104,tocIndex:78},{value:`import { forwardRef } from 'react'\r
// ref \u7684\u7B2C\u4E8C\u4E2A\u4F4D\u7F6E\u7684\u5F62\u5F0F\u53C2\u6570\r
const Child = forwardRef((props, ref) => {\r
})\r
export default Child;
`,paraId:105,tocIndex:79},{value:`import { useImperativeHandle } from 'react';\r
const Child = (props, ref) => {\r
    useImperativeHandle(ref, () => {\r
        return {\r
            // \u8FD4\u56DE\u7ED9\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u6216\u65B9\u6CD5 ,\u65B9\u6CD5\u53EF\u4EE5\u6709\u5F62\u53C2\r
            showModal(params){\r
                \r
            }\r
        }\r
    })\r
}
`,paraId:106,tocIndex:80},{value:`import { useRef } from 'react';\r
const Father = () => {\r
    const childRef = useRef();\r
    const fatherEvent = () => {\r
        console.log(childRef.current);  // \u5B50\u7EC4\u4EF6\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684\u4E1C\u897F \u5728childRef.current\u91CC\u9762\r
        childRef.current.showModal();\r
    }\r
    return (\r
        <>\r
            <button onClick={fatherEvent}></button>\r
            <Child ref={childRef}></Child>\r
        </>\r
    )\r
}
`,paraId:107,tocIndex:81},{value:"\u4ECE React 16.8 \u5F00\u59CB\uFF0C\u65B0\u589E\u4E86 ",paraId:108,tocIndex:82},{value:"useEffect",paraId:108,tocIndex:82},{value:" \u7684 Hook \u65B9\u6CD5\uFF0C\u7528\u4E8E\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u6765\u6A21\u62DF\u751F\u547D\u5468\u671F\u3002",paraId:108,tocIndex:82},{value:"useEffect",paraId:109,tocIndex:82},{value:" \u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u4E3A\u56DE\u8C03\u51FD\u6570\uFF0C\u4F1A\u5728\u6307\u5B9A\u65F6\u673A\u6267\u884C\u3002\u7B2C\u4E8C\u53C2\u6570\u4E3A\u6570\u7EC4\uFF0C\u5F53\u6570\u7EC4\u6307\u5B9A\u7684\u6570\u636E\u53D1\u9001\u6539\u53D8\u4FBF\u6267\u884C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u7684\u51FD\u6570\u3002 useEffect return \u4E00\u4E2A\u51FD\u6570\uFF0C\u6B64\u51FD\u6570\u4F1A\u5728\u9500\u6BC1\u7684\u65F6\u5019\u6267\u884C",paraId:109,tocIndex:82},{value:`import  {useEffect } from 'react';\r
useEffect(() => {\r
    // \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u65F6\u6267\u884C \u548C \u7EC4\u4EF6\u66F4\u65B0\u65F6\u6267\u884C\r
})
`,paraId:110,tocIndex:83},{value:`useEffect(() => {\r
    // \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u65F6\u6267\u884C\r
}, [])
`,paraId:111,tocIndex:84},{value:`useEffect(() => {\r
    // \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u65F6\u6267\u884C\r
    // \u6570\u7EC4\u4E2D\u4EFB\u610F\u4E00\u6761\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\u6267\u884C\r
}, [\u6570\u636E1, \u6570\u636E2])
`,paraId:112,tocIndex:85},{value:`useEffect(() => {\r
    return () => {\r
        // \u6E05\u9664\u8BA2\u9605\r
        // \u7EC4\u4EF6\u9500\u6BC1\u524D\u6267\u884C\r
    }\r
}, [])
`,paraId:113,tocIndex:86},{value:"useMemo \u7528\u6765\u7F13\u5B58\u6570\u636E\u3002",paraId:114,tocIndex:88},{value:`import { useMemo } from 'react';\r
\r
const App = () => {\r
    \r
    const result = useMemo(() => {\r
        return \u8BA1\u7B97\u7684\u7ED3\u679C;\r
    }, [\u4F9D\u8D56\u7684\u6570\u636E\u9879])\r
    \r
}
`,paraId:115,tocIndex:88},{value:"React.memo() \u7528\u6765\u7F13\u5B58\u7EC4\u4EF6\u3002",paraId:116,tocIndex:89},{value:`import { memo } from 'react';\r
\r
const App = () => {\r
    \r
}\r
\r
export default memo(App);
`,paraId:117,tocIndex:89},{value:"\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u7236\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u5B50\u7EC4\u4EF6\u4E5F\u4F1A\u540C\u6B65\u66F4\u65B0\u3002",paraId:118,tocIndex:89},{value:"React.memo() \u7684\u4F5C\u7528\u53EF\u4EE5\u7528\u6765\u7F13\u5B58\u7EC4\u4EF6\uFF0C\u7F13\u5B58\u540E\u7684\u7EC4\u4EF6\uFF0C\u53EA\u8981\u7EC4\u4EF6\u5185\u90E8\u7684 state \u6216 props \u6CA1\u6709\u53D1\u751F\u6539\u53D8\uFF0C\u7EC4\u4EF6\u5C31\u4E0D\u4F1A\u66F4\u65B0\u3002",paraId:119,tocIndex:89},{value:"useCallback \u7528\u6765\u7F13\u5B58\u65B9\u6CD5\u3002",paraId:120,tocIndex:90},{value:"\u51FD\u6570\u7EC4\u4EF6\u4E2D\u7684\u65B9\u6CD5\uFF0C\u5728\u7EC4\u4EF6\u66F4\u65B0\u65F6\uFF0C\u6240\u6709\u7684\u65B9\u6CD5\u9ED8\u8BA4\u4F1A\u91CD\u65B0\u521B\u5EFA\u3002",paraId:121,tocIndex:90},{value:`import { useCallback  } from 'react';\r
\r
const App = () => {\r
    \r
    const sayHello = () => {}\r
    const sayHelloCb = useCallback(sayHello, []);\r
    \r
}
`,paraId:122,tocIndex:90},{value:"\u5B98\u65B9\u5730\u5740",paraId:123,tocIndex:91},{value:"\u6DF1\u5EA6\u62F7\u8D1D\uFF0C\u4F46\u662F\u6DF1\u62F7\u8D1D\u7684\u6210\u672C\u8F83\u9AD8\uFF0C\u4F1A\u5F71\u54CD\u6027\u80FD\uFF1B",paraId:124,tocIndex:91},{value:"ImmutableJS",paraId:124,tocIndex:91},{value:`\uFF0C\u975E\u5E38\u68D2\u7684\u4E00\u4E2A\u4E0D\u53EF\u53D8\u6570\u636E\u7ED3\u6784\u7684\u5E93\uFF0C\u53EF\u4EE5\u89E3\u51B3\u4E0A\u9762\u7684\u95EE\u9898\uFF0C\u4F46\u8DDF Immer \u6BD4\u8D77\u6765\uFF0CImmutableJS \u6709\u4E24\u4E2A\u8F83\u5927\u7684\u4E0D\u8DB3\uFF1A
`,paraId:124,tocIndex:91},{value:"\u9700\u8981\u4F7F\u7528\u8005\u5B66\u4E60\u5B83\u7684\u6570\u636E\u7ED3\u6784\u64CD\u4F5C\u65B9\u5F0F\uFF0C\u6CA1\u6709 Immer \u63D0\u4F9B\u7684\u4F7F\u7528\u539F\u751F\u5BF9\u8C61\u7684\u64CD\u4F5C\u65B9\u5F0F\u7B80\u5355\u3001\u6613\u7528\uFF1B",paraId:125,tocIndex:91},{value:"\u5B83\u7684\u64CD\u4F5C\u7ED3\u679C\u9700\u8981\u901A\u8FC7toJS\u65B9\u6CD5\u624D\u80FD\u5F97\u5230\u539F\u751F\u5BF9\u8C61\uFF0C\u8FD9\u4F7F\u5F97\u5728\u64CD\u4F5C\u4E00\u4E2A\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u65F6\u523B\u8981\u4E3B\u8981\u64CD\u4F5C\u7684\u662F\u539F\u751F\u5BF9\u8C61\u8FD8\u662F ImmutableJS \u7684\u8FD4\u56DE\u7ED3\u679C\uFF0C\u7A0D\u4E0D\u6CE8\u610F\uFF0C\u5C31\u4F1A\u4EA7\u751F\u95EE\u9898\uFF1B",paraId:125,tocIndex:91},{value:`yarn add react-router-dom
`,paraId:126,tocIndex:93},{value:"\u901A\u5E38\uFF0C\u6211\u4EEC\u628A\u53C2\u4E0E\u8DEF\u7531\u914D\u7F6E\u7684\u7EC4\u4EF6\uFF0C\u79F0\u4E3A\u201C\u9875\u9762\u7EC4\u4EF6\u201D\u3002\u8FD9\u4E9B\u7EC4\u4EF6\u6211\u4EEC\u90FD\u653E\u5728 ",paraId:127,tocIndex:95},{value:"src/pages",paraId:127,tocIndex:95},{value:" \u76EE\u5F55\u4E2D\u3002",paraId:127,tocIndex:95},{value:"\u4F8B\u5982\u6211\u4EEC\u9700\u8981\u767B\u5F55\u9875\u548C\u5E03\u5C40\u9875\uFF1A",paraId:128,tocIndex:95},{value:`src\r
 |--- pages\r
 |      |--- login\r
 |      |      |--- LoginPage.jsx\r
 |      |--- index\r
 |      |      |--- IndexPage.jsx
`,paraId:129,tocIndex:95},{value:"\u8DEF\u7531\u61D2\u52A0\u8F7D\uFF0C\u5F53\u7528\u6237\u8BBF\u95EE\u5F53\u524D\u8DEF\u7531\u65F6\uFF0C\u624D\u5F00\u59CB\u52A0\u8F7D\u5BF9\u5E94\u7684\u7EC4\u4EF6\u3002",paraId:130,tocIndex:96},{value:`import React, { Suspense, lazy } from 'react';\r
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';\r
// lazy \u61D2\u52A0\u8F7D\r
const NotFound = lazy(() => import('./pages/404/NotFound'));\r
const App = () => {\r
    return (\r
        <Suspense fallback={<p>\u9875\u9762\u52A0\u8F7D\u4E2D...</p>}>\r
            <BrowserRouter>\r
                <Routes>\r
                    {/* path :\u8DEF\u7531\u5730\u5740 \uFF0C element: \u7EC4\u4EF6*/}\r
                    <Route path="*" element={<NotFound />}></Route>\r
                </Routes>\r
            </BrowserRouter>\r
        </Suspense>\r
    )\r
}
`,paraId:131,tocIndex:96},{value:`import { Outlet } from 'react-router-dom'; \r
{/* \u914D\u7F6E\u4E8C\u7EA7\u8DEF\u7531\u51FA\u53E3 */}\r
<Outlet></Outlet>
`,paraId:132,tocIndex:97},{value:`import { Link } from 'react-router-dom'\r
const LoginPage = () => {\r
    return (\r
        <div>\r
            <Link to="/">\u53BB\u9996\u9875</Link>\r
            <Link to="/register">\u6CA1\u6709\u8D26\u53F7\uFF1F\u53BB\u6CE8\u518C</Link>\r
        </div>\r
    )\r
}
`,paraId:133,tocIndex:99},{value:`import { useNavigate } from 'react-router-dom'\r
const LoginPage = () => {\r
    const navigate = useNavigate();\r
    return (\r
        <div>\r
            <button onClick={() => {\r
                // \u8DF3\u8F6C\u5230 IndexPage\r
                navigate('/');\r
                // \u8DF3\u8F6C\u540E\u4E0D\u4FDD\u7559\u8BB0\u5F55\r
                navigate('/', { replace: true });\r
            }}>\u767B\u5F55</button>\r
        </div>\r
    )\r
}
`,paraId:134,tocIndex:100},{value:"\u4E8C\u7EA7\u8DEF\u7531\uFF0C\u662F\u76F4\u63A5\u5D4C\u5957\u5728\u4E00\u7EA7\u8DEF\u7531\u7684\u914D\u7F6E\u4E2D\u3002",paraId:135,tocIndex:101},{value:`import IndexPage from '@p/index/IndexPage';\r
import UsersPage from '@p/index/users/UsersPage';\r
const App = () => {\r
    return (\r
        <BrowserRouter>\r
            <Routes>\r
                <Route path="/" element={<IndexPage />}>\r
                    {/* \u914D\u7F6E IndexPage \u7684\u5B50\u8DEF\u7531 */}\r
                    <Route path="users" element={<UsersPage />}></Route>\r
                </Route>\r
            </Routes>\r
        </BrowserRouter>\r
    )\r
}
`,paraId:136,tocIndex:101},{value:"\u914D\u7F6E\u4E8C\u7EA7\u8DEF\u7531\u51FA\u53E3",paraId:137,tocIndex:101},{value:"\u6211\u4EEC\u5728\u4E00\u7EA7\u8DEF\u7531\u5BF9\u5E94\u7684\u7EC4\u4EF6\u4E2D\uFF0C\u901A\u8FC7 ",paraId:138,tocIndex:101},{value:"\u914D\u7F6E\u5B50\u8DEF\u7531\u7684\u51FA\u53E3\uFF1A",paraId:138,tocIndex:101},{value:`// \u5F15\u5165\u8DEF\u7531\u51FA\u53E3\u7EC4\u4EF6\r
import { Outlet } from 'react-router-dom';\r
const IndexPage = () => {\r
    return (\r
        <Layout className={styles.indexLayout}>     \r
            <Layout>\r
                <Content>\r
                    <div>\r
                        {/* \u914D\u7F6E\u4E8C\u7EA7\u8DEF\u7531\u51FA\u53E3 */}\r
                        <Outlet></Outlet>\r
                    </div>\r
                </Content>\r
            </Layout>\r
        </Layout>\r
    )\r
}
`,paraId:139,tocIndex:101},{value:"\u6211\u4EEC\u53EF\u4EE5\u5C06\u9700\u8981\u4F20\u9012\u7684\u53C2\u6570\u62FC\u63A5\u5230\u8DEF\u7531\u7684\u8DEF\u5F84\u4E2D\uFF0C\u6765\u5B9E\u73B0\u52A8\u6001\u8DEF\u7531\u7684\u4F20\u53C2\u3002",paraId:140,tocIndex:103},{value:"<Link to={`/goods/update/${value}`}>\u4FEE\u6539</Link>\r\n\n",paraId:141,tocIndex:103},{value:"\u5176\u4E2D\uFF0C",paraId:142,tocIndex:103},{value:"value",paraId:142,tocIndex:103},{value:" \u662F\u6211\u4EEC\u8981\u4F20\u9012\u7684\u52A8\u6001\u53C2\u6570\u7684\u53D8\u91CF\u540D\u3002",paraId:142,tocIndex:103},{value:"\u5728\u914D\u7F6E\u8DEF\u7531\u65F6\uFF0C\u52A8\u6001\u8DEF\u7531\u7684\u914D\u7F6E\u548C\u666E\u901A\u8DEF\u7531\u4E5F\u6709\u533A\u522B\uFF1A",paraId:143,tocIndex:104},{value:`<Route path="goods/update/:id" element={<GoodsUpdate />}></Route>\r

`,paraId:144,tocIndex:104},{value:":id",paraId:145,tocIndex:104},{value:" \u4E2D\u7684 ",paraId:145,tocIndex:104},{value:"id",paraId:145,tocIndex:104},{value:" \u662F\u4EFB\u610F\u53D8\u91CF\u540D\uFF0C\u7528\u6765\u5339\u914D\u8DEF\u7531\u8DEF\u5F84\u4E2D\u52A8\u6001\u7684\u90E8\u5206\u3002",paraId:145,tocIndex:104},{value:"\u5728\u7EC4\u4EF6\u4E2D\uFF0C\u901A\u8FC7\u8C03\u7528 ",paraId:146,tocIndex:105},{value:"useParams",paraId:146,tocIndex:105},{value:" \u6765\u63A5\u6536\u52A8\u6001\u8DEF\u7531\u7684\u53C2\u6570\u3002",paraId:146,tocIndex:105},{value:`import { useParams } from 'react-router-dom'\r
const GoodsUpdate = () => {\r
    const params = useParams();\r
    console.log('\u63A5\u6536\u5230\u7684\u53C2\u6570', params);\r
    return (\r
        <div>GoodsUpdate</div>\r
    )\r
}\r

`,paraId:147,tocIndex:105},{value:`yarn add redux react-redux
`,paraId:148,tocIndex:107},{value:`src\r
 |--- store\r
 |      |--- index.js  # \u4E3B\u4ED3\u5E93\u7684\u914D\u7F6E\u6587\u4EF6
`,paraId:149,tocIndex:109},{value:`import { legacy_createStore } from 'redux'\r
const store = legacy_createStore();\r
export default store;
`,paraId:150,tocIndex:110},{value:"\u5728\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6 ",paraId:151,tocIndex:111},{value:"main.jsx",paraId:151,tocIndex:111},{value:" \u6216\u8005 ",paraId:151,tocIndex:111},{value:"index.js",paraId:151,tocIndex:111},{value:" \u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF1A",paraId:151,tocIndex:111},{value:`import { Provider } from 'react-redux';\r
import store from './store';\r
const root = ReactDOM.createRoot(document.getElementById('root'));\r
root.render(\r
    <Provider store={store}>\r
        <App />\r
    </Provider>\r
);
`,paraId:152,tocIndex:111},{value:"\u6211\u4EEC\u4EE5\u89D2\u8272\u6A21\u5757\u4E3A\u4F8B\u3002",paraId:153,tocIndex:112},{value:`src\r
 |--- store\r
 |      |--- roles\r
 |      |      |--- reducer.js
`,paraId:154,tocIndex:113},{value:`import { SET_ROLE } from "../actionsConfig";\r
const initData = []; //\u521D\u59CB\u5316\u9ED8\u8BA4\u6570\u636E\r
export const rolesReducer = (state = initData, actions) => {\r
    switch (actions.type) {\r
        case SET_ROLE:\r
            return actions.payload;\r
            break;\r
        default:\r
            return state;\r
            break;\r
    }\r
};
`,paraId:155,tocIndex:114},{value:"\u5728\u4ED3\u5E93\u7684\u4E3B\u6587\u4EF6\u4E2D\uFF0C\u5F15\u5165 reducer \u51FD\u6570\uFF0C\u901A\u8FC7 combineReducers \u65B9\u6CD5\uFF0C\u5C06\u6240\u6709\u7684 reducer \u51FD\u6570\u5408\u5E76\u5728\u4E00\u8D77\uFF0C\u6700\u540E\u6DFB\u52A0\u5230\u4ED3\u5E93\u4E2D\uFF1A",paraId:156,tocIndex:115},{value:`import { legacy_createStore, combineReducers } from 'redux'\r
// \u5F15\u5165\u89D2\u8272\u7684 reducer\r
import { rolesReducer } from './roles/reducer';\r
// \u5408\u5E76 reducer\r
const allReducers = combineReducers({\r
    roles: rolesReducer\r
})\r
const store = legacy_createStore(allReducers);
`,paraId:157,tocIndex:115},{value:`import { useSelector } from 'react-redux';\r
const RolesPage = () => {\r
    const roles = useSelector((state) => {\r
        return state.roles;\r
    });\r
    console.log(roles);\r
}
`,paraId:158,tocIndex:116},{value:"\u5F53\u4ED3\u5E93\u4E2D\u7684\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\uFF0CuseSelector \u4F1A\u81EA\u52A8\u91CD\u65B0\u83B7\u53D6\u6700\u65B0\u7684\u6570\u636E\u3002",paraId:159,tocIndex:116},{value:`import { useDispatch } from 'react-redux';\r
const RolesPage = () => {\r
    const dispatch = useDispatch();\r
    // \u5220\u9664\u89D2\u8272\r
    const deleteRole = (id) => {\r
        // \u5220\u9664\u4ED3\u5E93\u4E2D\u7684\u6570\u636E\r
        dispatch({ type: 'deleteOne', payload: { id } });\r
    }\r
}
`,paraId:160,tocIndex:117},{value:"\u76EE\u524D\u5904\u7406 Redux \u5F02\u6B65\u64CD\u4F5C\u7684\u4E2D\u95F4\u4EF6\u4E3B\u8981\u6709\u4E24\u79CD\uFF1A",paraId:161,tocIndex:118},{value:"redux-thunk",paraId:162,tocIndex:118},{value:"redux-saga\uFF1A\u57FA\u4E8E ES6 \u4E2D generator\uFF08\u751F\u6210\u5668\uFF09\u8BED\u6CD5",paraId:162,tocIndex:118},{value:`yarn add redux-thunk
`,paraId:163,tocIndex:119},{value:`//  store/index.js\r
import { applyMiddleware } from 'redux'\r
import thunk from 'redux-thunk';\r
const store = legacy_createStore(allReducers, applyMiddleware(thunk));
`,paraId:164,tocIndex:120},{value:"\u4E2D\u95F4\u4EF6\u914D\u7F6E\u6210\u529F\u540E\uFF0C\u6211\u4EEC\u7684 redux \u4E2D\uFF0C\u5C31\u53EF\u4EE5\u5904\u7406\u516C\u5171\u7684\u5F02\u6B65\u65B9\u6CD5\u4E86\u3002",paraId:165,tocIndex:120},{value:`src\r
 |--- store\r
 |      |--- users\r
 |      |      |--- actions.js   # \u5F02\u6B65\u65B9\u6CD5  \u548Creducer\u540C\u7EA7\r
 |      |      |--- reducer.js
`,paraId:166,tocIndex:122},{value:`import roles from '@/apis/roles';\r
import { SET_ROLE } from '../actionsConfig';\r
\r
// \u624B\u52A8\u8BBE\u7F6E\u72B6\u6001\u673A\u6570\u636E\r
export const setRolesAsync = () => {\r
    return async (dispatch) => {\r
        const res = await roles.findRoles();\r
        if (1 == res.code) {\r
            dispatch({ type: SET_ROLE, payload: res.data });\r
        }\r
    };\r
};\r
// \u4ECE\u540E\u53F0\u83B7\u53D6\u6570\u636E\r
export const getRolesAsync = () => {\r
    return async (dispatch,id) => {\r
        const res = await roles.findRoleById({ roleId: id});\r
        if (1 == res.code) {\r
            dispatch({ type: SET_ROLE, payload: res.data });\r
        }\r
        return res.code;\r
    };\r
};\r
export default { setRolesAsync,getRolesAsync };
`,paraId:167,tocIndex:123},{value:`import { useDispatch, useSelector } from 'react-redux';\r
import actionsRole from '../../store/roles/actions';\r
const loadData = () => {\r
    const dispatch = useDispatch();\r
    // \u83B7\u53D6\u89D2\u8272\u6570\u636E\r
    const getUsers = async () => {\r
        // \u8C03\u7528\u4ED3\u5E93\u4E2D\u516C\u5171\u7684\u5F02\u6B65\u65B9\u6CD5\r
        dispatch(actionsRole.setRolesAsync())\r
    }\r
}
`,paraId:168,tocIndex:124},{value:"\u66F4\u9AD8\u7EA7\u7684\u5F02\u6B65/\u7F51\u7EDC\u8BF7\u6C42\u5206\u79BB",paraId:169,tocIndex:125},{value:"\u81EA\u5B9A\u4E49 Hook\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u81EA\u5DF1\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\u3002\u4F46\u662F Hook \u51FD\u6570\u548C\u666E\u901A\u51FD\u6570\u7684\u533A\u522B\u5728\u4E8E\uFF1A",paraId:170,tocIndex:126},{value:"Hook \u51FD\u6570\u547D\u540D\u65F6\u5FC5\u987B\u4EE5 use \u5F00\u5934\uFF1B",paraId:171,tocIndex:126},{value:"Hook \u51FD\u6570\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u7684 Hook \u65B9\u6CD5\uFF0C\u4F46\u662F\u666E\u901A\u51FD\u6570\u4E2D\u4E0D\u884C\uFF1B",paraId:171,tocIndex:126},{value:`const useRequest = () => {}
`,paraId:172,tocIndex:126},{value:"\u53EF\u4EE5\u5C06\u72B6\u6001\u673A\u4E2D\u6240\u6709\u516C\u5171\u7684\u5F02\u6B65\u65B9\u6CD5\u5C01\u88C5\u5230\u81EA\u5B9A\u4E49 Hook \u4E2D\uFF0C\u6765\u4EE3\u66FF thunk \u4E2D\u95F4\u4EF6\u7684\u4F7F\u7528\u3002",paraId:173,tocIndex:127},{value:`src\r
 |--- hooks\r
 |      |--- useRequest.js
`,paraId:174,tocIndex:128},{value:"\u611F\u89C9\u50CF\u662F\u88C5\u9970\u5668\uFF0C\u8FC7\u4E00\u904D\u4E4B\u540E\u8FD4\u56DE\u5904\u7406\u597D\u7684(\u6216\u8005\u5B9E\u9645\u9700\u8981\u7684\u51FD\u6570)",paraId:175,tocIndex:129},{value:`import { useDispatch, useSelector } from 'react-redux';\r
import roles from '@/apis/roles';\r
import { SET_ROLE } from '../store/actionsConfig';\r
const useRequest = () => {\r
    const dispatch = useDispatch();\r
    const rolesStore = useSelector((state) => state.roles);\r
    const setRolesAsync = async () => {\r
        const res = await roles.findRoles();\r
        if (1 == res.code) {\r
            dispatch({ type: SET_ROLE, payload: res.data });\r
        }\r
    };\r
    const getRolesAsync = async (id) => {\r
        const res = await roles.findRoleById({ roleId: id });\r
        if (1 == res.code) {\r
            dispatch({ type: SET_ROLE, payload: res.data });\r
        }\r
        return res.code;\r
    };\r
    return { rolesStore, setRolesAsync,getRolesAsync };\r
};\r
\r
export default useRequest;\r

`,paraId:176,tocIndex:129},{value:`import useRequest from '../../hooks/useRequest';\r
const RoleClass = () => {\r
    //rolesStore \uFF1A\u72B6\u6001\u673A\u6570\u636E\r
    const { rolesStore, setRolesAsync, getRolesAsync } = useRequest();\r
    const loadData = async () => {\r
        setRolesAsync();\r
    };\r
    useEffect(() => {\r
        loadData();\r
    }, []);\r
}\r

`,paraId:177,tocIndex:130},{value:"\u9AD8\u9636\u7EC4\u4EF6\uFF0CHOC\u3002",paraId:178,tocIndex:132},{value:"\u9AD8\u9636\u7EC4\u4EF6\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u548C\u666E\u901A\u7684\u533A\u522B\u5728\u4E8E\uFF1A",paraId:179,tocIndex:132},{value:"\u8BE5\u51FD\u6570\u9700\u8981\u63A5\u6536\u4E00\u4E2A\u7EC4\u4EF6\u4F5C\u4E3A\u53C2\u6570",paraId:180,tocIndex:132},{value:"\u6700\u7EC8\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u529F\u80FD\u589E\u5F3A\u7684\u7EC4\u4EF6",paraId:180,tocIndex:132},{value:`src\r
 |--- hoc\r
 |     |--- withAuth.jsx\r
 |     |--- AuthButton.jsx
`,paraId:181,tocIndex:134},{value:"\u5728 ",paraId:182,tocIndex:135},{value:"AuthButton.jsx",paraId:182,tocIndex:135},{value:" \u7EC4\u4EF6\u4E2D\uFF0C\u5BF9 antd \u7684 Button \u7EC4\u4EF6\u505A\u8FDB\u4E00\u6B65\u7684\u5C01\u88C5\uFF1A",paraId:182,tocIndex:135},{value:`import React from 'react'\r
import { Button } from 'antd'\r
const AuthButton = (props) => {\r
    return (\r
        <Button {...props}>{props.children}</Button>\r
    )\r
}\r
export default AuthButton
`,paraId:183,tocIndex:135},{value:"\u5728 ",paraId:184,tocIndex:136},{value:"withAuth.jsx",paraId:184,tocIndex:136},{value:" \u6587\u4EF6\u4E2D\u5C01\u88C5 HOC\uFF1A",paraId:184,tocIndex:136},{value:`const withAuth = (Component) => (props) => {\r
    const { role } = JSON.parse(localStorage.userInfo || '{}');\r
    if (role.name == '\u8D85\u7EA7\u7BA1\u7406\u5458') {\r
        return <Component {...props} />\r
    }\r
    // return null;  // \u4E0D\u663E\u793A\u6309\u94AE\r
    // \u663E\u793A\u7981\u7528\u6309\u94AE\r
    return <Component disabled={true} {...props} />\r
}\r
export default withAuth;\r
---------------------------------------\r
import { getLogin } from '@/utils/utils';\r
const withAuth = (Component) => {\r
    return (props, ref) => {\r
        const login = getLogin();\r
        const userPower = login ? login.userInfo.role.name : '';\r
        if ('\u8D85\u7EA7\u7BA1\u7406\u5458' === userPower) {\r
            return <Component {...props}></Component>;\r
        } else {\r
            return <Component disabled {...props}></Component>;\r
        }\r
    };\r
};\r
export default withAuth;\r

`,paraId:185,tocIndex:136},{value:"\u5C01\u88C5\u597D HOC \u540E\uFF0C\u9700\u8981\u5C06 AuthButton \u4F20\u7ED9 HOC \u8FDB\u884C\u5904\u7406\uFF1A",paraId:186,tocIndex:137},{value:`import React, { memo } from 'react';\r
import { Button } from 'antd';\r
import withAuth from '../withAuth';\r
const AuthButton = (props) => {\r
    console.log("AuthButton \u6267\u884C")\r
    return <Button {...props}> {props.children} </Button>;\r
};\r
export default memo(withAuth(AuthButton)) ;
`,paraId:187,tocIndex:137},{value:"\u56E0\u4E3A\u6211\u4EEC\u7684 AuthButton \u662F\u57FA\u4E8E antd \u7684 Button \u5C01\u88C5\u7684\uFF0C\u6240\u4EE5 Button \u7684\u5C5E\u6027\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u5728 AuthButton \u4E0A\uFF1A",paraId:188,tocIndex:138},{value:`import AuthButton from '../../../hoc/button/AuthButton';\r
<AuthButton danger onClick={singleton(delData,record._id,record._id)}>\r
    \u5220\u9664\r
</AuthButton>
`,paraId:189,tocIndex:138},{value:"singleton \u51FD\u6570\u4E3A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u88C5\u9970\u5668,\u914D\u5408React.memo()",paraId:190,tocIndex:138},{value:`/**\r
 * \u573A\u666F\uFF1A\u5B50\u7EC4\u4EF6\u4E3A\u6309\u94AE\uFF0C\u5F53\u7236\u7EC4\u4EF6\u66F4\u65B0\u65F6\u7531\u4E8Eonclick\u6BCF\u6B21\u90FD\u4F1A\u4EA7\u751F\u65B0\u51FD\u6570\uFF0C\u5BFC\u81F4\u6309\u94AE\u5237\u65B0\r
 * \u4F2A\u5355\u4EF6\u6A21\u5F0F\uFF0C\u4E3A\u6BCF\u4E2A\u6309\u94AE\u63D0\u524D\u751F\u6210\u6267\u884C\u51FD\u6570\uFF0C\u907F\u514D\u7236\u7EC4\u4EF6\u5237\u65B0\u7684\u65F6\u5019\u4EA7\u751F\u65B0\u51FD\u6570\uFF0C\u5BFC\u81F4\u5B50\u7EC4\u4EF6\u6E32\u67D3\r
 * \u727A\u7272\u7A7A\u95F4\u6362\u6027\u80FD\uFF0C\u66F4\u5177\u573A\u666F\u53D6\u820D\r
 */\r
let instantiate = []; //\u5C06\u51FD\u6570\u5904\u7406\u4E3A\u5355\u4EF6\u6A21\u5F0F\uFF0C\u5237\u65B0\u7684\u65F6\u5019\u4E0D\u9700\u8981\u751F\u6210\u65B0\u7684\u4E8B\u4EF6\u51FD\u6570,\u540C\u79CD\u7C7B\u578B\u7684\r
export function singleton(fn, key, ...param) {\r
    if (!instantiate[key]) {\r
        instantiate[key] = () => {\r
            fn(...param);\r
            instantiate[key] = ''; // \u6267\u884C\u8FC7\u5C31\u6E05\u7A7A\u4E86\uFF0C\u4E0D\u8981\u8FD9\u884C\u53EA\u80FD\u6267\u884C\u4E00\u6B21\r
            return;\r
        };\r
    }\r
    return instantiate[key];\r
}
`,paraId:191,tocIndex:138},{value:"\u81EA\u5B9A\u4E49hook",paraId:192,tocIndex:139},{value:`import { useDispatch, useSelector } from 'react-redux';\r
import { SET_SYS_THEME } from '../store/actionsConfig';\r
const useSystem = () => {\r
    const dispatch = useDispatch();\r
    const systemStore = useSelector((state) => state.system);\r
    const setSystemTheme = (type) => {\r
        dispatch({ type: SET_SYS_THEME, payload: type });\r
    };\r
    return { systemStore, setSystemTheme };\r
};\r
\r
export default useSystem;\r

`,paraId:193,tocIndex:139},{value:`yarn add echarts echarts-for-react
`,paraId:194,tocIndex:141},{value:`import ReactEcharts from 'echarts-for-react'
`,paraId:195,tocIndex:143},{value:"\u63A8\u8350\u4F7F\u7528\u6570\u636E\u96C6\uFF0Cdataset\u3002ECharts 4 \u5F00\u59CB\u652F\u6301",paraId:196,tocIndex:144},{value:`const option = {\r
    title: {\r
        text: 'ECharts \u5165\u95E8\u793A\u4F8B',\r
    },\r
    legend: {},\r
    // \u5DE5\u5177\u680F\r
    toolbox: {\r
        show: true,\r
        orient: 'vertical',\r
        right: 0,\r
        top: 0,\r
        iconStyle: { borderColor: '#000' }, //\u56FE\u5F62\u63CF\u8FB9\u989C\u8272\uFF0C\u5C31\u8BBE\u7F6E\u8FD9\u4E2A\r
        feature: {\r
            //\u5F00\u542F\u5BF9\u5E94\u5DE5\u5177\u6309\u94AE\r
            // dataView: { readOnly: false },\r
            // restore: {}, //\u914D\u7F6E\u8FD8\u539F\r
            saveAsImage: { title: '\u4E0B\u8F7D' },\r
        },\r
    },\r
    tooltip: {},\r
    dataset: {\r
        // \u7528 dimensions \u6307\u5B9A\u4E86\u7EF4\u5EA6\u7684\u987A\u5E8F\u3002\u76F4\u89D2\u5750\u6807\u7CFB\u4E2D\uFF0C\u5982\u679C X \u8F74 type \u4E3A category\uFF0C\r
        // \u9ED8\u8BA4\u628A\u7B2C\u4E00\u4E2A\u7EF4\u5EA6\u6620\u5C04\u5230 X \u8F74\u4E0A\uFF0C\u540E\u9762\u7EF4\u5EA6\u6620\u5C04\u5230 Y \u8F74\u4E0A\u3002\r
        // \u5982\u679C\u4E0D\u6307\u5B9A dimensions\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A series.encode\r
        // \u5B8C\u6210\u6620\u5C04\uFF0C\u53C2\u89C1\u540E\u6587\u3002\r
        dimensions: ['product', '2015', '2016', '2017'],\r
        source: [\r
            { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },\r
            { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },\r
            { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },\r
            { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 },\r
        ],\r
    },\r
    xAxis: {\r
        type: 'category',\r
    },\r
    yAxis: {},\r
    series: [\r
        {\r
            type: 'line',\r
        },\r
        {\r
            type: 'line',\r
        },\r
        {\r
            type: 'line',\r
        },\r
    ],\r
};
`,paraId:197,tocIndex:144},{value:`const Home = () => {\r
    return <ReactEcharts option={option} style={{ width: '600px' }}></ReactEcharts>;\r
};
`,paraId:198,tocIndex:145}]},72928:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(46282);const r=[{value:"\u4F7F\u7528cdn\u7684\u65B9\u5F0F\u5F15\u7528vue\u6E90\u7A0B\u5E8F",paraId:0,tocIndex:1},{value:"\u4F7F\u7528\u811A\u624B\u67B6\u642D\u5EFA\u9879\u76EE",paraId:0,tocIndex:1},{value:"\u5B89\u88C5\u811A\u624B\u67B6",paraId:1,tocIndex:2},{value:`//\u5168\u5C40\u5B89\u88C5\u811A\u624B\u67B6\u547D\u4EE4\r
npm install -g @vue/cli
`,paraId:2,tocIndex:2},{value:"\u521B\u5EFA\u9879\u76EE",paraId:3,tocIndex:2},{value:`//\u521B\u5EFA\u9879\u76EE\u7684\u547D\u4EE4 vue create \u9879\u76EE\r
vue create project1
`,paraId:4,tocIndex:2},{value:"\u9009\u9879\uFF08\u7A7A\u683C\u9009\u62E9\uFF0C\u56DE\u8F66\u786E\u8BA4\uFF09",paraId:5,tocIndex:2},{value:"Please pick a preset: (Use arrow keys), \u9009\u62E9\u4E00\u4E2A\u9884\u52A0\u8F7D\u7684\u6A21\u677F\uFF0C\u6211\u4EEC\u9009\u62E9\u81EA\u5B9A\u4E49",paraId:6,tocIndex:2},{value:`  Vue CLI v5.0.8\r
  ? Please pick a preset:\r
    Default ([Vue 3] babel, eslint)  --vue3\u7684\u9879\u76EE\r
    Default ([Vue 2] babel, eslint)  --vue2\u7684\u9879\u76EE\uFF0C\u91CC\u9762\u5305\u542B\u4E86babel, esling\u4E24\u4E2A\u63D2\u4EF6> \r
  > Manually select features	       --\u81EA\u5B9A\u4E49\u521B\u5EFA\u9879\u76EE\uFF0C\u7528\u6237\u81EA\u5DF2\u9009\u62E9\u521B\u5EFA\u7684\u9009\u9879
`,paraId:7,tocIndex:2},{value:`2. \u9009\u62E9\u8981\u5B89\u88C5\u7684\u63D2\u4EF6
`,paraId:8,tocIndex:2},{value:`  Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and<enter> to proceed)\r
  (*) Babel            --\u7F16\u8BD1vue\u6587\u4EF6\u7528\u7684\u63D2\u4EF6>\r
  ( ) TypeScript            --\u4F7F\u7528ts\u5F00\u53D1vue \r
  ( ) Progressive Web App (PWA) Support  --\u6280\u672F\u96C6\u5408\uFF0C\u53EF\u4EE5\u5728\u79FB\u52A8\uFF0Ch5\u4E0A\u8FD0\u884C\u7684\u4E00\u7CFB\u5217\u7684\u6280\u672F \r
  ( ) Router                --vue\u8DEF\u7531 \r
  ( ) Vuex                --\u72B6\u6001\u673A \r
  ( ) CSS Pre-processors        --sass \r
  ( ) Linter / Formatter        --\u8BED\u6CD5\u68C0\u67E5\u63D2\u4EF6 \r
  ( ) Unit Testing            --\u5355\u5143\u6D4B\u8BD5\u63D2\u4EF6\r
  ( ) E2E Testing            --\u5355\u5143\u6D4B\u8BD5\u63D2\u4EF6
`,paraId:9,tocIndex:2},{value:`3. \u9009\u62E9vue\u7684\u7248\u672C
`,paraId:10,tocIndex:2},{value:`  ? Choose a version of Vue.js that you want to start the project with  \r
  3.x\r
  > 2.x
`,paraId:11,tocIndex:2},{value:`4. \u9009\u62E9\u4EE5\u4E0A\u63D2\u4EF6\u7684\u914D\u7F6E\u662F\u5426\u72EC\u7ACB\u4E00\u4E2A\u6587\u4EF6
`,paraId:12,tocIndex:2},{value:`  ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)\r
  > In dedicated config files            --\u72EC\u7ACB\u7684\u914D\u7F6E\u6587\u4EF6  \r
  In package.json                --\u6240\u6709\u914D\u7F6E\u90FD\u653E\u5728\u8FD9\u4E00\u4E2A\u6587\u4EF6\u4E2D
`,paraId:13,tocIndex:2},{value:"template-\u7528\u4E8E\u7F16\u5199html\u7684\u4EE3\u7801",paraId:14,tocIndex:4},{value:"script-\u7528\u4E8E\u7F16\u5199js\u4EE3\u7801",paraId:14,tocIndex:4},{value:"style-\u7528\u4E8E\u7F16\u5199css\u4EE3\u7801",paraId:14,tocIndex:4},{value:"vscode\u5B89\u88C5vue\u63D2\u4EF6\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528\u5FEB\u6377\u952Evb\u751F\u6210\u7EC4\u4EF6\u7ED3\u6784",paraId:15,tocIndex:4},{value:"\u5BFC\u5165\u7EC4\u4EF6",paraId:16,tocIndex:5},{value:`<script>\r
    //\u7B2C\u4E00\u6B65\u5BFC\u5165\u6211\u4EEC\u8981\u4F7F\u7528\u7684\u7EC4\u4EF6\r
    import Hello from '@/components/Hello';\r
<\/script>
`,paraId:17,tocIndex:5},{value:"\u6CE8\u518C\u7EC4\u4EF6",paraId:18,tocIndex:5},{value:`<script>\r
    export default {\r
        //\u8BBE\u7F6E\u7EC4\u4EF6\u7684\u540D\u79F0\uFF0C\u540D\u79F0\u662F\u53EF\u4EE5\u5FFD\u7565\u7684\r
        name: 'App',\r
        //components \u6CE8\u518C\u7EC4\u4EF6\r
        components: {\r
            Hello: Hello\r
        }\r
    }\r
<\/script>
`,paraId:19,tocIndex:5},{value:"\u4F7F\u7528\u7EC4\u4EF6",paraId:20,tocIndex:5},{value:`<template> \r
	<Hello/>\r
</template>
`,paraId:21,tocIndex:5},{value:`<script>\r
    export default {\r
        //data \u7528\u4E8E\u914D\u7F6E\u9875\u9762\u4E2D\u4F7F\u7528\u7684\u6570\u636E,\u4E14\u5FC5\u987B\u662Freturn \u4E00\u4E2A\u65B0\u5BF9\u8C61\r
        data() {\r
            return {\r
                msg: "hello world"\r
            }\r
        }\r
    }\r
<\/script>
`,paraId:22,tocIndex:7},{value:"data \u5FC5\u987Breturn \u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u662F\u4E3A\u4E86\u4FDD\u8BC1\u7EC4\u4EF6\u88AB\u591A\u4E2A\u5730\u65B9\u8C03\u7528\u65F6\u7684\u6570\u636E\u9694\u79BB\u3002",paraId:23,tocIndex:7},{value:`<template> \r
	{{ msg }}\r
</template>
`,paraId:24,tocIndex:8},{value:"\u529F\u80FD\uFF1A\u53EF\u4EE5\u5FAA\u73AF\u4E00\u4E2A\u53D8\u91CF\u3002\u53D8\u91CF\u7684\u7C7B\u578B\u53EF\u4EE5\u662F\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001\u5BF9\u8C61",paraId:25,tocIndex:10},{value:"\u6817\u5B50\uFF1A",paraId:26,tocIndex:10},{value:`<template> \r
	<div v-for="(item, index) in listMsg" v-bind:key="item">\r
    {{item}}-{{index}}\r
    </div>\r
</template>\r
<script>\r
    export default {\r
        data() {\r
            return {\r
                listMsg: ['a', 'b', 'c']\r
            }\r
        }\r
    }\r
<\/script>
`,paraId:27,tocIndex:10},{value:"\u529F\u80FD\uFF1Av-bind\u7ED1\u5B9A\u6807\u7B7E\u7684\u5C5E\u6027",paraId:28,tocIndex:11},{value:"\u6817\u5B50\uFF1A",paraId:29,tocIndex:11},{value:`<template>\r
    //\u7B2C\u4E00\u79CD\u8BED\u6CD5\r
    <img v-bind:src="goods.img" style="max-width:80px;max-height:50px" />\r
    //\u7B2C\u4E8C\u8BED\u6CD5  \u7701\u7565 v-bind\r
    <img :src="goods.img" style="max-width:80px;max-height:50px" />\r
    //\u53EF\u4EE5\u4F7F\u7528\u53D8\u91CF\r
    <img :src="imgSrc" style="max-width:80px;max-height:50px" />\r
</template>\r

`,paraId:30,tocIndex:11},{value:"\u52A8\u6001\u6539\u53D8class \uFF0Cclass\u53D8\u91CF\u652F\u6301\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61\u3001\u6570\u7EC4\u5F62\u5F0F",paraId:31,tocIndex:12},{value:`<template>\r
	<!-- \u5B57\u7B26\u4E32 -->\r
	<div class="tab_item" :class="str" >\u5546\u54C1</div>\r
	<!-- \u5BF9\u8C61\u5F62\u5F0F \u4E3Atrue\u8868\u793A\u751F\u6548 -->\r
	<div class="tab_item" :class="{tab_active: true,tab_active2: false}" >\u5546\u54C1</div>\r
	<!-- \u6570\u7EC4\u5F62\u5F0F -->\r
	<div class="tab_item" :class="arr" >\u5546\u54C1</div>\r
</template>\r
<script>\r
    export default {\r
        data() {\r
            return {\r
                str: "tab_active tab_active2",//\u5B57\u7B26\u4E32\r
                arr: ["tab_active","tab_active2"], //\u6570\u7EC4\r
            }\r
        }\r
    }\r
<\/script>\r
<style>\r
    .tab_active {\r
        color: #1890ff;\r
    }\r
    .tab_active2 {\r
        color: #1890ff;\r
    }\r
</style>
`,paraId:32,tocIndex:12},{value:"\u52A8\u6001\u6539\u53D8style \uFF0Cstyle\u53D8\u91CF\u652F\u6301\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61",paraId:33,tocIndex:12},{value:`<template>\r
    <!-- \u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u7ED1\u5B9A, tab1\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B -->\r
    <div class="tab" :style="str">\u5168\u90E8</div>\r
    <!-- \u5BF9\u8C61\u7C7B\u578B\u7684\u7ED1\u5B9A\uFF0Ctab2\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B -->\r
    <div class="tab" :style="obj" >\u8BA2\u5355</div>\r
</template>\r
<script>\r
    export default {\r
        data() {\r
            return {\r
                str: "color:red",//\u5B57\u7B26\u4E32\r
                obj: {color:'red'}, //\u5BF9\u8C61\r
            }\r
        }\r
    }\r
<\/script>
`,paraId:34,tocIndex:12},{value:"\u529F\u80FD\uFF1Av-on\u7ED1\u5B9A\u6807\u7B7E\u7684\u4E8B\u4EF6",paraId:35,tocIndex:13},{value:"\u6817\u5B50\uFF1A",paraId:36,tocIndex:13},{value:`<template> \r
    //\u7ED1\u5B9A\u4E8B\u4EF6\r
    <button class="btn_common" v-on:click="exportData">\u5BFC\u51FA</button>\r
    // @ \u7ED1\u5B9A\u4E8B\u4EF6\u7B80\u5199\u8BED\u6CD5\r
    <button class="btn_common" @click="exportData">\u5BFC\u51FA</button>\r
</template>\r
\r
<script>\r
    export default {\r
        // methods \u7F16\u5199\u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570\r
        methods: {\r
            exportData(e) {\r
                console.log(e)\r
            }\r
        }\r
    }\r
<\/script>
`,paraId:37,tocIndex:13},{value:"\u529F\u80FD\uFF1A \u53EF\u4EE5\u63A7\u5236\u5143\u7D20\u8282\u70B9\u662F\u5426\u6E32\u67D3\u6216\u5220\u9664\uFF0C\u4E3Atrue\u65F6\u6E32\u67D3\uFF0C\u4E3Afalse\u5220\u9664\u3002",paraId:38,tocIndex:15},{value:`<template> \r
    <GroupGoods v-if="curPage == 'GroupGoods'"></GroupGoods>\r
    <StyleSwitch v-else-if="curPage == 'StyleSwitch'"></StyleSwitch>\r
	<ClassSwitch v-else></ClassSwitch>\r
</template>\r

`,paraId:39,tocIndex:15},{value:"v-show\u7684\u503C\u63A7\u5236\u5143\u7D20\u7684\u663E\u793A\u4E0E\u5426\uFF0C\u4E3Atrue\u65F6\u663E\u793A\uFF0C\u4E3Afalse\u65F6\u4E0D\u663E\u793A\u3002\u8282\u70B9\u4E00\u76F4\u5728\uFF0C\u5229\u7528css\u63A7\u5236\u662F\u5426\u663E\u793A",paraId:40,tocIndex:16},{value:`<template> \r
    <GroupGoods v-show="curPage == 'GroupGoods'"></GroupGoods>\r
    <StyleSwitch v-show="curPage == 'StyleSwitch'"></StyleSwitch>\r
    <ClassSwitch v-show="curPage == 'ClassSwitch'"></ClassSwitch>\r
</template>\r

`,paraId:41,tocIndex:16},{value:"template\u53EF\u4EE5\u5C06\u4E00\u7EC4\u5143\u7D20\u5305\u88F9\u8D77\u6765\uFF0C\u7136\u540E\u7EDF\u4E00\u63A7\u5236\u5143\u7D20\u7684\u663E\u793A\u4E0E\u5426\u3002\u5E76\u4E14\u4E0D\u4F1A\u989D\u5916\u7ED9\u6D4F\u89C8\u5668\u6E32\u67D3\u8282\u70B9\u3002",paraId:42,tocIndex:17},{value:`<template v-if="showDetail" >\r
    <div v-for="(item, index) in listMsg" v-bind:key="item">\r
        {{item}}-{{index}}\r
    </div>\r
</template>\r

`,paraId:43,tocIndex:17},{value:`<template v-if="showDetail" >\r
	<td>\r
    <span v-text="goods.splusCount  + '\u4E2A'"> </span>\r
    </td>\r
<td>\r
    <span v-html="goods.limitCount + '\u4E2A'"></span>\r
    </td>\r
</template>\r

`,paraId:44,tocIndex:18},{value:"\u529F\u80FD\uFF1Av-model \u5B9E\u73B0\u53CC\u5411\u7ED1\u5B9A\u7684\u673A\u5236\u662F\u7ED1\u5B9A\u8868\u5355\u7684 :value \u5C5E\u6027\uFF0C\u8FD9\u6837\u8868\u5355\u5C31\u53EF\u4EE5\u63A5\u6536\u6570\u636E\uFF1B\u5F53\u8868\u5355\u503C\u6539\u53D8\u7684\u65F6\u5019\u89E6\u53D1input\u4E8B\u4EF6\uFF0C\u901A\u8FC7\u6B64\u4E8B\u4EF6\u6539\u53D8\u6570\u636E\u53D8\u91CF\uFF0C\u8FD9\u4FBF\u662F\u53CC\u5411\u901A\u4FE1\u3002",paraId:45,tocIndex:19},{value:"\u6817\u5B50",paraId:46,tocIndex:19},{value:`<template> \r
//\u7ED1\u5B9A\u4E8B\u4EF6\r
<input v-model="username"  />\r
</template>\r
\r
<script>\r
    export default {\r
        data(){\r
            return {\r
                username:'xiaowang'\r
            }\r
        }\r
    }\r
<\/script>\r

`,paraId:47,tocIndex:19},{value:"\u529F\u80FD\uFF1A\u7528\u4E8E\u8BA1\u7B97\u6570\u636E\uFF0C\u5F97\u5230\u8BA1\u7B97\u7ED3\u679C\u3002",paraId:48,tocIndex:20},{value:"\u6817\u5B50\uFF1A",paraId:49,tocIndex:20},{value:`<script>\r
    export default {\r
        // computed \u7F16\u5199\u8BA1\u7B97\u5C5E\u6027\r
        computed: {\r
            sumJoin(){\r
                let total = 0;\r
                for (let goods of this.listGoods) {\r
                    total = total + goods.joinCount\r
                }\r
                console.log("sumJoin\u6267\u884C")\r
                return total;\r
            }\r
        }\r
    }\r
<\/script>\r

`,paraId:50,tocIndex:20},{value:"\u8BA1\u7B97\u5C5E\u6027\u62E5\u6709\u7F13\u5B58\u673A\u5236\uFF0C\u8BA1\u7B97\u5C5E\u6027\u7684\u66F4\u65B0\u65F6\u673A\u4E3A\uFF1A\u5B83\u6240\u4F9D\u8D56\uFF08\u5F15\u7528\uFF0C\u5305\u542B\uFF09\u7684\u53D8\u91CF\u7684\u503C\u53D1\u751F\u6539\u53D8\uFF0C\u8BA1\u7B97\u5C5E\u6027\u5C31\u4F1A\u89E6\u53D1\u66F4\u65B0\u3002",paraId:51,tocIndex:20},{value:"\u529F\u80FD\uFF1A\u4FA6\u542C\u53D8\u91CF\u7684\u53D8\u5316\uFF0C\u53BB\u6267\u884C\u914D\u7F6E\u7684\u4FA6\u542C\u5668\u51FD\u6570",paraId:52,tocIndex:21},{value:"\u6817\u5B50\uFF1A",paraId:53,tocIndex:21},{value:`<script>\r
    export default {\r
        data(){\r
            return {\r
                objUser\uFF1A{name:'xiaozhang'}\r
            }\r
        },\r
        // \u5BF9\u8C61\u8BED\u6CD5\r
        watch: {\r
            objUser: { //\u4E0E\u88AB\u4FA6\u542C\u7684\u53D8\u91CF\u540D\u4E00\u81F4\r
                handler(nv, ov) {\r
                    console.log("objUser, handler\u4FA6\u542C\u5668",nv, ov)\r
                },\r
                deep: true, //\u6DF1\u5EA6\u4FA6\u542C\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\r
                immediate: true // \u9996\u6B21\u52A0\u8F7D\u65F6\uFF0C\u4FA6\u542C\u5668\u7ACB\u5373\u6267\u884C\r
            }\r
        }\r
    }\r
<\/script>\r

`,paraId:54,tocIndex:21},{value:"\u529F\u80FD\uFF1A \u5BF9\u8981\u663E\u793A\u7684\u6570\u636E\u8FDB\u884C\u8F6C\u6362\u6216\u662F\u683C\u5F0F\u5316",paraId:55,tocIndex:22},{value:"\u6817\u5B50\uFF1A",paraId:56,tocIndex:22},{value:`<template>\r
    <!-- \u5728mustache\u8BED\u6CD5\u4E2D\u4F7F\u7528\u8FC7\u6EE4\u5668 -->\r
    {{ goods.overTime | formartDate('yyyy-MM') }}\r
</template>\r
<script>\r
    export default {\r
        filters: {\r
            formartDate(par, formatType) {\r
                let arrDate = par.split("-");\r
                let result = arrDate[0] + "\u5E74" + arrDate[1] + "\u6708" + arrDate[2] + "\u65E5";\r
                console.log("formatDate", par, formatType)\r
                return result;\r
            }\r
        }\r
    }\r
<\/script>\r

`,paraId:57,tocIndex:22},{value:"\u5168\u5C40filter ,\u5728main.js\u4E2D\u6CE8\u518C\u8FC7\u6EE4\u5668",paraId:58,tocIndex:22},{value:`//\u5B9A\u4E49\u5168\u5C40\u7684\u8FC7\u6EE4\u5668\r
Vue.filter("formartDate", (par, formatType) => {\r
    console.log("\u5168\u5C40\u8FC7\u6EE4\u5668", par, formatType);\r
    let arrDate = par.split("-");\r
    let result = arrDate[0] + "\u5E74" + arrDate[1] + "\u6708" + arrDate[2] + "\u65E5";\r
    return result;\r
})\r

`,paraId:59,tocIndex:22},{value:"\u529F\u80FD\uFF1A \u901A\u8FC7ref\u53EF\u4EE5\u83B7\u53D6\u5230dom\u5143\u7D20",paraId:60,tocIndex:23},{value:"\u6817\u5B50\uFF1A",paraId:61,tocIndex:23},{value:`<template>\r
<!-- \u5B9A\u4E49ref -->\r
<input ref="txtDate" style="margin-left: 10px;" />\r
\r
</template>\r
<script>\r
    export default {\r
        methods: {\r
            getRef() {\r
                //\u83B7\u53D6dom\u5143\u7D20\r
                //\u83B7\u53D6\u6587\u672C\u6846\u7684\u503C \r
                let val = this.$refs.txtDate.value;\r
            }\r
        }\r
    }\r
<\/script>\r

`,paraId:62,tocIndex:23},{value:"\u533F\u540D\u63D2\u69FD\uFF0C slot",paraId:63,tocIndex:25},{value:"\u5177\u540D\u63D2\u69FD",paraId:63,tocIndex:25},{value:"\u4F5C\u7528\u57DF\u63D2\u69FD",paraId:63,tocIndex:25},{value:`<!-- \u5B9A\u4E49\u533F\u540D\u63D2\u69FD -->\r
 <slot></slot>\r
\r
<!-- \u7236\u7EC4\u4EF6\u4F7F\u7528\u533F\u540D\u63D2\u69FD -->\r
 <template>\r
    <span>hello </span>\r
    <span>5\u67084\u53F7</span>\r
</template>\r
\r
<!-- \u5B9A\u4E49\u5177\u540D\u63D2\u69FD -->\r
 <slot name="tow"></slot>\r
\r
<!-- \u7236\u7EC4\u4EF6\u4F7F\u7528\u5177\u540D\u63D2\u69FD -->\r
 <template slot="tow">\r
    <span>hello </span>\r
    <span>5\u67084\u53F7</span>\r
</template>\r
\r
<!-- \u5B9A\u4E49\u4F5C\u7528\u57DF\u63D2\u69FD -->\r
<!-- \u4F5C\u7528\u57DF\u63D2\u69FD \u662F\u5B50\u7EC4\u4EF6\u5411\u7236\u7EC4\u4EF6\u4F20\u53C2\u4F7F\u7528-->\r
 <slot name="tow" :c="name"></slot>\r
\r
<!-- \u7236\u7EC4\u4EF6\u4F7F\u7528\u4F5C\u7528\u57DF\u63D2\u69FD -->\r
 <template slot="tow" slot-scope="gg">\r
    <span>5\u67084\u53F7 {{gg.c}}</span>\r
</template>\r

`,paraId:64,tocIndex:25},{value:"\u7236\u4F20\u5B50 \u81EA\u5B9A\u4E49\u5C5E\u6027",paraId:65,tocIndex:27},{value:`<template>\r
<!-- \u7236\u7EC4\u4EF6\u4E2D\u5BF9\u5B50\u7EC4\u4EF6\u7ED1\u5B9A msg\u5C5E\u6027\uFF0C  objGoods\u662F\u7236\u7EC4\u4EF6\u7684\u4E00\u4E2A\u53D8\u91CF -->\r
	<GroupGoods  v-bind:msg="objGoods"></GroupGoods>\r
</template>\r
<script>\r
    export default {\r
        //\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528props\u63A5\u6536\u4FE1\u606F\r
        props: {\r
            msg: {\r
                //\u8BE5\u5C5E\u6027\u7684\u6570\u636E\u7C7B\u578B\r
                type: String,\r
                //\u7236\u7EC4\u4E0D\u4F20\u9012\u7684\u60C5\u51B5\uFF0C\u8BE5\u5C5E\u6027\u7684\u9ED8\u8BA4\u503C\r
                default: 'hello msg'\r
            },\r
        }\r
    }\r
<\/script>
`,paraId:66,tocIndex:27},{value:"\u5B50\u4F20\u7236 \u81EA\u5B9A\u4E49\u4E8B\u4EF6",paraId:67,tocIndex:27},{value:`//\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528 $emit \u4F20\u9012\u4FE1\u606F\r
<script>\r
    export default {\r
\r
        methods: {\r
            //\u5B50\u7EC4\u4EF6\u5B9A\u4E49\u54CD\u5E94\u4E8B\u4EF6\uFF0C\u8BE5\u4E8B\u4EF6\u5411\u7236\u7EC4\u4EF6\u53D1\u9001\u4FE1\u606F\r
            goAdd() {\r
                this.$emit("jumpPage", "addGoods");//jumpPage\uFF0C\u4E8B\u4EF6\u540D\u79F0 addGoods\uFF0C\u4E8B\u4EF6\u7684\u53C2\u6570\r
            }\r
        }\r
    }\r
<\/script>\r
\r
//\u7236\u7EC4\u4EF6\u63A5\u6536\u4FE1\u606F\r
<template>\r
<!-- \u5B50\u7EC4\u4EF6\u8EAB\u4E0A\u54CD\u5E94\u4E8B\u4EF6 goPage \u662F\u7236\u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u7684\u54CD\u5E94\u4E8B\u4EF6 -->\r
<GroupGoods  @jumpPage="goPage"></GroupGoods> \r
</template>\r
\r
<script>\r
    export default {\r
        //\u5728\u7236\u7EC4\u4EF6\u4E2D\u7F16\u5199\u4E8B\u4EF6\u54CD\u5E94\u51FD\u6570\r
        methods: {\r
            goPage(par, par1, par2, par3, par4) {\r
                console.log("goPage", par, par1, par2, par3, par4);\r
            }\r
        }\r
    }\r
<\/script>\r

`,paraId:68,tocIndex:27},{value:"v-model \u53EF\u4EE5\u7236\u4F20\u5B50\uFF0C \u5B50\u4F20\u7236",paraId:69,tocIndex:27},{value:"\u4E8B\u4EF6\u603B\u7EBF \u7236\u4F20\u5B50\uFF0C\u5B50\u4F20\u7236\uFF0C \u5144\u5F1F\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012",paraId:69,tocIndex:27},{value:"$parent \u7236\u4F20\u5B50",paraId:69,tocIndex:27},{value:"$children \u5B50\u4F20\u7236",paraId:69,tocIndex:27},{value:"$liseteners \u5B50\u4F20\u7236\uFF0C \u53EF\u4EE5\u53D6\u5F97\u7236\u7EC4\u4EF6\u7ED1\u5B9A\u5230\u5B50\u7EC4\u4EF6\u8EAB\u4E0A\u7684\u4E8B\u4EF6",paraId:69,tocIndex:27},{value:"$attr \u7236\u4F20\u5B59\uFF0C \u53EF\u4EE5\u53D6\u5F97\u7236\u7EC4\u4EF6\u7ED1\u5B9A\u5230\u5B50\u7EC4\u4EF6\u8EAB\u4E0A\u7684\u5C5E\u6027",paraId:69,tocIndex:27},{value:"\u4F5C\u7528\u57DF\u63D2\u69FD",paraId:69,tocIndex:27},{value:"\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001\u5E03\u5C14\u7C7B\u578B\u8FDB\u884C\u76D1\u6D4B\u65F6\uFF0C\u53D8\u91CF\u7684\u53D8\u5316\u4F1A\u7ACB\u5373\u5F71\u54CD\u5230\u9875\u9762\u7684\u6E32\u67D3",paraId:70,tocIndex:29},{value:`\u5BF9\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF08\u5BF9\u8C61\uFF0C\u6570\u7EC4\uFF09\u7684\u589E\u5220\uFF0C\u4E0D\u4F1A\u6539\u53D8\u9875\u9762\u6E32\u67D3\uFF0C\u9664\u975E\u5730\u5740\u53D1\u751F\u6539\u53D8\u3002
`,paraId:70,tocIndex:29},{value:"\u89E3\u51B3\u65B9\u6848",paraId:71,tocIndex:29},{value:`\u6570\u7EC4\u3001\u4F7F\u7528\u6570\u7EC4\u7684api\u6765\u589E\u5220\u5143\u7D20\r
this.listUser.pop();\r
this.listUser.splice(0, 1);\r
this.listUser.push({name: '\u674E\u56DB', age: 20});\r
\r
\u6570\u7EC4\u4E0E\u5BF9\u8C61 \u4F7F\u7528this.$set\u65B9\u6CD5\u6765\u6DFB\u52A0\u5C5E\u6027 \u4F7F\u7528this.$delete\u5220\u9664\u5BF9\u8C61\u5C5E\u6027\r
this.$set(this.listUser, 1, {name: '\u674E\u56DB', age: 20})\r
this.$delete(this.listUser, 0);\r
\r
this.$set(this.objUser, "sex", '\u7537');\r
this.$delete(this.objUser, "sex");
`,paraId:72,tocIndex:29},{value:"beforeCreate() \u7EC4\u4EF6\u521B\u5EFA\u4E4B\u524D\uFF0C\u6B64\u65F6\u65E0\u6CD5\u83B7\u53D6  $data \u548C $el",paraId:73,tocIndex:32},{value:"\u5F00\u8F9F\u7EC4\u4EF6\u7A7A\u95F4\uFF0C\u521D\u59CB\u5316\u6570\u636E\u76D1\u6D4B\u3001\u6570\u636E\u4EE3\u7406",paraId:74,tocIndex:32},{value:"created() \u7EC4\u4EF6\u521B\u5EFA\u5B8C\u6BD5\uFF0C\u6B64\u65F6\u65E0\u6CD5\u83B7\u53D6  $data \u548C $el",paraId:75,tocIndex:32},{value:"\u89E3\u6790\u6A21\u677F\uFF0C\u5728\u5185\u5B58\u4E2D\u751F\u6210\u865A\u62DFDOM",paraId:76,tocIndex:32},{value:"breforeMount():\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u524D\uFF0C\u65E0\u6CD5\u83B7\u53D6\u9875\u9762\u8282\u70B9",paraId:77,tocIndex:32},{value:"\u5C06\u5185\u5B58\u4E2D\u7684\u865A\u62DFDOM\u8F6C\u4E3A\u771F\u5B9EDOM\u63D2\u5165\u9875\u9762",paraId:78,tocIndex:32},{value:"mounted():\u7EC4\u4EF6\u6302\u8F7D\u4E4B\u540E,\u5C31\u80FD\u5728Vue\u4E2D\u83B7\u53D6\u9875\u9762\u8282\u70B9",paraId:79,tocIndex:32},{value:"beforeUpdate()\uFF1A\u7EC4\u4EF6\u6570\u636E\u66F4\u65B0\u4E4B\u524D,\u6B64\u65F6\u6570\u636E\u662F\u65B0\u7684\u9875\u9762\u662F\u65E7\u7684",paraId:80,tocIndex:32},{value:"\u6839\u636E\u65B0\u6570\u636E\u751F\u6210\u65B0\u7684\u865A\u62DFDOM\uFF0C\u968F\u540E\u65B0\u65E7\u865A\u62DFDOM\u8FDB\u884C\u6BD4\u8F83\uFF0C\u6700\u7EC8\u5B8C\u6210\u9875\u9762\u66F4\u65B0",paraId:81,tocIndex:32},{value:"updated()\uFF1A\u7EC4\u4EF6\u6570\u636E\u66F4\u65B0\u8FC7\u540E\u3002\u6B64\u65F6\u9875\u9762\u4E0E\u6570\u636E\u90FD\u662F\u65B0\u7684",paraId:82,tocIndex:32},{value:"beforeDestroy():\u9500\u6BC1\u4E4B\u524D\uFF0C\u6B64\u65F6 data\u3001methods\u3001\u6307\u4EE4\u90FD\u662F\u5904\u4E8E\u53EF\u7528\u72B6\u6001",paraId:83,tocIndex:32},{value:"destroyed()\uFF1A\u9500\u6BC1\u540E\uFF0C\u6B64\u65F6\u771F\u5B9EDOM\u53EF\u7528",paraId:84,tocIndex:32},{value:`//is\u8FD9\u4E2A\u5C5E\u6027\u540E\u9762\u7684\u53D8\u91CF\uFF0C\u540D\u5B57\u662F\u54EA\u4E2A\u7EC4\u4EF6\uFF0C\u52A8\u6001\u663E\u793A\u8FD9\u4E2A\u7EC4\u4EF6\r
<component :is="currentTab"></component>\r
import TabA from "./TabA";\r
import TabB from "./TabB";\r
data(){\r
    return{\r
        currentTab:"TabA"\r
    }\r
}
`,paraId:85,tocIndex:34},{value:"\u5B9E\u73B0\u539F\u7406\uFF1A",paraId:86,tocIndex:34},{value:"\u91C7\u7528v-if\u6765\u52A8\u6001\u6E32\u67D3\u8282\u70B9\u3002\u4E00\u65E6\u5207\u6362\u7EC4\u4EF6\uFF0C\u4E4B\u524D\u7684\u7EC4\u4EF6\u5C31\u4F1A\u88AB\u9500\u6BC1\u3002",paraId:87,tocIndex:34},{value:"\u9875\u9762\u5F00\u59CB\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u628A\u6240\u6709\u7EC4\u4EF6\u52A0\u8F7D\u4E00\u904D\u3002",paraId:87,tocIndex:34},{value:`<keep-alive include="TabAVue">\r
    <component :is="currentTab"></component>\r
</keep-alive>
`,paraId:88,tocIndex:36},{value:"include\uFF1A\u503C\u4E3A\u5B57\u7B26\u4E32\u6216\u8005\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u53EA\u6709\u540D\u5B57\u5339\u914D\u7684\u7EC4\u4EF6\u624D\u80FD\u88AB\u7F13\u5B58\uFF08\u767D\u540D\u5355\uFF09",paraId:89,tocIndex:36},{value:"exclude: \u503C\u4E3A\u5B57\u7B26\u4E32\u6216\u8005\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5F53\u5339\u914D\u5230\u7EC4\u4EF6\u540D\u5B57\uFF0C\u4EE3\u8868\u8FD9\u4E2A\u7EC4\u4EF6\u4E0D\u88AB\u7F13\u5B58\uFF08\u9ED1\u540D\u5355\uFF09",paraId:90,tocIndex:36},{value:"max\uFF1A\u8BBE\u7F6E\u5F53\u524D\u7EC4\u4EF6\u7F13\u5B58\u7684\u505A\u5927\u503C\uFF0Ckeep-alive\u80FD\u591F\u7F13\u5B58\u6700\u591A\u51E0\u4E2A\u7EC4\u4EF6max\u6765\u51B3\u5B9A",paraId:91,tocIndex:36},{value:"include\u503C\u4E3A\u5B57\u7B26\u4E32\uFF1A",paraId:92,tocIndex:36},{value:`<keep-alive include="TabAVue,TabCVue"> \r
	<component :is="currentTab"></component>\r
</keep-alive>
`,paraId:93,tocIndex:36},{value:"include\u503C\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F",paraId:94,tocIndex:36},{value:`<keep-alive :include="/TabAVue|TabCVue/">\r
    <component :is="currentTab"></component>\r
</keep-alive>
`,paraId:95,tocIndex:36},{value:"\u8FD8\u53EF\u4EE5\u5199\u4E00\u4E2A\u6570\u7EC4",paraId:96,tocIndex:36},{value:`<keep-alive :include="['TabAVue','TabCVue']">\r
	<component :is="currentTab"></component>\r
</keep-alive>
`,paraId:97,tocIndex:36},{value:`//\u5FC5\u987B\u8981\u88ABkeep-alive\u7F13\u5B58\u540E\u8FD9\u4E2A\u7EC4\u4EF6\u624D\u80FD\u4F7F\u7528\u8FD9\u4E2A\u751F\u547D\u5468\u671F\r
//\u5F53\u4F60\u8FDB\u5165\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u662F\u6267\u884C\r
    activated(){\r
        console.log("\u8FDB\u5165TabA\u7EC4\u4EF6");\r
    },\r
        \r
    //\u5F53\u4F60\u79BB\u5F00\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u4F1A\u88AB\u6267\u884C\u7684\u51FD\u6570\r
    deactivated(){\r
        console.log("\u79BB\u5F00TabA\u7EC4\u4EF6");\r
    },
`,paraId:98,tocIndex:37},{value:"\u4EC0\u4E48\u662Fmvvm:",paraId:99,tocIndex:38},{value:"m: module\uFF0C\u5373\u6A21\u578B\u5C42\uFF0C\u4E5F\u53EB\u6570\u636E\u7684\u7ED3\u6784\u4EE5\u53CA\u6570\u636E\u7684\u5904\u7406\u3002\u4F8B\uFF1A\u5BF9\u8C61\u91CC\u5C5E\u6027\u7684\u6784\u6210",paraId:100,tocIndex:38},{value:"v: view, \u5373\u89C6\u56FE\u5C42\uFF0C\u4E5F\u662Fvue\u4E2Dtemplate\u90E8\u4EFD\u7684\u4EE3\u7801\uFF1B\u53EF\u4EE5\u7406\u4E3A\u7528\u6237\u53EF\u4EE5\u770B\u5230\u7684\u5185\u5BB9",paraId:100,tocIndex:38},{value:"vm: viewModule\uFF0C\u5373\u89C6\u56FE\u6A21\u578B\u8F6C\u6362\u529F\u80FD\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3Avue\u4E2D\u7684v-model\u6307\u4EE4\u3002\u8BE5\u6307\u4EE4\u5C06\u6570\u636E\u7ED1\u5230\u89C6\u56FE\u4E0A\uFF0C\u5F53\u6570\u636E\u53D8\u5316\u65F6\u9875\u9762\u53D8\u5316\uFF0C\u5F53\u9875\u9762\u53D8\u5316\u65F6\uFF0C\u6570\u636E\u4F1A\u968F\u7740\u4E00\u8D77\u53D8\u5316\u3002\u8FD9\u6837\u7684\u529F\u80FD\u5C31\u79F0\u4E3AviewModule\u3002",paraId:100,tocIndex:38},{value:"\u529F\u80FD\uFF1A\u53EF\u4EE5\u5C06\u7EC4\u4EF6\u4E2D\u901A\u7528 \u7684\u4EE3\u7801\u8FDB\u884C\u590D\u7528\u3002",paraId:101,tocIndex:39},{value:"\u4F7F\u7528\u573A\u666F\uFF1A\u4EE3\u7801\u901A\u7528\u6027\u5FC5\u987B\u975E\u5E38\u5F3A\uFF0C\u9875\u9762\u4E2D\u670990%\u4EE5\u4E0A\u4EE3\u7801\u96F7\u540C\u7684\uFF0C\u53EF\u4EE5\u653E\u5165\u6DF7\u5165\u3002",paraId:102,tocIndex:39},{value:"1\u3001\u5728src\u76EE\u5F55\u4E0B\u65B0\u5EFAmixin\u6587\u4EF6\u5939\uFF0C\u65B0\u5EFApageMixin.js\u6587\u4EF6",paraId:103,tocIndex:39},{value:`export default {\r
    data() {\r
        return {\r
            dialogInfo: "",\r
            curPage: 1,\r
            pageSize: 10\r
        }\r
    },\r
    methods: {\r
        changePageInfo(curPage, pageSize) {\r
        },\r
        // \u67E5\u8BE2\u4E8B\u4EF6\uFF0C\u5E26\u6761\u4EF6\r
        search() { },\r
        //\u5220\u9664\r
        del(id) { },\r
    },\r
}
`,paraId:104,tocIndex:39},{value:"2\u3001\u5728\u9700\u8981\u6DF7\u5165\u7684\u7EC4\u4EF6\u4E2D\uFF0C\u914D\u7F6Emixins",paraId:105,tocIndex:39},{value:`import pageMixin from '@/mixin/pageMixin';\r
export default {   \r
	mixins: [pageMixin],\r
}
`,paraId:106,tocIndex:39},{value:"\u8BF4\u660E\uFF1A\u6DF7\u5165\u4E2D\u9664\u4E86\u751F\u547D\u5468\u671F\u51FD\u6570\u4E4B\u5916\uFF0C\u5176\u5B83\u6240\u6709\u7684\u914D\u7F6E\u9879\u4E2D\uFF0C\u7236\u7EC4\u4EF6\u5B9A\u4E49\u7684\u5185\u5BB9\u4F1A\u8986\u76D6\u6389mixins\u4E2D\u5B9A\u4E49\u7684\u5185\u5BB9\u3002\u751F\u547D\u5468\u671F\u4E0D\u4F1A\u8986\u76D6\uFF0C\u5B83\u4F1A\u5148\u6267\u884C\u6DF7\u5165\u4E2D\u7684\u751F\u547D\u5468\u671F\uFF0C\u518D\u6267\u884C\u7236\u7EC4\u4EF6\u4E2D\u7684\u751F\u547D\u5468\u671F\u3002",paraId:107,tocIndex:39},{value:`// \u5168\u5C40\u81EA\u5B9A\u4E49\u6307\u4EE4\r
Vue.directive("btnPower", {\r
    inserted: function (el, binding, vnode, oldVnode) {\r
        const path = vnode.context.$route.path;\r
        //  \u5224\u65AD\u662F\u5426\u6709\u6743\u9650\uFF0C1\u8868\u793A\u6709\u6743\u9650\uFF0C0\u8868\u793A\u6CA1\u6709\r
        if (0 == judgeBtnPower(path, binding.value)) {\r
            el.remove();\r
        }\r
    }\r
})\r
// \u5C40\u90E8\u81EA\u5B9A\u4E49\u6307\u4EE4\r
directives: {\r
    //\u6307\u4EE4\u540D\u5B57bgcolor\uFF0C\u4EE5\u540E\u4F7F\u7528v-bgcolor\r
    //\u5185\u90E8\u63D0\u4F9B\u751F\u547D\u5468\u671F\u51FD\u6570\r
    bgcolor: {\r
        //\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\u662F\u6307\u4EE4\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0Cinserted\u4E00\u65E6\u88AB\u6267\u884C\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u6307\u4EE4\u7684\u6807\u7B7E\u5DF2\u7ECF\u88AB\u6302\u8F7D\u7236\u8282\u70B9\u4E2D\r
        //el\u4EE3\u8868\u83B7\u53D6\u8282\u70B9\uFF0Cobj\u4EE3\u8868\u6307\u4EE4\u4F20\u9012\u56DE\u6765\u503C\r
        inserted(el, obj){\r
            console.log("\u81EA\u5B9A\u4E49\u6307\u4EE4", el);\r
            console.log("\u6307\u5B9A\u6307\u4EE4\u4F20\u503C", obj);\r
            //\u539F\u751FJS\u64CD\u4F5C\r
            el.style.background = obj.value\r
        }\r
    }\r
}
`,paraId:108,tocIndex:40},{value:"\u4FEE\u9970\u7B26\u7684\u529F\u80FD\uFF1A\u53EF\u4EE5\u5C06v-model\u4E2D\u7ED1\u5B9A\u7684\u6570\u636E\u505A\u8F6C\u6362",paraId:109,tocIndex:42},{value:".number \u5C06\u7ED1\u5B9A\u7684\u6570\u636E\u8F6C\u6362\u6210number\u7C7B\u578B",paraId:110,tocIndex:42},{value:".trim \u5C06\u7ED1\u5B9A\u7684\u6570\u636E\u4E24\u8FB9\u7684\u7A7A\u683C\u53BB\u6389",paraId:110,tocIndex:42},{value:".lazy \u5EF7\u8FDF\u5C06\u6570\u636E\u8BBE\u7F6E\u5230\u53D8\u91CF\u4E2D",paraId:110,tocIndex:42},{value:"\u4E8B\u4EF6\u4FEE\u9970\u7B26",paraId:111,tocIndex:43},{value:"\u5728\u5904\u7406\u4E8B\u4EF6\u65F6\u8C03\u7528 ",paraId:112,tocIndex:43},{value:"event.preventDefault()",paraId:112,tocIndex:43},{value:" \u6216 ",paraId:112,tocIndex:43},{value:"event.stopPropagation()",paraId:112,tocIndex:43},{value:" \u662F\u5F88\u5E38\u89C1\u7684\u3002\u5C3D\u7BA1\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u65B9\u6CD5\u5185\u8C03\u7528\uFF0C\u4F46\u5982\u679C\u65B9\u6CD5\u80FD\u66F4\u4E13\u6CE8\u4E8E\u6570\u636E\u903B\u8F91\u800C\u4E0D\u7528\u53BB\u5904\u7406 DOM \u4E8B\u4EF6\u7684\u7EC6\u8282\u4F1A\u66F4\u597D\u3002",paraId:112,tocIndex:43},{value:"\u4E3A\u89E3\u51B3\u8FD9\u4E00\u95EE\u9898\uFF0CVue \u4E3A ",paraId:113,tocIndex:43},{value:"v-on",paraId:113,tocIndex:43},{value:" \u63D0\u4F9B\u4E86",paraId:113,tocIndex:43},{value:"\u4E8B\u4EF6\u4FEE\u9970\u7B26",paraId:113,tocIndex:43},{value:"\u3002\u4FEE\u9970\u7B26\u662F\u7528 ",paraId:113,tocIndex:43},{value:".",paraId:113,tocIndex:43},{value:" \u8868\u793A\u7684\u6307\u4EE4\u540E\u7F00\uFF0C\u5305\u542B\u4EE5\u4E0B\u8FD9\u4E9B\uFF1A",paraId:113,tocIndex:43},{value:".stop",paraId:114,tocIndex:43},{value:".prevent",paraId:114,tocIndex:43},{value:".self",paraId:114,tocIndex:43},{value:".capture",paraId:114,tocIndex:43},{value:".once",paraId:114,tocIndex:43},{value:".passive",paraId:114,tocIndex:43},{value:"\u6817\u5B50",paraId:115,tocIndex:43},{value:`<!-- \u5355\u51FB\u4E8B\u4EF6\u5C06\u505C\u6B62\u4F20\u9012 -->\r
<a @click.stop="doThis"></a>\r
\r
<!-- \u63D0\u4EA4\u4E8B\u4EF6\u5C06\u4E0D\u518D\u91CD\u65B0\u52A0\u8F7D\u9875\u9762 -->\r
<form @submit.prevent="onSubmit"></form>\r
\r
<!-- \u4FEE\u9970\u8BED\u53EF\u4EE5\u4F7F\u7528\u94FE\u5F0F\u4E66\u5199 -->\r
<a @click.stop.prevent="doThat"></a>\r
\r
<!-- \u4E5F\u53EF\u4EE5\u53EA\u6709\u4FEE\u9970\u7B26 -->\r
<form @submit.prevent></form>\r
\r
<!-- \u4EC5\u5F53 event.target \u662F\u5143\u7D20\u672C\u8EAB\u65F6\u624D\u4F1A\u89E6\u53D1\u4E8B\u4EF6\u5904\u7406\u5668 -->\r
<!-- \u4F8B\u5982\uFF1A\u4E8B\u4EF6\u5904\u7406\u5668\u4E0D\u6765\u81EA\u5B50\u5143\u7D20 -->\r
<div @click.self="doThat">...</div>
`,paraId:116,tocIndex:43},{value:"\u6CE8\u610F\u642D\u5EFA\u9879\u76EE\u7684\u65F6\u5019\u9700\u52FE\u9009\u8DEF\u7531",paraId:117,tocIndex:44},{value:"\u5C06\u8DEF\u7531\u6587\u4EF6\u5355\u72EC\u7528\u4E00\u4E2Arouter\u6587\u4EF6\u5939\u4E0Bindex.js\uFF0C\u5728\u6B64\u6587\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF0C\u5B9E\u73B0\u7ED3\u6784\u5316\u9879\u76EE",paraId:118,tocIndex:45},{value:`import Vue from 'vue'\r
import Login from '@/views/Login'\r
const routes = [\r
    {\r
        // 404 \u754C\u9762\r
        name: "notFound",\r
        path: '*',\r
        component: () => import("@/views/NotFound")//\u61D2\u52A0\u8F7D\r
    },\r
    {\r
        name: "login",\r
        path: '/login',\r
        component: Login\r
    },\r
    {\r
        name: "main",\r
        path: '/',\r
        component: Main,\r
        redirect:"order", //\u91CD\u5B9A\u5411\r
        children: [ //\u5D4C\u5957\u8DEF\u7531 \uFF0C \u4E0D\u5199/\uFF0C \u5728\u5B50\u8DEF\u7531\u524D\u9762\u52A0\u4E0A\u7236\u7EA7\u8DEF\u7531\u5730\u5740\u4FBF\u662F\u5B8C\u6574\u5730\u5740\r
            {\r
                name: "order",\r
                path: "order",\r
                component: () => import("@/views/Order")\r
            },\r
            {// \u6587\u7AE0\u7BA1\u7406\r
                name: "articleManager",\r
                path: "sysManager/articleManager",\r
                component: () => import("@/views/ArticleManager"),\r
            }\r
        ]\r
    }\r
]\r
//\u521B\u5EFA\u8DEF\u7531     \r
const router = new VueRouter({\r
    routes\r
})\r
export default router
`,paraId:119,tocIndex:45},{value:"\u7136\u540E\u518Dmain.js\u8FDB\u884C\u5F15\u5165",paraId:120,tocIndex:45},{value:`import App from './App.vue'\r
import router from './router'\r
new Vue({\r
    axios,\r
    router, //\u8FD9\u91CC\u5C31\u662F\u5F15\u5165\u8DEF\u7531\r
    store,\r
    render: h => h(App)\r
}).$mount('#app')
`,paraId:121,tocIndex:45},{value:"\u914D\u7F6E\u8DEF\u7531\u51FA\u53E3\uFF0C\u5373\u8DEF\u7531\u663E\u793A\u7684\u4F4D\u7F6E",paraId:122,tocIndex:45},{value:`<!-- \u8DEF\u7531\u51FA\u53E3 -->\r
<router-view></router-view>
`,paraId:123,tocIndex:45},{value:"\u9A8C\u8BC1\uFF0C\u5728\u6D4F\u89C8\u5668\u8F93\u5165\u9879\u76EE\u5730\u5740\u52A0\u4E0A\u8DEF\u7531\u5730\u5740\uFF0C\u80FD\u6210\u529F\u8BBF\u95EE\u4FBF\u662F\u914D\u7F6E\u6210\u529F",paraId:124,tocIndex:45},{value:`//\u901A\u8FC7path\u8DF3\u9875\u9762\r
this.$router.push("/layout/admin")\r
//\u901A\u8FC7path\u8DF3\u9875\u9762\r
this.$router.push({\r
    path: "/layout/admin"\r
})\r
//\u901A\u8FC7\u540D\u79F0\u8DF3\u8F6C\u9875\u9762\r
this.$router.push({\r
    name: 'Admin'\r
})
`,paraId:125,tocIndex:47},{value:`<router-link to="/layout/order" active-class="acMenu" class="unacMenu">\u8BA2\u5355</router-link>
`,paraId:126,tocIndex:48},{value:"\u8BF4\u660E\uFF1A",paraId:127,tocIndex:48},{value:"to\u8BBE\u7F6E\u8981\u8DF3\u8F6C\u7684\u9875\u9762\u8DEF\u5F84\uFF0C\u8BE5\u8DEF\u5F84\u5FC5\u987B\u5728\u8DEF\u7531\u4E2D\u914D\u7F6E\u8FC7",paraId:128,tocIndex:48},{value:"active-class\u8BBE\u7F6E\u5F53\u524D\u8DEF\u7531\u6FC0\u6D3B\u72B6\u6001\u7684\u6837\u5F0F\u3002",paraId:128,tocIndex:48},{value:"\u4F7F\u7528element-ui\u7684\u83DC\u5355\uFF0Cmenu\u4E0A\u8BBE\u7F6E router\uFF0Cindex\u5C31\u662F\u8DF3\u5F80\u7684\u5730\u5740",paraId:129,tocIndex:49},{value:`<el-menu router class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" ctive-text-color="#ffd04b">\r
<!-- index\u5C5E\u6027\u503C\u662F\u8DEF\u7531\u5730\u5740\u4FBF\u53EF\u8DF3\u8F6C\u5BF9\u5E94\u9875\u9762  -->\r
<el-menu-item index="/layout/order">\r
    \u8BA2\u5355\r
</el-menu-item>
`,paraId:130,tocIndex:49},{value:`//\u9700\u8981\u4F20\u9012\u53C2\u6570\u7684\u9875\u9762\u8FDB\u884C\u4F20\u53C2\uFF0C\r
showDetail(row) {\r
    this.$router.push({\r
        path: \`/layout/orderDetail?id=\${row.id}\`\r
    })\r
}\r
//\u5728\u5BF9\u5E94\u9875\u9762\u63A5\u6536\u53C2\u6570\u7684\u9875\u9762\r
created() {\r
    //\u83B7\u53D6\u5730\u5740\u680F\u95EE\u53F7\u4F20\u53C2 $route.query.id\r
    console.log(this.$route.query.id,  333);\r
}
`,paraId:131,tocIndex:51},{value:"\u8BF4\u660E\uFF1A",paraId:132,tocIndex:51},{value:"\u5728url\u5730\u5740\u540E\u9762\u4F7F\u7528\u95EE\u53F7\u7684\u65B9\u5F0F\u5373\u53EF\u4F20\u53C2\u3002\u4F8B\uFF1A?id=1&name=2",paraId:133,tocIndex:51},{value:"\u901A\u8FC7$router.query\u53EF\u4EE5\u53D6\u51FA\u5730\u5740\u680F\u95EE\u53F7\u4F20\u9012\u7684\u53C2\u6570\u3002query\u5BF9\u8C61\u4F1A\u5C06\u6240\u6709\u7684\u53C2\u6570\u540D\u505A\u4E3A\u5BF9\u8C61\u5C5E\u6027\u540D\u79F0\uFF0C\u53C2\u6570\u503C\u505A\u4E3A\u5C5E\u6027\u5BF9\u5E94\u7684\u503C\u653E\u5165\u3002",paraId:133,tocIndex:51},{value:`//\u9700\u8981\u4F20\u9012\u53C2\u6570\u7684\u9875\u9762\u8FDB\u884C\u4F20\u53C2\r
this.$router.push({\r
    path: \`/layout/orderDetail\`,\r
    query: {\r
        id: row.id,\r
        reciveUserName: row.reciveUserName\r
    }\r
})\r
//\u5728\u5BF9\u5E94\u9875\u9762\u63A5\u6536\u53C2\u6570\u7684\u9875\u9762\r
created() {\r
    //\u83B7\u53D6\u5730\u5740\u680F\u95EE\u53F7\u4F20\u53C2\r
    console.log(this.$route.query.id,  333);\r
}
`,paraId:134,tocIndex:52},{value:"\u8BF4\u660E\uFF1A",paraId:135,tocIndex:52},{value:"$router.push\u65B9\u6CD5\u7684\u53C2\u6570\u4E2D\uFF0C\u53EF\u4EE5\u52A0\u5165query\u5C5E\u6027\u3002\u8BE5\u5C5E\u6027\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\u3002\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u79F0\u5373\u662F\u53C2\u6570\u540D\u79F0\uFF0C\u5C5E\u6027\u7684\u503C\u5373\u662F\u53C2\u6570\u503C",paraId:136,tocIndex:52},{value:"query\u4F20\u53C2\u53EA\u662F\u5C06push\u65B9\u6CD5\u4E2D\u7684query\u5BF9\u8C61\u89E3\u6790\u5230\u5730\u5740\u680F\uFF0C\u5E76\u7528\u95EE\u53F7\u62FC\u63A5\u8D77\u6765\u3002\u5B83\u4E3B\u8981\u7684\u4F5C\u7528\u662F\u89E3\u51B3\u95EE\u53F7\u4F20\u53C2\u65F6\u62FC\u63A5\u5B57\u7B26\u4E32\u65F6\u6BD4\u8F83\u9EBB\u70E6\uFF0C\u5F53\u53C2\u6570\u591A\u7684\u65F6\u5019\u5B57\u7B26\u4E32\u62FC\u63A5\u5BB9\u6613\u51FA\u9519\uFF0C\u6B64\u65F6\u53EF\u4EE5\u501F\u52A9query\u4F20\u53C2\u3002",paraId:136,tocIndex:52},{value:`//\u9700\u8981\u4F20\u9012\u53C2\u6570\u7684\u9875\u9762\u8FDB\u884C\u4F20\u53C2\r
this.$router.push({\r
    name: "OrderDetail",// \u53EA\u80FD\u4F7F\u7528name\r
    params: {\r
        id: row.id,\r
        reciveUserName: row.reciveUserName\r
    }\r
//\u5728\u9700\u8981\u63A5\u6536\u53C2\u6570\u7684\u9875\u9762\r
created() {\r
    //\u83B7\u53D6\u5730\u5740\u680Fparams\u4F20\u53C2\r
    console.log(this.$route.params.id,  333)\r
}
`,paraId:137,tocIndex:53},{value:"\u8BF4\u660E\uFF1A",paraId:138,tocIndex:53},{value:"params\u4F20\u53C2\uFF0C\u53EA\u80FD\u548Cname\u8DF3\u8F6C\u9875\u9762\u914D\u5957\u4F7F\u7528",paraId:139,tocIndex:53},{value:"\u53D6\u53C2\u6570\u4F7F\u7528$router.params\u6765\u83B7\u53D6\u53C2\u6570",paraId:139,tocIndex:53},{value:"params\u4F20\u53C2\uFF0C\u9875\u9762\u5237\u65B0\u4F1A\u5BFC\u81F4\u53C2\u6570\u4E22\u5931",paraId:139,tocIndex:53},{value:`//\u914D\u7F6E\u52A8\u6001\u8DEF\u7531\r
{\r
    //\u52A8\u6001\u8DEF\u7531\u914D\u7F6E\r
    name: 'OrderDetail',\r
        path: 'orderDetail/:id?/:name?,\r
    //\u61D2\u52A0\u8F7D\u8BA2\u5355\u9875\u9762\r
    component: () => import("@/views/OrderDetail"),\r
        //\u6253\u5F00\u5C5E\u6027\u63A5\u6536\u53C2\u6570\u7684\u5F00\u5173\r
        props: true\r
}\r
\r
//\u9700\u8981\u4F20\u9012\u53C2\u6570\u7684\u9875\u9762\u8FDB\u884C\u4F20\u53C2\r
this.$router.push(\`/layout/orderDetail/\${row.id}/\${row.reciveUserName}\`);\r
//\u5728\u9700\u8981\u63A5\u6536\u53C2\u6570\u7684\u9875\u9762\r
props: {\r
    id: {\r
        type: String,\r
            default: ""\r
    },\r
    name: {\r
        type: String,\r
                default: ""\r
    }\r
},\r
//\u4E5F\u53EF\u4EE5\r
created() {\r
    //\u83B7\u53D6\u5730\u5740\u680Fparams\u4F20\u53C2\r
    console.log(this.$route.params.id, 333)\r
}
`,paraId:140,tocIndex:54},{value:"\u8BF4\u660E\uFF1A",paraId:141,tocIndex:54},{value:"\u5728\u8DEF\u7531\u914D\u7F6E\u5BF9\u8C61\u4E2D\uFF0C\u7ED9path\u52A0\u4E0A/:id\u6765\u914D\u7F6E\u52A8\u6001\u8DEF\u7531\uFF0C\u5176\u4E2Did\u5C06\u4F1A\u505A\u4E3A\u53C2\u6570\u540D\u79F0\u653E\u5165params\u5BF9\u8C61\u4E2D",paraId:142,tocIndex:54},{value:"\u5728\u8DF3\u8F6C\u9875\u9762\u65F6\uFF0C\u4F7F\u7528\u6A21\u677F\u4E4B\u7B26\u4E32\u7684\u5F62\u5F0F\u5C06\u53C2\u6570\u7684\u503C\u62FC\u63A5\u5230url\u8DEF\u5F84\u4E2D\u3002\u8BE5\u53C2\u6570\u7684\u503C\u4F1A\u5728\u5730\u5740\u680F\u663E\u793A\u51FA\u6765\uFF0C\u5E76\u4E14\u653E\u5165params\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u4E2D\u3002",paraId:142,tocIndex:54},{value:"\u5728\u63A5\u6536\u53C2\u6570\u65F6\uFF0C\u4F7F\u7528$router.params\u5BF9\u8C61\u6765\u83B7\u53D6\u53C2\u6570\u3002",paraId:142,tocIndex:54},{value:"\u5728\u52A8\u6001\u8DEF\u7531\u914D\u7F6E\u65F6\uFF0C\u53EF\u4EE5\u5728\u53C2\u6570\u540D\u79F0\u540E\u9762\u52A0\u4E0A\u95EE\u53F7\uFF0C\u7528\u6765\u9632\u6B62\u53C2\u6570\u672A\u4F20\u9012\u7684\u60C5\u51B5\u4E0B\uFF0C\u7A0B\u5E8F\u8FDB\u5165\u5230404\u9875\u9762",paraId:142,tocIndex:54},{value:"\u52A8\u6001\u8DEF\u7531\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5728\u8981\u63A5\u6536\u53C2\u6570\u7684\u9875\u9762\u7EC4\u4EF6\u4E2D\u5B9A\u4E49props\u6765\u63A5\u6536\u53C2\u6570\uFF0C\u524D\u63D0\u9700\u8981\u5728\u52A8\u6001\u8DEF\u7531\u914D\u7F6E\u4E2D\u5F00\u542Fprops\u5F00\u5173",paraId:142,tocIndex:54},{value:"\u5C06keepalive\u653E\u5728router-view\u7684\u5916\u5C42\u5305\u88F9\u8D77\u6765\uFF0C\u5C31\u53EF\u4EE5\u4F18\u5316\u9875\u9762\u6E32\u67D3\u901F\u5EA6\u3002\u4F46\u662F\u8981\u6CE8\u610F\u6570\u636E\u88AB\u7F13\u5B58\u7684\u540E\u679C",paraId:143,tocIndex:55},{value:`<!-- \u8DEF\u7531\u51FA\u53E3 -->\r
<KeepAlive>\r
    <router-view></router-view>\r
</KeepAlive>\r
<!-- \u5229\u7528keepalive \u7684\u751F\u547D\u5468\u671F\u5904\u7406\u6570\u636E\u7F13\u5B58\u7684\u540E\u679C -->\r
activated() {\r
    this.$order.getEcomOrderById({id: this.$route.params.id}).then(res => {\r
        console.log("res", res);\r
        this.objOrder = res.data;\r
    })\r
}
`,paraId:144,tocIndex:55},{value:"\u529F\u80FD\uFF1A\u62E6\u622A\u6240\u6709\u7684\u8DEF\u7531\u8BF7\u6C42\u3002\u6765\u51B3\u5B9A\u8BE5\u8DEF\u7531\u5730\u5740\u662F\u5426\u653E\u884C\uFF0C\u5E76\u4E14\u653E\u884C\u5230\u54EA\u4E2A\u753B\u9762",paraId:145,tocIndex:56},{value:"\u5206\u7C7B\uFF1A",paraId:146,tocIndex:56},{value:"\u5168\u5C40\u5BFC\u822A\uFF1A\u524D\u7F6E\u5B88\u536BbeforeEach\uFF0C\u89E3\u6790\u5B88\u536BbeforeResolve\uFF0C\u540E\u7F6E\u5B88\u536B afterEach",paraId:147,tocIndex:56},{value:"\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B\uFF1AbeforeEnter",paraId:147,tocIndex:56},{value:"\u7EC4\u4EF6\u5185\u5B88\u536B\uFF1A \u8FDB\u5165\u524DbeforeRouteEnter\u3001\u66F4\u65B0\u524DbeforeRouteUpdate\u3001\u79BB\u5F00\u524DbeforeRouteLeave",paraId:147,tocIndex:56},{value:`//\u524D\u7F6E\u5B88\u536B\r
//\u89E6\u53D1\u65F6\u673A\uFF1A\r
/*to: Route: \u5373\u5C06\u8981\u8FDB\u5165\u7684\u76EE\u6807 \u8DEF\u7531\u5BF9\u8C61\r
from: Route: \u5F53\u524D\u5BFC\u822A\u6B63\u8981\u79BB\u5F00\u7684\u8DEF\u7531\r
next: Function: \u4E00\u5B9A\u8981\u8C03\u7528\u8BE5\u65B9\u6CD5\u6765 resolve \u8FD9\u4E2A\u94A9\u5B50\r
*/\r
// \u5168\u5C40\u524D\u7F6E\u5B88\u536B\r
router.beforeEach((to, from, next) => {\r
    let isAuthenticated = Vue.prototype.$session.getLoginInfo();\r
    if (to.name !== 'Login' && !isAuthenticated) {\r
        next({ name: 'Login' }) // \u524D\u5F80 login \u8DEF\u7531\u5730\u5740\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 path\u6307\u5B9A\u8DEF\u5F84\r
    }\r
    else {\r
        next() // \u653E\u884C\uFF0C\u5141\u8BB8\u901A\u8FC7  next(false)\u662F\u4E0D\u5141\u8BB8\u901A\u8FC7\r
    }\r
});\r
\r
//\u5168\u5C40\u89E3\u6790\u5B88\u536B \u53C2\u6570\u4E0E \u524D\u7F6E\u5B88\u536B\u4E00\u6837\r
//\u89E6\u53D1\u65F6\u673A:\u540C\u65F6\u5728\u6240\u6709\u7EC4\u4EF6\u5185\u5B88\u536B\u548C\u5F02\u6B65\u8DEF\u7531\u7EC4\u4EF6\u88AB\u89E3\u6790\u4E4B\u540E\r
router.beforeResolve((to, from, next) => {\r
    // console.log('\u5168\u5C40\u89E3\u6790\u5B88\u536B');\r
    next();\r
})\r
//\u5168\u5C40\u540E\u7F6E\u5B88\u536B  \u53C2\u6570\u6CA1\u6709 next()\r
router.afterEach((to, from) => {\r
    // console.log('\u5168\u5C40\u540E\u7F6E\u5B88\u536B');\r
})\r
//\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B\r
{\r
    path: '/foo',\r
        component: Foo,\r
            beforeEnter: (to, from, next) => {\r
                // ...\r
            }\r
}\r
//\u7EC4\u4EF6\u5185\u5B88\u536B\r
beforeRouteEnter(to, from, next) {\r
    // \u5728\u6E32\u67D3\u8BE5\u7EC4\u4EF6\u7684\u5BF9\u5E94\u8DEF\u7531\u88AB confirm \u524D\u8C03\u7528\r
    // \u4E0D\uFF01\u80FD\uFF01\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B \`this\`\r
    // \u56E0\u4E3A\u5F53\u5B88\u536B\u6267\u884C\u524D\uFF0C\u7EC4\u4EF6\u5B9E\u4F8B\u8FD8\u6CA1\u88AB\u521B\u5EFA\r
},\r
beforeRouteUpdate(to, from, next) {\r
    // \u5728\u5F53\u524D\u8DEF\u7531\u6539\u53D8\uFF0C\u4F46\u662F\u8BE5\u7EC4\u4EF6\u88AB\u590D\u7528\u65F6\u8C03\u7528\r
    // \u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u5E26\u6709\u52A8\u6001\u53C2\u6570\u7684\u8DEF\u5F84 /foo/:id\uFF0C\u5728 /foo/1 \u548C /foo/2 \u4E4B\u95F4\u8DF3\u8F6C\u7684\u65F6\u5019\uFF0C\r
    // \u7531\u4E8E\u4F1A\u6E32\u67D3\u540C\u6837\u7684 Foo \u7EC4\u4EF6\uFF0C\u56E0\u6B64\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u88AB\u590D\u7528\u3002\u800C\u8FD9\u4E2A\u94A9\u5B50\u5C31\u4F1A\u5728\u8FD9\u4E2A\u60C5\u51B5\u4E0B\u88AB\u8C03\u7528\u3002\r
    // \u53EF\u4EE5\u8BBF\u95EE\u7EC4\u4EF6\u5B9E\u4F8B \`this\`\r
},\r
beforeRouteLeave(to, from, next) {\r
    // \u5BFC\u822A\u79BB\u5F00\u8BE5\u7EC4\u4EF6\u7684\u5BF9\u5E94\u8DEF\u7531\u65F6\u8C03\u7528\r
    // \u53EF\u4EE5\u8BBF\u95EE\u7EC4\u4EF6\u5B9E\u4F8B \`this\`\r
}
`,paraId:148,tocIndex:56},{value:"\u5BFC\u822A\u88AB\u89E6\u53D1\u3002",paraId:149,tocIndex:57},{value:"\u5728\u5931\u6D3B\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 ",paraId:149,tocIndex:57},{value:"beforeRouteLeave",paraId:149,tocIndex:57},{value:" \u5B88\u536B\u3002",paraId:149,tocIndex:57},{value:"\u8C03\u7528\u5168\u5C40\u7684 ",paraId:149,tocIndex:57},{value:"beforeEach",paraId:149,tocIndex:57},{value:" \u5B88\u536B\u3002",paraId:149,tocIndex:57},{value:"\u5728\u91CD\u7528\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 ",paraId:149,tocIndex:57},{value:"beforeRouteUpdate",paraId:149,tocIndex:57},{value:" \u5B88\u536B (2.2+)\u3002",paraId:149,tocIndex:57},{value:"\u5728\u8DEF\u7531\u914D\u7F6E\u91CC\u8C03\u7528 ",paraId:149,tocIndex:57},{value:"beforeEnter",paraId:149,tocIndex:57},{value:"\u3002",paraId:149,tocIndex:57},{value:"\u89E3\u6790\u5F02\u6B65\u8DEF\u7531\u7EC4\u4EF6\u3002",paraId:149,tocIndex:57},{value:"\u5728\u88AB\u6FC0\u6D3B\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 ",paraId:149,tocIndex:57},{value:"beforeRouteEnter",paraId:149,tocIndex:57},{value:"\u3002",paraId:149,tocIndex:57},{value:"\u8C03\u7528\u5168\u5C40\u7684 ",paraId:149,tocIndex:57},{value:"beforeResolve",paraId:149,tocIndex:57},{value:" \u5B88\u536B (2.5+)\u3002",paraId:149,tocIndex:57},{value:"\u5BFC\u822A\u88AB\u786E\u8BA4\u3002",paraId:149,tocIndex:57},{value:"\u8C03\u7528\u5168\u5C40\u7684 ",paraId:149,tocIndex:57},{value:"afterEach",paraId:149,tocIndex:57},{value:" \u94A9\u5B50\u3002",paraId:149,tocIndex:57},{value:"\u89E6\u53D1 DOM \u66F4\u65B0\u3002",paraId:149,tocIndex:57},{value:"\u8C03\u7528 ",paraId:149,tocIndex:57},{value:"beforeRouteEnter",paraId:149,tocIndex:57},{value:" \u5B88\u536B\u4E2D\u4F20\u7ED9 ",paraId:149,tocIndex:57},{value:"next",paraId:149,tocIndex:57},{value:" \u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u521B\u5EFA\u597D\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u4F1A\u4F5C\u4E3A\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u4F20\u5165\u3002",paraId:149,tocIndex:57},{value:`import Vue from 'vue'\r
import Vuex from 'vuex'\r
Vue.use(Vuex)\r
// \u5B50\u4ED3\u5E93\r
import userModule from './module.js/userModule';// \r
import tagNavModule from './module.js/tagNavModule';// \u6807\u7B7E\u5BFC\u822A\r
\r
export default new Vuex.Store({\r
    // \u5B9A\u4E49\u6570\u636E\r
    state: {\r
        name: "qike",\r
        count: 1, desc: "\u72B6\u6001\u673A", listUser: [{ id: 1, name: "\u5F20\u4E09" }, { id: 2, name: "\u738B\u4E94" }],\r
        objUser: { id: 3, name: "\u6E23\u6E23\u7070" },\r
\r
    },\r
    //\u8BA1\u7B97\u5C5E\u6027, \u7528\u4E8E\u83B7\u53D6state\u4E2D\u7684\u6570\u636E\uFF0C\u5B83\u53EF\u4EE5\u5728\u83B7\u53D6\u6570\u636E\u65F6\u8FDB\u884C\u8BA1\u7B97\uFF0C\u628A\u8BA1\u7B97\u540E\u7684\u503C\u8FD4\u56DE\r
    //\u7EA6\u5B9A\u4F7F\u7528\u6B64\u65B9\u6CD5\u66B4\u9732\u6570\u636E\uFF0C\u4E0D\u8981\u76F4\u63A5\u64CD\u4F5C\u6570\u636E\r
    getters: {\r
        getName(state) {\r
            return state.desc + "\u7248\u672C\u53F7\uFF1A7.0.1"\r
        }\r
    },\r
    //\u540C\u6B65\u65B9\u6CD5\uFF1A\u7528\u4E8E\u83B7\u53D6\u6216\u662F\u8BBE\u7F6Estate\u4E2D\u7684\u6570\u636E\r
    // \u7EA6\u5B9A\u4F7F\u7528\u8BE5\u65B9\u6CD5\u4FEE\u6539\u6570\u636E\uFF0C\u4E0D\u7136vue\u65E0\u6CD5\u76D1\u6D4B\u6570\u636E\u53D8\u5316\r
    //  \u7EA6\u5B9A\u65B9\u6CD5\u540D\u5168\u5927\u5199\r
    mutations: {\r
        ADD_COUNT(state, val) {\r
            state.count += val;\r
        }\r
    },\r
    //\u5F02\u6B65\u65B9\u6CD5\uFF1A\u7528\u4E8E\u83B7\u53D6\u6216\u662F\u8BBE\u7F6Estate\u4E2D\u7684\u6570\u636E\uFF0C\u5728actions\u4E2D\u53EF\u4EE5\u6267\u884C\u4E00\u4E9B\u5F02\u6B65\u7684\u4EFB\u52A1\uFF0C\r
    // \u4F8B\u5982\u8C03\u7528\u63A5\u53E3\uFF0CsetTimeout\u7B49\r
    actions: {\r
        getName2(context, val) {\r
            let name = "\u72B6\u6001\u673A\u4E8C\u4EE3\u76EE" + new Date().getTime();\r
            setTimeout(() => {\r
                context.state.desc = name;\r
            }, 2000);\r
        }\r
    },\r
    //\u7528\u4E8E\u5B9A\u4E49\u5B50\u4ED3\u5E93\u7684\uFF1A\u6A21\u5757\u5316\u72B6\u6001\u673A\r
    modules: {\r
        userModule, tagNavModule\r
    }\r
})
`,paraId:150,tocIndex:60},{value:`export default {\r
    // \u5F53\u6A21\u5757\u88AB\u6CE8\u518C\u540E\uFF0C\u5B83\u7684\u6240\u6709 getter\u3001action \u53CA mutation \u90FD\u4F1A\u81EA\u52A8\u6839\u636E\u6A21\u5757\u6CE8\u518C\u7684\u8DEF\u5F84\u8C03\u6574\u547D\u540D\r
    namespaced:true,\r
    // \r
    state:{\r
        userInfo:{\r
            name:"ZS",\r
            id:2,\r
            age:18,\r
            hobby:['\u6253\u7BEE\u7403']\r
        }\r
    },\r
    //\r
    getters:{\r
        user_getName(state){\r
            return state.userInfo.name\r
        }\r
    },\r
    //\r
    mutations:{\r
        ADD_AGE(state,val){\r
            state.userInfo.age+=val;\r
        }\r
    },\r
    //\r
    actions:{\r
        addHobby(context,val){\r
            console.log(context);\r
            setTimeout(() => {\r
                context.state.userInfo.hobby.push(val)\r
            }, 1000); \r
        }\r
    }\r
}
`,paraId:151,tocIndex:61},{value:"\u5728main.js\u4E2D\u5F15\u5165",paraId:152,tocIndex:62},{value:`// \u72B6\u6001\u673A\r
import store from '@/store/index.js'\r
const app = new Vue({\r
	store,\r
  ...App\r
})
`,paraId:153,tocIndex:62},{value:"\u76F4\u63A5\u4F7F\u7528 $store  \u4E0D\u63A8\u4ECB",paraId:154,tocIndex:62},{value:`methods: {\r
    setTime() {\r
      	//\u7EC4\u4EF6\u4E2D\u89E6\u53D1actions\u4E2D\u7684\u51FD\u6570\r
        this.$store.dispatch("setCurTime", new Date().getTime());\r
        //\u5728\u7EC4\u4EF6\u7684js\u4E2D\u89E6\u53D1mutations\r
        this.$store.commit("INCOME", 1);\r
    }\r
}
`,paraId:155,tocIndex:62},{value:"\u4F7F\u7528\u8F85\u52A9\u51FD\u6570",paraId:156,tocIndex:62},{value:"\u5E38\u7528mapGetters, mapMutations, mapActions\uFF0C\u4E00\u822C\u4E0D\u4F7F\u7528 mapState \u6CA1\u5FC5\u8981\u3002",paraId:157,tocIndex:62},{value:`// \u5BFC\u5165\u4E3B\u4ED3\u5E93\u7684\u8F85\u52A9\u51FD\u6570\r
import { mapGetters, mapMutations, mapActions, createNamespacedHelpers } from 'vuex';\r
// \u5BFC\u5165 userModule \u5B50\u4ED3\u5E93\u7684\u8F85\u52A9\u51FD\u6570\r
let {\r
    mapGetters: mapUserGetters,\r
    mapMutations: mapUserMutations,\r
    mapActions: mapUserActions,\r
} = createNamespacedHelpers('userModule');\r
\r
computed: {\r
     	// \u8BA1\u7B97\u5C5E\u6027\u7684\u8F85\u52A9\u51FD\u6570\r
        ...mapGetters(['getName']),\r
        //\u83B7\u53D6\u5B50\u4ED3\u5E93\u7684\u8BA1\u7B97\u5C5E\u6027\r
        ...mapUserGetters(['user_getName']),\r
    },\r
methods: {\r
    	// \u65B9\u6CD5\u7684\u8F85\u52A9\u51FD\u6570\r
    	...mapMutations(['ADD_COUNT']),\r
        ...mapActions(['getName2']),\r
        //\u5B50\u4ED3\u5E93\r
        ...mapUserMutations(['ADD_AGE']),\r
        ...mapUserActions(['addHobby']),\r
}
`,paraId:158,tocIndex:62}]},25364:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(35856);const r=[{value:"\u9996\u5148\u786E\u4FDD\u5DF2\u5B89\u88C5vite\uFF0C\u672A\u5B89\u88C5\u9700\u5230\u5B98\u7F51\u6309\u8BF4\u660E\u6587\u6863\u5B89\u88C5\u3002",paraId:0,tocIndex:1},{value:"vue+ts",paraId:1,tocIndex:2},{value:`yarn create vite chitu-project --template vue-ts
`,paraId:2,tocIndex:2},{value:"\u5386\u53F2\u7248\u672C\uFF1A",paraId:3,tocIndex:5},{value:`<script>\r
export default {\r
    setup() {\r
        \r
        return {}\r
    }\r
}\r
<\/script>
`,paraId:4,tocIndex:5},{value:`<script>\r
import { defineComponent } from 'vue'\r
export default defineComponent({\r
    setup() {\r
        \r
        return {}\r
    }\r
})\r
<\/script>
`,paraId:5,tocIndex:5},{value:"\u6700\u65B0\u7248\uFF1A",paraId:6,tocIndex:5},{value:`<script setup>\r
\r
<\/script>
`,paraId:7,tocIndex:5},{value:"Vue3 \u4E2D\u6E32\u67D3\u5B50\u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u901A\u8FC7 import \u5F15\u5165\u540E\uFF0C\u76F4\u63A5\u6E32\u67D3\u5373\u53EF\uFF1A",paraId:8,tocIndex:6},{value:`<template>\r
  	<HelloWorld />\r
</template>\r
\r
<script setup lang="ts">\r
	import HelloWorld from './components/HelloWorld.vue'\r
<\/script>
`,paraId:9,tocIndex:6},{value:"ref\uFF1A\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F46\u662F\u5728 script \u8303\u56F4\u5185\u4F7F\u7528\u65F6\uFF0C\u5FC5\u987B\u901A\u8FC7 ",paraId:10,tocIndex:7},{value:".value",paraId:10,tocIndex:7},{value:"\uFF1B",paraId:10,tocIndex:7},{value:"reactive\uFF1A\u53EA\u80FD\u7528\u6765\u5B9A\u4E49\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5B9A\u4E49\u597D\u7684\u6570\u636E\uFF0C\u5728\u540E\u7EED\u4FEE\u6539\u65F6\u4E0D\u80FD\u4FEE\u6539\u5F15\u7528\u5730\u5740\uFF1B",paraId:11,tocIndex:7},{value:`<template>\r
<h1>{{ count }}</h1>\r
<h1>{{ state.name }}</h1>\r
</template>\r
\r
<script setup lang="ts">\r
    import { reactive, ref } from 'vue';\r
\r
    // ref \u5B9A\u4E49\u7EC4\u4EF6\u5185\u90E8\u6570\u636E\r
    const count = ref(0);\r
    // ref \u5B9A\u4E49\u7684\u6570\u636E\uFF0C\u5728 script \u8303\u56F4\u5185\u4F7F\u7528\u65F6\uFF0C\u90FD\u5FC5\u987B .value\r
    console.log(count.value);\r
	// reactive\r
    const state = reactive({\r
        name: '\u5F20\u4E09'\r
    })\r
    console.log(state.name);\r
\r
<\/script>
`,paraId:12,tocIndex:7},{value:"\u65B9\u6CD5\u76F4\u63A5\u5728setup\u91CC\u9762\u5199\u5373\u53EF",paraId:13,tocIndex:8},{value:`<template>\r
	<div>\r
		<button @click="sayHello">\u6309\u94AE</button>\r
	</div>\r
</template>\r
\r
<script setup lang="ts">\r
// \u5B9A\u4E49\u7EC4\u4EF6\u5185\u90E8\u65B9\u6CD5\r
const sayHello = () => {\r
	console.log('hello');\r
}\r
<\/script>
`,paraId:14,tocIndex:8},{value:`<template>\r
<h1>{{ result }}</h1>\r
</template>\r
\r
<script setup lang="ts">\r
    import { computed, ref } from 'vue';\r
\r
    const count = ref(0);\r
	// \u76F4\u63A5\u4F7F\u7528 computed\r
    const result = computed(() => {\r
        return count.value + 100;\r
    });\r
\r
<\/script>
`,paraId:15,tocIndex:9},{value:"\u4FA6\u542C\u4E00\u4E2A\u6216\u591A\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E\u6E90\uFF0C\u5E76\u5728\u6570\u636E\u6E90\u53D8\u5316\u65F6\u8C03\u7528\u6240\u7ED9\u7684\u56DE\u8C03\u51FD\u6570\u3002",paraId:16,tocIndex:11},{value:`<script setup lang="ts">\r
    import { ref, watch } from 'vue';\r
    const count = ref(0);\r
\r
\r
    watch(() => count.value, (newValue, oldValue) => {\r
        console.log(newValue, oldValue);\r
    }, {\r
        deep: true,   // \u6DF1\u5EA6\u4FA6\u542C\r
        immediate: true   // \u7ACB\u5373\u4FA6\u542C\r
    });\r
<\/script>
`,paraId:17,tocIndex:11},{value:"\u7ACB\u5373\u8FD0\u884C\u4E00\u4E2A\u51FD\u6570\uFF0C\u540C\u65F6\u54CD\u5E94\u5F0F\u5730\u8FFD\u8E2A\u5176\u4F9D\u8D56\uFF0C\u5E76\u5728\u4F9D\u8D56\u66F4\u6539\u65F6\u91CD\u65B0\u6267\u884C\u3002",paraId:18,tocIndex:12},{value:`<script setup lang="ts">\r
import { watchEffect } from 'vue';\r
\r
watchEffect(() => {\r
	console.log('watchEffect', count.value, state.name);\r
})\r
<\/script>
`,paraId:19,tocIndex:12},{value:"watch \u548C watchEffect \u7684\u7B80\u5355\u533A\u522B",paraId:20,tocIndex:12},{value:"watch \u9700\u8981\u6307\u5B9A\u8981\u4FA6\u542C\u7684\u6570\u636E\uFF0CwatchEffect \u4F1A\u81EA\u52A8\u4FA6\u542C\u5185\u90E8\u7528\u5230\u7684\u6240\u6709\u6570\u636E\uFF1B",paraId:21,tocIndex:12},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cwatch \u4E0D\u4F1A\u7ACB\u5373\u4FA6\u542C\uFF0CwatchEffect \u4F1A\uFF1B",paraId:21,tocIndex:12},{value:"watch \u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u83B7\u53D6\u5230\u53D8\u5316\u524D\u540E\u7684\u503C\uFF0CwatchEffect \u4E0D\u884C\uFF1B",paraId:21,tocIndex:12},{value:"Vue2",paraId:22,tocIndex:13},{value:"Vue3",paraId:22,tocIndex:13},{value:"beforeCreate",paraId:22,tocIndex:13},{value:"\u65E0",paraId:22,tocIndex:13},{value:"created",paraId:22,tocIndex:13},{value:"\u65E0",paraId:22,tocIndex:13},{value:"beforeMount",paraId:22,tocIndex:13},{value:"onBeforeMount",paraId:22,tocIndex:13},{value:"mounted",paraId:22,tocIndex:13},{value:"onMounted",paraId:22,tocIndex:13},{value:"beforeUpdate",paraId:22,tocIndex:13},{value:"onBeforeUpdate",paraId:22,tocIndex:13},{value:"updated",paraId:22,tocIndex:13},{value:"onUpdated",paraId:22,tocIndex:13},{value:"beforeDestroy",paraId:22,tocIndex:13},{value:"onBeforeUnmount",paraId:22,tocIndex:13},{value:"destroyed",paraId:22,tocIndex:13},{value:"onUnmounted",paraId:22,tocIndex:13},{value:"\u4EE3\u7801\u8BED\u6CD5\uFF1A",paraId:23,tocIndex:13},{value:`<script setup lang="ts">\r
import { computed, onMounted, reactive, ref, watchEffect } from 'vue';\r
\r
onMounted(() => {\r
	console.log('\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210');\r
}) \r
<\/script>
`,paraId:24,tocIndex:13},{value:"\u7236\u7EC4\u4EF6\u4F20\u503C",paraId:25,tocIndex:15},{value:`<template>\r
<Child name="\u5F20\u4E09" :age="20" :gender="gender"></Child>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ref } from 'vue';\r
    import Child from './Child.vue';\r
    const gender = ref('\u7537');\r
<\/script>
`,paraId:26,tocIndex:15},{value:"\u5B50\u7EC4\u4EF6\u63A5\u6536\u503C",paraId:27,tocIndex:15},{value:`<template>\r
<h1>\u5B50\u7EC4\u4EF6</h1>\r
<h2>{{ name }}</h2>\r
<h2>{{ age }}</h2>\r
<h2>{{ gender }}</h2>\r
</template>\r
\r
<script setup lang="ts">\r
    \r
    const props = defineProps<{\r
        name: string,\r
        age: number,\r
        gender: string\r
    }>()\r
\r
    console.log(props.age);\r
\r
<\/script>
`,paraId:28,tocIndex:15},{value:`<template>\r
    <Child @getChildData="getChildData"></Child>\r
</template>\r
\r
<script setup lang="ts">\r
\r
const getChildData = (data: any) => {\r
    console.log('\u5B50\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E', data);\r
}\r
<\/script>
`,paraId:29,tocIndex:17},{value:`<template>\r
    <h1>\u5B50\u7EC4\u4EF6</h1>\r
    <button @click="dataToFather">\u4F20\u503C</button>\r
</template>\r
\r
<script setup lang="ts">\r
const emit = defineEmits(['getChildData'])\r
const dataToFather = () => {\r
    emit('getChildData', 'hello');\r
}\r
<\/script>
`,paraId:30,tocIndex:18},{value:`yarn add vue-router
`,paraId:31,tocIndex:20},{value:`src\r
 |--- router\r
 |      |--- index.ts
`,paraId:32,tocIndex:22},{value:`import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'\r
import LoginPage from '../views/login/LoginPage.vue';\r
\r
const routes = [\r
    {\r
        path: '/login',\r
        component: LoginPage\r
    }\r
]\r
\r
const router = createRouter({\r
    routes,\r
    history: createWebHistory()    // history \u6A21\u5F0F\r
    // history: createWebHashHistory()   // hash \u6A21\u5F0F\r
});\r
\r
export default router;
`,paraId:33,tocIndex:23},{value:"\u5728 ",paraId:34,tocIndex:24},{value:"main.ts",paraId:34,tocIndex:24},{value:" \u4E2D\uFF1A",paraId:34,tocIndex:24},{value:`import router from './router'\r
\r
const app = createApp(App);\r
app.use(router);\r
app.mount('#app');\r
\r
// createApp(App).use(router).mount('#app');
`,paraId:35,tocIndex:24},{value:`<template>\r
  	<router-view></router-view>\r
</template>
`,paraId:36,tocIndex:25},{value:`<template>\r
    <div>\r
        <h1>\u767B\u5F55</h1>\r
        <router-link to="/home">\u9996\u9875</router-link>\r
        <button @click="toHome">\u8DF3\u8F6C</button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { useRouter } from 'vue-router';\r
// this.$router\r
const router = useRouter();\r
\r
const toHome = () => {\r
    router.push('/home');\r
}\r
<\/script>
`,paraId:37,tocIndex:26},{value:`<script setup lang="ts">\r
    import { useRoute } from 'vue-router';\r
    // this.$route\r
    const route = useRoute();\r
    console.log('route', route);\r
<\/script>
`,paraId:38,tocIndex:27},{value:"\u672C\u6848\u4F8B\u4F7F\u7528\u672C\u5730\u5B58\u50A8\u201CuserMenu\u201D\uFF0C\u5C06\u6743\u9650\u5B58\u5165\u201CuserMenu\u201D \uFF0C\u5728\u9700\u8981\u7684\u5730\u65B9\u5F15\u5165\u5E76\u8C03\u7528\u5373\u53EF",paraId:39,tocIndex:28},{value:"\u89E3\u51B3\u5237\u65B0\u95EE\u9898\uFF0C\u6700\u597D\u662F\u5728 \u8DEF\u7531\u6CE8\u518C\u7684index\u91CC\u8C03\u7528\u3002",paraId:39,tocIndex:28},{value:`//loadRouter.js\r
import session from "@/tool/session"\r
export default {\r
    loaderRouter(router, routes) {\r
        // router \u52A8\u6001\u52A0\u8F7D\u8DEF\u7531\uFF0C\r
        // routes \u907F\u514D\u5237\u65B0\u6CA1\u4E86\r
        // console.log("\u5C01\u88C5\u7684\u52A8\u6001\u52A0\u8F7D\u8DEF\u7531\uFF0C\u907F\u514D\u5237\u65B0\u6CA1\u4E86");\r
        const mainArr = {\r
            name: "main",\r
            path: '/main',\r
            component: () => import('@/views/Main'),\r
            meta:{\r
            name:"\u4E3B\u9875"\r
        }\r
        }\r
    let userMenu = session.getLocal("userMenu");\r
mainArr.children = getPath(userMenu)\r
if (router) {\r
    // \u767B\u5F55\u6210\u529F\u4E4B\u540E\u89E6\u53D1\r
    //\u52A0\u8DEF\u7531\u914D\u7F6E\u653E\u5165\u8DEF\u7531\u914D\u7F6E\u6570\u7EC4\u4E2D\r
    router.options.routes.push(mainArr);\r
    //\u8BA9\u8DEF\u7531\u5B9E\u4F8B\u52A0\u8F7D\u65B0\u7684\u8DEF\u7531\u9879\r
    router.addRoute(mainArr);\r
} else {\r
    // \u8DEF\u7531\u91CD\u8F7D\r
    routes.push(mainArr)\r
}\r
\r
// \u83B7\u53D6main \u4E0B\u7684\u4E8C\u7EA7\u8DEF\u7531 \uFF0C\u5148\u5199\u4E8C\u7EA7\u5FAA\u73AF\u89E3\u51B3\r
function getPath(userMenu) {\r
    let tempArr = [];\r
    // console.log("userMenu",userMenu);\r
    for (let i = 0; i < userMenu.length; i++) {\r
        const element = userMenu[i].children;\r
        for (let index = 0; index < element.length; index++) {\r
            const item = element[index];\r
            tempArr.push({\r
                path: item.path ? item.path : "",\r
                component: () => import("@/views" + item.component),\r
                meta:{\r
                name:item.name\r
            }\r
                         })\r
        }\r
    }\r
    return tempArr;\r
}\r
}\r
}
`,paraId:40,tocIndex:28},{value:"index\uFF0C\u5904\u7406\u5237\u65B0\u95EE\u9898",paraId:41,tocIndex:28},{value:`import loadRouter from "@/router/loadRouter"\r
//  \u52A8\u6001\u52A0\u8F7D\u8DEF\u7531\uFF0C\u907F\u514D\u5237\u65B0\u6CA1\u4E86\r
loadRouter.loaderRouter("",routes)
`,paraId:42,tocIndex:28},{value:"login.vue,\u5904\u7406\u767B\u5F55\u6210\u529F\u52A8\u6001\u52A0\u8F7D\u7528\u6237\u8DEF\u7531",paraId:43,tocIndex:28},{value:`this.$session.updateLocal('userMenu', this.navData);  // \u66F4\u65B0\u8DEF\u7531\r
loadRouter.loaderRouter(this.$router, this.$route); // \u52A0\u8F7D\u8DEF\u7531
`,paraId:44,tocIndex:28},{value:`yarn add pinia
`,paraId:45,tocIndex:30},{value:`import { createPinia } from 'pinia'\r
\r
const app = createApp(App);\r
\r
app.use(createPinia())\r
\r
app.mount('#app');
`,paraId:46,tocIndex:32},{value:`src\r
 |--- store\r
 |      |--- global.ts\r
 |      |--- users.ts\r
 |      |--- ...
`,paraId:47,tocIndex:33},{value:`import { defineStore } from 'pinia';\r
import { getMenusApi } from '../api/user';\r
\r
export const useGlobal = defineStore('global', {\r
    state: () => ({\r
        menusData: []\r
    }),\r
    getters: {},\r
    actions: {\r
        async getMenusAsync() {\r
            const res = await getMenusApi()\r
            this.menusData = res;\r
        }\r
    }\r
})
`,paraId:48,tocIndex:34},{value:`import { useGlobal } from '../../store/global';\r
// \u83B7\u53D6\u4ED3\u5E93\u6A21\u5757\u5BF9\u8C61\r
const globalStore = useGlobal();\r
console.log(globalStore.menusData);
`,paraId:49,tocIndex:36},{value:`import { onMounted } from 'vue'\r
import { useGlobal } from '../../store/global';\r
\r
const globalStore = useGlobal();\r
\r
onMounted(() => {\r
    globalStore.getMenusAsync();\r
})
`,paraId:50,tocIndex:37}]},46890:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(7726);const r=[{value:"\u6CE8\u610F\uFF1A\u6240\u6709\u7684html\u6807\u7B7E\u9ED8\u8BA4\u662F\u6CA1\u6709\u6837\u5F0F",paraId:0,tocIndex:0},{value:"\u6240\u6709\u7684html\u6807\u7B7E\u9ED8\u8BA4\u6CA1\u6709\u6837\u5F0F\uFF0C\u4F46\u662Fa\u3001h\u6807\u7B7E\u7B49\u9ED8\u8BA4\u662F\u6D4F\u89C8\u5668\u6DFB\u52A0\u7684\u6837\u5F0F",paraId:1,tocIndex:1},{value:"\u7528\u6237\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u66F4\u6539\u6807\u7B7E\u9ED8\u8BA4\u7684\u6837\u5F0F",paraId:2,tocIndex:2},{value:"\u5728\u6807\u7B7E\u4E0A\u6DFB\u52A0style\u5C5E\u6027\uFF0C\u5728\u5C5E\u6027\u503C\u4E2D\u4E66\u5199css\u6837\u5F0F\u4EE3\u7801",paraId:3,tocIndex:3},{value:"\u8BED\u6CD5\uFF1A",paraId:3,tocIndex:3},{value:`<p style="css\u5C5E\u60271\uFF1Acss\u5C5E\u6027\u503C1; css\u5C5E\u60272\uFF1Acss\u5C5E\u6027\u503C2\uFF1B">\r
\r
</p>
`,paraId:4,tocIndex:3},{value:`\u597D\u5904\uFF1A\r
\u54EA\u91CC\u9700\u8981\u6837\u5F0F\u5199\u5728\u54EA\u513F`,paraId:5,tocIndex:3},{value:`\u7F3A\u70B9\uFF1A\r
\u591A\u4E2A\u5143\u7D20\u6709\u76F8\u540C\u7684\u6837\u5F0F\u65F6\uFF0C\u9700\u8981\u91CD\u590D\u4E66\u5199`,paraId:5,tocIndex:3},{value:"\u5728head\u6807\u7B7E\u4E2D\u6DFB\u52A0style\u6807\u7B7E\uFF0C\u518D\u901A\u8FC7\u9009\u62E9\u5668\u6765\u4E66\u5199css\u6837\u5F0F\u4EE3\u7801",paraId:6,tocIndex:4},{value:"\u8BED\u6CD5\uFF1A",paraId:6,tocIndex:4},{value:`<head>\r
<style>\r
\u9009\u62E9\u5668{\r
  css\u5C5E\u60271\uFF1Acss\u5C5E\u6027\u503C1\uFF1B\r
  css\u5C5E\u60272\uFF1Acss\u5C5E\u6027\u503C2\uFF1B\r
}\r
</style>\r
</head>
`,paraId:7,tocIndex:4},{value:"\u597D\u5904",paraId:8,tocIndex:4},{value:"\u7ED3\u6784\u548C\u6837\u5F0F\u5206\u79BB",paraId:9,tocIndex:4},{value:"\u7ED3\u6784\u6E05\u6670\uFF0C\u5229\u4E8E\u540E\u671F\u4EE3\u7801\u7EF4\u62A4",paraId:9,tocIndex:4},{value:"\u53EF\u4EE5\u6279\u91CF\u8BBE\u7F6E\u9009\u4E2D\u7684\u6807\u7B7E\u6837\u5F0F",paraId:9,tocIndex:4},{value:"\u7F3A\u70B9\uFF1A",paraId:10,tocIndex:4},{value:"\u7ED3\u6784\u548C\u6837\u5F0F\u672A\u5B8C\u5168\u5206\u79BB\uFF0C\u76EE\u524D\u8FD8\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D",paraId:11,tocIndex:4},{value:"\u5148\u521B\u5EFA\u4E00\u4E2A\u540E\u7F00\u540D\u4E3A .css\u6587\u4EF6\uFF0C\u518D\u91CC\u9762\u901A\u8FC7\u9009\u62E9\u5668\u4E66\u5199css\u6837\u5F0F\u4EE3\u7801\uFF0C\u518D\u5728head\u6807\u7B7E\u4E2D\u901A\u8FC7link\u6807\u7B7E\u5F15\u5165css\u6837\u5F0F\u6587\u4EF6",paraId:12,tocIndex:5},{value:"\u8BED\u6CD5\uFF1A",paraId:12,tocIndex:5},{value:`<head>\r
<link rel="stylesheet" href="\u8FDE\u63A5css\u6837\u5F0F\u6587\u4EF6">\r
</head>
`,paraId:13,tocIndex:5},{value:"\u597D\u5904\uFF1A",paraId:14,tocIndex:5},{value:"\u6837\u5F0F\u548C\u7ED3\u6784\u4EE3\u7801\u5B8C\u5168\u5206\u79BB",paraId:15,tocIndex:5},{value:"\u4EE5\u540E\u7EF4\u62A4\u4EE3\u7801\uFF0C\u53EF\u4EE5\u4E00\u5904\u5904\u5904\u6539",paraId:15,tocIndex:5},{value:"\u4EE5\u540E\u6211\u4EEC\u53EF\u4EE5\u5C06\u5916\u90E8css\u6587\u4EF6\u8FDB\u884C\u538B\u7F29\uFF0C\u51CF\u5C11\u6587\u4EF6\u4F53\u79EF",paraId:15,tocIndex:5},{value:"\u6CE8\u610F\uFF1A\u4F18\u5148\u7EA7\uFF08\u6743\u91CD\u5927\u5C0F\uFF09\uFF1A\u5185\u8054\u6743\u91CD\u6700\u5927\uFF0C\u76F8\u540C\u9009\u62E9\u5668\uFF0C\u5185\u90E8\u548C\u5916\u90E8\u91C7\u7528\u5C31\u8FD1\u539F\u5219\uFF0C\u79BB\u6807\u7B7E\u8D8A\u8FD1\u7684\u4F18\u5148\u4F5C\u7528",paraId:16,tocIndex:5},{value:"\u76F8\u540C\u9009\u62E9\u5668\uFF0C\u540E\u9762\u7684\u6837\u5F0F\u4F1A\u76D6\u4F4F\u524D\u9762\u7684\u6837\u5F0F",paraId:17,tocIndex:6},{value:"\u901A\u8FC7\u6807\u7B7E\u540D\u627E\u5230\u6307\u5B9A\u7684\u6807\u7B7E\uFF0C\u6CA1\u6709\u6307\u5B9A\u8303\u56F4\uFF0C\u627E\u5230\u9875\u9762\u4E2D\u6240\u6709\u7684\u6EE1\u8DB3\u6761\u4EF6\u7684\u6807\u7B7E",paraId:18,tocIndex:7},{value:"\u8BED\u6CD5\uFF1A",paraId:18,tocIndex:7},{value:`\u6807\u7B7E\u540D{\r
    css\u5C5E\u60271\uFF1Acss\u5C5E\u6027\u503C1\uFF1B\r
    css\u5C5E\u60272\uFF1Acss\u5C5E\u6027\u503C2;\r
}
`,paraId:19,tocIndex:7},{value:"\u53C8\u79F0\u4E3Aclass\u9009\u62E9\u5668\uFF0C\u901A\u8FC7\u6807\u7B7E\u4E0A\u7684class\u540D\u627E\u5230\u6EE1\u8DB3\u6761\u4EF6\u7684\u6807\u7B7E\uFF0C\u591A\u4E2A\u6807\u7B7E\u53EF\u4EE5\u5171\u4EAB\u4E00\u4E2Aclass\u540D\uFF0C\u63D0\u53D6\u516C\u5171\u6837\u5F0F",paraId:20,tocIndex:8},{value:"\u8BED\u6CD5\uFF1A",paraId:20,tocIndex:8},{value:`.class\u540D{\r
    css\u5C5E\u60271\uFF1Acss\u5C5E\u6027\u503C1\uFF1B\r
    css\u5C5E\u60272\uFF1Acss\u5C5E\u6027\u503C2;\r
}
`,paraId:21,tocIndex:8},{value:"\u6CE8\u610F\uFF1A",paraId:22,tocIndex:8},{value:"\u6807\u7B7E\u4E0A\u53EF\u4EE5\u4F5C\u7528\u591A\u4E2Aclass\u540D\uFF0C\u4E2D\u95F4\u4F7F\u7528\u7A7A\u683C\u9694\u5F00",paraId:23,tocIndex:8},{value:"\u5982\u679C\u9009\u62E9\u5668\u591A\u4E2A\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u4E2D\u95F4\u6CA1\u6709\u7A7A\u683C\uFF0C\u4EE3\u8868\u5E76\u4E14\u7684\u610F\u601D",paraId:23,tocIndex:8},{value:`\u627E\u5230\u9875\u9762\u4E2Dclass\u540D\u4E2D\u5373\u6709op\u53C8\u6709oa\u7684\u6807\u7B7E\r
.op.oa{\r
    css\u6837\u5F0F\u4EE3\u7801\r
}
`,paraId:24,tocIndex:8},{value:"id\u662F\u6807\u7B7E\u4E0A\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0Cid\u552F\u4E00\uFF0C\u627E\u5230\u9875\u9762\u4E2D\u552F\u4E00\u7684\u4E00\u4E2A\u6807\u7B7E\uFF0C\u7CBE\u51C6\u5B9A\u4F4D\u3002",paraId:25,tocIndex:9},{value:"\u901A\u8FC7\u6807\u7B7E\u4E0A\u7684id\u540D\u627E\u5230\u6EE1\u8DB3\u6761\u4EF6\u7684\u6807\u7B7E",paraId:26,tocIndex:9},{value:"id\u547D\u540D\u89C4\u5219\uFF1A",paraId:27,tocIndex:9},{value:"\u4EE5\u6570\u5B57\u3001\u5B57\u6BCD\u3001-\u548C_\u6784\u6210",paraId:28,tocIndex:9},{value:"\u4E0D\u80FD\u4EE5\u6570\u5B57\u5F00\u5934",paraId:28,tocIndex:9},{value:"\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u7B26\u53F7",paraId:28,tocIndex:9},{value:"\u8BED\u6CD5\uFF1A",paraId:29,tocIndex:9},{value:`#id\u540D{\r
    css\u6837\u5F0F\u4EE3\u7801\r
}
`,paraId:30,tocIndex:9},{value:"\u6CE8\u610F\uFF1Aid\u662F\u552F\u4E00\uFF0C\u4EE5\u540E\u901A\u8FC7js\u4F1A\u64CD\u4F5C\u6807\u7B7E\u4E0Aid\u540D\uFF0Cid\u9009\u62E9\u5668\u614E\u7528\u3002",paraId:31,tocIndex:9},{value:"\u6839\u636E\u7528\u6237\u9F20\u6807\u7684\u884C\u4E3A\u6765\u6539\u53D8\u6807\u7B7E\u7684\u6837\u5F0F",paraId:32,tocIndex:10},{value:"\u5206\u7C7B",paraId:32,tocIndex:10},{value:"a:link",paraId:33,tocIndex:10},{value:":\u8D85\u94FE\u63A5\u4E13\u5C5E\uFF0C\u9875\u9762\u4E00\u6253\u5F00\u8D85\u94FE\u63A5\u5C31\u6709\u7684\u6837\u5F0F\uFF0C\u65E7\u5C5E\u6027",paraId:33,tocIndex:10},{value:"a:visited",paraId:33,tocIndex:10},{value:":\u8D85\u94FE\u63A5\u4E13\u5C5E,\u8D85\u94FE\u63A5\u88AB\u8BBF\u95EE\u4E4B\u540E\u7684\u6837\u5F0F\uFF0C",paraId:33,tocIndex:10},{value:":hover",paraId:33,tocIndex:10},{value:":\u9F20\u6807\u60AC\u505C\u5230\u6807\u7B7E\u4E0A\u65F6\u6807\u7B7E\u4F7F\u7528\u7684\u6837\u5F0F",paraId:33,tocIndex:10},{value:":active",paraId:33,tocIndex:10},{value:":\u9F20\u6807\u70B9\u51FB\u6807\u7B7E\u4E0D\u91CA\u653E\u65F6\u4F7F\u7528\u7684\u6837\u5F0F",paraId:33,tocIndex:10},{value:":focus",paraId:33,tocIndex:10},{value:":\u5F53\u6807\u7B7E\u83B7\u53D6\u9F20\u6807\u7126\u70B9\u65F6\u4F7F\u7528\u7684\u6837\u5F0F\u3002\u6BD4\u5982\u70B9\u51FB\u8F93\u5165\u6846",paraId:33,tocIndex:10},{value:`:before  \u4F2A\u5143\u7D20\u88AB\u63D2\u5165\u5230\u4E0E\u9009\u62E9\u5668\u5339\u914D\u7684\u5143\u7D20\u5185\u5BB9\u4E4B\u524D\u6216\u4E4B\u540E\r
:after\r
\r
.icon-qrCode .show-qrCode-box::before{\r
    content: "";\r
    border: 5px solid transparent;\r
    border-bottom-color: #c02222;\r
    display: block;\r
    position: absolute;\r
    top: 16px;\r
    left: 10px;\r
}
`,paraId:34,tocIndex:11},{value:"\u6CE8\u610F\uFF1A",paraId:35,tocIndex:11},{value:"before\u548Cafter\u91CC\u9762\u5FC5\u987B\u642D\u914Dconten\u4F7F\u7528",paraId:36,tocIndex:11},{value:"content\uFF1A\u53EF\u4EE5\u662F\u6587\u672C\uFF0C\u4E5F\u53EF\u4EE5\u662F\u56FE\u7247",paraId:37,tocIndex:11},{value:"before\u548Cafter\u662F\u884C\u5185\u6807\u7B7E\uFF0C\u65E0\u6CD5\u4F5C\u7528\u5BBD\u9AD8\u8BBE\u7F6E\uFF0C\u9700\u8981\u8F6C\u6362\u4E3A\u5757\u7EA7\u6216\u8005\u884C\u5185\u5757\u8BBE\u7F6E",paraId:38,tocIndex:11},{value:"before\u548Cafter\u6E32\u67D3\u7684\u662F\u6807\u7B7E\u4E2D\u7684\u5B50\u5143\u7D20",paraId:39,tocIndex:11},{value:"\u6CA1\u6709 :nth-first-child()",paraId:40,tocIndex:11},{value:`\u6240\u6709\u5143\u7D20\u4E2D\u9009\u62E9\r
:first-child   \u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\r
:last-child    \u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\r
:nth-child()   \u9009\u4E2D\u7B2Cn\u4E2A\u5143\u7D20\r
:nth-last-child()\r
\r
\u5173\u4E8E:nth-child()\u7684\u7279\u6B8A\u503C\r
        n   \u7B2Cn\u4E2A   n\u7684\u8303\u56F40\u5230\u6B63\u65E0\u7A77\uFF08\u5168\u9009\uFF09\r
        even\u62162n    \u9009\u4E2D\u5076\u6570\u4F4D\u7684\u5143\u7D20\r
        odd\u62162n+1   \u9009\u4E2D\u5947\u6570\u4F4D\u5F97\u5230\u5143\u7D20\r
\r
\u4E0B\u9762\u90FD\u662F\u5728\u76F8\u540C\u5143\u7D20\u4E2D\u9009\u62E9\r
:first-of-type  \u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\r
:last-of-type   \u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\r
:nth-of-type()    \u9009\u4E2D\u7B2Cn\u4E2A\u5143\u7D20
`,paraId:41,tocIndex:11},{value:"\u5B9E\u4F8B",paraId:42,tocIndex:11},{value:`:nth-child\u548C:nth-of-type\u90FD\u662F\u627E\u5BF9\u5E94\u5143\u7D20\u7236\u5143\u7D20\u5185\u5B50\u5143\u7D20\r
\u6BD4\u5982\r
th:nth-child(1){\r
  width: 50px;\r
}\r
 th:nth-of-type(1){\r
     width: 50px;\r
}\r
\u90FD\u662F\u4F5C\u7528\u5728th\u4E0A\u7684\u6837\u5F0F\r
\u4EA6\u53EF\r
tr :nth-child(1){\r
  width: 50px;\r
}\r
tr :nth-of-type(1){\r
     width: 50px;\r
}\r
\r
\u5076\u6570\u884C\u8868\u683C\u7684\u4E0B\u5212\u7EBF\u6837\u5F0F\u66F4\u6539\uFF0C\u8FD9\u4E2A\u6837\u5F0F\u662F\u4F5C\u7528\u5728{}\u5DE6\u8FB9\u7684\u7B2C\u4E00\u4E2A\u9009\u62E9\u5668\r
tr:nth-of-type(2n) td{\r
      border-bottom: 2px dashed red;\r
  }
`,paraId:43,tocIndex:11},{value:"\u7ED9a\u6807\u7B7E\u6DFB\u52A0\u6837\u5F0F",paraId:44,tocIndex:12},{value:"\u8BED\u6CD5\uFF1A",paraId:44,tocIndex:12},{value:`/* \u5411\u672A\u88AB\u8BBF\u95EE\u8FC7\u7684\u8D85\u94FE\u63A5\u6DFB\u52A0\u6837\u5F0F */\r
a:link {\r
   css\u4EE3\u7801\u6837\u5F0F\u4EE3\u7801\r
}\r
\r
/* \u5411\u8BBF\u95EE\u8FC7\u7684\u8D85\u94FE\u63A5\u6DFB\u52A0\u6837\u5F0F */\r
a:visited {\r
    css\u4EE3\u7801\u6837\u5F0F\u4EE3\u7801\r
}\r
\r
\r
/* \u9F20\u6807\u79FB\u5165\u8D85\u94FE\u63A5\u65F6\u6DFB\u52A0\u5230\u6837\u5F0F */\r
/* :hover \u5FC5\u987B\u653E\u5728:link\u548C:visited\u4E4B\u540E */\r
a:hover {\r
    css\u4EE3\u7801\u6837\u5F0F\u4EE3\u7801\r
}\r
\r
/* \u9F20\u6807\u70B9\u51FB\u4E0D\u653E\u65F6\u6DFB\u52A0\u7684\u6837\u5F0F */\r
/* :active\u5FC5\u987B\u653E\u5728:hover\u4E4B\u540E */\r
a:active {\r
   css\u4EE3\u7801\u6837\u5F0F\u4EE3\u7801\r
}
`,paraId:45,tocIndex:12},{value:"\u6CE8\u610F\uFF1A",paraId:46,tocIndex:12},{value:":hover",paraId:46,tocIndex:12},{value:"\u5FC5\u987B\u653E\u5728",paraId:46,tocIndex:12},{value:":link",paraId:46,tocIndex:12},{value:"\u548C",paraId:46,tocIndex:12},{value:":visited",paraId:46,tocIndex:12},{value:"\u4E4B\u540E\uFF0C",paraId:46,tocIndex:12},{value:":active",paraId:46,tocIndex:12},{value:"\u5FC5\u987B\u653E\u5728",paraId:46,tocIndex:12},{value:":hover",paraId:46,tocIndex:12},{value:"\u4E4B\u540E\uFF0C\u987A\u5E8F\uFF1AL-V-H-A",paraId:46,tocIndex:12},{value:`a:link{\r
    css\u5C5E\u6027\u540D1: \u5C5E\u6027\u503C1;\r
}\r
a:visited{\r
    css\u5C5E\u6027\u540D1: \u5C5E\u6027\u503C1;\r
}\r
\u975E\u4F2A\u7C7B\u9009\u62E9\u5668:hover{\r
    css\u5C5E\u6027\u540D1: \u5C5E\u6027\u503C1;\r
}\r
\u975E\u4F2A\u7C7B\u9009\u62E9\u5668:active{\r
    css\u5C5E\u6027\u540D1: \u5C5E\u6027\u503C1;\r
}\r
\u975E\u4F2A\u7C7B\u9009\u62E9\u5668:focus{\r
    css\u5C5E\u6027\u540D1: \u5C5E\u6027\u503C1;\r
}
`,paraId:47,tocIndex:12},{value:"\u4E2D\u95F4\u4F7F\u7528\u7A7A\u683C\u9694\u5F00",paraId:48,tocIndex:14},{value:"\u627E\u5230\u67D0\u4E2A\u6807\u7B7E\u91CC\u9762\u7684\u6240\u6709\u7684\u540E\u4EE3\uFF0C\u4F1A\u627E\u5230\u513F\u5B50\u3001\u5B59\u5B50\u7B49\u7B49",paraId:48,tocIndex:14},{value:`\u627E\u5230class\u540D\u4E3Abox\u7684\u6807\u7B7E\u91CC\u9762\u7684\u6240\u6709\u540E\u4EE3p\u6807\u7B7E\r
.box  p{\r
    \r
}
`,paraId:49,tocIndex:14},{value:"\u4E2D\u95F4\u4F7F\u7528>\u9694\u5F00\uFF0C\u53EA\u627E\u513F\u5B50\u4E0D\u627E\u5B59\u5B50",paraId:50,tocIndex:15},{value:`\u627E\u5230class\u540D\u4E3Abox\u7684\u6807\u7B7E\u91CC\u9762\u7684\u6240\u6709\u5B50\u4EE3p\u6807\u7B7E\r
.box >p{\r
    \r
}
`,paraId:51,tocIndex:15},{value:"\u4E2D\u95F4\u4F7F\u7528+\u9694\u5F00\uFF0C\u627E\u540E\u7B2C\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20",paraId:52,tocIndex:16},{value:`\u627E\u5230class\u540D\u4E3Abox\u7684\u6807\u7B7E\u7684\u6240\u6709\u5144\u5F1Fp\u6807\u7B7E\r
.box +p{\r
    \r
}
`,paraId:53,tocIndex:16},{value:"\u4E2D\u95F4\u4F7F\u7528~\u9694\u5F00\uFF0C\u627E\u540E\u6240\u6709\u5144\u5F1F\u5143\u7D20",paraId:54,tocIndex:17},{value:`\u627E\u5230class\u540D\u4E3Abox\u7684\u6807\u7B7E\u540E\u65B9\u7684\u5144\u5F1Fp\u6807\u7B7E\r
.box ~p{\r
    \r
}
`,paraId:55,tocIndex:17},{value:`\u9017\u53F7\u9694\u5F00\r
p,.calss{\r
  \r
}
`,paraId:56,tocIndex:18},{value:`\u4E2D\u95F4\u4E0D\u542B\u4EFB\u4F55\u5B57\u7B26\r
p\u6807\u7B7E\u4E14calss1\u4EE5\u53CAclass2\u7684\u624D\u89E6\u53D1\r
p.calss1.class2{\r
  \r
}
`,paraId:57,tocIndex:19},{value:"E[attr=value]",paraId:58,tocIndex:20},{value:`\u9009\u62E9\u6240\u6709p\u6807\u7B7Eclass\u5C5E\u6027\u503C\u4E3Acolor-blue\u7684\u5143\u7D20\r
p[class='color-blue']{\r
    font-size: 30px;\r
}
`,paraId:59,tocIndex:20},{value:"E[attr^=value]",paraId:60,tocIndex:20},{value:`\u9009\u62E9\u6240\u6709p\u6807\u7B7Eclass\u4EE5co\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u5143\u7D20\r
p[class^='co']{\r
    font-size: 30px;\r
}
`,paraId:61,tocIndex:20},{value:"E[attr$=value]",paraId:62,tocIndex:20},{value:`\u9009\u62E9\u6240\u6709p\u6807\u7B7Eclass\u4EE5co\u5B57\u7B26\u4E32\u7ED3\u675F\u7684\u5143\u7D20\r
p[class$='co']{\r
    font-size: 30px;\r
}
`,paraId:63,tocIndex:20},{value:"E[attr~=value]",paraId:64,tocIndex:20},{value:`\u9009\u62E9\u6240\u6709p\u6807\u7B7Eclass\u6709color\u5C5E\u6027\u503C\u7684\u5143\u7D20,\u7A7A\u683C\u9694\u5F00\r
p[class^='color']{\r
    font-size: 30px;\r
}\r
\u6BD4\u5982 <p class="color blue"></p>
`,paraId:65,tocIndex:20},{value:"E[attr|=value]",paraId:66,tocIndex:20},{value:`\u9009\u62E9\u6240\u6709p\u6807\u7B7Eclass\u4EE5co\u5B57\u7B26\u4E32\u5C5E\u6027\u503C\uFF0C\u4EE5 - \u9694\u5F00\u7684\r
p[class$='co']{\r
    font-size: 30px;\r
}\r
\u6BD4\u5982 <p class="co-blue"></p>
`,paraId:67,tocIndex:20},{value:"E[attr*=value]",paraId:68,tocIndex:20},{value:`\u9009\u62E9\u6240\u6709p\u6807\u7B7Eclass\u4EE5co\u5B57\u7B26\u4E32\u5C5E\u6027\u503C\u6A21\u7CCA\u5339\u914D\r
p[class*='co']{\r
    font-size: 30px;\r
}\r
\u6BD4\u5982 <p class="bluecoclor"></p>
`,paraId:69,tocIndex:20},{value:"\u76F8\u540C\u9009\u62E9\u5668\uFF0C\u5185\u8054\u6837\u5F0F\u6743\u91CD\u6700\u5927\uFF0C\u5185\u90E8\u6837\u5F0F\u548C\u5916\u90E8\u6837\u5F0F\u91C7\u7528\u5C31\u8FD1\u539F\u5219",paraId:70,tocIndex:21},{value:"\u76F8\u540C\u7684\u9009\u62E9\u5668\u540C\u65F6\u4F5C\u7528\u5728\u4E00\u4E2A\u6807\u7B7E\u4E0A\uFF0C\u540E\u9762\u7684\u6837\u5F0F\u4F1A\u76D6\u4F4F\u524D\u9762\u7684\u6837\u5F0F",paraId:70,tocIndex:21},{value:"\u9009\u62E9\u5668\u6743\u91CD\uFF08\u4F18\u5148\u7EA7\uFF09\uFF1Aid\u9009\u62E9\u5668>\u7C7B\u9009\u62E9\u5668>\u6807\u7B7E\u9009\u62E9\u5668",paraId:70,tocIndex:21},{value:"background-color",paraId:71,tocIndex:22},{value:":\u8BBE\u7F6E\u80CC\u666F\u989C\u8272",paraId:71,tocIndex:22},{value:"\u5355\u8BCD",paraId:72,tocIndex:22},{value:"#\u5341\u516D\u8FDB\u5236",paraId:72,tocIndex:22},{value:"rgb(0",paraId:72,tocIndex:22},{value:"255,,0",paraId:72,tocIndex:22},{value:"255,0",paraId:72,tocIndex:22},{value:"255,0",paraId:72,tocIndex:22},{value:"1) \u7B2C\u56DB\u4E2A\u53C2\u6570\u4F4D\u900F\u660E\u5EA6 0\u8868\u793A\u5B8C\u5168\u900F\u660E \u4EA6\u53EF\u7528 opacity",paraId:72,tocIndex:22},{value:"background-image",paraId:73,tocIndex:22},{value:"\uFF1A\u8BBE\u7F6E\u80CC\u666F\u56FE\u7247",paraId:73,tocIndex:22},{value:`background-image:url(\u8FDE\u63A5\u80CC\u666F\u56FE\u7247\u7684\u6587\u4EF6\u8DEF\u5F84);
`,paraId:74,tocIndex:22},{value:"\u80CC\u666F\u56FE\u7247\u9ED8\u8BA4\u4ECE\u76D2\u5B50\u5DE6\u4E0A\u89D2\u5F00\u59CB\u94FA\u8BBE\uFF0C\u5982\u679C\u94FA\u4E0D\u6EE1\uFF0C\u9ED8\u8BA4\u91CD\u590D\u94FA\u8BBE",paraId:75,tocIndex:22},{value:"\u6CE8\u610F\uFF1A\u5982\u679C\u80CC\u666F\u989C\u8272\u548C\u80CC\u666F\u56FE\u7247\u540C\u65F6\u5B58\u5728\uFF0C\u56FE\u7247\u76D6\u4F4F\u80CC\u666F\u989C\u8272",paraId:75,tocIndex:22},{value:"background-repeat",paraId:76,tocIndex:22},{value:":\u8BBE\u7F6E\u80CC\u666F\u56FE\u7247\u662F\u5426\u5E73\u94FA",paraId:76,tocIndex:22},{value:"repeat",paraId:77,tocIndex:22},{value:":\u9ED8\u8BA4\u503C\uFF0Cx\u8F74\u548Cy\u8F74\u90FD\u5E73\u94FA",paraId:77,tocIndex:22},{value:"repeat-x",paraId:77,tocIndex:22},{value:":x\u8F74\u65B9\u5411\u4E0A\u8FDB\u884C\u5E73\u94FA",paraId:77,tocIndex:22},{value:"repeat-y",paraId:77,tocIndex:22},{value:"\uFF1Ay\u8F74\u65B9\u5411\u4E0A\u8FDB\u884C\u5E73\u94FA",paraId:77,tocIndex:22},{value:"no-repeat",paraId:77,tocIndex:22},{value:":\u4E0D\u5E73\u94FA",paraId:77,tocIndex:22},{value:"\u5E94\u7528\uFF1A\u53EF\u4EE5\u5B9E\u73B01px\u6E10\u53D8\u80CC\u666F\u5E73\u94FA\uFF0C\u51CF\u5C11\u56FE\u7247\u7684\u4F53\u79EF\uFF0C\u4ECE\u800C\u4F18\u5316\u7F51\u9875",paraId:77,tocIndex:22},{value:"background-position",paraId:78,tocIndex:22},{value:":\u8BBE\u7F6E\u80CC\u666F\u56FE\u7247\u7684\u663E\u793A\u4F4D\u7F6E",paraId:78,tocIndex:22},{value:"x\u8F74  y\u8F74\uFF1A  \u8FD9\u4E2A\u662F\u5750\u6807\uFF0C\u5B9A\u4F4D\u8D77\u70B9\uFF0C\u60F3\u8C61\u5750\u6807\u8F74",paraId:79,tocIndex:22},{value:"\u5355\u8BCD\uFF1Aleft  right  center  top \u4E0A  bottom \u4E0B  \u4E24\u4E24\u642D\u914D\u4F7F\u7528",paraId:80,tocIndex:22},{value:"\u56FA\u5B9A\u50CF\u7D20\uFF1A\u9ED8\u8BA4\u5DE6\u4E0A\u89D2 0px 0px",paraId:80,tocIndex:22},{value:"\u767E\u5206\u6BD4\uFF1A50%  50% \u76F8\u5F53\u4E8Ecenter center",paraId:80,tocIndex:22},{value:"background-size",paraId:81,tocIndex:22},{value:":\u8BBE\u7F6E\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F\uFF0Ccss3\u63D0\u51FA",paraId:81,tocIndex:22},{value:"contain",paraId:82,tocIndex:22},{value:":\u4E00\u8FB9\u94FA\u6EE1\uFF0C\u53E6\u4E00\u8FB9\u4E0D\u7BA1",paraId:82,tocIndex:22},{value:"cover",paraId:82,tocIndex:22},{value:":\u4E24\u8FB9\u90FD\u94FA\u6EE1\uFF0C\u8D85\u51FA\u90E8\u5206\u9690\u85CF",paraId:82,tocIndex:22},{value:"x\u8F74 y\u8F74",paraId:82,tocIndex:22},{value:"\uFF1A\u5BBD\u5EA6  \u9AD8\u5EA6",paraId:82,tocIndex:22},{value:"\u540C\u65F6\u8BBE\u7F6E\u4E24\u4E2A\u503C\uFF0C\u80CC\u666F\u56FE\u7247\u53EF\u80FD\u53D8\u5F62\uFF0C\u53EA\u8BBE\u7F6E\u4E00\u4E2A\u503C\uFF0C\u4EE3\u8868\u56FE\u7247\u7684\u5BBD\u5EA6",paraId:83,tocIndex:22},{value:"%\u53F7 \u4E3A\u7236\u76D2\u5B50\u957F\u5BBD 50% 50% \u8868\u793A\u7236\u76D2\u5B50\u7684\u4E00\u534A\u957F\u5BBD",paraId:83,tocIndex:22},{value:"background-attachment",paraId:84,tocIndex:22},{value:":\u8BBE\u7F6E\u80CC\u666F\u56FE\u7247\u662F\u5426\u56FA\u5B9A\uFF08css3\uFF09",paraId:84,tocIndex:22},{value:"scroll",paraId:85,tocIndex:22},{value:":\u9ED8\u8BA4\u503C\uFF0C\u56FE\u7247\u4F1A\u968F\u7740\u6EDA\u52A8\u6761\u6EDA\u52A8",paraId:85,tocIndex:22},{value:"fixed",paraId:85,tocIndex:22},{value:":\u80CC\u666F\u56FE\u7247\u56FA\u5B9A\u5728\u9875\u9762\u4E0A",paraId:85,tocIndex:22},{value:"backgroud",paraId:86,tocIndex:22},{value:":\u590D\u5408\u5C5E\u6027",paraId:86,tocIndex:22},{value:` background: pink url(img/img-3.jpg) no-repeat 50% 50% /100px 100px fixed;
`,paraId:87,tocIndex:22},{value:"/\u524D\u9762\u4EE3\u8868\u56FE\u7247\u663E\u793A\u4F4D\u7F6E\uFF0C/\u540E\u9762\u662F\u80CC\u666F\u56FE\u7247\u7684\u5927\u5C0F",paraId:88,tocIndex:22},{value:"color",paraId:89,tocIndex:23},{value:":\u8BBE\u7F6E\u6587\u672C\u7684\u989C\u8272",paraId:89,tocIndex:23},{value:"text-align",paraId:90,tocIndex:23},{value:"\uFF1A\u8BBE\u7F6E\u6587\u672C\u7684\u5BF9\u9F50\u65B9\u5F0F",paraId:90,tocIndex:23},{value:"left\uFF1A\u5DE6\u5BF9\u9F50",paraId:91,tocIndex:23},{value:"center\uFF1A\u5C45\u4E2D",paraId:91,tocIndex:23},{value:"right\uFF1A\u53F3\u5BF9\u9F50",paraId:91,tocIndex:23},{value:"\u6CE8\u610F\uFF1A\u53EF\u4EE5\u63A7\u5236\u6807\u7B7E\u4E2D\u6587\u672C\u5728\u6C34\u5E73\u65B9\u5411\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5BF9\u884C\u7EA7\u6807\u7B7E\u540C\u6837\u6709\u6548",paraId:91,tocIndex:23},{value:"line-height",paraId:92,tocIndex:23},{value:":\u8BBE\u7F6E\u6587\u672C\u7684\u884C\u9AD8",paraId:92,tocIndex:23},{value:"\u50CF\u7D20",paraId:93,tocIndex:23},{value:"\u767E\u5206\u6BD4\u548C\u6570\u5B57\uFF1A\u662F\u53C2\u8003\u5B57\u4F53\u7684\u5927\u5C0F\uFF0C\u76F8\u5F53\u4E8E\u5B57\u4F53\u7684\u500D\u6570",paraId:93,tocIndex:23},{value:"\u6CE8\u610F\uFF1A",paraId:93,tocIndex:23},{value:"\u4E00\u884C\u91CC\u9762\u7684\u6587\u672C\u5728\u5782\u76F4\u65B9\u5411\u4E0A\u5C45\u4E2D",paraId:94,tocIndex:23},{value:"\u9488\u5BF9",paraId:94,tocIndex:23},{value:"\u5355\u884C\u6587\u672C",paraId:94,tocIndex:23},{value:"\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\uFF0C\u53EF\u4EE5\u8BBE\u7F6Etext-align:center;  line-height\u7B49\u4E8E\u76D2\u5B50\u7684\u9AD8\u5EA6",paraId:94,tocIndex:23},{value:"text-decoration",paraId:95,tocIndex:23},{value:":\u8BBE\u7F6E\u6587\u672C\u4FEE\u9970",paraId:95,tocIndex:23},{value:"none",paraId:96,tocIndex:23},{value:":\u65E0",paraId:96,tocIndex:23},{value:"underline",paraId:96,tocIndex:23},{value:":\u4E0B\u5212\u7EBF",paraId:96,tocIndex:23},{value:"line-through",paraId:96,tocIndex:23},{value:":\u4E2D\u5212\u7EBF\uFF0C\u5220\u9664\u7EBF",paraId:96,tocIndex:23},{value:"overline",paraId:96,tocIndex:23},{value:":\u4E0A\u5212\u7EBF",paraId:96,tocIndex:23},{value:"letter-spacing",paraId:97,tocIndex:23},{value:":\u8BBE\u7F6E\u5B57\u7B26\u95F4\u8DDD\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u82F1\u6587\u5B57\u6BCD\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26",paraId:97,tocIndex:23},{value:"word-spacing",paraId:98,tocIndex:23},{value:":\u8BBE\u7F6E\u5B57\u95F4\u8DDD\uFF0C\u4EE5\u6587\u672C\u4E2D\u7A7A\u683C\u6765\u533A\u5206\uFF0C\u4E00\u822C\u5BF9\u82F1\u6587\u4F7F\u7528\u3002",paraId:98,tocIndex:23},{value:"text-indent",paraId:99,tocIndex:23},{value:":\u8BBE\u7F6E\u9996\u884C\u7F29\u8FDB",paraId:99,tocIndex:23},{value:"text-transform",paraId:100,tocIndex:23},{value:":\u8BBE\u7F6E\u82F1\u6587\u5B57\u6BCD\u7684\u5927\u5C0F\u5199",paraId:100,tocIndex:23},{value:"none\uFF1A\u65E0",paraId:101,tocIndex:23},{value:"capitalize\uFF1A\u9996\u5B57\u6BCD\u5927\u5199",paraId:101,tocIndex:23},{value:"uppercase:\u5168\u5927\u5199",paraId:101,tocIndex:23},{value:"lowercase: \u5168\u5C0F\u5199",paraId:101,tocIndex:23},{value:"\u8BBE\u7F6E\u5B57\u4F53\u7684\u7C7B\u578B\uFF0C\u6BCF\u79CD\u7CFB\u7EDF\u9ED8\u8BA4\u6307\u4EE3\u7684\u5B57\u4F53\u4E0D\u4E00\u81F4\u3002",paraId:102,tocIndex:25},{value:"\u8BED\u6CD5\uFF1A",paraId:102,tocIndex:25},{value:`font-family:"\u5B8B\u4F53"\uFF1B\r
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`,paraId:103,tocIndex:25},{value:"\u6CE8\u610F\uFF1A",paraId:104,tocIndex:25},{value:"\u5982\u679C\u8BBE\u7F6E\u591A\u79CD\u5B57\u4F53\uFF0C\u4E2D\u95F4\u4F7F\u7528\u9017\u53F7\u9694\u5F00\uFF0C\u5148\u4ECE\u7CFB\u7EDF\u4E2D\u627E\u7B2C\u4E00\u79CD\u5B57\u4F53\uFF0C\u5982\u679C\u6709\u5219\u4F7F\u7528\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u627E\u7B2C\u4E8C\u79CD\u5B57\u4F53\uFF0C\u4F9D\u6B21\u7C7B\u63A8\uFF0C\u6700\u7EC8\u627E\u5230\u6700\u540E\u4E00\u79CD\u5B57\u4F53serif\uFF0Cserif\u4EE3\u8868\u901A\u7528\u5B57\u4F53",paraId:105,tocIndex:25},{value:"\u5982\u679C\u5B57\u4F53\u540D\u4E3A\u4E2D\u6587\u6216\u8005\u591A\u4E2A\u5355\u8BCD\uFF0C\u9700\u8981\u4F7F\u7528\u5F15\u53F7\u5305\u88F9\uFF0C\u53EF\u4EE5\u662F\u5355\u5F15\u53F7\uFF0C\u53EF\u4EE5\u662F\u53CC\u5F15\u53F7",paraId:105,tocIndex:25},{value:"\u591A\u79CD\u5B57\u4F53\u7684\u98CE\u683C\u4E00\u822C\u7C7B\u4F3C",paraId:105,tocIndex:25},{value:"\u8BBE\u7F6E\u5B57\u4F53\u7684\u5927\u5C0F \uFF0C\u5B57\u53F7",paraId:106,tocIndex:26},{value:"\u8BED\u6CD5\uFF1A",paraId:106,tocIndex:26},{value:`font-size:\u5927\u5C0F\uFF1B
`,paraId:107,tocIndex:26},{value:"\u6570\u5B57\u8D8A\u5927\uFF0C\u5B57\u53F7\u8D8A\u5927",paraId:108,tocIndex:26},{value:"\u8BBE\u7F6E\u5B57\u4F53\u7684\u52A0\u7C97\u6548\u679C",paraId:109,tocIndex:27},{value:"\u53D6\u503C\uFF1A",paraId:110,tocIndex:27},{value:"100~900\uFF1A\u6570\u5B57\u8D8A\u5927\uFF0C\u52A0\u7C97\u6548\u679C\u8D8A\u597D\uFF0C\u4E0D\u80FD\u5E26\u5355\u4F4D",paraId:111,tocIndex:27},{value:"normal\uFF1A\u6B63\u5E38",paraId:111,tocIndex:27},{value:"lighter\uFF1A\u66F4\u7EC6",paraId:111,tocIndex:27},{value:"bold\uFF1A\u52A0\u7C97",paraId:111,tocIndex:27},{value:"bolder\uFF1A\u66F4\u7C97",paraId:111,tocIndex:27},{value:"\u8BBE\u7F6E\u5B57\u4F53\u7684\u98CE\u683C",paraId:112,tocIndex:28},{value:"\u53D6\u503C\uFF1A",paraId:113,tocIndex:28},{value:"narmal\uFF1A\u6B63\u5E38",paraId:114,tocIndex:28},{value:"italic\uFF1A\u659C\u4F53",paraId:114,tocIndex:28},{value:"oblique\uFF1A\u503E\u659C",paraId:114,tocIndex:28},{value:"\u5C06\u5B57\u4F53\u6587\u4EF6\u5F15\u5165\u5230\u4EE3\u7801\uFF0C\u65B9\u4FBF\u4EE3\u7801\u6E32\u67D3\u65F6\u4EE5\u5B57\u4F53\u6587\u4EF6\u7684\u5B57\u4F53\u6E32\u67D3\uFF0C\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u4E0D\u540C\u7684\u7CFB\u7EDF\u90FD\u80FD\u6B63\u5E38\u663E\u793A",paraId:115,tocIndex:29},{value:"\u8BED\u6CD5\uFF1A",paraId:115,tocIndex:29},{value:`@font-face{\r
    font-family\uFF1A\u5B57\u4F53\u540D\u79F0\uFF1B\r
    src:url(\u5B57\u4F53\u6587\u4EF6\u683C\u5F0F1\u7684\u6587\u4EF6\u8DEF\u5F84) format()\uFF0Curl(\u5B57\u4F53\u6587\u4EF6\u683C\u5F0F2\u7684\u6587\u4EF6\u8DEF\u5F84);\r
}
`,paraId:116,tocIndex:29},{value:"\u6CE8\u610F\uFF1A",paraId:117,tocIndex:29},{value:"\u9700\u8981\u5C06\u5B57\u4F53\u6587\u4EF6\u4E00\u8D77\u653E\u5728\u9879\u76EE\u4E2D",paraId:118,tocIndex:29},{value:"\u4E3A\u4E86\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u90FD\u80FD\u6B63\u5E38\u6E32\u67D3\uFF0C\u53EF\u4EE5\u5F15\u5165\u591A\u79CD\u5B57\u4F53\u683C\u5F0F\u7684\u6587\u4EF6\uFF0C\u4E4B\u95F4\u4F7F\u7528\u9017\u53F7\u9694\u5F00\u3002",paraId:118,tocIndex:29},{value:"\u5B57\u4F53\u662F\u4EE5\u56FE\u6807\u7684\u5F62\u5F0F\u663E\u793A\uFF0C\u8BBE\u8BA1\u5E08\u5728\u8BBE\u8BA1\u5B57\u4F53\u7684\u65F6\u5019\uFF0C\u5B57\u4F53\u5F62\u72B6\u5C31\u662F\u56FE\u6807",paraId:119,tocIndex:30},{value:"\u5B57\u4F53\u7684\u76F8\u5173\u6837\u5F0F\u90FD\u53EF\u4EE5\u4F5C\u7528\u5728\u5B57\u4F53\u56FE\u6807",paraId:119,tocIndex:30},{value:"fontawesone \u5B98\u7F51\uFF1A",paraId:119,tocIndex:30},{value:"https://fontawesome.dashgame.com/",paraId:119,tocIndex:30},{value:"\u9875\u9762\u4E2D\u5F15\u5165\u5B57\u4F53\u56FE\u6807\u7684css\u6587\u4EF6\uFF0C\u901A\u8FC7\u4E0D\u540C\u7684class\u540D\u4F5C\u7528\u4E0D\u540C\u7684\u56FE\u6807\u6216\u8005\u6837\u5F0F",paraId:119,tocIndex:30},{value:"\u53EF\u4EE5\u66F4\u6539\u5217\u8868\u9879\u6807\u5FD7\u7684\u6837\u5F0F",paraId:120,tocIndex:31},{value:"list-style-type",paraId:121,tocIndex:31},{value:"\uFF1A\u8BBE\u7F6E\u5217\u8868\u9879\u6807\u5FD7\u7C7B\u578B",paraId:121,tocIndex:31},{value:"none",paraId:122,tocIndex:31},{value:":\u65E0",paraId:122,tocIndex:31},{value:"list-style-position",paraId:123,tocIndex:31},{value:"\uFF1A\u8BBE\u7F6E\u5217\u8868\u9879\u6807\u5FD7\u7684\u663E\u793A\u4F4D\u7F6E",paraId:123,tocIndex:31},{value:"outside",paraId:124,tocIndex:31},{value:":\u5C06\u6807\u5FD7\u653E\u5728li\u6807\u7B7E\u5185\u5BB9\u533A\u57DF\u4EE5\u5916",paraId:124,tocIndex:31},{value:"inside",paraId:124,tocIndex:31},{value:":\u5C06\u6807\u5FD7\u653E\u5728li\u6807\u7B7E\u5185\u5BB9\u533A\u57DF\u91CC\u9762",paraId:124,tocIndex:31},{value:"list-style-image",paraId:125,tocIndex:31},{value:":\u5C06\u56FE\u7247\u4F5C\u4E3A\u5217\u8868\u9879\u6807\u5FD7\uFF0C\u4E0D\u5E38\u7528\uFF0C\u65E0\u6CD5\u901A\u8FC7css\u63A7\u5236\u56FE\u7247\u7684\u5927\u5C0F\uFF0C\u53EA\u80FD\u66F4\u6539\u56FE\u7247\u6587\u4EF6\u672C\u8EAB\u5927\u5C0F\uFF0C\u4E0D\u5982\u5728li\u91CC\u9762\u5305\u542B\u4E00\u4E2Aimg\u6807\u7B7E",paraId:125,tocIndex:31},{value:"list-style",paraId:126,tocIndex:31},{value:"\uFF1A\u590D\u5408\u5C5E\u6027 list-style-type|list-style-image|list-style-position",paraId:126,tocIndex:31},{value:"none",paraId:127,tocIndex:31},{value:":\u65E0",paraId:127,tocIndex:31},{value:"\u66F4\u6539\u8868\u683C\u7684\u6837\u5F0F",paraId:128,tocIndex:32},{value:"border-spacing",paraId:128,tocIndex:32},{value:":\u8BBE\u7F6E\u5355\u5143\u683C\u4E4B\u95F4\u7684\u95F4\u8DDD",paraId:128,tocIndex:32},{value:"border-collapse",paraId:128,tocIndex:32},{value:":\u8BBE\u7F6E\u8868\u683C\u7684\u8FB9\u6846\u5408\u5E76\u4E3A\u4E00",paraId:128,tocIndex:32},{value:"@import ",paraId:129,tocIndex:32},{value:"\u8FD9\u4E24\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5\u5F15\u5165css\u6587\u4EF6\uFF0C\u672C\u8D28\u4E0Alinl\u4E3A\u6574\u4E2A\u7F51\u9875\u670D\u52A1\uFF0C@import\u662Fcss\u670D\u52A1",paraId:130,tocIndex:33},{value:"\u8BED\u6CD5\uFF1A",paraId:131,tocIndex:34},{value:` <link rel="stylesheet" href="css\u6587\u4EF6\u8DEF\u5F84">
`,paraId:132,tocIndex:34},{value:"@import ",paraId:133,tocIndex:34},{value:"\u8BED\u6CD5\uFF1A",paraId:134,tocIndex:35},{value:`<style>\r
    /* \u901A\u8FC7css\u8BED\u6CD5\u5F15\u5165css\u6587\u4EF6 */\r
    @import url(css\u6587\u4EF6\u8DEF\u5F84);\r
</style>
`,paraId:135,tocIndex:35},{value:"link\u662F\u4E00\u79CD\u6807\u7B7E\uFF0C@import\u662F\u4E00\u79CD\u8BED\u6CD5",paraId:136,tocIndex:36},{value:"link\u4E0D\u4EC5\u4EC5\u53EF\u4EE5\u5F15\u5165css\u6587\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u5F15\u5165\u5176\u4ED6\u6587\u4EF6\u683C\u5F0F\uFF0C@import\u53EA\u80FD\u5F15\u5165css\u6587\u4EF6",paraId:136,tocIndex:36},{value:"\u52A0\u8F7D\u65F6\u95F4\uFF1Alink\u662F\u968F\u7740\u9875\u9762\u7684\u52A0\u8F7D\u800C\u52A0\u8F7D\uFF0C@import\u7B49\u9875\u9762\u52A0\u8F7D\u5B8C\u6210\u4E4B\u540E\u518D\u52A0\u8F7D",paraId:136,tocIndex:36},{value:"\u517C\u5BB9\u95EE\u9898\uFF1Alink\u7684\u517C\u5BB9\u6BD4@import\u597D",paraId:136,tocIndex:36},{value:"link\u53EF\u4EE5\u88ABjs\u63A7\u5236\uFF0C@import\u4E0D\u80FD\u88ABjs\u63A7\u5236",paraId:136,tocIndex:36}]},33140:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(17);const r=[{value:"display\uFF1Ainline-block\uFF1B \u4E2D\u95F4\u5B58\u57285px\u7684\u95F4\u8DDD\uFF0C\u5B58\u5728\u517C\u5BB9\u95EE\u9898",paraId:0,tocIndex:1},{value:"\u6D6E\u52A8",paraId:0,tocIndex:1},{value:"\u53EF\u4EE5\u8BA9\u5143\u7D20\u540C\u884C\u663E\u793A\uFF0C\u6392\u5217\u4E0D\u4E0B\u81EA\u52A8\u6362\u884C",paraId:1,tocIndex:2},{value:"\u8BED\u6CD5\uFF1A",paraId:1,tocIndex:2},{value:`float:left | right |none;
`,paraId:2,tocIndex:2},{value:"left :\u5DE6\u6D6E\u52A8",paraId:3,tocIndex:2},{value:"right\uFF1A\u53F3\u6D6E\u52A8",paraId:3,tocIndex:2},{value:"none\uFF1A\u4E0D\u6D6E\u52A8\uFF0C\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"\u7279\u70B9\uFF1A",paraId:4,tocIndex:2},{value:"\u6D6E\u52A8\u5143\u7D20\u53EF\u4EE5\u540C\u884C\u663E\u793A\uFF0C\u6392\u5217\u4E0D\u4E0B\u4F1A\u81EA\u52A8\u6362\u884C\uFF0C\u4E0D\u5B58\u5728\u517C\u5BB9\u95EE\u9898",paraId:5,tocIndex:2},{value:"\u6D6E\u52A8\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u5728\u6807\u51C6\u6587\u6863\u6D41\u4E4B\u4E0A",paraId:5,tocIndex:2},{value:"\u539F\u6765\u7684\u7A7A\u95F4\u4E0D\u5B58\u5728\uFF0C\u540E\u7EED\u6807\u51C6\u6587\u6863\u6D41\u5143\u7D20\u4F1A\u4F7F\u7528\u6B64\u7A7A\u95F4",paraId:5,tocIndex:2},{value:"\u884C\u5185\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\u540E\uFF0C\u652F\u6301\u5BBD\u9AD8",paraId:5,tocIndex:2},{value:"\u6D6E\u52A8\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u524D\u9762\u6807\u51C6\u6587\u6863\u6D41\u5143\u7D20\u7684\u6392\u5217\uFF0C\u4F46\u662F\u4F1A\u5F71\u54CD\u540E\u9762\u6807\u51C6\u6587\u6863\u6D41\u5143\u7D20\u7684\u6392\u5217\u3002\u5E76\u4E14\u6D6E\u52A8\u5143\u7D20\u663E\u793A\u5728\u6807\u51C6\u6587\u6863\u6D41\u7684\u4E0A\u65B9",paraId:5,tocIndex:2},{value:"\u6CE8\u610F\uFF1A",paraId:6,tocIndex:2},{value:"\u53EA\u6709\u8BBE\u7F6E\u4E86\u6D6E\u52A8\u7684\u5143\u7D20\uFF0C\u624D\u53EF\u4EE5\u540C\u884C\u663E\u793A",paraId:7,tocIndex:2},{value:"\u591A\u4E2A\u5143\u7D20\u540C\u65F6\u6D6E\u52A8\uFF0C\u7B2C\u4E00\u4E2A\u6D6E\u52A8\u5143\u7D20\u627E\u7236\u76D2\u5B50\u7684\u8FB9\u754C\uFF0C\u540E\u9762\u7684\u6D6E\u52A8\u5143\u7D20\u627E\u524D\u9762\u6D6E\u52A8\u5143\u7D20\u7684\u8FB9\u754C",paraId:7,tocIndex:2},{value:"\u5757\u7EA7\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\u540E\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6Ewidth\uFF0C\u9ED8\u8BA4\u662Fauto\uFF0C\u5BBD\u5EA6\u662F\u7531\u5185\u5BB9\u51B3\u5B9A",paraId:7,tocIndex:2},{value:"\u6982\u5FF5\uFF1A\u5728\u9875\u9762\u5E03\u5C40\u8FC7\u7A0B\u4E2D\uFF0C\u5143\u7D20\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4ECE\u4E0A\u5230\u4E0B\uFF0C\u5757\u7EA7\u5143\u7D20\u72EC\u5360\u4E00\u884C\uFF0C\u884C\u7EA7\u5143\u7D20\u5171\u4EAB\u4E00\u884C\u7684\u6392\u5217\u89C4\u8303",paraId:8,tocIndex:3},{value:"\u6982\u5FF5\uFF1A\u5728\u9875\u9762\u5E03\u5C40\u8FC7\u7A0B\u4E2D\uFF0C\u5143\u7D20\u4E0D\u518D\u9075\u5FAA\u6807\u51C6\u6587\u6863\u6D41\uFF0C\u6309\u7167\u81EA\u5DF1\u7684\u6392\u5217\u89C4\u8303\u6765\u6392\u5217",paraId:9,tocIndex:4},{value:"\u975E\u6D6E\u52A8\u5143\u7D20\u4F1A\u5360\u7528\u6D6E\u52A8\u5143\u7D20\u539F\u6765\u7684\u4F4D\u7F6E",paraId:10,tocIndex:5},{value:"\u975E\u6D6E\u52A8\u5143\u7D20\u91CC\u9762\u7684\u6587\u672C\u4F1A\u88AB\u6D6E\u52A8\u5143\u7D20\u6324\u51FA\u6765",paraId:11,tocIndex:5},{value:"\u5B9E\u73B0\u56FE\u6587\u6DF7\u6392",paraId:12,tocIndex:5},{value:`<style>\r
    img{\r
        float: left;\r
        width: 60px;\r
    }\r
</style>\r
\r
<img src="img/img-8.jpg" alt="">\r
<p>\r
    \u7279\u70B9\uFF1A \u6D6E\u52A8\u5143\u7D20\u53EF\u4EE5\u540C\u884C\u663E\u793A\uFF0C\u6392\u5217\u4E0D\u4E0B\u4F1A\u81EA\u52A8\u6362\u884C\uFF0C\u4E0D\u5B58\u5728\u517C\u5BB9\u95EE\u9898 \u6D6E\u52A8\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u5728\u6807\u51C6\u6587\u6863\u6D41\u4E4B\u4E0A\u539F\u6765\u7684\u7A7A\u95F4\u4E0D\u5B58\u5728\u884C\u5185\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\u540E\uFF0C\u652F\u6301\u5BBD\u9AD8\u6CE8\u610F\uFF1A\u53EA\u6709\u8BBE\u7F6E\u4E86\u6D6E\u52A8\u7684\u5143\u7D20\uFF0C\u624D\u53EF\u4EE5\u540C\u884C\u663E\u793A\u591A\u4E2A\u5143\u7D20\u540C\u65F6\u6D6E\u52A8\uFF0C\u7B2C\u4E00\u4E2A\u6D6E\u52A8\u5143\u7D20\u627E\u7236\u76D2\u5B50\u7684\u8FB9\u754C\uFF0C\u540E\u9762\u7684\u6D6E\u52A8\u5143\u7D20\u627E\u524D\u9762\u6D6E\u52A8\u5143\u7D20\u7684\u8FB9\u754C\u5757\u7EA7\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\u540E\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6Ewidth\uFF0C\u9ED8\u8BA4\u662Fauto\uFF0C\u5BBD\u5EA6\u662F\u7531\u5185\u5BB9\u51B3\u5B9A\r
</p>
`,paraId:13,tocIndex:5},{value:"\u5B50\u5143\u7D20\u6D6E\u52A8\uFF0C\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677",paraId:14,tocIndex:5},{value:"\u901A\u8FC7clear\u5C5E\u6027\u6765\u6E05\u9664\u6D6E\u52A8\uFF0C\u6E05\u9664\u6D6E\u52A8\u5143\u7D20\u5BF9\u975E\u6D6E\u52A8\u5143\u7D20\u7684\u5F71\u54CD \uFF0C\u5199\u5728\u53D7\u5F71\u54CD\u7684\u5143\u7D20\u8EAB\u4E0A",paraId:15,tocIndex:6},{value:"\u8BED\u6CD5\uFF1A",paraId:15,tocIndex:6},{value:`clear\uFF1Aleft | right |both\uFF1B
`,paraId:16,tocIndex:6},{value:"left\uFF1A\u6E05\u9664\u5DE6\u6D6E\u52A8\u7684\u5F71\u54CD",paraId:17,tocIndex:6},{value:"right\uFF1A\u6E05\u9664\u53F3\u6D6E\u52A8\u7684\u5F71\u54CD",paraId:17,tocIndex:6},{value:"both\uFF1A\u6E05\u9664\u5DE6\u6D6E\u52A8\u548C\u53F3\u6D6E\u52A8\u7684\u5F71\u54CD",paraId:17,tocIndex:6},{value:"\u7ED9\u53D7\u5F71\u54CD\u7684\u5143\u7D20\u6DFB\u52A0 clear\u5C5E\u6027",paraId:18,tocIndex:7},{value:"\u4F7F\u7528",paraId:18,tocIndex:7},{value:" ",paraId:18,tocIndex:7},{value:"\u8FDB\u6D6E\u52A8\u5143\u7D20\u548C\u975E\u6D6E\u52A8\u5143\u7D20\u9694\u5F00",paraId:18,tocIndex:7},{value:"\u4F7F\u7528\u7A7A\u767D\u7684div\u6DFB\u52A0clear\u6837\u5F0F\u5C06\u6D6E\u52A8\u5143\u7D20\u548C\u975E\u6D6E\u52A8\u5143\u7D20\u9694\u5F00",paraId:18,tocIndex:7},{value:`<div style="clear:both;"> </div>
`,paraId:19,tocIndex:7},{value:"\u7ED9\u7236\u5143\u7D20\u6DFB\u52A0\u4F2A\u5143\u7D20\u9009\u62E9\u5668\u6765\u6E05\u9664\u6D6E\u52A8\uFF08\u63A8\u8350\u4F7F\u7528\uFF09",paraId:20,tocIndex:7},{value:`.clearfix::after{\r
    content: "";\r
    clear: both;\r
    display: block;\r
}
`,paraId:21,tocIndex:7},{value:"\u6CE8\u610F\uFF1Aoverflow\uFF1Ahidden\u53EF\u4EE5\u89E3\u51B3\u5B50\u5143\u7D20\u6D6E\u52A8\uFF0C\u7236\u5143\u7D20\u9AD8\u5EA6\u584C\u9677\u7684\u95EE\u9898\uFF0C\u662F\u53D6\u6D88\u6D6E\u52A8\u7684\u5F71\u54CD\uFF0C\u501F\u52A9BFC\u5BB9\u5668\u7684\u7279\u70B9\uFF0C\u8FD9\u4E2A\u5BB9\u5668\u91CC\u9762\u7684\u6D6E\u52A8\u5143\u7D20\u4F1A\u53C2\u4E0E\u7236\u76D2\u5B50\u7684\u9AD8\u5EA6\u8BA1\u7B97\u3002",paraId:22,tocIndex:7},{value:"margin\u8D4B\u503C\uFF0C\u7834\u574F\u6587\u6863\u6D41\u8FDB\u884C\u79FB\u52A8",paraId:23,tocIndex:9},{value:"\u6807\u51C6\u6587\u6863\u6D41\uFF1A\u5728\u9875\u9762\u5E03\u5C40\u8FC7\u7A0B\u4E2D\uFF0C\u5143\u7D20\u4ECE\u4E0A\u5230\u4E0B\uFF0C\u4ECE\u5DE6\u5230\u53F3\uFF0C\u5757\u7EA7\u5143\u7D20\u72EC\u5360\u4E00\u884C\uFF0C\u884C\u7EA7\u5143\u7D20\u5171\u4EAB\u4E00\u884C\u7684\u6392\u5217\u89C4\u8303",paraId:24,tocIndex:9},{value:"\u7834\u574F\u6587\u6863\u6D41\uFF1A\u5728\u9875\u9762\u5E03\u5C40\u8FC7\u7A0B\u4E2D\uFF0C\u5143\u7D20\u5728\u79FB\u52A8\u8FC7\u7A0B\u4E2D\u4E0D\u9075\u5FAA\u6807\u51C6\u6587\u6863\u6D41\u7684\u89C4\u8303\uFF0C\u79FB\u52A8\u5B8C\u6210\u4E4B\u540E\u4ECD\u7136\u5728\u6807\u51C6\u6587\u6863\u6D41\u4E2D",paraId:24,tocIndex:9},{value:"\u8131\u79BB\u6587\u6863\u6D41\uFF1A\u5728\u9875\u9762\u5E03\u5C40\u8FC7\u7A0B\u4E2D\uFF0C\u5143\u7D20\u4E0D\u518D\u9075\u5FAA\u6807\u51C6\u6587\u6863\u6D41\u7684\u89C4\u8303\uFF0C\u6709\u81EA\u5DF1\u7684\u6392\u5217\u89C4\u8303",paraId:24,tocIndex:9},{value:"\u5E94\u7528\u573A\u666F\uFF1A\u5934\u90E8\u5185\u5BB9\u548Cbanner\u91CD\u53E0\u90E8\u5206",paraId:25,tocIndex:9},{value:"\u5B9A\u4F4D\uFF1A\u8BA9\u5143\u7D20\u79FB\u52A8\u5230\u6307\u5B9A\u7684\u4F4D\u7F6E",paraId:26,tocIndex:9},{value:"\u6982\u5FF5\uFF1A\u9ED8\u8BA4\u6BCF\u4E2A\u6807\u7B7E\u90FD\u662F\u9759\u6001\u5B9A\u4F4D",paraId:27,tocIndex:10},{value:`position: static;
`,paraId:28,tocIndex:10},{value:"\u6982\u5FF5\uFF1A\u5143\u7D20\u53C2\u8003\u539F\u6765\u7684\u7684\u4F4D\u7F6E\uFF0C\u6309\u7167\u6307\u5B9A\u7684\u65B9\u5411\u8FDB\u884C\u79FB\u52A8",paraId:29,tocIndex:11},{value:`position:relative;
`,paraId:30,tocIndex:11},{value:"top:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u7684\u4E0A\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:31,tocIndex:11},{value:"bottom:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u4E0B\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:31,tocIndex:11},{value:"left:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u5DE6\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:31,tocIndex:11},{value:"right:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u53F3\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:31,tocIndex:11},{value:"\u7279\u70B9\uFF1A",paraId:32,tocIndex:11},{value:"\u8BBE\u7F6E\u76F8\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\u4F1A\u7834\u574F\u6587\u6863\u6D41\u8FDB\u884C\u79FB\u52A8",paraId:33,tocIndex:11},{value:"\u53EA\u8BBE\u7F6E\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u5143\u7D20\u4E0D\u4F1A\u6709\u53D8\u5316\uFF0C\u4E00\u65E6\u8BBE\u7F6E\u504F\u79FB\u91CF\uFF0C\u7834\u574F\u6587\u6863\u6D41\u53C2\u8003\u5143\u7D20\u539F\u6765\u7684\u4F4D\u7F6E\u8FDB\u884C\u79FB\u52A8",paraId:33,tocIndex:11},{value:"\u539F\u6765\u7684\u7A7A\u95F4\u8FD8\u5360\u7528\uFF0C\u540E\u9762\u7684\u76D2\u5B50\u4ECD\u7136\u4EE5\u6807\u51C6\u6D41\u7684\u65B9\u5F0F\u5BF9\u5F85\u5B83",paraId:33,tocIndex:11},{value:"\u6CE8\u610F\uFF1A",paraId:34,tocIndex:11},{value:"\u5B50\u5143\u7D20\u8BBE\u7F6E\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u7236\u5143\u7D20\u8FDB\u884C\u79FB\u52A8\u65F6\uFF0C\u5B50\u5143\u7D20\u8DDF\u7740\u79FB\u52A8\uFF0C\u539F\u56E0\u5728\u4E8E\u5B50\u5143\u7D20\u539F\u6765\u7684\u4F4D\u7F6E\u8FDB\u884C\u4E86\u79FB\u52A8\uFF0C\u76F8\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\u662F\u53C2\u8003\u5143\u7D20\u539F\u6765\u7684\u4F4D\u7F6E\u8FDB\u884C\u79FB\u52A8\uFF0C\u6240\u4EE5\u8DDF\u7740\u79FB\u52A8",paraId:35,tocIndex:11},{value:"\u4E00\u822C\u914D\u5408\u7EDD\u5BF9\u5B9A\u4F4D\u4E00\u8D77\u4F7F\u7528",paraId:35,tocIndex:11},{value:"\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u6309\u7167\u6307\u5B9A\u7684\u4F4D\u7F6E\u8FDB\u884C\u79FB\u52A8",paraId:36,tocIndex:12},{value:"\u8BED\u6CD5\uFF1A",paraId:36,tocIndex:12},{value:`position:absolute;
`,paraId:37,tocIndex:12},{value:"top:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u7684\u4E0A\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:38,tocIndex:12},{value:"bottom:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u4E0B\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:38,tocIndex:12},{value:"left:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u5DE6\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:38,tocIndex:12},{value:"right:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u53F3\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:38,tocIndex:12},{value:"\u7279\u70B9\uFF1A",paraId:39,tocIndex:12},{value:"\u8BBE\u7F6E\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41",paraId:40,tocIndex:12},{value:"\u53EA\u8BBE\u7F6E\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u5143\u7D20\u662F\u5728\u5F53\u524D\u4F4D\u7F6E\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u4E00\u65E6\u8BBE\u7F6E\u4E86\u504F\u79FB\u91CF\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u5B9A\u4F4D\u7236\u7EA7\uFF0C\u53C2\u8003\u6700\u8FD1\u7684\u5B9A\u4F4D\u7236\u7EA7\u8FDB\u884C\u79FB\u52A8\uFF0C \u5982\u679C\u7236\u7EA7\u90FD\u6CA1\u6709\u5B9A\u4F4D\uFF0C\u5219\u4EE5\u6D4F\u89C8\u5668\u6587\u6863\u4E3A\u51C6\u79FB\u52A8\u4F4D\u7F6E\uFF0Cstatic \u9759\u6001\u5B9A\u4F4D\u4E0D\u7B97\u5B9A\u4F4D",paraId:40,tocIndex:12},{value:"\u539F\u6765\u7684\u7A7A\u95F4\u4E0D\u518D\u5360\u7528",paraId:40,tocIndex:12},{value:"\u6CE8\u610F\uFF1A",paraId:41,tocIndex:12},{value:"\u884C\u5185\u5143\u7D20\u8BBE\u7F6E\u7EDD\u5BF9\u5B9A\u4F4D\u540E\uFF0C\u5143\u7D20\u652F\u6301\u5BBD\u9AD8",paraId:42,tocIndex:12},{value:"\u91CD\u70B9",paraId:43,tocIndex:12},{value:"\u5B9A\u4F4D\u53E3\u8BC0 \u2014\u2014 \u5B50\u7EDD\u7236\u76F8",paraId:44,tocIndex:12},{value:"\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u8981\u548C\u5E26\u6709\u5B9A\u4F4D\u7684\u7236\u7EA7\u642D\u914D\u4F7F\u7528\uFF0C\u90A3\u4E48\u7236\u7EA7\u8981\u7528\u4EC0\u4E48\u5B9A\u4F4D\u5462\uFF1F",paraId:45,tocIndex:12},{value:"\u5B50\u7EDD\u7236\u76F8 \u2014\u2014 \u5B50\u7EA7\u662F\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u7236\u7EA7\u8981\u7528\u76F8\u5BF9\u5B9A\u4F4D\u3002",paraId:46,tocIndex:12},{value:"\u5206\u6790\uFF1A",paraId:47,tocIndex:12},{value:"\u65B9\u5411\u7BAD\u5934\u53E0\u52A0\u5728\u5176\u4ED6\u56FE\u7247\u4E0A\u65B9\uFF0C\u5E94\u8BE5\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u56E0\u4E3A\u7EDD\u5BF9\u5B9A\u4F4D\u5B8C\u5168\u8131\u6807\uFF0C\u5B8C\u5168\u4E0D\u5360\u4F4D\u7F6E\u3002",paraId:48,tocIndex:12},{value:"\u7236\u7EA7\u76D2\u5B50\u5E94\u8BE5\u4F7F\u7528\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u56E0\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\u4E0D\u8131\u6807\uFF0C\u540E\u7EED\u76D2\u5B50\u4ECD\u7136\u4EE5\u6807\u51C6\u6D41\u7684\u65B9\u5F0F\u5BF9\u5F85\u5B83\u3002",paraId:49,tocIndex:12},{value:"\u5982\u679C\u7236\u7EA7\u76D2\u5B50\u4E5F\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u4F1A\u5B8C\u5168\u8131\u6807\uFF0C\u90A3\u4E48\u4E0B\u65B9\u7684\u5E7F\u544A\u76D2\u5B50\u4F1A\u4E0A\u79FB\uFF0C\u8FD9\u663E\u7136\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\u3002",paraId:50,tocIndex:12},{value:"\u7ED3\u8BBA\uFF1A\u7236\u7EA7\u8981\u5360\u6709\u4F4D\u7F6E\uFF0C\u5B50\u7EA7\u8981\u4EFB\u610F\u6446\u653E\uFF0C\u8FD9\u5C31\u662F\u5B50\u7EDD\u7236\u76F8\u7684\u7531\u6765\u3002",paraId:51,tocIndex:12},{value:"\u7ED3\u6784\u7236\u7EA7\uFF1A\u5B50\u5143\u7D20\u5728html\u4EE3\u7801\u4E2D\u7ED3\u6784\u4E0A\u7684\u7236\u6807\u7B7E",paraId:52,tocIndex:13},{value:"\u5B9A\u4F4D\u7236\u7EA7\uFF1A\u8BBE\u7F6E\u7684\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\u8FDB\u884C\u79FB\u52A8\u65F6\u7684\u53C2\u8003\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u6309\u7167\u6574\u4E2A\u6587\u6863\u8FDB\u884C\u79FB\u52A8\uFF0C\u4E00\u65E6\u7236\u5143\u7D20\u8BBE\u7F6E\u76F8\u5BF9\u5B9A\u4F4D\u3001\u7EDD\u5BF9\u5B9A\u4F4D\u3001\u56FA\u5B9A\u5B9A\u4F4D\u540E\uFF0C\u53C2\u8003\u6700\u8FD1\u7684\u5B9A\u4F4D\u7236\u7EA7\u8FDB\u884C\u79FB\u52A8",paraId:53,tocIndex:13},{value:"\u6CE8\u610F\uFF1A",paraId:54,tocIndex:13},{value:"\u5B9A\u4F4D\u7236\u7EA7\u53EF\u4EE5\u4F7F\u7528\u76F8\u5BF9\u5B9A\u4F4D\u3001\u7EDD\u5BF9\u5B9A\u4F4D\u3001\u56FA\u5B9A\u5B9A\u4F4D\uFF0C\u4E00\u822C\u4F7F\u7528\u76F8\u5BF9\u5B9A\u4F4D\uFF08\u5B50\u7EDD\u7236\u76F8\uFF09",paraId:55,tocIndex:13},{value:"\u5982\u679C\u8BBE\u7F6E\u4E86\u591A\u4E2A\u5B9A\u4F4D\u7236\u7EA7\uFF0C\u53C2\u8003\u6700\u8FD1\u7684\u5B9A\u4F4D\u7236\u7EA7\u8FDB\u884C\u79FB\u52A8",paraId:55,tocIndex:13},{value:"\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u6309\u7167\u6307\u5B9A\u7684\u4F4D\u7F6E\u8FDB\u884C\u79FB\u52A8\uFF0C\u4F1A\u56FA\u5B9A\u5728\u9875\u9762\u4E0A\uFF0C\u4E0D\u4F1A\u968F\u7740\u6EDA\u52A8\u6761\u6EDA\u52A8",paraId:56,tocIndex:14},{value:`position:fixed;
`,paraId:57,tocIndex:14},{value:"top:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u7684\u4E0A\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:58,tocIndex:14},{value:"bottom:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u4E0B\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:58,tocIndex:14},{value:"left:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u5DE6\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:58,tocIndex:14},{value:"right:\u5143\u7D20\u8DDD\u79BB\u53C2\u8003\u4F4D\u7F6E\u53F3\u8FB9\u7F18\u7684\u95F4\u8DDD",paraId:58,tocIndex:14},{value:"\u7279\u70B9\uFF1A",paraId:59,tocIndex:14},{value:"\u56FA\u5B9A\u5B9A\u4F4D\u7684\u5143\u7D20\u4F1A\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u5728\u6807\u51C6\u6587\u6863\u6D41\u4E4B\u4E0A",paraId:60,tocIndex:14},{value:"\u4F1A\u56FA\u5B9A\u5728\u9875\u9762\u4E0A\uFF0C\u4E0D\u4F1A\u968F\u7740\u6EDA\u52A8\u6761\u6EDA\u52A8",paraId:60,tocIndex:14},{value:"\u53EA\u8BBE\u7F6E\u56FA\u5B9A\u5B9A\u4F4D\uFF0C\u5F53\u524D\u4F4D\u7F6E\u8131\u79BB\u56FA\u5B9A\u5728\u9875\u9762\u4E0A\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u504F\u79FB\u91CF\uFF0C\u53C2\u8003\u6574\u4E2A\u6587\u6863\u8FDB\u884C\u79FB\u52A8\uFF0C\u56FA\u5B9A\u5728\u9875\u9762\u4E0A",paraId:60,tocIndex:14},{value:"\u539F\u6765\u7684\u7A7A\u95F4\u4E0D\u518D\u5360\u7528",paraId:60,tocIndex:14},{value:"\u5E94\u7528\u573A\u666F\uFF1A\u5934\u90E8\u5BFC\u822A\u56FA\u5B9A\u3001\u5C0F\u5E7F\u544A\u3001\u767B\u5F55\u5F39\u51FA\u6846\u7B49\u7B49",paraId:61,tocIndex:14},{value:"\u4EE5\u6D4F\u89C8\u5668\u7684\u53EF\u89C6\u7A97\u53E3\u4E3A\u53C2\u7167\u70B9\u79FB\u52A8\u5143\u7D20\uFF08\u56FA\u5B9A\u5B9A\u4F4D\u7279\u70B9\uFF09",paraId:62,tocIndex:15},{value:"\u7C98\u6027\u5B9A\u4F4D\u5360\u6709\u539F\u5148\u7684\u4F4D\u7F6E\uFF08\u76F8\u5BF9\u5B9A\u4F4D\u7279\u70B9\uFF09",paraId:62,tocIndex:15},{value:"\u5FC5\u987B\u6DFB\u52A0 top \u3001left\u3001right\u3001bottom \u5176\u4E2D\u4E00\u4E2A\u624D\u6709\u6548",paraId:62,tocIndex:15},{value:"\u6709\u5438\u9644\u6548\u679C",paraId:62,tocIndex:15},{value:`<!DOCTYPE html>\r
<html lang="en">\r
\r
<head>\r
    <meta charset="UTF-8">\r
    <meta http-equiv="X-UA-Compatible" content="IE=edge">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
    <style>\r
        .wrap {\r
            height: 1000px;\r
            width: 100%;\r
            background-color: skyblue;\r
            margin-top: 1000px;\r
        }\r
\r
        .box1 {\r
            width: 80%;\r
            height: 100px;\r
            background-color: teal;\r
            margin: 0 auto;\r
        }\r
\r
        .box2 {\r
            width: 200px;\r
            height: 600px;\r
            background-color: pink;\r
\r
            top: 0;\r
\r
            margin: 0 auto;\r
        }\r
\r
        .sticky {\r
            position: sticky;\r
            bottom: 100px;\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <div class="wrap">\r
        <div class="box1"></div>\r
        <div class="box2 "></div>\r
        <div class="box1 sticky"></div>\r
    </div>\r
\r
</body>\r
\r
</html>
`,paraId:63,tocIndex:15},{value:"\u6982\u5FF5\uFF1A\u8BBE\u7F6E\u7684\u5143\u7D20\u5B9A\u4F4D\u5C42\u7EA7\uFF0C\u53EA\u9488\u5BF9\u76F8\u5BF9\u5B9A\u4F4D\u3001\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u56FA\u5B9A\u5B9A\u4F4D\u6709\u6548\u3002",paraId:64,tocIndex:16},{value:`z-index: \u6570\u5B57\uFF1B
`,paraId:65,tocIndex:16},{value:"auto\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u76F8\u5F53\u4E8E0\uFF0C\u6807\u51C6\u6587\u6863\u6D41\u91CC\u9762\u7684\u5143\u7D20\u76F8\u5F53\u4E8E0",paraId:66,tocIndex:16},{value:"\u6570\u5B57\uFF1A\u8BBE\u7F6E\u5806\u53E0\u987A\u5E8F",paraId:66,tocIndex:16},{value:"\u6CE8\u610F\uFF1A",paraId:67,tocIndex:16},{value:"\u6570\u5B57\u8D8A\u5927\uFF0C\u5B9A\u4F4D\u5C42\u7EA7\u8D8A\u9AD8\uFF0C\u6570\u5B57\u76F8\u540C\u65F6\uFF0C\u6309\u7167\u4EE3\u7801\u7ED3\u6784\u540E\u9762\u5B9A\u4F4D\u7684\u5143\u7D20\u663E\u793A\u5728\u524D\u9762\u5B9A\u4F4D\u5143\u7D20\u7684\u4E0A\u65B9",paraId:68,tocIndex:16},{value:"\u76F8\u5BF9\u5B9A\u4F4D\u3001\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u56FA\u5B9A\u5B9A\u4F4D\u5B9A\u4F4D\u5C42\u7EA7\u76F8\u540C\u65F6\u4E0B\u65B9\u76D2\u5B50\u4F1A\u76D6\u4F4F\u4E0A\u65B9\u76D2\u5B50\uFF0C\u53F3\u65B9\u76D2\u5B50\u4F1A\u76D6\u4F4F\u5DE6\u65B9\u76D2\u5B50\u3002",paraId:69,tocIndex:17},{value:"width\u548Cheight\u5C5E\u6027\u8868\u793Aconten\u7684\u957F\u5BBD",paraId:70,tocIndex:19},{value:"\u4E0A\u9762\u5C31\u662F\u4E00\u4E2A\u6807\u51C6\u76D2\u6A21\u578B\uFF1A",paraId:71,tocIndex:19},{value:"content:\u4EE3\u8868\u5185\u5BB9\u533A\u57DF\uFF0C\u5B58\u653E\u5185\u5BB9\uFF0C\u6587\u672C\u6216\u8005\u91CC\u9762\u56FE\u7247\u7B49\u7B49",paraId:72,tocIndex:19},{value:"padding\uFF1A\u5185\u8FB9\u8DDD\uFF0C\u76D2\u5B50\u5185\u90E8\u7684\u7A7A\u95F4\uFF0C\u5185\u5BB9\u4E0E\u8FB9\u6846\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF0C\u76F8\u5F53\u4E8E\u5FEB\u9012\u4E2D\u7684\u6CE1\u6CAB",paraId:72,tocIndex:19},{value:"border\uFF1A\u76D2\u5B50\u7684\u8FB9\u6846\uFF0C\u56DB\u5468\u8FB9\u6846\u53EF\u4EE5\u5206\u522B\u8BBE\u7F6E\u3002",paraId:72,tocIndex:19},{value:"margin\uFF1A\u4EE3\u8868\u5916\u8FB9\u8DDD\uFF0C\u76D2\u5B50\u548C\u76D2\u5B50\u4E4B\u95F4\u7684\u95F4\u8DDD\uFF08\u7236\u5B50\u5173\u7CFB\uFF0C\u5144\u5F1F\u5173\u7CFB\uFF09",paraId:72,tocIndex:19},{value:"\u7ED9\u76D2\u5B50\u6DFB\u52A0\u8FB9\u6846",paraId:73,tocIndex:20},{value:"\u8BED\u6CD5:",paraId:73,tocIndex:20},{value:`\u8BBE\u7F6E\u5355\u72EC\u4E00\u6761\u8FB9\u6846\u7684\u6837\u5F0F\r
border-\u65B9\u4F4D-width: \u5BBD\u5EA6;\r
border-\u65B9\u4F4D-style: \u7C7B\u578B\uFF1B\r
border-\u65B9\u4F4D-color: \u989C\u8272\uFF1B\r
\r
\u590D\u5408\u5C5E\u6027\uFF1A\r
\u8BBE\u7F6E\u4E00\u6761\u8FB9\u6846\u7684\u6837\u5F0F\r
border-\u65B9\u4F4D: \u5BBD\u5EA6   \u7C7B\u578B   \u989C\u8272;\r
\r
\u540C\u65F6\u8BBE\u7F6E\u56DB\u6761\u8FB9\u6846\u7684 \u6837\u5F0F\r
border:  \u5BBD\u5EA6   \u7C7B\u578B   \u989C\u8272\uFF1B
`,paraId:74,tocIndex:20},{value:"\u7C7B\u578B\uFF1Asolid \u5B9E\u7EBF  dashed \u865A\u7EBF  dotted \u70B9\u7EBF  double\u53CC\u8FB9\u7EBF",paraId:75,tocIndex:20},{value:"\u6CE8\u610F\uFF1A",paraId:76,tocIndex:20},{value:"\u8FB9\u6846\u5FC5\u987B\u8BBE\u7F6E\u77E5\u8BC6\u4E24\u4E2A\u503C\uFF1A\u5BBD\u5EA6\u548C\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u663E\u793A\u662F\u9ED1\u8272",paraId:77,tocIndex:20},{value:"\u8FB9\u6846\u53EF\u4EE5\u6491\u5927\u76D2\u5B50",paraId:77,tocIndex:20},{value:"\u8FB9\u6846\u6E32\u67D3\u539F\u7406\uFF1A\u53EA\u8BBE\u7F6E\u4E00\u6761\u8FB9\u6846\u65F6\uFF0C\u663E\u793A\u4E3A\u77E9\u5F62\uFF0C\u5982\u679C\u8BBE\u7F6E\u76F8\u90BB\u7684\u8FB9\uFF0C\u76F8\u63A5\u90E8\u5206\u662F\u6CBF\u7740\u5BF9\u89D2\u7EBF\u5747\u5206",paraId:77,tocIndex:20},{value:"\u901A\u8FC7\u8FB9\u6846\u53EF\u4EE5\u7ED8\u5236\u4E09\u89D2\u5F62\uFF0C\u8BBE\u7F6E\u4E09\u8FB9\u900F\u660E\uFF0C\u4E00\u8FB9\u4E0D\u900F\u660E",paraId:77,tocIndex:20},{value:"transparent\uFF1A\u8BBE\u7F6E\u900F\u660E\u7684\u989C\u8272",paraId:78,tocIndex:20},{value:"\u6B65\u9AA4\uFF1A",paraId:78,tocIndex:20},{value:"\u8BBE\u7F6E\u4E00\u4E2Awidth\uFF1A0px\u7684\u76D2\u5B50",paraId:79,tocIndex:20},{value:"\u5206\u522B\u8BBE\u7F6E\u4E09\u8FB9\u900F\u660E\uFF0C\u4E00\u8FB9\u4E0D\u900F\u660E",paraId:79,tocIndex:20},{value:"\u8BBE\u7F6E\u76D2\u5B50\u4E2D\u5185\u5BB9\u5230\u8FB9\u6846\u7684\u8DDD\u79BB",paraId:80,tocIndex:21},{value:"\u8BED\u6CD5\uFF1A",paraId:80,tocIndex:21},{value:`\u5206\u522B\u8BBE\u7F6E\u6BCF\u4E2A\u65B9\u5411\u7684\u5185\u8FB9\u8DDD\r
padding-top\uFF1A\u5927\u5C0F\uFF1B\r
padding-left\r
padding-right\r
padding-bottom\r
\r
\u590D\u5408\u5C5E\u6027\r
padding\r
\u8BBE\u7F6E\u4E00\u4E2A\u503C\uFF1A\u4E0A\u4E0B\u5DE6\u53F3\r
\u8BBE\u7F6E\u4E24\u4E2A\u503C\uFF1A\u4E0A\u4E0B   \u5DE6\u53F3\r
\u8BBE\u7F6E\u4E09\u4E2A\u503C\uFF1A\u4E0A   \u5DE6\u53F3   \u4E0B\r
\u8BBE\u7F6E\u56DB\u4E2A\u503C\uFF1A\u4E0A    \u53F3   \u4E0B   \u5DE6
`,paraId:81,tocIndex:21},{value:"\u6CE8\u610F\uFF1Apadding\u4F1A\u6491\u5927\u76D2\u5B50\uFF0C\u80CC\u666F\u989C\u8272\u4F1A\u94FA\u8BBEpadding\u533A\u57DF",paraId:82,tocIndex:21},{value:"\u5E94\u7528\u573A\u666F\uFF1A\u53EF\u4EE5\u4F5C\u4E3A\u5BFC\u822A\u5DE6\u53F3\u95F4\u8DDD",paraId:82,tocIndex:21},{value:"\u76D2\u5B50\u4E0E\u76D2\u5B50\u4E4B\u95F4\u8DDD\u79BB\uFF0C\u5916\u8FB9\u8DDD",paraId:83,tocIndex:22},{value:"\u8BED\u6CD5\uFF1A",paraId:83,tocIndex:22},{value:`\u5206\u522B\u8BBE\u7F6E\u6BCF\u4E2A\u65B9\u5411\u7684\u5185\u8FB9\u8DDD\r
margin-top\uFF1A\u5927\u5C0F\uFF1B\r
margin-left\r
margin-right\r
margin-bottom\r
\r
\u590D\u5408\u5C5E\u6027\r
margin\r
\u8BBE\u7F6E\u4E00\u4E2A\u503C\uFF1A\u4E0A\u4E0B\u5DE6\u53F3\r
\u8BBE\u7F6E\u4E24\u4E2A\u503C\uFF1A\u4E0A\u4E0B   \u5DE6\u53F3\r
\u8BBE\u7F6E\u4E09\u4E2A\u503C\uFF1A\u4E0A   \u5DE6\u53F3   \u4E0B\r
\u8BBE\u7F6E\u56DB\u4E2A\u503C\uFF1A\u4E0A    \u53F3   \u4E0B   \u5DE6
`,paraId:84,tocIndex:22},{value:"\u76D2\u5B50\u548C\u76D2\u5B50\u4E4B\u95F4\u662F\u5144\u5F1F\u5173\u7CFB\uFF0Cmargin\u5728\u5782\u76F4\u65B9\u5411\u4F1A\u53D1\u751F\u91CD\u53E0\uFF0C\u4EE5\u5176\u4E2D\u6700\u5927\u7684\u503C\u4E3A\u51C6",paraId:85,tocIndex:23},{value:"\u6CE8\u610F\uFF1Amargin\u5728\u6C34\u5E73\u65B9\u5411\u662F\u53E0\u52A0\u7684",paraId:85,tocIndex:23},{value:"\u76D2\u5B50\u548C\u76D2\u5B50\u4E4B\u95F4\u662F\u7236\u5B50\u5173\u7CFB\uFF0C\u5B50\u5143\u7D20\u8BBE\u7F6Emargin-top\u4F1A\u4F20\u9012\u7ED9\u7236\u5143\u7D20",paraId:86,tocIndex:24},{value:"\u539F\u56E0\uFF1A\u5B50\u5143\u7D20\u8BBE\u7F6Emargin-top\u540E\u627E\u4E0D\u5230\u7236\u5143\u7D20\u7684\u8FB9\u754C\uFF0C\u5C31\u4F20\u9012\u7ED9\u4E86\u7236\u5143\u7D20",paraId:86,tocIndex:24},{value:"\u89E3\u51B3\u65B9\u6848\uFF1A",paraId:86,tocIndex:24},{value:"\u7ED9\u7236\u5143\u7D20\u8BBE\u7F6Eborder\uFF1A1px solid transparent\uFF1B\u4F1A\u66F4\u6539\u76D2\u5B50\u7684\u5927\u5C0F",paraId:87,tocIndex:24},{value:"\u7ED9\u7236\u5143\u7D20\u8BBE\u7F6Epadding\uFF0C\u4E5F\u4F1A\u6539\u53D8\u76D2\u5B50\u7684\u5927\u5C0F",paraId:87,tocIndex:24},{value:"\u7ED9\u7236\u5143\u7D20\u8BBE\u7F6Eoverflow\uFF1Ahidden\uFF1B\u501F\u52A9BFC\u5BB9\u5668\u7684\u7279\u70B9\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5143\u7D20\u5982\u4F55\u6392\u5217\u4E0D\u4F1A\u5F71\u54CD\u5BB9\u5668\u5916\u9762\u7684\u5143\u7D20\u3002",paraId:87,tocIndex:24},{value:"css\u4E2D\u8BBE\u7F6E\u7684width\u548Cheight\u5206\u522B\u4EE3\u8868\u5185\u5BB9\u533A\u57DF\uFF08content\uFF09\u7684\u5927\u5C0F",paraId:88,tocIndex:25},{value:"\u6807\u51C6\u76D2\u5B50\u771F\u6B63\u7684\u5927\u5C0F\u7684\u8BA1\u7B97\uFF1A",paraId:89,tocIndex:25},{value:"\u5BBD\u5EA6= content(width)+ padding  ",paraId:90,tocIndex:25},{value:"2\uFF08\u5DE6\u53F3\uFF09+ border",paraId:90,tocIndex:25},{value:"  2(\u5DE6\u53F3)",paraId:90,tocIndex:25},{value:"\u9AD8\u5EA6=content\uFF08height\uFF09+ padding  ",paraId:90,tocIndex:25},{value:"2(\u4E0A\u4E0B) + border",paraId:90,tocIndex:25},{value:"  2\uFF08\u4E0A\u4E0B\uFF09",paraId:90,tocIndex:25},{value:"\u6807\u51C6\u76D2\u5B50\u6240\u5360\u7A7A\u95F4\u7684\u5927\u5C0F\u8BA1\u7B97\uFF1A",paraId:91,tocIndex:25},{value:"\u5BBD\u5EA6= content(width)+ padding  ",paraId:92,tocIndex:25},{value:"2\uFF08\u5DE6\u53F3\uFF09+ border",paraId:92,tocIndex:25},{value:"  2(\u5DE6\u53F3) + margin * 2\uFF08\u5DE6\u53F3\uFF09",paraId:92,tocIndex:25},{value:"\u9AD8\u5EA6=content\uFF08height\uFF09+ padding  ",paraId:92,tocIndex:25},{value:"2(\u4E0A\u4E0B) + border",paraId:92,tocIndex:25},{value:"  2\uFF08\u4E0A\u4E0B\uFF09+ margin * 2\uFF08\u4E0A\u4E0B\uFF09",paraId:92,tocIndex:25},{value:"\u4F7F\u7528 box-sizing:border-box;\u6765\u8F6C\u5316",paraId:93,tocIndex:26},{value:"width\u548Cheight\u5C5E\u6027\u5305\u542B content\u3001padding\u3001border",paraId:93,tocIndex:26},{value:"\u4E00\u822C\u7528\u4E8E\u89E3\u51B3\u56FA\u5B9A\u5E03\u5C40\u4E4B\u540E\u8C03\u6574padding\u3001border\u540E\u7684\u754C\u9762\u53D8\u5F62",paraId:93,tocIndex:26},{value:"\u5C06\u76D2\u5B50\u5BBD\u9AD8\u8BBE\u7F6E\u6210\u8981\u663E\u793A\u7684\u56FE\u7247\u7684\u5927\u5C0F",paraId:94,tocIndex:28},{value:"\u4F7F\u7528background-image\u5C06\u96EA\u78A7\u56FE\u4F5C\u4E3A\u80CC\u666F\u56FE\u7247\u5F15\u5165\u76D2\u5B50",paraId:94,tocIndex:28},{value:"\u4F7F\u7528background-position\u8C03\u6574\u80CC\u666F\u56FE\u7247\u663E\u793A\u4F4D\u7F6E",paraId:94,tocIndex:28},{value:"\u6C34\u5E73\u65B9\u5411\u5411\u53F3\u662Fx\u8F74\u6B63\u8F74,\u5782\u76F4\u5411\u4E0B\u662Fy\u8F74\u6B63\u8F74",paraId:95,tocIndex:28},{value:`.sprite-icons\r
{ display: inline-block; background: url('png.png') no-repeat; overflow: hidden; text-indent: -9999px; text-align: left; }\r
 \r
.sprite-logo { background-position: -5px -0px; width: 265px; height: 65px; }\r
.sprite-test { background-position: -5px -70px; width: 30px; height: 30px; }
`,paraId:96,tocIndex:28},{value:"\u6982\u5FF5\uFF1A\u5F53\u9875\u9762\u9700\u8981\u9002\u5E94\u4E0D\u540C\u5C4F\u5E55\u5C3A\u5BF8\u7684\u8BBE\u5907\u65F6\uFF0C\u4EA6\u5C55\u73B0\u6070\u5F53\u7684\u884C\u4E3A\u6765\u9002\u5E94\u5C4F\u5E55\u7684\u5E03\u5C40\u6A21\u5F0F",paraId:97,tocIndex:30},{value:"\u76EE\u7684\uFF1A\u66F4\u52A0\u6709\u6548\u7684\u5BF9\u5BB9\u5668\u4E2D\u7684\u5B50\u5143\u7D20\u8FDB\u884C\u6392\u5217\u3001\u5BF9\u9F50\u548C\u5206\u914D\u7A7A\u767D\u7A7A\u95F4",paraId:98,tocIndex:30},{value:"\u7279\u70B9",paraId:99,tocIndex:30},{value:"\u5F39\u6027\u76D2\u5B50\u5F71\u54CD\u7684\u662F\u5B50\u5143\u7D20\uFF0C\u5B59\u5B50\u8F88\u53CA\u5176\u4E4B\u540E\u7684\u4E0D\u4F1A\u53D7\u5F71\u54CD\u3002",paraId:100,tocIndex:30},{value:"\u5F39\u6027\u5BB9\u5668\uFF1A\u5F39\u6027\u5E03\u5C40\u7684\u6574\u4F53\u5E03\u5C40\uFF0C\u4EFB\u4F55\u5143\u7D20\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u5C5E\u6027\u6210\u4E3A\u5F39\u6027\u5E03\u5C40\u3002",paraId:101,tocIndex:31},{value:"\u5F39\u6027\u9879\u76EE\uFF1A\u5F39\u6027\u5BB9\u5668\u91CC\u7684\u5E03\u5C40\u6A21\u5757\uFF0C\u4E3B\u8981\u9488\u5BF9\u5757\u7EA7\u5143\u7D20\u8FDB\u884C\u5E03\u5C40\u3002",paraId:101,tocIndex:31},{value:"\u4E3B\u8F74\uFF1A\u5F39\u6027\u9879\u76EE\u6392\u7248\u7684\u65B9\u5411\uFF0C\u9ED8\u8BA4\u4E3A\u6C34\u5E73\u8F74\uFF0C\u53EF\u66F4\u6539\u3002",paraId:101,tocIndex:31},{value:"\u4FA7\u8F74\uFF1A\u4E0E\u4E3B\u8F74\u5411\u5782\u76F4\u76F8\u5BF9\u7684\u65B9\u5411\uFF0C\u9ED8\u8BA4\u4E3A\u7AD6\u5411\uFF0C\u4E3B\u4FA7\u8F74\u7C7B\u4F3C\u4E0Exy\u5782\u76F4\u5750\u6807\u8F74\u3002",paraId:101,tocIndex:31},{value:"\u5BCC\u88D5\u7A7A\u95F4\uFF1A\u5E03\u5C40\u5B8C\u5269\u4F59\u7684\u7A7A\u767D\u7A7A\u95F4\uFF0C\u6A21\u5757\u53EF\u8FDB\u884C\u6392\u7248\u7684\u7A7A\u95F4\u3002",paraId:101,tocIndex:31},{value:"\u5F39\u6027\u7A7A\u95F4\uFF1A\u4E0D\u5C5E\u4E8E\u81EA\u8EAB\uFF0C\u653E\u5927\u6216\u7F29\u5C0F\u7684\u7A7A\u95F4",paraId:101,tocIndex:31},{value:"\u5F39\u6027\u5BB9\u5668\u7684\u5B9E\u73B0",paraId:102,tocIndex:32},{value:`display:flex ; //\u5757\u7EA7\r
display:inline-flex ;  //\u884C\u7EA7
`,paraId:103,tocIndex:32},{value:"\u4E0E\u6D6E\u52A8\u7684\u533A\u522B\uFF0C\u6D6E\u52A8\u5143\u7D20\u4E00\u884C\u6392\u4E0D\u4E0B\u9ED8\u8BA4\u6362\u884C\uFF0C\u5F39\u6027\u5BB9\u5668\u4E00\u884C\u6392\u4E0D\u4E0B\u9ED8\u8BA4\u538B\u7F29\u5927\u5C0F\u3002",paraId:104,tocIndex:32},{value:"\u5F39\u6027\u76D2\u5B50\u6A21\u5F0F\u7684\u7236\u76D2\u5B50\u81EA\u9002\u5E94\uFF0C\u6CA1\u6709\u9AD8\u5EA6\u584C\u9677\u7684\u73B0\u8C61\u3002",paraId:104,tocIndex:32},{value:"\u5F39\u6027\u5BB9\u5668\u5E38\u7528\u6837\u5F0F",paraId:105,tocIndex:32},{value:"\u5F39\u6027\u5BB9\u5668\u5C5E\u6027",paraId:106,tocIndex:32},{value:"\u5C5E\u6027",paraId:107,tocIndex:32},{value:"\u63CF\u8FF0",paraId:107,tocIndex:32},{value:"flex-warp",paraId:107,tocIndex:32},{value:"\u5F39\u6027\u9879\u76EE\u662F\u5426\u6362\u884C\u3002nowrap\\wrap",paraId:107,tocIndex:32},{value:"flex-direction",paraId:107,tocIndex:32},{value:"\u5F39\u6027\u9879\u76EE\u663E\u793A\u7684\u65B9\u5411\uFF0C\u4E3B\u8F74\u65B9\u5411\u3002row\\column\\row-reverse\\column-reverse",paraId:107,tocIndex:32},{value:"justify-content",paraId:107,tocIndex:32},{value:"\u8BBE\u7F6E\u5F39\u6027\u76D2\u5B50\u5143\u7D20\u5728\u4E3B\u8F74\u65B9\u5411\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002flex-start\\slex-end\\center\\space-between\\space-around\\space-evenly",paraId:107,tocIndex:32},{value:"align-content",paraId:107,tocIndex:32},{value:"\u4FEE\u6539flex-warp\u7684\u884C\u4E3A\uFF0C\u8BBE\u7F6E\u6A21\u5757\u5728\u4FA7\u8F74\u65B9\u5411\u4E0A\u7684\u884C\u5BF9\u9F50\u65B9\u5F0F\u3002",paraId:107,tocIndex:32},{value:"align-items",paraId:107,tocIndex:32},{value:"\u8BBE\u7F6E\u5F39\u6027\u76D2\u5B50\u5143\u7D20\u5728\u4FA7\u8F74\u65B9\u5411\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F\u3002\u9ED8\u8BA4\u503C stretch",paraId:107,tocIndex:32},{value:"align-items \u4E0Ealign-content\u7684\u533A\u522B",paraId:108,tocIndex:32},{value:"\u53EA\u6709\u5728\u5BB9\u5668\u8BBE\u7F6E\u9AD8\u5EA6\u7684\u65F6\u5019align-content\u624D\u6709\u6548\uFF0C\u7C7B\u4F3Cjustify-content\uFF0C\u4E00\u822C\u5F88\u5C11\u56FA\u5B9A\u5BB9\u5668\u9AD8\u5EA6\uFF0C\u6240\u4EE5\u4F7F\u7528\u8F83\u5C11\u3002",paraId:109,tocIndex:32},{value:"\u5F39\u6027\u9879\u76EE\u5C5E\u6027",paraId:110,tocIndex:32},{value:"algin-self",paraId:111,tocIndex:32},{value:"\u4E0Ealign-items\u7C7B\u4F3C\uFF0C\u4F46\u662F\u4F5C\u7528\u5728\u4E00\u4E2A\u6A21\u5757\u4E0A",paraId:111,tocIndex:32},{value:"flex-grow",paraId:111,tocIndex:32},{value:"\u4F38\u5F20\u7A7A\u95F4\uFF0C\u53C2\u6570\u4E3A\u6570\u5B57 1,3",paraId:111,tocIndex:32},{value:"flex-shrink",paraId:111,tocIndex:32},{value:"\u538B\u7F29\u7A7A\u95F4\uFF0C \u8F93\u5165\u538B\u7F29\u56E0\u5B50",paraId:111,tocIndex:32},{value:"order",paraId:111,tocIndex:32},{value:"\u8BBE\u7F6E\u5F39\u6027\u76D2\u5BF9\u8C61\u5143\u7D20\u7684\u987A\u5E8F\uFF0C\u6570\u503C\u8D8A\u5927\u663E\u793A\u8D8A\u9760\u540E",paraId:111,tocIndex:32},{value:"flex-basis",paraId:111,tocIndex:32},{value:"\u8BBE\u7F6E\u5F39\u6027\u9879\u76EE\u7684\u5BBD\u5EA6",paraId:111,tocIndex:32},{value:"flex",paraId:111,tocIndex:32},{value:"flex \u5C5E\u6027\u662F flex-grow\u3001flex-shrink \u548C flex-basis \u5C5E\u6027\u7684\u7B80\u5199\u5C5E\u6027flex: 0 1 200px;",paraId:111,tocIndex:32},{value:"\u5B57\u4F53\u6837\u5F0F\u3001\u6587\u672C\u6837\u5F0F\u3001\u5217\u8868\u6837\u5F0F\u3001\u9F20\u6807\u6837\u5F0F(cursor)\uFF0C\u7B49\u663E\u793A\u6837\u5F0F",paraId:112,tocIndex:34},{value:"\u9AD8\u5EA6\u3001\u5BBD\u5EA6\uFF0C\u8FB9\u6846\u3001margin\u3001padding\uFF0C\u7B49\u5E03\u5C40\u6837\u5F0F",paraId:113,tocIndex:35},{value:"\u6837\u5F0F: inherit",paraId:114,tocIndex:36},{value:`\u590D\u5408\u5C5E\u6027\uFF1A\r
border-radius:20px 20px 20px 20px/ 20px 20px 20px 20px;\r
\r
\u5E26\u65B9\u4F4D\u4E3A\u5177\u4F53\u6307\u5B9A\u7684\u89D2\r

`,paraId:115,tocIndex:37},{value:"\u6CE8\u610F\uFF1A",paraId:116,tocIndex:37},{value:"\u6B64\u5C5E\u6027\u8BBE\u7F6E\u7684\u662F\u8FB9\u6846\u5706\u89D2\uFF0C\u5F53\u534A\u5F84\u4E0D\u5927\u4E8E\u8FB9\u6846\u5BBD\u5EA6\u7684\u65F6\u5019\u4E0D\u4F1A\u5F71\u54CD\u5230\u5185\u5BB9\u533A\u57DF",paraId:117,tocIndex:37},{value:`/* \u76D2\u5B50\u9634\u5F71\u6548\u679C */\r
box-shadow: 10px 10px 10px 10px rgb(255,25,255);\r
/*inset\uFF1A\u8868\u793A\u9634\u5F71\u663E\u793A\u5728\u76D2\u5B50\u5185\u5BB9*/\r
box-shadow: 0 0 0 0 red inset;\r
/* x\u8F74\u504F\u79FB\u91CF y\u8F74\u504F\u79FB\u91CF \u6A21\u7CCA\u7A0B\u5EA6 \u989C\u8272 */\r
text-shadow: 5px 5px 3px red;\r
/* \u591A\u4E2A\u9634\u5F71\u7528\u9017\u53F7\u5206\u5F00 */\r
box-shadow: 10px 10px 10px 10px rgb(255,25,255),10px 10px 10px 10px rgb(255,25,255);\r

`,paraId:118,tocIndex:38},{value:"\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1Ax\u8F74\u7684\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA40px\u6B63\u597D\u5728\u76D2\u5B50\u4E0B\u9762",paraId:119,tocIndex:38},{value:"\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1Ay\u8F74\u7684\u504F\u79FB\u91CF\uFF0C\u9ED8\u8BA40px\u6B63\u597D\u5728\u76D2\u5B50\u4E0B\u9762",paraId:120,tocIndex:38},{value:"\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF1A\u865A\u5316\u6548\u679C\uFF0C\u503C\u8D8A\u5927\uFF0C\u9634\u5F71\u865A\u5316\u6548\u679C\u8D8A\u597D",paraId:121,tocIndex:38},{value:"\u7B2C\u56DB\u4E2A\u53C2\u6570\uFF1A\u9634\u5F71\u7684\u5927\u5C0F\uFF0C\u503C\u8D8A\u5927\uFF0C\u9634\u5F71\u8D8A\u5927",paraId:122,tocIndex:38},{value:"\u7B2C\u4E94\u4E2A\u53C2\u6570\uFF1A\u989C\u8272 \u8FD9\u4E2A\u989C\u8272\u53EF\u4EE5\u7528\u5404\u79CD\u5199\u6CD5",paraId:123,tocIndex:38},{value:"\u56DB\u4E2A\u53C2\u6570\u4E5F\u53EF\u4EE5\uFF0C\u4EE3\u8868\u9634\u5F71\u5927\u5C0F\u4E0D\u7528\u8BBE\u7F6E",paraId:124,tocIndex:38},{value:`background-image: linear-gradient(pink,green,tomato);\r
background-image: repeating-linear-gradient();\r

`,paraId:125,tocIndex:40},{value:"\u989C\u8272\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A\uFF0C\u4F46\u662F\u81F3\u5C11\u8981\u4E24\u4E2A\u3002",paraId:126,tocIndex:40},{value:"\u8272\u6807\u53EA\u8981\u5305\u542B\u4E86\u989C\u8272\u548C\u4F4D\u7F6E\u3002",paraId:127,tocIndex:41},{value:"\u53EF\u4EE5\u63A7\u5236\u6BCF\u4E00\u4E2A\u989C\u8272\u5230\u5E95\u5360\u591A\u5C11\u4F4D\u7F6E\u3002\u52A8\u6001\u63A7\u5236\u989C\u8272\u6E10\u53D8\u6548\u679C",paraId:128,tocIndex:41},{value:`background-image: linear-gradient(pink 0%,tomato 100%);\r

`,paraId:129,tocIndex:41},{value:"\u5982\u679C\u4E24\u4E2A\u8272\u6807\u4E2D\u95F4\u6CA1\u6709\u8FC7\u6E21\u533A\u95F4\uFF0C\u989C\u8272\u9ED8\u8BA4\u6CA1\u6709\u8FC7\u6E21\u6548\u679C",paraId:130,tocIndex:41},{value:` background-image: linear-gradient(pink 30%,tomato 30%);\r

`,paraId:131,tocIndex:41},{value:"\u9ED8\u8BA4\u7684\u989C\u8272\u5728\u9875\u9762\u4E0A\u6E32\u67D3\u51FA\u6765\uFF0C\u4ECE\u4E0A\u5230\u4E0B\u7684\u65B9\u5F0F\u6765\u6E32\u67D3",paraId:132,tocIndex:42},{value:`background-image: linear-gradient(45deg,pink 0%,tomato 100%);\r
background: linear-gradient(to top right,pink 10%,yellow 60%,blue )\r

`,paraId:133,tocIndex:42},{value:"\u53EF\u4EE5\u8BBE\u7F6E\u89D2\u5EA6\uFF0C\u5355\u4F4D\u4E3Adeg\uFF0C\u4E5F\u53EF\u4EE5\u662F\u8BBE\u7F6E\u5B98\u65B9\u4E00\u4E9B\u7EC4\u5408\uFF08to left top\uFF0Cto right bottom\uFF09",paraId:134,tocIndex:42},{value:"\u5982\u679C\u4F60\u7528\u7684deg\u89D2\u5EA6\uFF0C\u9ED8\u8BA4\u4E0D\u8981\u589E\u52A0to",paraId:135,tocIndex:42},{value:"\u9875\u9762\u4E0A\u6CA1\u6709\u5199\u4EFB\u4F55\u89D2\u5EA6\u9ED8\u8BA4\u662F180deg",paraId:136,tocIndex:42},{value:"\u6309\u7167\u4ECE\u6307\u5B9A\u7684\u5706\u5FC3\u5F00\u59CB\uFF0C\u5F80\u5916\u4F7F\u7528\u5706\u6216\u692D\u5706\u7684\u65B9\u5F0F\u6E10\u53D8",paraId:137,tocIndex:43},{value:`background-image: radial-gradient(circle at center center,red,yellow,green);\r
\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\u534A\u5F84\r
20px 30px \u6216\u8005 20% 30% \u90FD\u884C \u4EE5\u53CA\u56DB\u4E2A\u5927\u5C0F\u58F0\u660E\r
closest-side \uFF08\u6307\u5B9A\u5F84\u5411\u6E10\u53D8\u7684\u534A\u5F84\u957F\u5EA6\u4E3A\u4ECE\u5706\u5FC3\u5230\u79BB\u5706\u5FC3\u6700\u8FD1\u7684\u8FB9\uFF09\r
closest-corner \uFF08\u6307\u5B9A\u5F84\u5411\u6E10\u53D8\u7684\u534A\u5F84\u957F\u5EA6\u4E3A\u4ECE\u5706\u5FC3\u5230\u79BB\u5706\u5FC3\u6700\u8FD1\u7684\u89D2\uFF09\r
farthest-side \uFF08\u6307\u5B9A\u5F84\u5411\u6E10\u53D8\u7684\u534A\u5F84\u957F\u5EA6\u4E3A\u4ECE\u5706\u5FC3\u5230\u79BB\u5706\u5FC3\u6700\u8FDC\u7684\u8FB9\uFF09\r
farthest-corner \uFF08\u6307\u5B9A\u5F84\u5411\u6E10\u53D8\u7684\u534A\u5F84\u957F\u5EA6\u4E3A\u4ECE\u5706\u5FC3\u5230\u79BB\u5706\u5FC3\u6700\u8FDC\u7684\u89D2\uFF09\r

`,paraId:138,tocIndex:43},{value:"\u7B2C\u4E00\u4E2A\u503C\uFF1Acircle\uFF08\u5706\uFF09\u3001ellipse(\u692D\u5706)",paraId:139,tocIndex:43},{value:"\u7B2C\u4E8C\u4E2A\u503C\uFF1A\u5706\u5FC3\u4F4D\u7F6E\uFF0Cat\u5FC5\u987B\u52A0\u4E0A \uFF08center left right bottom top\uFF09\u3002\u81EA\u5DF1\u5B9A\u4E49px\u50CF\u7D20",paraId:140,tocIndex:43},{value:"\u7B2C\u4E09\u4E2A\u503C\uFF1A\u989C\u8272\uFF0C\u989C\u8272\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5927\u5C0F\u3002",paraId:141,tocIndex:43},{value:"\u6709\u65F6\u5019\u9700\u8981\u6D4F\u89C8\u5668\u89E3\u6790\u53D8\u5316\u6548\u679C\u6162\u4E00\u70B9\uFF0C\u6307\u5B9A\u4E00\u4E2A\u65F6\u95F4\u8BA9\u6D4F\u89C8\u5668\u6162\u6162\u6765\u6267\u884C\uFF0C\u5C06\u8FD9\u4E2A\u8FC7\u7A0B\u79F0\u4E3A\u8FC7\u6E21\u3002",paraId:142,tocIndex:45},{value:"transition\u63D0\u4F9B\u4E86\u4E00\u79CD\u5728\u66F4\u6539css\u5C5E\u6027\u65F6\u63A7\u5236\u52A8\u753B\u901F\u5EA6\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u8FD9\u4E2A\u5C5E\u6027\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u5B8C\u6210\u6548\u679C\u3002",paraId:142,tocIndex:45},{value:"transition-property \uFF1A\u9700\u8981\u8FC7\u6E21\u7684\u5C5E\u6027",paraId:143,tocIndex:46},{value:"transition-duration \uFF1A\u8FC7\u6E21\u65F6\u95F4",paraId:143,tocIndex:46},{value:`transition-property:CSS\u5C5E\u6027\u540D,css\u5C5E\u6027\u540D2,css\u5C5E\u6027\u540D3\uFF1B  \r
transition-duration\uFF1A2s\uFF0C1s;\r

`,paraId:144,tocIndex:46},{value:"transition-timing-function:\u8BBE\u7F6E\u8FD0\u52A8\u901F\u7387",paraId:145,tocIndex:46},{value:`\u9ED8\u8BA4\u503C\u4E3Aease\uFF1A\u4EE3\u8868\u52A0\u901F\u8FD0\u52A8 \uFF1Blinear:\u5300\u901F\u8FD0\u52A8\r
\r
 transition-timing-function:linear;\r
\r
 \u8D1D\u585E\u5C14\u66F2\u7EBF\uFF1A\u81EA\u5B9A\u4E49\r
https://cubic-bezier.com/\r
cubic-bezier(.28,1.66,.95,-0.36)\r

`,paraId:146,tocIndex:46},{value:"transition-delay \uFF1A\u8BBE\u7F6E\u52A8\u753B\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u8FC7\u4E86\u5EF6\u8FDF\u65F6\u95F4\u6574\u4E2A\u8FC7\u6E21\u624D\u4F1A\u5F00\u59CB",paraId:147,tocIndex:46},{value:`transition-delay: 2s;\r

`,paraId:148,tocIndex:46},{value:"transition \u590D\u5408\u5C5E\u6027",paraId:149,tocIndex:46},{value:`transition: property duration linear\r

`,paraId:150,tocIndex:46},{value:"CSS2D\u52A8\u753B\u4E5F\u662F\u5E73\u9762\u52A8\u753B\uFF0C\u4E3B\u8981\u7684\u52A8\u753B\u63A7\u5236\u5728x\u8F74\u548Cy\u8F74\u3002",paraId:151,tocIndex:48},{value:"\u4E3B\u8981\u52A8\u753B\u5305\u542B",paraId:152,tocIndex:48},{value:"\u5E73\u79FB\uFF08\u4F4D\u79FB\uFF09\uFF1A\u63D0\u4F9B\u5E73\u79FB\u52A8\u753B\uFF0C\u6309\u7167\u4F60\u6307\u5B9A\u7684\u65B9\u5411\u8FDB\u884C\u79FB\u52A8\uFF0C\u914D\u5408\u8FC7\u6E21\u6548\u679C",paraId:153,tocIndex:48},{value:"\u65CB\u8F6C\uFF1A\u6307\u5B9A\u9875\u9762\u4E0A\u5143\u7D20\uFF0C\u6309\u7167x\u8F74\u6216\u8005y\u8F74\u8FDB\u884C\u65CB\u8F6C\uFF0C\u751A\u81F3z\u8F74\u6E32\u67D3",paraId:153,tocIndex:48},{value:"\u7F29\u653E\uFF1A\u6307\u5B9A\u76D2\u5B50\u5728\u6807\u51C6\u5927\u5C0F\u57FA\u7840\u4E0A\uFF0C\u653E\u5927\u548C\u7F29\u5C0F\u7684\u529F\u80FD\u3002\u6309\u7167\u6BD4\u4F8B\u6765\u7F29\u653E",paraId:153,tocIndex:48},{value:"\u659C\u5207\uFF1A\u4E00\u4E2A\u76D2\u5B50\u6CBF\u7740x\u8F74\u6216\u8005y\u8F74\u8FDB\u884C\u62C9\u4F38\u53D8\u5316\uFF0C\uFF08\u6B63\u5E38\u76D2\u5B50\u53D8\u6210\u5E73\u884C\u56DB\u8FB9\u5F62\uFF09",paraId:153,tocIndex:48},{value:"\u52A8\u753B\u57FA\u70B9\uFF1A\u52A8\u753B\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53C2\u8003\u4E2D\u7EBF\u70B9\u3002",paraId:153,tocIndex:48},{value:"\u77E9\u9635\uFF1A\u4E86\u89E3",paraId:153,tocIndex:48},{value:"2D\u52A8\u753B\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u5143\u7D20\u7684\u5E03\u5C40\uFF0C\u6539\u53D8margin\u6765\u5B9E\u73B0\u79FB\u52A8\u4F1A\u5F71\u54CD",paraId:154,tocIndex:49},{value:"\u6240\u6709\u76842D\u52A8\u753B\u90FD\u8981\u7528\u5230\u4E00\u4E2A\u5171css\u4EE3\u7801",paraId:155,tocIndex:49},{value:`transform:\u52A8\u753B\u7C7B\u578B\r

`,paraId:156,tocIndex:49},{value:"2D\u8F6C\u6362\u4E00\u822C\u8981\u914D\u5408transition\u8FC7\u6E21\u4E00\u8D77\u4F7F\u7528\u3002",paraId:157,tocIndex:49},{value:`transition\uFF1Atransform\r

`,paraId:158,tocIndex:49},{value:"\u53EF\u4EE5\u8BA9\u76D2\u5B50\u6CBF\u7740x\u8F74\u6216y\u8F74\u8FDB\u884C\u79FB\u52A8\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u76D2\u5B50",paraId:159,tocIndex:50},{value:`\u6CBF\u7740x\u8F74\u548Cy\u8F74\u8FDB\u884C\u79FB\u52A8\r
transform:translate( x\u8F74\u79FB\u52A8\u91CF\uFF0Cy\u8F74\u79FB\u52A8\u91CF );\r
\u6CBF\u7740x\u8F74\u8FDB\u884C\u4F4D\u79FB\r
transform:translate(x\u8F74\u79FB\u52A8\u91CF);\r
transform:translateX(x\u8F74\u79FB\u52A8\u91CF)\uFF1B\r
\u6CBF\u7740y\u8F74\u8FDB\u884C\u4F4D\u79FB\r
transform:translateY(y\u8F74\u79FB\u52A8\u91CF)\uFF1B\r

`,paraId:160,tocIndex:50},{value:"\u6CE8\u610F\uFF1A",paraId:161,tocIndex:50},{value:"\u76D2\u5B50\u662F\u4EE5\u539F\u6765\u7684\u4F4D\u7F6E\u4E3A\u8D77\u70B9\uFF0C\u8FDB\u884C\u79FB\u52A8",paraId:162,tocIndex:50},{value:"\u53EF\u4EE5\u8BA9\u76D2\u5B50\u8FDB\u884C\u65CB\u8F6C",paraId:163,tocIndex:51},{value:`\u56F4\u7ED5\u7740\u76D2\u5B50\u7684\u4E2D\u5FC3\u70B9\u8FDB\u884C\u65CB\u8F6C\uFF0C\u6B63\u503C\u662F\u987A\u65F6\u9488\u65B9\u5411\uFF0C\u8D1F\u503C\u9006\u65F6\u9488\u65B9\u5411\u65CB\u8F6C\r
transform:rotate(\u89D2\u5EA6)\uFF1B\r
\u56F4\u7ED5\u7740x\u8F74\u8FDB\u884C\u65CB\u8F6C\r
transform:rotateX(\u89D2\u5EA6);\r
\u56F4\u7ED5\u7740y\u8F74\u8FDB\u884C\u65CB\u8F6C\r
transform:rotateY(\u89D2\u5EA6)\uFF1B\r

`,paraId:164,tocIndex:51},{value:"\u6CE8\u610F\uFF1A\u76D2\u5B50\u6CA1\u6709\u539A\u5EA6\uFF0C\u5982\u4F55\u56F4\u7ED5x\u8F74\u6216\u8005y\u8F74\u65CB\u8F6C90deg\uFF0C\u76D2\u5B50\u4E0E\u89C6\u7EBF\u5E73\u884C\uFF0C\u770B\u4E0D\u89C1\u76D2\u5B50\uFF0C\u4ECE\u9875\u9762\u4E2D\u6D88\u5931",paraId:165,tocIndex:51},{value:"\u53EF\u4EE5\u8BA9\u76D2\u5B50\u8FDB\u884C\u653E\u5927\u548C\u7F29\u5C0F",paraId:166,tocIndex:52},{value:`\u540C\u65F6\u63A7\u5236\u76D2\u5B50\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u8FDB\u884C\u7F29\u653E\r
transform:scale(\u5BBD\u5EA6\u7684\u500D\u6570\uFF0C\u9AD8\u5EA6\u7684\u500D\u6570);\r
\u5C06\u76D2\u5B50\u7B49\u6BD4\u4F8B\u7F29\u653E\r
transform:scale(\u500D\u6570);\r

`,paraId:167,tocIndex:52},{value:"\u6CE8\u610F\uFF1A",paraId:168,tocIndex:52},{value:"\u500D\u6570\u4E3A0\uFF0C\u76D2\u5B50\u6D88\u5931",paraId:169,tocIndex:52},{value:"\u500D\u6570\u4E3A1\uFF0C\u53C2\u8003\u76D2\u5B50\u539F\u6765\u7684\u5927\u5C0F",paraId:169,tocIndex:52},{value:"\u500D\u6570\u4E3A0~1\uFF0C\u76D2\u5B50\u7F29\u5C0F",paraId:169,tocIndex:52},{value:"\u500D\u6570\u5927\u4E8E1\uFF0C\u76D2\u5B50\u653E\u5927",paraId:169,tocIndex:52},{value:"\u76D2\u5B50\u7F29\u5C0F\u548C\u653E\u5927\u90FD\u662F\u53C2\u8003\u76D2\u5B50\u7684\u4E2D\u5FC3\u70B9\u8FDB\u884C\u7F29\u653E",paraId:169,tocIndex:52},{value:"\u53EF\u4EE5\u8BA9\u76D2\u5B50\u6CBF\u7740x\u8F74\u6216y\u8F74\u8FDB\u884C\u503E\u659C\u8F6C\u6362",paraId:170,tocIndex:53},{value:`\u6CBF\u7740x\u8F74\u8FDB\u884C\u503E\u659C\r
transform:skew(\u89D2\u5EA6);\r
transform:skewX(\u89D2\u5EA6);\r
\u6CBF\u7740y\u8F74\u8FDB\u884C\u503E\u659C\r
transform:skewY(\u89D2\u5EA6);\r

`,paraId:171,tocIndex:53},{value:"skewX\uFF1A\u6CBF\u7740x\u8F74\u503E\u659C\uFF0C\u89D2\u5EA6\u8D8A\u5927\uFF0C\u8D8A\u63A5\u8FD1x\u8F74\uFF0C\u5F53\u89D2\u5EA6\u4E3A90deg\u65F6\uFF0C\u4F1A\u548Cx\u8F74\u5E73\u884C\uFF0C\u6D88\u5931\u4E0D\u89C1",paraId:172,tocIndex:53},{value:"skewX\uFF1A\u6CBF\u7740y\u8F74\u503E\u659C\uFF0C\u89D2\u5EA6\u8D8A\u5927\uFF0C\u8D8A\u63A5\u8FD1y\u8F74\uFF0C\u5F53\u89D2\u5EA6\u4E3A90deg\u65F6\uFF0C\u4F1A\u548Cy\u8F74\u5E73\u884C\uFF0C\u6D88\u5931\u4E0D\u89C1",paraId:172,tocIndex:53},{value:"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u8FD0\u884C\u57FA\u70B9\u90FD\u5728\u76D2\u5B50\u6B63\u4E2D\u95F4\uFF0C",paraId:173,tocIndex:54},{value:`transform-origin: 0px 0px;  \u5DE6\u4E0A\u89D2\r
transform-origin: left top\r
transform-origin: left\r
transform-origin: 5% 5%\r

`,paraId:174,tocIndex:54},{value:`transform:rotate(180deg) translateX(100px);\r

`,paraId:175,tocIndex:55},{value:"\u7F16\u5199JavaScript\u811A\u672C\u5B8C\u6210\u81EA\u52A8\u64AD\u653E\u7684\u52A8\u753B",paraId:176,tocIndex:57},{value:"\u53EF\u4EE5\u4F7F\u7528flash\u8BA1\u7B97\u5B8C\u6210\u52A8\u753B\u8BBE\u8BA1",paraId:176,tocIndex:57},{value:"\u53EF\u4EE5\u4F7F\u7528\u67D0\u4E9B\u52A8\u753B\u6807\u7B7E\uFF0C\u6BD4\u5982marquee",paraId:176,tocIndex:57},{value:"h5\u63D0\u4F9B\u4E86canvas\u6280\u672F\uFF08\u7ED8\u56FE\u6280\u672F\uFF09\uFF0C\u6765\u5B8C\u6210\u52A8\u753B\u7684\u8BBE\u8BA1",paraId:176,tocIndex:57},{value:"CSS3\u63D0\u4F9B\u4E86\u4E00\u79CDanimation\u52A8\u753B\u53EF\u4EE5\u5B8C\u6210\u81EA\u52A8\u64AD\u653E\u6301\u7EED\u64AD\u653E\u7684\u52A8\u753B",paraId:176,tocIndex:57},{value:"\u52A8\u753B\uFF1A\u5FEB\u901F\u5207\u6362\u8FDE\u7EED\u7684\u56FE\u7247\u800C\u8FBE\u5230\u7684\u6D41\u7545\u7684\u753B\u9762\u6548\u679C\u3002",paraId:177,tocIndex:58},{value:"\u5E27\u6570\uFF1A\u4E00\u79D2\u949F\u5207\u6362\u56FE\u7247\u7684\u6570\u636E\uFF0C\u6570\u91CF\u8D8A\u591A\uFF0C\u753B\u9762\u8D8A\u6D41\u7545\u300260hz\uFF08\u6BCF\u79D2\u949F\u5207\u636260\u5F20\u56FE\u7247\uFF09",paraId:177,tocIndex:58},{value:"\u5173\u952E\u5E27\uFF1A\u6BCF\u4E00\u9875\u7684\u5173\u952E\u7684\u753B\u9762",paraId:177,tocIndex:58},{value:"\u6982\u5FF5\uFF1A\u6307\u76D2\u5B50\u72B6\u6001\u8981\u53D1\u751F\u6539\u53D8\u7684\u5E27\uFF0C\u5C31\u662F\u8BBE\u7F6E\u9700\u8981\u64AD\u653E\u7684\u52A8\u753B\u7684\u6B65\u9AA4\u3002\u4E00\u4E2A\u5B8C\u6574\u7684\u52A8\u753B\u4F1A\u88AB\u62C6\u5206\u4E3A\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u5C31\u662F\u4E00\u4E2A\u5173\u952E\u5E27\u3002",paraId:178,tocIndex:59},{value:"\u4F8B\u5B50\uFF1A\u76D2\u5B50\u5411\u53F3\u79FB\u52A8500px \u67092\u4E2A\u5173\u952E\u5E27 \u5F00\u59CB\u72B6\u6001\u548C\u7ED3\u675F\u72B6\u6001",paraId:178,tocIndex:59},{value:"\u4F8B\u5B50\uFF1A\u76D2\u5B50\u53D8\u5706\u540E\u5411\u53F3\u79FB\u52A8500px \u67093\u4E2A\u5173\u952E\u5E27 \u5F00\u59CB\u72B6\u6001\u2014\u2014\u53D8\u5706\u2014\u2014\u53F3\u79FB500px",paraId:178,tocIndex:59},{value:"css\u52A8\u753B\u4E2D\uFF0C\u5B9A\u4E49\u5173\u952E\u5E27",paraId:178,tocIndex:59},{value:"\u5148\u5B9A\u4E49\u5173\u952E\u5E27\uFF0C\u518D\u901A\u8FC7animation\u8C03\u7528\u5173\u952E\u5E27",paraId:179,tocIndex:60},{value:"\u6B65\u9AA4\uFF1A",paraId:180,tocIndex:60},{value:"\u5229\u7528@keyframes\u5C5E\u6027\u6765\u5B9A\u4E49\u6240\u6709\u5173\u952E\u5E27\uFF0C\u7ED9\u52A8\u753B\u8BBE\u7F6E\u4E00\u4E2A\u540D\u79F0",paraId:181,tocIndex:60},{value:"\u7ED9\u8981\u4F7F\u7528\u7684\u76D2\u5B50\u6DFB\u52A0animation\u7684\u76F8\u5173\u5C5E\u6027\uFF0C\u6307\u5B9A\u52A8\u753B\u7684\u540D\u79F0\u548C\u6267\u884C\u65F6\u957F",paraId:181,tocIndex:60},{value:"\u5229\u7528@keyframes\u5C5E\u6027\u6765\u5B9A\u4E49\u5173\u952E\u5E27\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u5C5E\u4E8Ecss\u4EE3\u7801\uFF0C\u4E0D\u9700\u8981\u5199\u5728\u4EFB\u4F55\u9009\u62E9\u5668\u4E2D\u3002",paraId:182,tocIndex:61},{value:"\u8BED\u6CD5\uFF1A",paraId:182,tocIndex:61},{value:`\u5B9A\u4E49\u5173\u952E\u5E27\r
@keyframes \u52A8\u753B\u540D\u79F0{\r
    from{\r
        \u5F00\u59CB\u72B6\u6001\r
    }\r
    to{\r
        \u7ED3\u675F\u72B6\u6001\r
    }\r
}\r
\u8FD8\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u6BD4\u5B9A\u4E49\u5173\u952E\u5E27\uFF0C\u767E\u5206\u6BD4\u4EE3\u8868\u6574\u4E2A\u52A8\u753B\u5728\u67D0\u4E2A\u767E\u5206\u6BD4\u65F6\uFF0C\u662F\u4EC0\u4E48\u72B6\u6001\r
0%{\r
    \r
}\r
20%{\r
    \r
}\r
50%{\r
    \r
}\r
100%{\r
    \r
}\r
\r
\u4F7F\u7528\u5173\u952E\u5E27\r
div{\r
    /* \u8BBE\u7F6E\u52A8\u753B\u7684\u540D\u79F0*/\r
    animation-name:\u52A8\u753B\u540D\u79F0;\r
    /*\u8BBE\u7F6E\u52A8\u753B\u7684\u6267\u884C\u65F6\u957F*/\r
    animation-duration:\u6267\u884C\u65F6\u957F;\r
}\r

`,paraId:183,tocIndex:61},{value:"\u5173\u952E\u5E27\u5728\u8BBE\u7F6E\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u6BD4\uFF0Cfrom\u76F8\u5F53\u4E8E0%\uFF0Cto\u76F8\u5F53\u4E8E100%",paraId:184,tocIndex:61},{value:"\u6BCF\u4E00\u5E27\u7684\u65F6\u95F4\u8DDF\u4E24\u5E27\u4E4B\u95F4\u7684\u767E\u5206\u6BD4\u6709\u5173\u7CFB\uFF0C\u8DE8\u5EA6\u8D8A\u5927\uFF0C\u5206\u914D\u7684\u65F6\u95F4\u8D8A\u591A\uFF0C\u8DE8\u5EA6\u8D8A\u5C0F\uFF0C\u5206\u914D\u7684\u65F6\u95F4\u8D8A\u5C11\u3002",paraId:184,tocIndex:61},{value:"\u8BA1\u7B97\u516C\u5F0F\uFF1A\u5173\u952E\u5E27\u7684\u6267\u884C\u65F6\u95F4= \u4E24\u5E27\u4E4B\u95F4\u7684\u5DEE * \u603B\u52A8\u753B\u7684\u65F6\u95F4",paraId:184,tocIndex:61},{value:"animation\u52A8\u753B\u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u52A8\u753B\u7684\u901F\u7387\u3001\u6B21\u6570\u7B49\u7B49\u64CD\u4F5C",paraId:185,tocIndex:62},{value:`\u5C5E\u6027\uFF1A
`,paraId:185,tocIndex:62},{value:"anination-name:\u8BBE\u7F6E\u52A8\u753B\u7684\u540D\u79F0\uFF0C\u9700\u8981\u914D\u5408\u6267\u884C\u65F6\u957F\u4E00\u8D77\u4F7F\u7528",paraId:186,tocIndex:62},{value:"animation-duration: \u8BBE\u7F6E\u52A8\u753B\u7684\u6267\u884C\u65F6\u957F\uFF0C\u9ED8\u8BA4\u503C\u4E3A0s\uFF1B",paraId:187,tocIndex:62},{value:"animation-timing-function: \u8BBE\u7F6E\u52A8\u753B\u7684\u6267\u884C\u901F\u7387\uFF0C\u539F\u7406\u662F\u901A\u8FC7\u8D1D\u585E\u5C14\u66F2\u7EBF\u6765\u5B9E\u73B0\u7684",paraId:188,tocIndex:62},{value:"ease\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u4EE5\u4F4E\u901F\u5F00\u59CB\uFF0C\u7136\u540E\u53D8\u5FEB\uFF0C\u5728\u7ED3\u675F\u524D\u53D8\u6162\\",paraId:189,tocIndex:62},{value:"linear\uFF1A\u5300\u901F",paraId:190,tocIndex:62},{value:"ease-in\uFF1A\u4EE5\u4F4E\u901F\u5F00\u59CB",paraId:191,tocIndex:62},{value:"ease-out:\u4EE5\u4F4E\u901F\u7ED3\u675F",paraId:192,tocIndex:62},{value:"ease-in-out\uFF1A\u4EE5\u4F4E\u901F\u5F00\u59CB\u548C\u7ED3\u675F",paraId:193,tocIndex:62},{value:"cubic-bezier(x1,y1,x2,y2)\uFF1A\u8D1D\u585E\u5C14\u66F2\u7EBF",paraId:194,tocIndex:62},{value:"animation-delay:\u8BBE\u7F6E\u52A8\u753B\u7684\u5EF6\u8FDF\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A0s",paraId:195,tocIndex:62},{value:"animation-iteration-count\uFF1A\u8BBE\u7F6E\u52A8\u753B\u7684\u6267\u884C\u6B21\u6570\uFF0C\u9ED8\u8BA4\u52A8\u753B\u53EA\u80FD\u6267\u884C\u4E00\u6B21",paraId:196,tocIndex:62},{value:"n: \u6570\u5B66\uFF0C\u4EE3\u8868\u6B21\u6570",paraId:197,tocIndex:62},{value:"infinite\uFF1A\u65E0\u9650\u6B21",paraId:198,tocIndex:62},{value:"animation-direction\uFF1A\u8BBE\u7F6E\u52A8\u753B\u7684\u6267\u884C\u65B9\u5411",paraId:199,tocIndex:62},{value:"normal\uFF1A\u9ED8\u8BA4\uFF0C\u6B63\u5E38\u64AD\u653E",paraId:200,tocIndex:62},{value:"reverse\uFF1A\u53CD\u5411\u64AD\u653E\u52A8\u753B",paraId:201,tocIndex:62},{value:"alternate\uFF1A\u5947\u6570\u6B21\u6B63\u5411\u64AD\u653E\u52A8\u753B\uFF0C\u5076\u6570\u6B21\u53CD\u5411\u64AD\u653E\u52A8\u753B",paraId:202,tocIndex:62},{value:"alternate-reverse\uFF1A\u5947\u6570\u6B21\u53CD\u5411\u64AD\u653E\u52A8\u753B\uFF0C\u5076\u6570\u6B21\u6B63\u5411\u64AD\u653E\u52A8\u753B",paraId:203,tocIndex:62},{value:"animation-fill-mode\uFF1A\u8BBE\u7F6E\u7B2C\u4E00\u5E27\u6216\u6700\u540E\u4E00\u5E27\u662F\u5426\u4F5C\u7528\u5728\u5143\u7D20\u4E0A",paraId:204,tocIndex:62},{value:"forwards\uFF1A\u8BBE\u7F6E\u6700\u540E\u4E00\u5E27\u4F5C\u7528\u5728\u5143\u7D20\u4E0A\uFF0C\u4FDD\u6301\u7ED3\u675F\u72B6\u6001",paraId:205,tocIndex:62},{value:"backwards\uFF1A\u8BBE\u7F6E\u7B2C\u4E00\u5E27\u4F5C\u7528\u5728\u5143\u7D20\u4E0A\uFF0C\u4FDD\u6301\u5F00\u59CB\u72B6\u6001",paraId:206,tocIndex:62},{value:"both\uFF1A\u5C06\u7B2C\u4E00\u5E27\u548C\u6700\u540E\u4E00\u5E27\u90FD\u4F5C\u7528\u5728\u5143\u7D20\u4E0A",paraId:207,tocIndex:62},{value:"animation-play-state\uFF1A\u63A7\u5236\u52A8\u753B\u662F\u5426\u64AD\u653E",paraId:208,tocIndex:62},{value:"running:\u9ED8\u8BA4\u503C\uFF0C\u64AD\u653E",paraId:209,tocIndex:62},{value:"paused\uFF1A\u6682\u505C",paraId:210,tocIndex:62},{value:"animation\uFF1A\u590D\u5408\u5C5E\u6027",paraId:211,tocIndex:62},{value:`animation: name duration timing-function delay iteration-count direction fill-mode;\r
animation: \u52A8\u753B\u540D\u79F0  \u6267\u884C\u65F6\u957F  \u6267\u884C\u901F\u7387   \u5EF6\u8FDF\u65F6\u957F  \u6267\u884C\u6B21\u6570  \u6267\u884C\u65B9\u5411 \u662F\u5426\u4FDD\u6301\u5F00\u59CB\u6216\u7ED3\u675F\u72B6\u6001;\r

`,paraId:212,tocIndex:62}]},22114:function(a,n,e){e.r(n),e.d(n,{texts:function(){return r}});var t=e(79524);const r=[]}}]);
