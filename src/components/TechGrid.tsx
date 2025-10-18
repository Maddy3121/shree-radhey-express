const TechGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--logistics-orange) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--logistics-orange) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, hsl(var(--logistics-orange) / 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, hsl(var(--corporate-blue) / 0.15) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
};

export default TechGrid;
