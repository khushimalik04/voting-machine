import { useState } from 'react';
import './App.css';

function App() {
  const [partyVotes, setPartyVotes] = useState({
    BJP: 0,
    Congress: 0,
    AAP: 0,
    TMC: 0,
    ShivSena: 0,
  });
  const [totalVotes, setTotalVotes] = useState(0);

  // Function to increment the vote for a selected party
  const incrementVote = (party) => {
    setPartyVotes((prevVotes) => {
      const updatedVotes = {
        ...prevVotes,
        [party]: prevVotes[party] + 1,
      };
      setTotalVotes(Object.values(updatedVotes).reduce((acc, votes) => acc + votes, 0));
      return updatedVotes;
    });
  };

 
  const resetVotes = () => {
    setPartyVotes({
      BJP: 0,
      Congress: 0,
      AAP: 0,
      TMC: 0,
      ShivSena: 0,
    });
    setTotalVotes(0); 
  };

  return (
    <>
      <div className="box">
        <h1>Voting Machine</h1>
        <div className="party-list">
          <div className="party">
            <button onClick={() => incrementVote('BJP')}>
              <div className="dot yellow"></div>
              <p>BJP</p>
              <p>Votes: {partyVotes.BJP}</p>
            </button>
          </div>
          <div className="party">
            <button onClick={() => incrementVote('Congress')}>
              <div className="dot blue"></div>
              <p>Congress</p>
              <p>Votes: {partyVotes.Congress}</p>
            </button>
          </div>
          <div className="party">
            <button onClick={() => incrementVote('AAP')}>
              <div className="dot green"></div>
              <p>AAP</p>
              <p>Votes: {partyVotes.AAP}</p>
            </button>
          </div>
          <div className="party">
            <button onClick={() => incrementVote('TMC')}>
              <div className="dot orange"></div>
              <p>TMC</p>
              <p>Votes: {partyVotes.TMC}</p>
            </button>
          </div>
          <div className="party">
            <button onClick={() => incrementVote('ShivSena')}>
              <div className="dot purple"></div>
              <p>Shiv Sena</p>
              <p>Votes: {partyVotes.ShivSena}</p>
            </button>
          </div>
        </div>

        
        <div className="total-votes">
          <div className="total-box">
            <p>Total Votes: {totalVotes}</p>
          </div>
        </div>

        {/* Reset Button */}
        <div className="reset-votes">
          <button onClick={resetVotes} className="reset-button">
            Reset Votes
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
