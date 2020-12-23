var firebaseConfig = {
    apiKey: "AIzaSyCpto07mH4pN93K1woTRN9A_BQeohkUICY",
    authDomain: "user-system-4eb8e.firebaseapp.com",
    databaseURL: "https://user-system-4eb8e-default-rtdb.firebaseio.com",
    projectId: "user-system-4eb8e",
    storageBucket: "user-system-4eb8e.appspot.com",
    messagingSenderId: "36559536854",
    appId: "1:36559536854:web:88d590092786a24f55ff77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var color;
  var red = 0;
  var blue = 0;
  var yellow = 0;

  firebase.firestore().collection("colors").doc("red")
    .onSnapshot((doc) => {
        red = doc.data().count
        myChart.data.datasets.forEach((dataset) => {
            dataset.data[0] = red
            document.getElementById('btn1').textContent = red;
        });
        myChart.update();
    });

    firebase.firestore().collection("colors").doc("blue")
    .onSnapshot((doc) => {
        blue = doc.data().count
        myChart.data.datasets.forEach((dataset) => {
            dataset.data[1] = blue
            document.getElementById('btn2').textContent = blue;
        });
        myChart.update();
    });

    firebase.firestore().collection("colors").doc("yellow")
    .onSnapshot((doc) => {
        yellow = doc.data().count
        myChart.data.datasets.forEach((dataset) => {
            dataset.data[2] = yellow
            document.getElementById('btn3').textContent = yellow;
        });
        myChart.update();
    });



var ctx = document.getElementById('bar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            
        {
                label: '# of Votes',
                data: [0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    // 'rgba(75, 192, 192, 0.2)',
                    // 'rgba(153, 102, 255, 0.2)',
                    // 'rgba(255, 159, 64, 0.2)',
                ],
                borderWidth: 1
        },
        
    
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

document.getElementById('btn1').addEventListener('click', () => {
    firebase.firestore().collection('colors').doc('red').set({count: red + 1})
})


document.getElementById('btn2').addEventListener('click', () => {
    firebase.firestore().collection('colors').doc('blue').set({count: blue + 1})
})


document.getElementById('btn3').addEventListener('click', () => {
    firebase.firestore().collection('colors').doc('yellow').set({count: yellow + 1})
})