import React from 'react';

interface DateTimeProps {
  formattedDate: string;
}

const DateTime: React.FC<DateTimeProps> = ({ formattedDate }) => {
  return <p className="date">{formattedDate}</p>;
};

export default DateTime;
