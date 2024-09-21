// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
    const db = await openDB('contact_db', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts database already exists');
                return;
            }
            db.createObjectStore('contacts', { keypath: 'id', autoIncrement: true});
            console.log('contacts database created');
        },
    });
};

// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    const db = await openDB('contact_db', 1);
    const tx = db.transaction('contacts', 'readwrite');
    const store = tx.objectStore('contacts');
    await store.add({name, home, cell, email });
    console.log('Contact added to the database');
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
    const db = await openDB('contact_db', 1);
    const tx = db.transaction('contacts', 'readonly');
    const store = tx.objectStore('contacts');
    const allContacts = await store.getAll();
    console.log('Contacts retireved from the databse', allContacts);
    return allContacts;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    const db = await openDB('contact_db', 1);
    const tx = db.transaction('contacts', 'readwrite');
    const store = tx.objectStore('contacts');
    await store.delete(id);
    console.log('Contact deleted from the database', id);
};

initdb();
