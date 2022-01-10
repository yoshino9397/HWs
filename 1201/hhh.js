var arr=[{name:"John",score1:47,score2:46},{name:"Bob",score1:23,score2:24},{name:"Nick",score1:40,score2:35},{name:"Alex",score1:44,score2:45}]
var scores=[91,81,71,61,51]
var degrees=["A","B","C","D","E"]

function add(score1, score2){
var sum;
sum = score1 + score2;
return sum;
}

function result(){
    for(var i = 0;  i < arr.length; i++){
    var sum = add(arr[i].score1, arr[i].score2)
    if(sum >= 51){
    console.log(arr[i].name + 'Passed exam!')
    for(var x = 0; x < scores.length; x++){
    if(sum >= scores[x]){
    console.log('His score is ' + sum + ' points and he got a degree ' + degrees[x]);
    break;
}}
}else{
  console.log(arr[i].name + ' failed the exam.')
        }
    }
}
result();