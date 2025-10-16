// Problem Statement: Given a root element, Find all the elements of a give color let’s say black
// Formats can include color name in english language, 3 digit hex, 6 digit hex or rgb, Example:
// <div id=”root”>
// 	<p style=”color: black;”>John</p>
// 	<p style=”color: #000;”>Doe</p>
// 	<p style=”color: #000000;”>Rich</p>
// 	<p style=”color: rgb(0, 0, 0);”>Harris</p>
// 	<p style=”color: blue;”>Jack</p>
// </div>
// Here except last p element all element should be returned

function getComputedColor(colorCode) {
    const div = document.createElement('div');
    div.style.color = colorCode;
    document.body.appendChild(div);
    const { color } = window.getComputedStyle(div);
    document.body.removeChild(div);
    return color;
}

function findElements(root, colorCode) {
    const standardColor = getComputedColor(colorCode);

    const output = [];

    const search = ele => {
        const eleColor = ele.style.color;
        const eleStandardColor = getComputedColor(eleColor);
        if (eleStandardColor === standardColor) {
            output.push(ele);
        }

        for (let child of ele.children) {
            search(child);
        }
    };

    search(root);

    return output;
}

const root = document.getElementById('root');
console.log(findElements(root, 'black'));