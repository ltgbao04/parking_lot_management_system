navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    var video1 = document.getElementById('video1');

    video1.srcObject = stream;

    video1.onloadedmetadata = function(e) {
        video1.play();
    };
})
.catch(function(err) {
    console.log("An error occurred: " + err);
});
