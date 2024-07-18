import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
const [team, setTeam ] = useState([]);
const [ money, setMoney ] = useState(100);
const [strength, setStrength] = useState(0)
const totalStrength = () => {
    let strength = 0 
    team.map((t)=> {
    strength += t.strength
    })
    setStrength(strength)
  }

const [agility, setAgility] = useState(0)
const totalAgility = () => {
    let agility = 0 
    team.map((t)=> {
    agility += t.agility
    })
    setAgility(agility)
  }
useEffect(() => {totalAgility(), totalStrength()},[team])



const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);
  const handleAddFighter = (zombie) => {
    if (money >= zombie.price) {
      setTeam([...team, zombie]);
      setMoney(money - zombie.price);
    } else {
      console.log('NO money');
  }};



const handleRemoveTeam = (zombie, idx) => {
const updatedTeam = team.filter((teamMember, teamIdx) => teamIdx !== idx);
setTeam(updatedTeam);
setMoney(money + zombie.price);
}


  return (
    <>
    {money}
    <h1>Zombie world!</h1>
    <p>Strength:{strength}</p>
    <p>Agility:{agility}</p>
    {team.length === 0 ? <div>Picka Team</div>:<div><>
    
  <ul>
    {team.map((teams, idx) => (
      <>
      <div key={idx}>
      <h4> {teams.name} </h4>
      <li> Price: {teams.price} </li>
      <li> Strenght: {teams.strength} </li>
      <li> Agility: {teams.agility} </li>
      <img src={teams.img} />
      <button onClick={() => handleRemoveTeam(teams, idx)}>Remove</button>
      </div>
      </>
    ))}
  </ul>
</></div>}
    <ul>
    {zombieFighters.map((zombieFighters, idx) => (
      <>
      <div id="container" key={idx}>
      <h4> {zombieFighters.name} </h4>
      <div id='stored'>
      <span>Price: {zombieFighters.price} </span>
      <span>Strenght {zombieFighters.strength} </span>
      <span>Agility {zombieFighters.agility} </span>
      <img src={zombieFighters.img} />
      <hr />
      </div>
      <button onClick={() => handleAddFighter(zombieFighters)}>Add</button>
      
     </div>
      </>
    ))}
  </ul>
  </>
  );
}

export default App