
import List from "./list";
import data from "./data";
import { useState } from 'react';
function App() {
  const [people,setPeople]=useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={()=>{
          setPeople([]);
        }}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
