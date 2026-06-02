"use client";
import { useRef, useState } from "react";

type VideoCardProps = {
  videoUrl: string;
  authorName: string;
  description: string;
  likesCount: number;
};

export default function VideoCard({
  videoUrl,
  authorName,
  description,
  likesCount,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(likesCount);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }

    setIsLiked(!isLiked);
  };

  return (
    <section className="relative flex h-screen snap-start items-center justify-center bg-black">
      <div className="relative h-screen w-full overflow-hidden bg-black md:aspect-[9/16] md:h-[90vh] md:w-auto md:rounded-3xl">
        <video
          ref={videoRef}
          src={videoUrl}
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          onClick={handleTogglePlay}
        />

        {!isPlaying && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black/50 px-6 py-4 text-4xl text-white">
              ▶
            </div>
          </div>
        )}

        <div className="absolute bottom-24 left-4 right-20 text-white">
          <h2 className="text-lg font-bold">@{authorName}</h2>
          <p className="mt-2 text-sm">{description}</p>
        </div>

        <div className="absolute bottom-28 right-4 flex flex-col items-center gap-5 text-white">
          <button
            onClick={handleLike}
            className="flex flex-col items-center transition-all"
          >
            <span
              className={`text-4xl transition-colors ${
                isLiked ? "text-red-500" : "text-white"
              }`}
            >
              ♥
            </span>

            <span className="text-xs">{likes}</span>
          </button>

          <button className="flex flex-col items-center">
            <span className="text-3xl">💬</span>
            <span className="text-xs">Comment</span>
          </button>

          <button className="flex flex-col items-center">
            <span className="text-3xl">↗</span>
            <span className="text-xs">Share</span>
          </button>
        </div>
      </div>
    </section>
  );
}
