import { writable, readable } from 'svelte/store';

export const user = writable("");
export const offset = writable(0);
export const db = "https://regex-annotate-default-rtdb.firebaseio.com/"