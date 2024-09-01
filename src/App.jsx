import { useState, useEffect } from 'react';
import './App.css';

import { calcPopulation, calcResources, calcElectronic, calcSteel, calcMotorParts, calcFertilizer } from '../calculator';
import Slider from './components/Slider';
import Counter from './components/Counter';

function App() {
  const [population, setPopulation] = useState(0);

  const [resources, setResources] = useState({
    electronic: 0,
    steel: 0,
    motorPart: 0,
    fertilizer: 0,
    gold: 0,
    copper: 0,
    iron: 0,
    titanium: 0, 
    tungsten: 0,
    phosphate: 0,
  });

  const [factories, setFactories] = useState({
    consumerGoodFactories: 0,
    electronicFactories: 0,
    steelFactories: 0,
    motorPartFactories: 0,
    fertilizerFactories: 0,
  });

  useEffect(() => {
    calcPopulation(setFactories, population);
  }, [population]);

  useEffect(() => {
    calcElectronic(setFactories, resources.electronic);
  }, [resources.electronic]);

  useEffect(() => {
    calcSteel(setFactories, resources.steel);
  }, [resources.steel, resources.motorPart]);

  useEffect(() => {
    calcMotorParts(setFactories, resources.motorPart);
  }, [resources.motorPart]);

  
  useEffect(() => {
    calcFertilizer(setFactories, resources.fertilizer);
  }, [resources.fertilizer]);

  useEffect(() => {
    calcResources(setResources, factories.consumerGoodFactories, factories.electronicFactories, factories.steelFactories, factories.motorPartFactories, factories.fertilizerFactories);
  }, [factories]);

  return (
    <>
      <Slider
        name={"Population in Millions"}
        minVal={0}
        maxVal={400}
        value={population}
        setValue={(value) => setPopulation(value)}
        show={true}
      />
      
      <Slider
        name={"Consumer Goods"}
        minVal={0}
        maxVal={10}
        value={factories.consumerGoodFactories}
        setValue={(value) => 
          setFactories(prevFactories => ({
            ...prevFactories,
            consumerGoodFactories: value
          }))
        }
        show={true}
      />

      <Slider
        name={"Electronics Factories"}
        minVal={0}
        maxVal={5}
        value={factories.electronicFactories}
        setValue={(value) => 
          setFactories(prevFactories => ({
            ...prevFactories,
            electronicFactories: value
          }))
        }
        show={false}
      />

      <Slider
        name={"Steel Factories"}
        minVal={0}
        maxVal={5}
        value={factories.steelFactories}
        setValue={(value) => 
          setFactories(prevFactories => ({
            ...prevFactories,
            steelFactories: value
          }))
        }
        show={false}
      />

      <Slider
        name={"Motor Part Factories"}
        minVal={0}
        maxVal={5}
        value={factories.motorPartFactories}
        setValue={(value) => 
          setFactories(prevFactories => ({
            ...prevFactories,
            motorPartFactories: value
          }))
        }
        show={false}
      />

      <Slider
        name={"Fertilizer Factories"}
        minVal={0}
        maxVal={5}
        value={factories.fertilizerFactories}
        setValue={(value) => 
          setFactories(prevFactories => ({
            ...prevFactories,
            fertilizerFactories: value
          }))
        }
        show={false}
      />

      {Object.entries(resources).map(([key, value]) => (
        <Counter key={key} name={key} value={value} />
      ))}
      
    </>
  );
}

export default App;