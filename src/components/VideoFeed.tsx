import { videos } from "@/src/data/videos";
import VideoCard from "./VideoCard";

export default function VideoFeed() {
  return (
   <main className="h-screen snap-y snap-mandatory overflow-y-scroll md:ml-56">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </main>
  );
}