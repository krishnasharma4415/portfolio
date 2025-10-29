// Force simulation Web Worker
self.onmessage = function(e) {
  const { nodes, connections, width, height, physics, iterations = 300 } = e.data;
  
  const simulation = [...nodes];
  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < iterations; i++) {
    // Apply forces
    simulation.forEach((node, index) => {
      if (node.isPinned) return;

      let fx = 0, fy = 0;

      // Center force
      fx += (centerX - node.x) * physics.centerForce;
      fy += (centerY - node.y) * physics.centerForce;

      // Repulsion force between nodes
      simulation.forEach((other, otherIndex) => {
        if (index === otherIndex) return;
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const repulsion = physics.repulsion / (distance * distance);
        fx += (dx / distance) * repulsion;
        fy += (dy / distance) * repulsion;
      });

      // Attraction force for connected nodes
      connections.forEach(conn => {
        const isSource = conn.from === node.id;
        const isTarget = conn.to === node.id;
        if (!isSource && !isTarget) return;

        const otherId = isSource ? conn.to : conn.from;
        const other = simulation.find(n => n.id === otherId);
        if (!other) return;

        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const attraction = conn.strength * physics.attraction;
        fx += (dx / distance) * attraction;
        fy += (dy / distance) * attraction;
      });

      // Category clustering force
      const categoryNodes = simulation.filter(n => n.category === node.category && n.id !== node.id);
      categoryNodes.forEach(other => {
        const dx = other.x - node.x;
        const dy = other.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const clustering = 50 / distance;
        fx += (dx / distance) * clustering * 0.01;
        fy += (dy / distance) * clustering * 0.01;
      });

      // Apply velocity damping
      node.vx = (node.vx + fx) * physics.damping;
      node.vy = (node.vy + fy) * physics.damping;

      // Update position
      node.x += node.vx;
      node.y += node.vy;

      // Keep nodes within bounds
      const margin = 50;
      node.x = Math.max(margin, Math.min(width - margin, node.x));
      node.y = Math.max(margin, Math.min(height - margin, node.y));
    });

    // Send progress updates every 50 iterations
    if (i % 50 === 0) {
      self.postMessage({
        type: 'progress',
        progress: i / iterations,
        nodes: simulation
      });
    }
  }

  // Send final result
  self.postMessage({
    type: 'complete',
    nodes: simulation
  });
};