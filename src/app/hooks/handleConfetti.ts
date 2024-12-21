import confetti from 'canvas-confetti';

export const handleConfetti = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  confetti({
    particleCount: 300,
    angle: 90,
    spread: 180,
    startVelocity: 40,
    ticks: 500,
    gravity: 1.5,
    decay: 0.94,
    colors: ['#0A192F', '#FFFFFF', '#E6007A', '#64FFDA', '#8892B0'],
    shapes: ['square', 'circle'],
    origin: { x: 0.5, y: 0.5 },
  });

  const link = document.createElement('a');
  link.href = '/documents/jack-crawford-cv.pdf';
  link.download = 'jack-crawford-cv.pdf';
  link.click();
};
