// ノンブロッキング
/*
setTimeout(function(){
    console.log("hello");
    },1000
);

console.log("world");
*/

// ブロッキング
var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log("wowow");