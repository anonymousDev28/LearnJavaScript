// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
let factorial = (n)=>{
    if(n == 1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(5));
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
let reverseString = (inputString)=>{
    let tmpArray = inputString.split("");
    console.log(tmpArray);
    let result = [];
    let i = 0;
    let j = tmpArray.length;
    while (j > 0) {
        result[i++] = tmpArray[--j];
    }
    return result;
}
console.log(reverseString("where are you ?"));
// Ví dụ: reverseString(‘hello’) => olleh
// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
let translate = (code)=>{
    switch (code) {
        case 'VN':
            return "Xin Chào";
        case 'EN':
            return "Hello";
        default:
            return "invalid input code !";
    }
}
console.log(translate('VN'));
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”
// Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// let subString = (s)=>{
//     return s.substring(0,10)+"...";
// }
let mySubString = (inputString,start,end)=>{
    let arr = inputString.split("");
    let result = "";
    for (let index = start; index < end; index++) {
        result+=arr[index];
    }
    return result+"...";
}
console.log(mySubString("xinchaocacbandenvoiTechmaster",0,10));

// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”