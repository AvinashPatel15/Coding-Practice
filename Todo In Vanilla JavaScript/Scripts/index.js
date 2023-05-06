let todoData = JSON.parse(localStorage.getItem("todos")) || [];

// Todo Form

document.getElementById("todoForm").addEventListener("submit", formData);

function formData() {
  let id = Math.floor(Math.random() * 9000) + 1000;

  let title = document.getElementById("title").value;

  let description = document.getElementById("description").value;

  let now = new Date();
  let currentDate = now.toLocaleDateString();
  let currentTime = now.toLocaleTimeString();

  
}

formData();
