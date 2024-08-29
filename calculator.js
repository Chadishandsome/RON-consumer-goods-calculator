export const calcPopulation = (setFactories, population) => {
  setFactories(prevFactories => ({
    ...prevFactories,
    consumerGoodFactories: Math.ceil(population/40)
  }));
}

export const calcElectronic = (setFactories, electronic) => {
  if (electronic < 0) {
    setFactories(prevFactories => ({
    ...prevFactories,
    electronicFactories: prevFactories.electronicFactories + 1,
    }));
  }
  if (electronic >= 16) {
    setFactories(prevFactories => ({
      ...prevFactories,
      electronicFactories: prevFactories.electronicFactories - 1,
      }));
  }
}

export const calcSteel = (setFactories, steel) => {
  if (steel < 0) {
    setFactories(prevFactories => ({
    ...prevFactories,
    steelFactories: prevFactories.steelFactories + 1,
    }));
  }
  if (steel >= 3) {
    setFactories(prevFactories => ({
      ...prevFactories,
      steelFactories: prevFactories.steelFactories - 1,
      }));
  }
}

export const calcMotorParts = (setFactories, motorPart) => {
  if (motorPart < 0) {
    setFactories(prevFactories => ({
    ...prevFactories,
    motorPartFactories: prevFactories.motorPartFactories + 1,
    }));
  }
  if (motorPart >= 6) {
    setFactories(prevFactories => ({
      ...prevFactories,
      motorPartFactories: prevFactories.motorPartFactories - 1,
      }));
  }
}

export const calcFertilizer = (setFactories, fertilizer) => {
  if (fertilizer < 0) {
    setFactories(prevFactories => ({
    ...prevFactories,
    fertilizerFactories: prevFactories.fertilizerFactories + 1,
    }));
  }
  if (fertilizer >= 12) {
    setFactories(prevFactories => ({
      ...prevFactories,
      fertilizerFactories: prevFactories.fertilizerFactories - 1,
      }));
  }
}



export const calcResources = (setResources, consumerGoodFactories, electronicFactories, steelFactories, motorPartFactories, fertilizerFactories) => {
  setResources(prevResources => ({
    ...prevResources,
    electronic: electronicFactories * 16,
    steel: steelFactories * 3,
    motorPart: motorPartFactories * 6,
    fertilizer: fertilizerFactories * 12,
  }));

  setResources(prevResources => ({
    ...prevResources,
    electronic: prevResources.electronic - (3 * consumerGoodFactories),
    steel: prevResources.steel - (motorPartFactories),
    motorPart: prevResources.motorPart - (2.5 * consumerGoodFactories),
    fertilizer: prevResources.fertilizer - (2.5 * consumerGoodFactories),
  }));

  setResources(prevResources => ({
    ...prevResources,
    gold: -(2 * electronicFactories),
    copper: -(2 * electronicFactories),
  
    iron: -(4 * steelFactories),
    titanium: -(0.2 * steelFactories),
  
    tungsten: -(2 * motorPartFactories),
  
    phosphate: -(3.5 * fertilizerFactories)
  }));
}