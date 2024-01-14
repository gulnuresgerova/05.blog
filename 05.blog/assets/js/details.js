let id = new URLSearchParams(window.location.search).get("id");

console.log(id);
const details = document.querySelector(".details");
const BASE_URL = "http://localhost:4000";


fetch(`${BASE_URL}/blogs/${id}`)
  .then((res) => res.json())
  .then((el) => {
    details.innerHTML = `
    <div class="card">
    <div class="card-body">
      <h2 class="card-title">  ${el.title}</h2>
      <p >  ${el.body}... </p>
   
      <p > ${el.author}</p>
      <p class="text"> <p > Information:</p> 
      Molla Nəsrəddindən soruşurlar:
      ~Molla, sən bilərsən, göydə nə qədər ulduz var? Molla bir qədər fikirləşib deyir:
     — Doğrusu, elə mən özüm də çoxdan istəyirəm ki, sayam, görəm nə qədərdir,
      ancaq bir şey var ki, yerdən mümkün olmur, gərək çıxıb göydən sayam.
       Bunu eləmək üçün gündüzlər vaxtım olmur, gecələr də qorxuram göydə düşəm qaranlığa,
        yolu azam.
    </p>
      
 
    </div>
  </div>
    
    `;
  });

