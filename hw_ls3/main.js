// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
products.push({
    name: "IPhone x",
    price: 12500000,
    brand: "Apple",
    count: 100
})
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products.filter((product) => product.brand != 'Samsung'
)
// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => {
    return a.price-b.price;
})
// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => {
    return b.count-a.count;
})
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let random = ()=>Math.floor(Math.random()*1000)%(products.length-1);
console.log(products[random()]);
console.log(products[random()]);