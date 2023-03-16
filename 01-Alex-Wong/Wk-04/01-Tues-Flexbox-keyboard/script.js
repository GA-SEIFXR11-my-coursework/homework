// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js
var output = document.getElementById('output');
var keys = document.getElementsByClassName('key');
var _loop_1 = function (index) {
    var keyElement = keys[index];
    if (typeof (keyElement) != typeof (output)) {
        return "break";
    }
    ;
    var keyVal = keyElement.textContent;
    keyElement.addEventListener('click', function () {
        var content = output.textContent;
        switch (keyVal) {
            case '␡':
                if (content != null) {
                    output.textContent = content.slice(0, content.length - 1);
                }
                break;
            case '␡ all':
                output.textContent = '';
                break;
            default:
                if (keyVal != null) {
                    output.textContent += keyVal;
                }
        }
    });
};
for (var index in keys) {
    var state_1 = _loop_1(index);
    if (state_1 === "break")
        break;
}
