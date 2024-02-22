
console.log("welcome to spotify")
let index=1;
let audioElement=new Audio(`${index}.mp3`)
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songitems=Array.from(document.getElementsByClassName('songitem'))
let time=document.getElementById('name');
let mastersongname=document.getElementById('name')

// le 
// audioElement.play()

let songs=[
    {SongName:"up&down", filePath: "1.mp3",coverPath: "cover1.avif"},
    {SongName:"apa fer milange", filePath: "2.mp3",coverPath: "cover2.jpg"},
    {SongName:"ram aayenge", filePath: "3.mp3",coverPath: "cover3.jpeg"},
    {SongName:"jai shree ram", filePath: "4.mp3",coverPath: "cover4.avif"},
    {SongName:"ram", filePath: "5.mp3",coverPath: "cover5.avif"},
    {SongName:"ramji", filePath: "6.mp3",coverPath: "cover6.jpg"},
]



// handle play/pauseclick
songitems.forEach((element,i)=>{
    console.log(element,i);
    let a=element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    let b=element.getElementsByClassName('songs')[0].innerHTML=songs[i].SongName;

    console.log(a)
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity="1"
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity="0"
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    // updateseek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration/100);  
})
// let a=audioElement.duration;
// console.log(a)
// audioElement.currentTime=(myProgressBar.value*audioElement.duration/100);
// document.getElementById('name').innerHTML=audioElement

// {async ()=>{
//     await console.log(audioElement.duration);
// }}
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');    
    element.classList.add('fa-play-circle');
    })
}
    masterPlay.addEventListener('click',()=>{
    if(masterPlay.classList.contains('fa-play-circle')){
        mastersong()
        console.log("fadu")
    }
    else{
        console.log("Deepanshu")
    }
})



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeAllPlays()
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${index}.mp3`;
        mastersongname.innerHTML=songs[index-1].SongName
        audioElement.currentTime=0;
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity="1"
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        
        
            // e.target.classList.remove('fa-pause-circle');
            // e.target.classList.add('fa-play-circle');
            // masterPlay.classList.remove('fa-play-circle')
            // masterPlay.classList.add('fa-pause-circle');
        
        })
})
document.getElementById('next').addEventListener('click',()=>{
    if(index>=6){
        index=1;
    }
    else{
        index+=1;
       
    }
    audioElement.src=`${index}.mp3`;
    audioElement.currentTime=0;
    mastersongname.innerHTML=songs[index-1].SongName
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=1){
        index=6;
    }
    else{
        index-=1;
       
    }
    audioElement.src=`${index}.mp3`;
    audioElement.currentTime=0;
    mastersongname.innerHTML=songs[index-1].SongName
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle');
})
// masterPlay.addEventListener('onkeydown',()=>{
//     // if(Key=="spacebar"){
//     audioElement.pause();
//     masterPlay.classList.toggle('fa-play-circle')
//     masterPlay.classList.toggle('fa-pause-circle');
// // }else{
//     // audioElement.play()
// })
document.body.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
})
// if(masterPlay.className=='fa-pause-circle'){
//     mastersong();
// }
const mastersong=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
    
}
// const makeAllPlays=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.classList.remove('fa-pause-circle');    
//     element.classList.add('fa-play-circle');
//     })
// }
// document.body.add
// EventListener('contextmenu', (event) => {
//     event.preventDefault();
// });
