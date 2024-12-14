import React from 'react';
import Video from './Video';

interface VideoListProps {
  list: Array<{ url: string; date: string }>;
}

const VideoList: React.FC<VideoListProps> = ({ list }) => {
  return (
    <>
      {list.map((item, index) => (
        <Video key={index} url={item.url} date={item.date} />
      ))}
    </>
  );
};

export default VideoList;
