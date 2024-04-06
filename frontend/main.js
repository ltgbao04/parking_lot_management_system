navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');

    video1.srcObject = stream;
    video2.srcObject = stream;

    video1.onloadedmetadata = function(e) {
        video1.play();
    };

    video2.onloadedmetadata = function(e) {
        video2.play();
    };
})
.catch(function(err) {
    console.log("An error occurred: " + err);
});