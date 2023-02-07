// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu

// Đặt màu văn bản thành #777
// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
let para = document.querySelector("#text");
para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";
// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
// <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
// </ul>
let blueList = document.querySelectorAll("#p2 li");
console.log(blueList);
// blueList.forEach((e)=>{
//     e.style.color = 'blue';
// })
Array.from(blueList).map((e) => {
  e.style.color = "blue";
});


// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):

// <ul id="list">
//    <li>Item 1</li>
//    <li>Item 2</li>
//    <li>Item 3</li>
//    <li>Item 4</li>
//    <li>Item 5</li>
//    <li>Item 6</li>
//    <li>Item 7</li>
// </ul>

// Sử dụng javascript để thực hiện những công việc sau
// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
let list = document.querySelectorAll("#list li");
for (let index = 8; index < 11; index++) {
  let tmp = document.createElement("li");
  tmp.innerText = `item ${index}`;
  document.querySelector("#list").appendChild(tmp);
}
// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
list[0].style.color = "red";
// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
list[2].style.backgroundColor = "blue";
// Remove thẻ <li> 4
list[3].remove();
// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
let newLi = document.createElement("li");
newLi.innerText = "hehe";
list[2].insertAdjacentElement("afterend", newLi);
