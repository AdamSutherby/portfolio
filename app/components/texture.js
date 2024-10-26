'use client'

const NoiseTexture = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          filter: 'contrast(300%) brightness(100%)',
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default NoiseTexture;