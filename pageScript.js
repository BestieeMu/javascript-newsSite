      

window.onload = function pageLog(){  
    
    let params = (new URL(document.location)).searchParams; //using query params to get the page id
    id = params.get("id");  // the pagew id
    let name = params.get("name");
   
    getNews() // calling the getnews function here
    getMore();

}


async function getNews() {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74', // API key
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com' // the API host
    }
  };
    let _id = id; 
    await fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=sport news&lang=en&sort_by=relevancy&country=ng&page=1&media=True', options)
   .then(response => response.json()) 
   .then(response =>  {
         let resData = response?.articles //assinging the articles array to resData
         var list = resData.filter(news => news._id === id); //filtering the arrays with the id, cheking if id exist in news._id

         document.getElementById('data').innerHTML +=`
         <div class='section'>  <!--the page container -->
           <div class='heading'>
              <h1>${list[0].title}</h1>
              <p>published date: ${list[0].published_date}</p>
          </div>

          <div class='media' id="pageImg">
          <image src="${list[0].media}"  class="w-100"/>
          </div>
         
          <div class='summary'>
            <p>${list[0].summary}</p>
          </div> 
         </div>
         `;
         
    }) 
  }




  async function getMore() {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };
   await fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=fashion news&lang=en&sort_by=relevancy&country=ng&page=1&media=True', options)
   .then(response => response.json())
   .then(response =>  {
   
      for (let i = 0; i < response.articles.length; i++) {
       const showfield = document.getElementById('knowMore');
       const random = Math.floor(Math.random() * 10)
       console.log(random);
       try{
        //the news card codes////////////////
            showfield.innerHTML += `
           <div style="box-shadow: 2px 1px 7px 3px rgba(122,122,122,0.7);
                       -webkit-box-shadow: 2px 1px 7px 3px rgba(122,122,122,0.7);
                       -moz-box-shadow: 2px 1px 7px 3px rgba(122,122,122,0.7); 
                        padding: 0px; background-image: url('${response.articles[random].media}');" class="mb-3">
                        <div>
                        ${response.articles[random].title}
                        </div>
  </div> `; 
       }
          catch(err){
          console.log(err);
           }
      }
    })
  }