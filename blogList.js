




  


async function getNews() {
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
    'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
  }
};
 await fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=football&lang=en&sort_by=relevancy&page=1&media=True', options)
 .then(response => response.json())
 .then(response =>  {
    for (let i = 0; i < response.articles.length; i++) {
    console.log(response);
     const output = document.getElementById('demo');
    
    

     
     try{
        
          output.innerHTML += `
          <div class="container">
  <div class="row">
    <div class="col ">
    <div class='card' style='width: 600px; border: 2px solid green; padding: 0px;'>
    <div class='card-body' style="display: flex; flex-direction: row;">
<image src="${response.articles[i].media}" style="width: 200px; height: 150px;" />

    <div class='card-text' style="display: flex; flex-direction: column; padding-left: 15px;">
    <a style="text-decoration: none;" href="${response.articles[i].link}  "><h2 style='  color:#a10035;'>${response.articles[i].title}</h2></a>
    </div>
    </div>
    </div>
    </div>
  </div>
</div>
          
          ` 
        
     
     }
     catch(err){
        console.log(err);
         }
    }
  })



}
getNews()







async function getNews1() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };
 await fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=politics&lang=en&sort_by=relevancy&page=1&media=True', options)
 .then(response => response.json())
 .then(response =>  {
       for (let i = 0; i <=0; i++) {
       
        const output1 = document.getElementById('demo1');
       
       
   
        
        try{
           
             output1.innerHTML += `
             
             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${response.articles[2].media}" style="height: 400px; object-fit: cover;" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 style='font-size: 50px;'>${response.articles[2].title}</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${response.articles[4].media}" style="height: 400px; object-fit: cover;" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 style='font-size: 50px;'>${response.articles[4].title}</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${response.articles[6].media}" style="height: 400px; object-fit: cover;" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5 style='font-size: 50px;'>${response.articles[6].title}</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
             
             ` 
           
        
        }
        catch(err){
           console.log(err);
            }
       }
     })
   
   
   
   }
   getNews1()

   