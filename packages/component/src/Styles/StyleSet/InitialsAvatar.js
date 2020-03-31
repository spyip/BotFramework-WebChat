export default function createInitialsAvatarStyle({
  accent,
  avatarSize,
  botAvatarBackgroundColor,
  primaryFont,
  userAvatarBackgroundColor
}) {
  return {
    '&.webchat__initials-avatar': {
      alignItems: 'center',
      color: 'White',
      fontFamily: primaryFont,
      height: avatarSize,
      justifyContent: 'center',
      overflow: 'hidden',
      width: avatarSize,

      '&.webchat__initials-avatar--from-user': {
        backgroundColor: userAvatarBackgroundColor || accent
      },

      '&:not(.webchat__initials-avatar--from-user)': {
        backgroundColor: botAvatarBackgroundColor || accent
      }
    }
  };
}
