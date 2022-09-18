      

window.onload = function pageLog(){  
    
    let params = (new URL(document.location)).searchParams; //using query params to get the page id
    id = params.get("id");  // the pagew id
    let name = params.get("name");
   
    getNews() // calling the getnews function here

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
console.log(resData);
         document.getElementById('data').innerHTML +=`
         <div class='container-fluid section' >  <!--the page container -->
           <div class='container-fluid h1' >
              <h1 >${list[0].title}</h1>
              <p>published date: ${list[0].published_date}</p>
          </div>

            <div class=' media'>
          <image src="${list[0].media}"  />
          </div>
         
          <div class='container-fluid summary'  >
            <p>${list[0].summary}</p>
          </div> 
         </div>
         `;
         
    }) 
  }
