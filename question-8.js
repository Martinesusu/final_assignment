// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const fetchUserNames = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json());
  };
  
const newUser = (data) => {
    const newUsers = data.map(user => user.name);
    console.log(newUsers);
};
  
fetchUserNames().then(newUser);