let cards = document.querySelector(".cards");
let search = document.querySelector(".search");
let sort = document.querySelector(".sort");
const BASE_URL = "http://localhost:4000/blogs";

let blogs = null;
let blogsCopy = null;
async function getData() {
  let response = await axios(`${BASE_URL}`);

  blogs = response.data;
  blogsCopy = structuredClone(blogs);
  drawCards(response.data);
}
getData();

function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
        
        <div class="card">
        <div class="card-body">
          <h2 class="card-title">${element.title}</h2>
          <div><a class="text">
          ${element.body}... 
        </a>
        <a href="./details.html?id=${element.id}" class="sucsecc">Read More</a></div>
          
          <p >${element.author}</p>
          <div class="btns">

              <button class="delete" onclick=deleteBtn(${element.id},this)>Delete</button>
              <a  href="./form.html?id=${element.id}"  class="edit" >Edit</a>
          </div>
        </div>
      </div>
        
        
        `;
  });
}

async function deleteBtn(id, btn) {
  if (confirm("you want to delete?")) {
    btn.closest("card");
    await axios.delete(`${BASE_URL}/${id}`);
  }
}

search.addEventListener("input", function (element) {
  let filtered = blogs.filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(element.target.value.toLocaleLowerCase());
  });
  drawCards(filtered);
  console.log(filtered);
});
 

sort.addEventListener("click", function () {
  let sorted;
  if (this.innerText == "Ascending") {
    sorted = blogs.sort(
      (a, b) => a.title.localeCompare(b.title)
      );
      this.innerText = "Descending"
  } else if (this.innerText == "Descending") {
    sorted = blogs.sort((a, b) => b.title.localeCompare(a.title));
    this.innerText = "Default";
  } else {
    this.innerText = "Ascending";
    sorted = blogsCopy;
  }
  drawCards(sorted)
});