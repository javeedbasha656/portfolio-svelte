export const animatedStyles = `
@keyframes move-slow {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(10deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}

@keyframes move-medium {
  0% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(-30px) rotate(-10deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
}

@keyframes move-fast {
  0% {
    transform: translate(0) rotate(0);
  }
  50% {
    transform: translate(-40px, -40px) rotate(20deg);
  }
  100% {
    transform: translate(0) rotate(0);
  }
}

.animate-move-slow {
  animation: move-slow 5s infinite;
}

.animate-move-medium {
  animation: move-medium 3s infinite;
}

.animate-move-fast {
  animation: move-fast 2s infinite;
}
`;
