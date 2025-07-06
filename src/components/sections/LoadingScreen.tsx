import React from 'react';

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold text-white" style={{
          textShadow: '0 0 10px hsl(var(--neon-blue)), 0 0 20px hsl(var(--neon-blue)), 0 0 30px hsl(var(--neon-blue))'
        }}>
          DARANIDARAN S
        </h1>
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full loading-bar rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xl text-white font-semibold">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;