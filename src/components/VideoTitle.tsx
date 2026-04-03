interface VideoTitleProps {
     title: string;
     video: string;
}

export default function VideoTitle({ title, video }: VideoTitleProps) {
     return (
          <div className="relative h-full overflow-hidden isolate">
               <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
               >
                    <source src={video} type="video/mp4" />
               </video>

               <div className="relative z-10 text-white text-center">
                    <h1 className="text-9xl font-bold uppercase">{title}</h1>
               </div>
          </div>
     );
}
