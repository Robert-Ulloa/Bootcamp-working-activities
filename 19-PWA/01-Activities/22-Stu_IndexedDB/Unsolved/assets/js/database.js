import { openDB } from 'idb'; // Import the openDB function from the idb package to work with IndexDB

const initdb = async () =>

// TODO: Add a comment explaining what this method does
//initialize the database asynchronously
  
  //Open  a new or existing IndexDB database named 'todos' with version 1
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    // This method is called when the database is created or when its versrion is upgrated.
    upgrade(db) {
      // Check if the 'todos' object store already exists in the database
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // If the 'todos' object store doesn't exist, create it
      //the object store will hold data  entries, and each entry will have a unique 'id' that  auto-increments
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
