import  { useState, useEffect } from 'react';
import './App.css';
import Room from './components/Room/Room';
import BirthdayText from './components/BirthdayText/BirthdayText';
import Character from './components/Character/Character';
import Cake from './components/Cake/Cake';
import PartyPeople from './components/PartyPeople/PartyPeople';
import { Howl } from 'howler';
import FromText from './components/FromText';
function App() {
  const [stage, setStage] = useState(0);
  const [showCake, setShowCake] = useState(false);
  const [showParty, setShowParty] = useState(false);
  const [sound, setSound] = useState(null);

  // Initialize sound when component mounts
  useEffect(() => {
    const birthdaySound = new Howl({
      src: ['/birthday-song.mp3'], // Make sure the file is in public folder
      loop: true,
      volume: 0.5,
      onloaderror: () => console.error('Error loading sound'),
      onplayerror: () => console.error('Error playing sound')
    });
    
    setSound(birthdaySound);

    // Cleanup on unmount
    return () => {
      if (birthdaySound) {
        birthdaySound.unload();
      }
    };
  }, []);


  const handleStart = () => {
    setStage(1);
    sound.play();
    setTimeout(() => setStage(2), 2000);
    setTimeout(() => setShowCake(true), 4000);
    setTimeout(() => setShowParty(true), 6000);
  };

  return (
    <div className="app">
      {stage >= 1 && <BirthdayText />}
      <Room stage={stage} />
      {stage === 0 && (
        <button className="start-button" onClick={handleStart}>
          Click to Start
        </button>
      )}
      {stage >= 2 && <Character />}
      
      {showCake && <Cake />}
      {showParty && <PartyPeople />}
      <FromText/>
    </div>
  );
}

export default App;