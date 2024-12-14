import React from 'react';
import moment from 'moment';


const formatDate = (date: string): string => {
  const now = moment();
  const diff = now.diff(moment(date), 'minutes');

  if (diff < 60) {
    return `${diff} минут назад`;
  }

  const diffHours = now.diff(moment(date), 'hours');
  if (diffHours < 24) {
    return `${diffHours} часов назад`;
  }

  const diffDays = now.diff(moment(date), 'days');
  return `${diffDays} дней назад`;
};

const withDateTimePretty = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & { date: string }) => {
    const formattedDate = formatDate(props.date); 

    return <Component {...props} formattedDate={formattedDate} />;
  };
};

export default withDateTimePretty;
