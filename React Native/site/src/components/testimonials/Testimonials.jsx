import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Hayri Hayrioğlu",
            title: "Senior Developer",
            img:
                "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            icon: "assets/twitter.png",
            desc:
                "Bu adam işini biliyor.",
        },
        {
            id: 2,
            name: "Elon Musk",
            title: "CEO of Tesla and SpaceX",
            img:
                "assets/elon_musk.jpg",
            icon: "assets/youtube.png",
            desc:
                "Kesinlikle YouTube'dan kopyalanmamış olan bu siteyi görünce çılgına döndüm, inanılmaz! Onunla çalışmak hayatımda verdiğim en iyi karardı.",
            featured: true,
        },
        {
            id: 3,
            name: "Aykut Elmas",
            title: "Komedyen",
            img:
                "https://i.pinimg.com/474x/1c/21/fa/1c21fa553b592628de89182df74b0a98.jpg",
            icon: "assets/linkedin.png",
            desc:
                "Geçerken uğradım. Bu site olmuş :).",
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h3>{d.title}</h3>

                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}