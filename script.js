html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Segoe UI', sans-serif;
  background: #111;
  overflow: hidden;
}

canvas#bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #eee;
}

h1 {
  font-size: 3em;
  margin-bottom: 50px;
  color: #ff4d4d;
  text-shadow: 0 0 10px #ff4d4d, 0 0 20px #ff4d4d, 0 0 40px #ff4d4d;
}

.games {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.game-btn {
  padding: 20px 40px;
  font-size: 1.8em;
  text-decoration: none;
  color: #0f0;
  border: 3px solid #0f0;
  border-radius: 15px;
  text-shadow: 0 0 5px #0f0;
  transition: all 0.3s ease;
}

.game-btn:hover {
  color: #ff0;
  border-color: #ff0;
  text-shadow: 0 0 20px #ff0;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .game-btn { width: 80%; text-align: center; }
}
