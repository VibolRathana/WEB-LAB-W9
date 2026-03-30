import React, { useState } from "react";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [logs, setLogs] = useState([]);
  const [round, setRound] = useState(0);

  const gameOver = playerHealth <= 0 || monsterHealth <= 0;

  let winner = "";
  if (playerHealth <= 0 && monsterHealth <= 0) {
    winner = "Draw";
  } else if (playerHealth <= 0) {
    winner = "Monster Wins";
  } else if (monsterHealth <= 0) {
    winner = "Player Wins";
  }

  const canUseSpecial = round % 3 === 0 && round !== 0;

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  const attackHandler = () => {
    const damage = getRandomValue(5, 12);
    const monsterDamage = getRandomValue(8, 15);

    setMonsterHealth(prev => Math.max(prev - damage, 0));
    setPlayerHealth(prev => Math.max(prev - monsterDamage, 0));

    setLogs(prev => [
      createLogAttack(true, damage),
      createLogAttack(false, monsterDamage),
      ...prev
    ]);

    setRound(prev => prev + 1);
  };

  const healHandler = () => {
    const heal = getRandomValue(8, 20);
    const monsterDamage = getRandomValue(8, 15);

    setPlayerHealth(prev => {
      let newHealth = prev + heal;
      if (newHealth > 100) newHealth = 100;
      return Math.max(newHealth - monsterDamage, 0);
    });

    setLogs(prev => [
      createLogHeal(heal),
      createLogAttack(false, monsterDamage),
      ...prev
    ]);

    setRound(prev => prev + 1);
  };

  const specialAttackHandler = () => {
    if (!canUseSpecial) return;

    const damage = getRandomValue(10, 25);
    const monsterDamage = getRandomValue(8, 15);

    setMonsterHealth(prev => Math.max(prev - damage, 0));
    setPlayerHealth(prev => Math.max(prev - monsterDamage, 0));

    setLogs(prev => [
      createLogAttack(true, damage),
      createLogAttack(false, monsterDamage),
      ...prev
    ]);

    setRound(prev => prev + 1);
  };

  const giveUpHandler = () => {
    setPlayerHealth(0);
  };

  const restartGame = () => {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setLogs([]);
    setRound(0);
  };

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  const renderLogs = () => {
    return logs.map((log, index) => (
      <li
        key={index}
        style={{ color: log.isPlayer ? "blue" : "red" }}
      >
        {log.isPlayer ? "Player" : "Monster"}
        {log.text}
      </li>
    ));
  };

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <div>
      <h1>Monster Slayer</h1>

      {/* Player */}
      <div>
        <h2>Player</h2>
        <div style={{ background: "gray", height: "20px" }}>
          <div
            style={{
              width: playerHealth + "%",
              background: "green",
              height: "100%"
            }}
          ></div>
        </div>
      </div>

      {/* Monster */}
      <div>
        <h2>Monster</h2>
        <div style={{ background: "gray", height: "20px" }}>
          <div
            style={{
              width: monsterHealth + "%",
              background: "red",
              height: "100%"
            }}
          ></div>
        </div>
      </div>

      {/* Controls */}
      {!gameOver && (
        <div>
          <button onClick={attackHandler}>Attack</button>
          <button onClick={healHandler}>Heal</button>
          <button onClick={specialAttackHandler} disabled={!canUseSpecial}>
            Special Attack
          </button>
          <button onClick={giveUpHandler}>Give Up</button>
        </div>
      )}

      {/* Game Over */}
      {gameOver && (
        <div>
          <h3>{winner}</h3>
          <button onClick={restartGame}>New Game</button>
        </div>
      )}

      {/* Logs */}
      <ul>{renderLogs()}</ul>
    </div>
  );
}

export default Game;