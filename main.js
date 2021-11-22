function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CBSIh76dB/model.json',modelReady)
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255) + 1;
        random_number_g= Math.floor(Math.random()*255) + 1;
        random_number_b= Math.floor(Math.random()*255) + 1;
    
        document.getElementById("result_label").innerHTML= results[0].label;
        document.getElementById("result_accuracy").innerHTML= (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("result_accuracy").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    
    img1=document.getElementById("cat.gif");
    img2=document.getElementById("46sy.gif");
    img3=document.getElementById("ZHug.gif");
    img4=document.getElementById("snake.gif.crdownload");
    
    if(results[0].label=="cat"){
    img1.src="cat.gif";
    }
    else if(results[0].label=="dog"){
        img2.src="46sy.gif";
    }
    else if(results[0].label=="crow"){
        img3.src="ZHug.gif";
    }
    else(results[0].label=="snake")
        img4.src="snake.gif.crdownload";
    }
    
    }