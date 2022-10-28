
//import {pickCategory} from './blogList.js';

window.onload = function pageLog(){  
    
    let params = (new URL(document.location)).searchParams; //using query params to get the page id
    id = params.get("id");  // the pagew id
    let name = params.get("name");
   
    getNews() // calling the getnews function here
    getMore();
       //GetPageNew(); // calling the function here

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
    await fetch(`https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=fashion &lang=en&sort_by=relevancy&country=ng&page=1&media=True`, options)
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

  let rand = 0;
  //30 items of index 0-29
  const randNums = [];
  while(randNums.length < 30) {
  randNums.push(randNums.length);
  randNums.sort(() => .5 - Math.random());
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
   
      for (let i = 0; i < 9; i++) {
       const showfield = document.getElementById('knowMore');
       
       /*
      let min = 0,
      max = 30;
      //Pick a random value
      pick = Math.floor(Math.random() * (max - min + 1)+ min);
      //If the number generated has been picked before:
      if(picked.includes(pick)){
          //Print the condition to perform
          console.log(`Does it include ${pick}: true. Then leave ${pick}`);
      }else{
          //If the number generated hasn't been picked before:
          console.log(`Does it include ${pick}: false. Then post ${pick}`);
          //Push the number to the picked array
          picked.push(pick);
          ranNum = pick;
    }
    */
   rand++;

       try{
        //the news card codes////////////////
            showfield.innerHTML += `
           <div style="box-shadow: 2px 1px 7px 3px rgba(122,122,122,0.7);
                       -webkit-box-shadow: 2px 1px 7px 3px rgba(122,122,122,0.7);
                       -moz-box-shadow: 2px 1px 7px 3px rgba(122,122,122,0.7); 
                        padding: 0px; background-image: url('${response.articles[randNums[rand]].media}');" class="mb-3">
                        <div>
                       <a style="text-decoration: none;" href="/page.html?id=${response.articles[randNums[rand]]._id}">${response.articles[randNums[rand]].title}</a>
                        </div>
  </div> `; 
       }
          catch(err){
          console.log(err);
           }
      }
    })
  }

 async function GetPageNew(){


    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'af5aa19560msh7b4b5aaf5baf3f4p133455jsna0150ed2dc74', // API key
        'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com' // the API host
      }
    };
      let _id = id; 
      await fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=fashion news&lang=en&sort_by=relevancy&country=ng&page=1&media=True', options)
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
// nice coding


  }
