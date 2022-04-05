function callBack(){
    console.log("Hello, callback!");
}

function receivesAFunction(callBack){
    return callBack()
}

function makeCoffee(){
    return "Coffee!";
}

function returnsANamedFunction(){
    return makeCoffee;
}

function returnsAnAnonymousFunction(){
    (function (){
        console.log("anonymous!")
    })();
}