import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import audioLog from './data';
import Footer from './components/Footer';

interface Audio {
  id: number;
  fileName: string;
  content: string;
  timeout: number;
}

const App = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const [audioFile, setAudioFile] = useState<Audio | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTranscribed, setIsTranscribed] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const onChooseAudio = (audio: Audio) => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
    setIsTranscribed(false);
    setAudioFile(audio);
  };

  const onPlay = () => {
    if (audioFile === null || audioRef.current === null) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const onReplay = () => {
    if (audioFile === null || audioRef.current === null) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const onTranscribe = () => {
    if (audioFile === null || audioRef.current === null || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsTranscribed(true);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="bg-main-bg pt-16 lg:pt-0">
        <div className="w-360 max-w-full mx-auto">
          <div className="mx-auto w-[916px] max-w-full py-52 gap-4 flex items-center justify-center">
            <div className="flex flex-col flex-1 max-w-full">
              <h1 className="w-[450px]">Quickly and accurately convert Vietnamese voice and audio into text</h1>
              <div className="mt-12">
                <a
                  href="https://aisia.vn/contact"
                  className="bg-white text-primary border border-solid border-primary hover:text-white hover:bg-primary transition-all px-8 py-3 text-lg font-medium"
                >
                  Request a Demo
                </a>
              </div>
            </div>
            <div className="flex flex-col h-full flex-1 bg-white shadow-course rounded-[4px] p-10">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="w-64 py-2 border-primary border border-solid flex items-center justify-between px-4 rounded-[2px] relative z-[60]"
                >
                  <p className="">{audioFile?.fileName || 'Choose an audio'}</p>
                  <span
                    className={`material-symbols-outlined ${openDropdown ? 'rotate-90' : 'rotate-0'} transition-all`}
                  >
                    chevron_right
                  </span>
                  {openDropdown && (
                    <div className="absolute top-full left-0 w-full bg-white border border-solid border-primary rounded-[2px] mt-2">
                      <div className="flex flex-col gap-2">
                        {audioLog
                          .filter((audio) => audio.id !== audioFile?.id)
                          .map((audio) => (
                            <div
                              key={audio.id}
                              onClick={() => onChooseAudio(audio)}
                              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all"
                            >
                              <p>{audio.fileName}</p>
                              <span className="material-symbols-outlined">play_circle</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </button>
                {openDropdown && <div onClick={() => setOpenDropdown(false)} className="fixed inset-0 z-50"></div>}
                <div className="flex gap-4">
                  <span
                    onClick={onPlay}
                    className={`material-symbols-outlined text-[32px] ${
                      audioFile ? 'cursor-pointer hover:text-primary transition-all' : 'cursor-not-allowed'
                    }`}
                  >
                    {isPlaying ? 'pause' : 'play'}_circle
                  </span>
                  <span
                    onClick={onReplay}
                    className={`material-symbols-outlined text-[32px] ${
                      audioFile ? 'cursor-pointer hover:text-primary transition-all' : 'cursor-not-allowed'
                    }`}
                  >
                    replay
                  </span>
                </div>
              </div>
              <button
                onClick={onTranscribe}
                className={`font-lato font-medium text-lg bg-primary text-white py-2 mt-4 ${
                  audioFile ? '' : 'cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Transcribe'
                )}
              </button>
              <h3 className="mt-4 text-base">Identified Text:</h3>
              <p className="px-4 py-2 text-justify h-[150px] overflow-auto border border-dashed border-gray-400 mt-2">
                {isTranscribed && audioFile?.content}
              </p>
            </div>
          </div>
          <div className="mx-4 lg:mx-15 xl:mx-19 2xl:mx-22 mt-12.5 lg:mt-15 line"></div>
        </div>
        <audio ref={audioRef} src={`./audios/${audioFile?.fileName}`}></audio>
      </main>
      <Footer />
    </>
  );
};

export default App;
