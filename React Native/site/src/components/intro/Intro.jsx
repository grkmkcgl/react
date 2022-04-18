import "./intro.scss"
import {init} from 'ityped'
import {useEffect, useRef} from "react"

export default function Intro() {
    
    const textRef = useRef();
    const list = [
        {
            id: "face",
            img: "https://image.flaticon.com/icons/png/512/124/124010.png",
            link: "https://www.facebook.com/gorkem.kacakgil/",
        },
        {
            id: "youtube",
            img: "https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png",
            link: "https://www.youtube.com/channel/UCKRoK4bpqF8kYEagMMvsFTg",
            
        },
        {
            id: "linkedin",
            img: "assets/linkedin.png",
            link: "https://www.linkedin.com/in/g%C3%B6rkem-k-7165a41b7/",
        },
    ];

    useEffect(()=>{
        init(textRef.current,
            { showCursor: true,
              cursorChar: "|",
            strings: ["Developer","Designer"], })
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/ben.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there, I'm</h2>
                    <h1>Görkem KAÇAKGİL</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <div className="iconContainer">
                    {list.map(i => (
                        <ul>
                            <li>
                           <a href={i.link} target="_blank"><img src={i.img} alt="" /></a>
                           </li>
                        </ul>
                    ))}
                </div>
                <div className="arrowContainer">
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
                </div>
            </div>
        </div>
    )
}