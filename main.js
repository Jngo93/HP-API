// let number = Math.floor((Math.random() * 31))
// console.log(number)
// async function display(){
//     const GOTRawData = await fetch('https://thronesapi.com/api/v2/Characters',
//     {
//         headers: {
//             Accept: "application/json"
//         },
//     })

//     const GOTData = await GOTRawData.json()
//     console.log(GOTData[number]);

//     let name = document.querySelector("h1")
//     let title = document.querySelector("h2")
//     let img = document.querySelector("img")

//     name.textContent = `Name: ${GOTData[number].fullName}`;
//     img.src = GOTData[number].imageUrl;
//     title.textContent = `Title: ${GOTData[number].title}`;

// }

// display.call()

// let random = Math.floor((Math.random() * 20))

async function display(){
    const hpRawData = await fetch ('https://hp-api.onrender.com/api/characters')
    console.log(hpRawData);

    const hpAllData = await hpRawData.json()
    let hpData = []
    // limit to the first 30 persons
    for(let i = 0; i < 30; i++){
        // 50 persons
        hpData.push(hpAllData[i])
        // console.log(hpData)
    }
    // console.log(hpData);
    // console.log(hpData[random]);

    // variable for the search data
    let name = document.querySelector('h1')
    let house = document.querySelector('h2')
    let img = document.querySelector('img')
    let searchBar = document.querySelector('input')

    // variable for returning the wanted data
    let personData;
    // ahdd an event listener for match searchBar value to hpData[i]
    searchBar.addEventListener("input", async function(){
        // console.log(searchBar.value)

        // for loop to match hpData with search data
                 // loop over hpData array
      for (let i=0; i < hpData.length; i++){
          // lowercase the api data to match the search data
          let hpPersonData = hpData[i].name.toLowerCase()
          // if hpData[i].name == searchBar data
        if (hpPersonData.includes(searchBar.value) || hpData[i].name.includes(searchBar.value)){
            personData = await hpData
            // console.log(personData)
            // displays personData to the DOM
            name.textContent = await `Name: ${personData[i].name}`
            house.textContent = await `House: ${personData[i].house}`
            img.src = await personData[i].image
            house.style.color = "red";
        }
      }

    })

}
display()
