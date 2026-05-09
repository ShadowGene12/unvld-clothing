import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLocation } from "react-router-dom";

// Map routes to different ambient soundscapes
const AUDIO_TRACKS: Record<string, string> = {
  default: "https://cdn.pixabay.com/download/audio/2022/02/10/audio_fc8cb98144.mp3?filename=dark-ambient-102553.mp3", // Dark ambient drone
  "/worlds/streetwear": "https://cdn.pixabay.com/download/audio/2021/08/04/audio_0625c1539c.mp3?filename=city-traffic-outdoor-6414.mp3", // City traffic
  "/worlds/japanese": "https://cdn.pixabay.com/download/audio/2021/08/09/audio_d145e14389.mp3?filename=bamboo-fountain-7861.mp3", // Zen fountain
  "/worlds/subtle": "https://cdn.pixabay.com/download/audio/2022/01/21/audio_1452445e95.mp3?filename=soft-rain-ambient-111154.mp3", // Soft rain
  "/worlds/ascend": "https://cdn.pixabay.com/download/audio/2021/09/06/audio_9741e17d91.mp3?filename=wind-in-trees-114620.mp3", // Mountain wind
};

const GlobalAudio = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.volume = 0.2; // Keep it subtle
    }

    // Determine the track based on location
    const trackUrl = AUDIO_TRACKS[location.pathname] || AUDIO_TRACKS.default;
    
    // If the track changed, update it
    if (audioRef.current.src !== trackUrl) {
      const wasPlaying = !audioRef.current.paused && !isMuted;
      audioRef.current.src = trackUrl;
      if (wasPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
    }
  }, [location.pathname, isMuted]);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.log("Auto-play prevented by browser:", e);
          setIsMuted(true); // Revert to muted if browser blocks it
        });
      }
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <button
      onClick={toggleMute}
      className="relative p-2 -mr-2 md:mr-0 hover:bg-accent transition-colors group flex items-center justify-center"
      aria-label={isMuted ? "Unmute ambient audio" : "Mute ambient audio"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 opacity-70 group-hover:opacity-100" />
      ) : (
        <Volume2 className="w-5 h-5 opacity-70 group-hover:opacity-100" />
      )}
      
      {/* Sound wave visualizer effect when playing */}
      {!isMuted && (
        <div className="absolute inset-0 rounded-full border border-foreground animate-ping opacity-20" style={{ animationDuration: '3s' }} />
      )}
    </button>
  );
};

export default GlobalAudio;
