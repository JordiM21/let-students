import React from 'react';
import Confetti from 'react-dom-confetti';

const ConfettiButton = () => {
  const [isConfettiVisible, setIsConfettiVisible] = React.useState(false);

  const handleConfettiClick = () => {
    setIsConfettiVisible(true);
  };

  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 40,
    elementCount: 50,
    dragFriction: 0.1,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#ff0000', '#00ff00', '#0000ff'],
  };

  return (
    <div>
      <h1>Confetti Button</h1>
      <button onClick={handleConfettiClick} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Celebrate Lesson Completion
      </button>
      <Confetti active={isConfettiVisible} config={config} />
    </div>
  );
};

export default ConfettiButton;
