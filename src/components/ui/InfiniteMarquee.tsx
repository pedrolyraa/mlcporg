export default function InfiniteMarquee() {
  const text = "MOVIMENTO MLCP";
  const separator = "•";

  const renderItems = () => {
    // Render enough items to comfortably fill the screen multiple times over
    return Array.from({ length: 10 }).map((_, i) => (
      <span key={i} className="flex items-center gap-8 mx-4">
        <span 
          className="text-[5rem] md:text-[10rem] leading-none font-black uppercase tracking-wider text-transparent" 
          style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.15)' }}
        >
          {text}
        </span>
        <span className="text-mlcp-red text-4xl">{separator}</span>
      </span>
    ));
  };

  return (
    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden py-4 flex items-center select-none pointer-events-none">
      <div className="flex whitespace-nowrap w-max animate-marquee">
        <div className="flex">
          {renderItems()}
        </div>
        <div className="flex">
          {renderItems()}
        </div>
      </div>
    </div>
  );
}
