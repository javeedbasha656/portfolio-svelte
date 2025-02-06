<script lang="ts">
  let particles: any[] = $state([]);

  const createParticle = () => {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.2,
      id: Math.random().toString(),
    };
  };

  function updateParticles(prevParticles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; id: string; }[]) {
    particles = prevParticles.map((particle) => ({
      ...particle,
      x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
      y:
        (particle.y + particle.speedY + window.innerHeight) %
        window.innerHeight,
    }));
  }

  $effect(() => {
    const particleCount = 50;
    const initialParticles = Array.from({ length: particleCount }, () =>
      createParticle()
    );
    particles = initialParticles;
  });

  $effect(() => {
    const animateParticles = () => {
      updateParticles(particles);
    };

    const animationFrame = requestAnimationFrame(function animate() {
      animateParticles();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  });
</script>

<div class="fixed inset-0 pointer-events-none">
  {#each particles as particle}
    <div
      class="absolute rounded-full bg-blue-900 mix-blend-color"
      style="left: {particle.x}px; top: {particle.y}px; width: {particle.size}px; height: {particle.size}px; opacity: {particle.opacity}; transform: translate(-50%, -50%); box-shadow: 0 0 {particle.size * 2}px rgba(255,255,255,{particle.opacity});"
    ></div>
  {/each}
</div>
