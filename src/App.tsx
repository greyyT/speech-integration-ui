import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import audioLog from './data';

interface Audio {
  id: number;
  fileName: string;
  content: string;
  timeout: number;
}

const App = () => {
  const [audioFile, setAudioFile] = useState<Audio | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [variant, setVariant] = useState<'choose' | 'transcribe'>('choose');
  const audioRef = useRef<HTMLAudioElement>(null);

  const onChooseAudio = (audio: Audio) => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
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
    if (audioFile === null || audioRef.current === null) return;
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      setVariant('transcribe');
    }, 1000);
    setTimeoutId(timeoutId);
  };

  const onCancelTranscribe = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsLoading(false);
    setVariant('choose');
  };

  return (
    <>
      <Navbar />
      <main className="bg-main-bg pt-16 lg:pt-0 min-h-[calc(100vh-4rem)]">
        <div className="w-360 max-w-full mx-auto">
          <div className="pt-12 mx-auto w-187 max-w-full">
            <h1 className="mx-4 text-center">Quickly and accurately convert Vietnamese voice and audio into text</h1>
            <h3 className="text-lg font-lato font-normal mt-8">Choose these sample files to convert:</h3>
            {isLoading === false && variant === 'choose' && (
              <>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {audioLog.map((audio) => (
                    <div className="flex flex-col items-center justify-center" key={audio.id}>
                      <div
                        onClick={() => onChooseAudio(audio)}
                        className={`flex flex-col p-4 items-center justify-center cursor-pointer rounded-sm ${
                          audioFile?.fileName === audio.fileName ? 'bg-slate-200' : 'hover:bg-slate-200'
                        }`}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1324/1324071.png"
                          alt=""
                          className="w-16 h-16"
                        />
                        <p
                          className={`text-center mt-2 ${
                            audioFile?.fileName === audio.fileName ? 'text-primary font-semibold' : 'text-black'
                          }`}
                        >
                          {audio.fileName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center mt-4 gap-4">
                  <div className="flex items-center justify-center gap-4">
                    <span
                      onClick={onPlay}
                      className={`material-symbols-outlined text-[40px] ${
                        audioFile ? 'cursor-pointer hover:text-primary transition-all' : 'cursor-not-allowed'
                      }`}
                    >
                      {isPlaying ? 'pause' : 'play'}_circle
                    </span>
                    <span
                      onClick={onPlay}
                      className={`material-symbols-outlined text-[40px] ${
                        audioFile ? 'cursor-pointer hover:text-primary transition-all' : 'cursor-not-allowed'
                      }`}
                    >
                      replay
                    </span>
                  </div>
                  <button
                    onClick={onTranscribe}
                    className={`text-primary border border-solid border-primary px-4 py-2 rounded-xl ${
                      audioFile ? 'hover:bg-primary hover:text-white transition-all' : 'cursor-not-allowed'
                    }`}
                  >
                    Transcribe
                  </button>
                </div>
              </>
            )}
            {isLoading && (
              <div className="flex flex-col gap-2 items-center justify-center mt-4">
                <div className="flex flex-col items-center justify-center">
                  <div className={`flex flex-col items-center justify-center rounded-sm`}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1324/1324071.png" alt="" className="w-16 h-16" />
                    <p className={`text-center mt-2`}>{audioFile?.fileName}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-primary hover:bg-opacity-80 transition ease-in-out duration-150 cursor-not-allowed"
                  disabled
                >
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
                </button>
                <p className="font-lato">
                  Transcribing audio. Click{' '}
                  <span onClick={onCancelTranscribe} className="text-primary cursor-pointer font-semibold">
                    here
                  </span>{' '}
                  to cancel the process.
                </p>
              </div>
            )}
            {variant === 'transcribe' && isLoading === false && (
              <>
                <div className="flex gap-8 items-center justify-center mt-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className={`flex flex-col items-center justify-center rounded-sm`}>
                      <img src="https://cdn-icons-png.flaticon.com/512/1324/1324071.png" alt="" className="w-16 h-16" />
                      <p className={`text-center mt-2`}>{audioFile?.fileName}</p>
                    </div>
                    <div className="flex items-center justify-center mt-2 gap-4">
                      <span
                        onClick={onPlay}
                        className={`material-symbols-outlined text-[40px] cursor-pointer hover:text-primary transition-all`}
                      >
                        {isPlaying ? 'pause' : 'play'}_circle
                      </span>
                      <span
                        onClick={onReplay}
                        className="material-symbols-outlined text-[40px] cursor-pointer hover:text-primary transition-all"
                      >
                        replay
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg">Audio Content:</h3>
                    <p className="mt-2 text-justify">{audioFile?.content}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button
                    onClick={() => setVariant('choose')}
                    className="text-primary border border-solid border-primary px-4 py-2 rounded-xl hover:bg-primary hover:text-white transition-all"
                  >
                    Change Sample
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <audio ref={audioRef} src={`/audios/${audioFile?.fileName}`}></audio>
      </main>
    </>
  );
};

export default App;
