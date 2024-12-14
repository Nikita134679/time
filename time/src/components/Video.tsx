import React from 'react';
import DateTimeWithPretty from './DateTimePretty';

interface VideoProps {
  url: string;
  date: string;
}

const Video: React.FC<VideoProps> = ({ url, date }) => {
  return (
    <div className="video">
      <iframe
        src={url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {/* Используем DateTimeWithPretty, который уже передает форматированную дату */}
      <DateTimeWithPretty date={date} />
    </div>
  );
};

export default Video;

