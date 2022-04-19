import React from 'react';

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/tau4.jpg"
    }); // array destructuring (can chose the variable names)

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(datas => setAllMemes(datas.data.memes))
    }, []);

    function getMemeImage() {
        const { url } = allMemes[Math.floor(Math.random()*allMemes.length)];
        setMeme(prevMeme => {
            return {...prevMeme, randomImage: url};
        });
    };

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" placeholder="Top text" onChange={handleChange} className="form--input" name="topText" value={meme.topText}/>
                <input type="text" placeholder="Bottom text" onChange={handleChange} className="form--input" name="bottomText" value={meme.bottomText}/>
                <button type="button" onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
  );
}
