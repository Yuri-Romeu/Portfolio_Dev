import VideoTitle from '@/src/components/VideoTitle';

export default function Home() {
     return (
          <div>
               <div className="flex flex-col items-center justify-center m-18">
                    <h1 className="title">Yuri Romeu</h1>
                    <h1 className="title">Front-end</h1>
                    <VideoTitle title="Developer" video="/video/backgroundTitle.mp4" />
               </div>
          </div>
     );
}
