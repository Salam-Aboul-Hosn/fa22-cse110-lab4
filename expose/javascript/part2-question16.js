let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };
  
  for (let properties in statistics) {
    if (properties.startsWith('r') || statistics[properties] % 2 === 1) {
      console.log(statistics[properties]);
    }
  }