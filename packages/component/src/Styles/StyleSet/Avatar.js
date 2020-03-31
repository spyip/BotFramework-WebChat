export default function createBasicAvatarStyle({ avatarBorderRadius, avatarSize }) {
  return {
    '&.webchat__basic-avatar': {
      borderRadius: avatarBorderRadius,
      height: avatarSize,
      width: avatarSize
    }
  };
}
