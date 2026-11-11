import {useEffect,useState} from "react";
import {animeFrames} from "../game/attack-images";
const people:Record<string,{name:string;initial:string;color:string;image?:string}>={엘빈:{name:"엘빈 스미스",initial:"E",color:"#b9a27b",image:"https://attackontitan.fandom.com/wiki/Special:Redirect/file/Erwin_Smith_(Anime)_character_image.png"},리바이:{name:"리바이 아커만",initial:"L",color:"#889e9c",image:"https://attackontitan.fandom.com/wiki/Special:Redirect/file/Levi_Ackermann_(Anime)_character_image.png"},미카사:{name:"미카사 아커만",initial:"M",color:"#9a7878",image:"https://attackontitan.fandom.com/wiki/Special:Redirect/file/Mikasa_Ackermann_(Anime)_character_image.png"},아르민:{name:"아르민 알레르토",initial:"A",color:"#c2ad77",image:"https://attackontitan.fandom.com/wiki/Special:Redirect/file/Armin_Arlelt_(Anime)_character_image.png"},한지:{name:"한지 조에",initial:"H",color:"#9d8d72",image:"https://attackontitan.fandom.com/wiki/Special:Redirect/file/Hange_Zo%C3%AB_(Anime)_character_image.png"}};
export function useTypewriter(text:string,speed=26){const [n,setN]=useState(0);useEffect(()=>{setN(0);const id=window.setInterval(()=>setN(v=>Math.min(text.length,v+1)),speed);return()=>clearInterval(id)},[text,speed]);return {shown:text.slice(0,n),done:n>=text.length,finish:()=>setN(text.length)}}
export function beep(type:"click"|"good"|"bad",muted:boolean){if(muted)return;try{const C=window.AudioContext;const ctx=new C();const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type=type==="bad"?"sawtooth":"triangle";osc.frequency.value=type==="good"?700:type==="bad"?170:460;gain.gain.setValueAtTime(.035,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.13);osc.connect(gain);gain.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime+.14);osc.onended=()=>{void ctx.close()}}catch{}}
export function Scene({index,speaker,children,mood="neutral"}:{index:number;speaker:string;children:React.ReactNode;mood?:"neutral"|"good"|"bad"}){
 const [broken,setBroken]=useState(false),[portraitBroken,setPortraitBroken]=useState(false),frame=animeFrames[index+1]??animeFrames[0],person=people[speaker]??people.엘빈;
 useEffect(()=>setBroken(false),[frame.url]);useEffect(()=>setPortraitBroken(false),[speaker]);
 return <div className={"aot-stage aot-location-"+index+" "+(mood==="bad"?"aot-shake":"")} key={index}>
 <div className="aot-backdrop" key={frame.url}>{!broken&&<img src={frame.url} alt="" onError={()=>setBroken(true)} />}</div>
 <div className="aot-fog"/><div className="aot-vignette"/>
 <div className="aot-stage-label">SURVEY CORPS <span>·</span> EXPEDITION {String(index+1).padStart(2,"0")}</div>
 <div className="aot-cast" aria-label={person.name+"의 등장 연출"}>
 
 <div key={speaker} className={"aot-soldier aot-active "+(mood==="good"?"aot-good":"")} style={{"--accent":person.color} as React.CSSProperties}>{person.image&&!portraitBroken?<img className="aot-portrait" src={person.image} alt={person.name} onError={()=>setPortraitBroken(true)}/>:<><div className="aot-head"/><div className="aot-cloak"/><div className="aot-body"><span className="aot-emblem">{person.initial}</span></div></>}<div className="aot-person-name">{person.name}</div></div>
 </div>
 <div className="aot-dialogue">{children}</div>
 
 </div>
}
