


const firebaseConfig = {
    // apiKey: "AIzaSyAYscBBR-FLTJxiS4eDKgzWbwbuYmOOeNs",
    // authDomain: "no-sql-33b56.firebaseapp.com",
    // projectId: "no-sql-33b56",
    // storageBucket: "no-sql-33b56.appspot.com",
    // messagingSenderId: "884130291682",
    // appId: "1:884130291682:web:97af91d916c4ada97fa3bb",
    // measurementId: "G-HL9TQ4KMXS"
    databaseURL: "https://veterinaria-8318d-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

let article_id = 1;
let article = {
    'title': 'Conectar Firebase con tu app de JavaScript',
}

// firebase.database().ref('articles/' + article_id).set(article);

firebase.database().ref('articles/' + article_id).once('value').then(
    function (snapshot) {
        var title = snapshot.val().title;
        console.log(title);
    }
)
