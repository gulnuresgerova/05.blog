let id = new URLSearchParams(window.location.search).get("id");

console.log(id);
const details = document.querySelector(".details");
const BASE_URL = "http://localhost:4000/blogs";


fetch(`${BASE_URL}/${id}`)
  .then((res) => res.json())
  .then((el) => {
    details.innerHTML = `
    <div class="card">
    <div class="card-body">
      <h2 class="card-title">   <em>Title :</em> ${el.title}</h2>
      <div><a class="text">
      <em>Body:</em>
      
          ${el.body}... 
        </a>
   
      <p >  <em>Author:</em> ${el.author}</p>

      <p class="info-text">   <em>Information:</em>
      Molla Nəsrəddindən soruşurlar: <br>
      ~Molla, sən bilərsən, göydə nə qədər ulduz var? <br> Molla bir qədər fikirləşib deyir: <br>
     — Doğrusu, elə mən özüm də çoxdan istəyirəm ki, sayam, görəm nə qədərdir, <br>
      ancaq bir şey var ki, yerdən mümkün olmur, gərək çıxıb göydən sayam.
       Bunu eləmək üçün gündüzlər vaxtım olmur,<br> gecələr də qorxuram göydə düşəm qaranlığa,
        yolu azam.
    </p>
      
 
    </div>
  </div>
    
    `;
  });

