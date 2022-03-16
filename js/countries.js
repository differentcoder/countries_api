const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data) );
}

const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountriesHTML(country) );
    //console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    // .join(' ') = array separated by comma remove , 
    container.innerHTML = countriesHTML.join(' ');
;}

const getCountriesHTML = country =>{

        // option 2 ( Destructuring )
        const {name,flags} = country;
        return `
        <div class="country">
            <img src=" ${flags.png}" />
            <h2> ${name.common}</h2>
        </div>
        `
    }

/*--
const getCountriesHTML = country =>{
      return 
      `
      <div class="country">
          <img src=" ${country.flags.png}" />
          <h2> ${country.name.common}</h2>
         
      </div>      
    `
}
--*/



loadCountries();