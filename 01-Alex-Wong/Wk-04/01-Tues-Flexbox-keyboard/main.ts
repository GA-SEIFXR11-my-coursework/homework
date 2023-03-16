// [ -e script.js ] && rm script.js; tsc main.ts -outFile script.js

let output = document.getElementById('output') as HTMLElement;
let keys = document.getElementsByClassName('key') as HTMLCollection;
for (let index in keys) {
    let keyElement = keys[index] as HTMLElement;
    if(typeof(keyElement) != typeof(output)){break};
    let keyVal = keyElement.textContent;
    keyElement.addEventListener('click', () => {
        let content = output.textContent;
        switch (keyVal) {
            case '␡':
                if(content != null){
                    output.textContent = content.slice(0, content.length-1);
                }
                break;
            case '␡ all':
                output.textContent = '';
                break;
            default:
                if(keyVal != null){
                    output.textContent += keyVal;
                }
        }
    });
}
