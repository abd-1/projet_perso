export const ECRIRE_UN_MESSAGE = 'ECRIRE_UN_MESSAGE';

export const ecrireMessage = message => ({
  type: ECRIRE_UN_MESSAGE,
  payload: message
});
