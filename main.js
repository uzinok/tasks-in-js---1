/**
 * 1
 * Есть массив, представляющий из себя структу папок и файлов. Папки - это массивы (без названий), а имена файлов - это строки. Пример: ["file_1", "file_2", "file_3", ["file_5", "file_6", "file_7, ["file_8", "file_9, "file_10""]"], "file_11"] Нужно вернуть все элементы, которые строки в одном массиве.
 */

let arr2 = ["file_1", "file_2", "file_3", ["file_5", "file_6", "file_7", ["file_8", "file_9", "file_10"]], "file_11"];

//  1

console.log(
    arr2.join().split(',')
)

// 2

let fileNameArr = [];

function getFileNameArr(arr) {
    let count = arr.length;

    while (count > 0) {
        count--;
        if (typeof arr[count] === 'string') {
            fileNameArr.push(arr[count]);
            continue;
        }
        getFileNameArr(arr[count]);
    }
}

getFileNameArr(arr2);
console.log(fileNameArr);

// 3

function flatten(arr) {
    let result = [];

    while (arr.length) {
        let el = arr.pop();

        if (Array.isArray(el)) {
            arr.push(...el);
            continue;
        }

        result.push(el);
    }

    return result;
}

console.log (flatten(arr2))

// 