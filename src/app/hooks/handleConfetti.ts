import confetti from 'canvas-confetti';

export const handleConfetti = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  confetti({
    particleCount: 100,
    angle: 90,
    spread: 180,
    startVelocity: 40,
    ticks: 500,
    gravity: 1.7,
    decay: 0.94,
    colors: ['#ffffff'],
    shapes: ['square', 'circle'],
    origin: { x: 0.5, y: 0.5 },
  });

  const link = document.createElement('a');
  link.href = '/documents/jack-crawford-cv.pdf';
  link.download = 'jack-crawford-cv.pdf';
  link.click();
};
