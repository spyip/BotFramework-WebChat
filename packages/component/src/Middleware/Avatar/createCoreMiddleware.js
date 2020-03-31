import React from 'react';

import BasicAvatar from '../../BasicAvatar';
import concatMiddleware from '../concatMiddleware';

export default function createCoreAvatarMiddleware() {
  return concatMiddleware(() => () => ({ fromUser, styleOptions }) => {
    const { botAvatarImage, botAvatarInitials, userAvatarImage, userAvatarInitials } = styleOptions;

    if (fromUser ? userAvatarImage || userAvatarInitials : botAvatarImage || botAvatarInitials) {
      return () => <BasicAvatar fromUser={fromUser} />;
    }

    return false;
  });
}
