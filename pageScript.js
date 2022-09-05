var summary = [{id:"123456789"},{id:"123456789"},{id:"eb6ef7681d19117b36f0dbb826c4cc14", name:"YDYTTYDTYDDYY"}];

        

window.onload = function pageLog(){
    
    let params = (new URL(document.location)).searchParams;
    id = params.get("id");
    let name = params.get("name");
   

   

    getNews()

}

// Call API 
async function getNews() {
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74',
      'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
    }
  };
    let _id = id; 
   await fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=car&lang=en&sort_by=relevancy&page=1&media=True', options)
   .then(response => response.json())
   .then(response =>  {
         let resData = response?.articles

         var list = resData.filter(news => news._id === id);

         document.getElementById('data').innerHTML +=`
         <div style='width: 500px;'> 
          <h1>${list[0].title}</h1>
          <image src="${list[0].media}" style='width: 450px;' />
          <p>${list[0].summary}</p>
         </div>
         `;
         
    })
  
  
  
  }