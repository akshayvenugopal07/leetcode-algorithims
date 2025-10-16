// Problem Statement: Given a root element and a class name, Find all the elements inside it that have that class name.
// DOM:
// <div class=“a” id=“root”>
//     <div class=“b” id=“b-1">
//         <div class=“a” id=“a-2">
//             <div class=“d” id=“d-1"></div>
//         </div>
//         <div class=“c” id=“c-1">
//             <div class=“container a” id=“a-3">
//                 <div class=“d” id=“d-2">
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// JS:
// function getByClassName(root, classname = ‘’) {
// 	// Implement this
// }
// const root = document.getElementById(‘root’);
// console.log(getByClassName(root, ‘a’))
// Expected output: For above example getByClassName should return array of ids: [‘root’, ‘a-2’, ‘a-3’]


function getByClassName(root, className) {
    const search = (node) => {
        let result = [];

        if (node.classList.contains(className)) {
            result.push(node.id);
        }

        for (let child of node.children) {
            const res = search(child, className);
            result = [...result, ...res];
        }

        return result;
    }

    return search(root)
}

const root = document.getElementById('root');
console.log(getByClassName(root, 'a'))