interface VideoTitleProps {
     title: string;
     video: string;
}

export default function VideoTitle({ title, video }: VideoTitleProps) {
     const maskId = `video-text-mask-${title.toLowerCase().replace(/\s+/g, '-')}`;

     return (
          <div className="w-full max-w-[1200px] mx-auto leading-none">
               <svg
                    viewBox="0 0 1200 170"
                    className="w-full h-auto block"
                    role="img"
                    aria-label={title}
                    preserveAspectRatio="xMidYMid meet"
               >
                    <defs>
                         <mask id={maskId}>
                              <rect width="1200" height="170" fill="black" />
                              <text
                                   x="600"
                                   y="128"
                                   textAnchor="middle"
                                   fill="white"
                                   fontSize="128"
                                   fontWeight="700"
                                   letterSpacing="2"
                              >
                                   {title.toUpperCase()}
                              </text>
                         </mask>
                    </defs>

                    <foreignObject x="0" y="0" width="1200" height="170" mask={`url(#${maskId})`}>
                         <video
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="auto"
                              className="w-full h-full object-cover"
                         >
                              <source src={video} type="video/mp4" />
                         </video>
                    </foreignObject>
               </svg>
          </div>
     );
}
