"use strict";

var checkingGlobal = {};

class JSModuleCheck {
    static fillGlobal(str) {
        return new Promise(resolve => {
            checkingGlobal[str] = true;
            resolve(checkingGlobal);
        });
    }
}

module.exports = JSModuleCheck;
