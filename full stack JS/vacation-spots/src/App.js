import React from 'react';
import VacationSpot from './VacationSpot';

let vacationSpots = [
  {
    place: "St. George, Utah",
    price: 40,
    timeToGo: "Winter",
  },{
    place: "Cancun",
    price: 900,
    timeToGo: "Winter"
  },{
    place: "China",
    price: 1200,
    timeToGo: "Fall"
  },{
    place: "BC, Canada",
    price: 800,
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring"
  }
]


const App = () => {
  const vactions = vacationSpots.map((vacation) => {
      return <VacationSpot placeName={vacation.place}
                        placePrice={vacation.price}
                        placeTimeToGo={vacation.timeToGo}
      />
  })
  return (
    <div>
      {vactions}
    </div>
  )
}

export default App;
