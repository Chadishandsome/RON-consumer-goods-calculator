let population = 160 //million

let resources = {
  //basic resources
  gold: 0,
  copper: 0,
  iron: 0,
  titanium: 0, 
  tungsten: 0,
  phosphate: 0,

  //processed resources
  electronic: 0,
  steel: 0,
  motorPart: 0,
  fertilizer: 0,
}

let factories = {
  consumerGoodFactories: Math.ceil(population/40),
  electronicFactories: 0,
  steelFactories: 0,
  motorPartFactories: 0,
  fertilizerFactories: 0,
}

function calcConsumerGoods(amount) {
  resources.electronic -= (3 * amount)
  resources.motorPart -= (2.5 * amount)
  resources.fertilizer -= (2.5 * amount)
}

function calcElectronics(amount) {
  resources.gold -= (2 * amount)
  resources.copper -= (2 * amount)
  resources.electronic += (16 * amount)
};

function calcSteel(amount) {
  resources.iron -= (4 * amount)
  resources.titanium -= (0.2 * amount)
  resources.steel += (3 * amount)
};

function calcMotorParts(amount) {
  resources.steel -= (1 * amount)
  resources.tungsten -= (2 * amount)
  resources.motorPart += (6 * amount)
};

function calcFertilizer(amount) {
  resources.phosphate -= (3.5 * amount)
  resources.fertilizer += (12 * amount)
};

function resetResources() { //will have to change later for country defaults
  for (let resource in resources) {
    if (resources.hasOwnProperty(resource)) {
      resources[resource] = 0;
    }
  }
}

const calculateGoods = () => {
  resetResources()
  calcConsumerGoods(factories.consumerGoodFactories)
  calcElectronics(factories.electronicFactories)
  calcFertilizer(factories.fertilizerFactories)
  calcMotorParts(factories.motorPartFactories)
  calcSteel(factories.steelFactories)

  if (resources.electronic < 0) {
    factories.electronicFactories += 1
    calculateGoods()
  }
  if (resources.steel < 0) {
    factories.steelFactories += 1
    calculateGoods()
  }
  if (resources.motorPart < 0) {
    factories.motorPartFactories += 1
    calculateGoods()
  }
  if (resources.fertilizer < 0) {
    factories.fertilizerFactories += 1
    calculateGoods()
  }
}

calculateGoods()


console.log(`  gold: ${resources.gold}`);
console.log(`  copper: ${resources.copper}`);
console.log(`  iron: ${resources.iron}`);
console.log(`  titanium: ${resources.titanium}`);
console.log(`  tungsten: ${resources.tungsten}`);
console.log(`  phosphate: ${resources.phosphate}`);
console.log("")
console.log(`  electronics: ${resources.electronic}`);
console.log(`  steel: ${resources.steel}`);
console.log(`  motorParts: ${resources.motorPart}`);
console.log(`  fertilizer: ${resources.fertilizer}`);
console.log("")
console.log(`  electronics factories: ${factories.electronicFactories}`);
console.log(`  steel factories: ${factories.steelFactories}`);
console.log(`  motorParts factories: ${factories.motorPartFactories}`);
console.log(`  fertilizer factories: ${factories.fertilizerFactories}`);