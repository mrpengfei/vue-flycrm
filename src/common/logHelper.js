export default {
    canConsoleLog: false,
    log(obj) {
        if (this.canConsoleLog) {
            console.log(obj);
        }
    },
    dir(obj) {
        if (this.canConsoleLog) {
            console.log(obj);
        }
    }
}