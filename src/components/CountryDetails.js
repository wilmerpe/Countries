const CountryDetails = ({country}) => (
<>
          <h1>{country.name}</h1>
          <div>Capital {country.capital}</div>
          <div>Area {country.area}</div>
          <ul>
            {Object.values(country.languages).map(language => (
              <li key={language} >{language}</li>
            ))}
          </ul>
          <div>
            <img
            src={country.flags.png}
            alt={`${country.name} flag`}
            /></div>
 </>
)

export default CountryDetails
