/* eslint-disable import/prefer-default-export */
export const formatInvolvment = roles =>
  roles.map(role => role.involvment.document[0].data.involvment.text)
