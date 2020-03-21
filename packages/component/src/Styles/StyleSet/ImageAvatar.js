export default function createImageAvatarStyle({ avatarSize }) {
  return {
    '&.webchat__image-avatar': {
      height: avatarSize,
      overflow: 'hidden',
      width: avatarSize
    }
  };
}
