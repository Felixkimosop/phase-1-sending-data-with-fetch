// Add your code her

const submitData = {
    userName : "felix",
    email : "fkc@gmail.com",
};

fetch("  http://localhost:3000/users", {

method: "POST",
headers:{
    'Content-Type': 'application/json'
    
  },
body:JSON.stringify(submitData)

})

.then(res => res.json())

.then(data => console.log(data))