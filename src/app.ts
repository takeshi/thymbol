export const app = {};

declare const thymol: any;

thymol.ready(function () {
    thymol.configurePreExecution(function () {
        thymol.sessionContext.createVariable("a", "Some text");
        thymol.sessionContext.createVariable("b", 123);
        thymol.sessionContext.createVariable("c", "Hello");
        console.log('configurePreExecution');
    });
    thymol.configurePostExecution(function () {
        thymol.sessionContext = [];
        console.log('configurePostExecution');
        for (let fn of inits) {
            fn();
        }
    });
});

declare let $: any;
declare let window: any;

// document ready の実行を遅らせる
let jq = window.$;
let inits: Function[] = [];

window.$ = function () {
    if (arguments.length === 1) {
        if (typeof arguments[0] === 'function') {
            inits.push(arguments[0]);
            return;
        }
        console.log(typeof arguments[0]);
    }
    jq.apply(this, arguments);
};

$(() => {
    console.log('document#ready');
    // document.write("test");

});