import * as firebase from 'firebase' // taking all named exports and importing into firebase variable

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// // child_removed event (when a child from an 'array' is removed from database)
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed event
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added event
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     // Creating a new array from what comes back from our Database. Taking an object and converting to array (forEach method in Firebase)
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key, // key is equal to the string name in the DB, so we use it as an ID
// //         ...childSnapshot.val() // spreading out the object we got since we don't want to name all the properties
// //       });
// //     });
// //   });

// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     })

// //     console.log(expenses);
// //   })

// // database.ref('expenses/-LCSY-imWGHmRY-DnhT0').update({
// //   description: 'New Mouse'
// // });

// // database.ref('notes').set(notes);

// // database.ref().on('value', (snapshot) => {
// //   const data = snapshot.val();
// //   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// // })

// // // fetching data once
// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val(); // returns the data we requested
// //     console.log(val);
// //   }).catch((e) => {
// //     console.log('Error fetching data', e);
// // })

// // database.ref().set({
// //   name: 'Milos Dzeletovic',
// //   age: 30,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Smederevo',
// //     country: 'Serbia'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e);
// // });

// // // object must be provided with the update method
// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });

// // // wiping data with .set (use null)
// // database.ref('isSingle').set(null)

// // database.ref().remove().then(() => {
// //   console.log('Remove successful');
// // }).catch((e) => {
// //   console.log('Remove failed: ', e.message);
// // })
