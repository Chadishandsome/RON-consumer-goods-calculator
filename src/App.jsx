import { useState, useEffect } from 'react';
import './App.css';

import { calcPopulation, calcResources, calcElectronic, calcSteel, calcMotorParts, calcFertilizer } from '../calculator';
import Slider from './components/Slider';

function App() {
  const [population, setPopulation] = useState(0);

  const [resources, setResources] = useState({
    gold: 0,
    copper: 0,
    iron: 0,
    titanium: 0, 
    tungsten: 0,
    phosphate: 0,
    electronic: 0,
    steel: 0,
    motorPart: 0,
    fertilizer: 0,
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
        name={"Population in M"}
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
        show={true}
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
        show={true}
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
        show={true}
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
        show={true}
      />

      <Slider
        name={"Electronics"}
        minVal={-30}
        maxVal={30}
        value={resources.electronic}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            electronic: value
          }))
        }
        show={true}
      />

      <Slider
        name={"Steel"}
        minVal={-30}
        maxVal={30}
        value={resources.steel}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            steel: value
          }))
        }
        show={true}
      />

      <Slider
        name={"Motor Parts"}
        minVal={-30}
        maxVal={30}
        value={resources.motorPart}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            motorPart: value
          }))
        }
        show={true}
      />

      <Slider
        name={"Fertilizer"}
        minVal={-30}
        maxVal={30}
        value={resources.fertilizer}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            fertilizer: value
          }))
        }
        show={true}
      />
      <div style={{display: "flex"}}>
      <Slider
        name={"Gold"}
        minVal={-10000}
        maxVal={10000}
        value={resources.gold}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            gold: value
          }))
        }
        show={false}
      />
      
      <Slider
        name={"Copper"}
        minVal={-10000}
        maxVal={10000}
        value={resources.copper}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            copper: value
          }))
        }
        show={false}
      />

      <Slider
        name={"Iron"}
        minVal={-10000}
        maxVal={10000}
        value={resources.iron}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            iron: value
          }))
        }
        show={false}
      />

      <Slider
        name={"Titanium"}
        minVal={-10000}
        maxVal={10000}
        value={resources.titanium}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            titanium: value
          }))
        }
        show={false}
      />

      <Slider
        name={"Tungsten"}
        minVal={-10000}
        maxVal={10000}
        value={resources.tungsten}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            tungsten: value
          }))
        }
        show={false}
      />

      <Slider
        name={"Phosphate"}
        minVal={-10000}
        maxVal={10000}
        value={resources.phosphate}
        setValue={(value) => 
          setResources(prevResources => ({
            ...prevResources,
            phosphate: value
          }))
        }
        show={false}
      />
      </div>
      
    </>
  );
}

export default App;