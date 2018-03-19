import { AsyncStorage } from 'react-native';

const KEY_DECKS = 'KEY_DECKS';
const KEY_DECK = 'KEY_DECK';
const KEY_SAVE_DECK = 'KEY_SAVE_DECK';
const KEY_ADD_CARD_TO_DECK = 'KEY_ADD_CARD_TO_DECK';

export const getDeck = () => AsyncStorage.getItem(KEY_DECK);
export const getDecks = () => AsyncStorage.getItem(KEY_DECKS);
export const saveDeckTitle = (value) => AsyncStorage.setItem(KEY_SAVE_DECK, JSON.stringify(value));
export const addCardToDeck = (value) => AsyncStorage.setItem(KEY_ADD_CARD_TO_DECK, JSON.stringify(value));