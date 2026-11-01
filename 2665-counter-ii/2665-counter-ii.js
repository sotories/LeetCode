/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let target = init;
    const functions = {
        increment: () => { return ++target },
        decrement: () => { return --target },
        reset: () => {
            target = init
            return target
        }
    }

    return functions
};

