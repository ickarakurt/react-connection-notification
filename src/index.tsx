import React, { useEffect, useState } from 'react';
import wifi from './images/wifi.svg';
import nowifi from './images/no-wifi.svg';
import close from './images/close.svg';

interface ConnectionNotificationProps {
  onlineText?: string;
  offlineText?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  duration?: number;
  disableDuration?: boolean;
  hideDismissButton?: boolean;
  hideIcon?: boolean;
  onlineIcon?: string;
  offlineIcon?: string;
  style?: React.CSSProperties;
}

function ConnectionNotification({
  onlineText = 'You are online now.',
  offlineText = 'You are offline now.',
  hideDismissButton = false,
  hideIcon = false,
  onlineIcon = wifi,
  offlineIcon = nowifi,
  position = 'bottom-left',
  duration = 2000,
  disableDuration = false,
  style = {},
}: ConnectionNotificationProps) {
  const [isHidden, setIsHidden] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  const styles = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#ffffff',
    padding: '15px',
    width: '100%',
    maxWidth: '300px',
    boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
    color: '#000000',
    fontSize: '1rem',
    minWidth: '320px',
  } as React.CSSProperties;

  const onlineHandler = () => {
    setIsOnline(true);
    setIsHidden(false);

    if (!disableDuration) {
      setTimeout(() => {
        setIsHidden(true);
      }, duration);
    }
  };

  const offlineHandler = () => {
    setIsOnline(false);
    setIsHidden(false);

    if (!disableDuration) {
      setTimeout(() => {
        setIsHidden(true);
      }, duration);
    }
  };

  useEffect(() => {
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  const notificationPosition = () => {
    switch (position) {
      case 'top-left':
        return { top: 10, left: 10 };
      case 'top-right':
        return { top: 10, right: 10 };
      case 'bottom-left':
        return { bottom: 10, left: 10 };
      case 'bottom-right':
        return { bottom: 10, right: 10 };
      default:
        return { bottom: 10, left: 10 };
    }
  };

  if (!isHidden) {
    return (
      <div
        className="connectionNotification"
        style={{ ...styles, ...notificationPosition(), ...style }}
      >
        {!hideIcon && (
          <img
            src={isOnline ? onlineIcon : offlineIcon}
            width={30}
            height={30}
            className="connection-notification-icon"
            alt="connectionIcon"
            style={{ marginRight: '10px' }}
          />
        )}
        <span>{isOnline ? onlineText : offlineText}</span>
        {!hideDismissButton && (
          <img
            src={close}
            width={20}
            height={20}
            alt="dismissButton"
            className="connection-notification-dismiss-icon"
            style={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={() => setIsHidden(true)}
          />
        )}
      </div>
    );
  } else {
    return <></>;
  }
}

export default ConnectionNotification;
