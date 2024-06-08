// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  let result = [];
  for (let item of products) {
    if (item.quantity > 0) {
      result.push(item);
    }
  }
  return result;
}

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
