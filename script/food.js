


let getData = async()=>{

    let food = document.getElementById("search").value;
    
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`

      //console.log(url)    

      let res = await fetch(url);

      let data = await res.json();

      append(data.meals[0])

      console.log(data.meals[0])

}

let append= (data)=>{



    let container = document.getElementById("container");

    let img = document.createElement("img")
    img.src=`${data.strMealThumb}`;


    let p = document.createElement("p")
    p.innerText=`Meal Name: ${data.strMeal}`;

    let p2=document.createElement("p2")
    p2.innerText=`Area: ${data.strArea}`;

    let p3=document.createElement("p3")
    p3.innerText=`Instruction: ${data.strInstructions}`;

    


    container.append(img, p, p2)
}