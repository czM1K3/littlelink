import React, { FC, useState } from "react";
import head from "next/head";

const Home: FC = () => {
  const [dark, setDark] = useState(false);
  return (
    <body style={dark?{
      color: "#FFFFFF",
      backgroundColor: "#292929",
    }:{
      color: "#222",
    }}>
      <head>
        <meta charSet="utf-8" />
        <title>LittleLink</title>
        <meta name="description" content="Find us online!" />
        <meta name="author" content="Seth Cottle" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <div className="container">
        <div className="row">
          <div className="column" style={{ paddingTop: "10%" }}>

            <img src="/images/avatar.png" alt="LittleLink Logo" />

            <h1>LittleLink</h1>

            <p>LittleLink is an open source DIY alternative to services like <a href="https://linktr.ee" target="_blank" rel="noreferrer">Linktree</a> and <a href="https://many.link" target="_blank" rel="noreferrer">many.link</a>. LittleLink was built using <a href="http://www.getskeleton.com" target="_blank" rel="noreferrer">Skeleton</a>, a dead simple, responsive boilerplate—we’ve just created some branded buttons and stripped out the things you won{"'"}t need. 😊 You can also try <a onClick={() => setDark(!dark)}>dark mode</a>! 😮</p>

            {/* Github */}
            <a className="button button-github" href="#" target="_blank" rel="noreferrer">
              <img className="icon" src="/icons/github.svg" alt="GitHub Logo" />
            GitHub</a>
            <br />

            {/* Twitter */}
            <a className="button button-twitter" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/twitter.svg" alt="Twitter Logo" />Twitter</a>
            <br />

            {/* Instagram */}
            <a className="button button-instagram" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/instagram.svg" alt="Instagram Logo" />Instagram</a>
            <br />

            {/* Facebook */}
            <a className="button button-facebook" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/facebook.svg" alt="Facebook Logo" />Find us on Facebook</a>
            <br />

            {/* Facebook Messenger */}
            <a className="button button-messenger" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/messenger.svg" alt="Facebook Messenger Logo" />Chat on Messenger</a>
            <br />

            {/* LinkedIn */}
            <a className="button button-linkedin" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/linkedin.svg" alt="LinkedIn Logo" />LinkedIn</a>
            <br />

            {/* YouTube */}
            <a className="button button-youtube" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/youtube.svg" alt="YouTube Logo" />YouTube</a>
            <br />

            {/* Discord */}
            <a className="button button-discord" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/discord.svg" alt="Discord Logo" />Discord</a>
            <br />

            {/* Twitch */}
            <a className="button button-twitch" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/twitch.svg" alt="Twitch Logo" />Twitch</a>
            <br />

            {/* ProductHunt */}
            <a className="button button-producthunt" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/producthunt.svg" alt="Product Hunt Logo" />Product Hunt</a>
            <br />

            {/* Snapchat */}
            <a className="button button-snapchat" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/snapchat.svg" alt="Snapchat Logo" />Snapchat</a>
            <br />

            {/* Spotify */}
            <a className="button button-spotify" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/spotify.svg" alt="Spotify Logo" />Spotify</a>
            <br />

            {/* Reddit */}
            <a className="button button-reddit" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/reddit.svg" alt="Reddit Logo" />Reddit</a>
            <br />

            {/* Medium */}
            <a className="button button-medium" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/medium.svg" alt="Medium Logo" />Medium</a>
            <br />

            {/* Pinterest */}
            <a className="button button-pinterest" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/pinterest.svg" alt="Pinterest Logo" />Follow on Pinterest</a>
            <br />

            {/* TikTok */}
            <a className="button button-tiktok" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/tiktok.svg" alt="TikTok Logo" />TikTok</a>
            <br />

            {/* Email */}
            <a className="button button-default" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/email.svg" alt="Email Icon" />hello@littlelink.io</a>
            <br />

            {/* Email Alternative */}
            <a className="button button-default" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/email_alt.svg" alt="Email Icon" />hello@littlelink.io</a>
            <br />

            {/* SoundCloud */}
            <a className="button button-soundcloud" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/soundcloud.svg" alt="SoundCloud Logo" />SoundCloud</a>
            <br />

            {/* Figma */}
            <a className="button button-figma" href="#" target="_blank" rel="noreferrer" ><img className="icon" src="/icons/figma.svg" alt="Figma Logo" />Figma</a>
            <br />

            {/* Kit */}
            <a className="button button-kit" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/kit.svg" alt="Kit Logo" />Kit</a>
            <br />

            {/* Telegram */}
            <a className="button button-telegram" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/telegram.svg" alt="Telegram Logo" />Telegram</a>
            <br />

            {/* Tumblr */}
            <a className="button button-tumblr" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/tumblr.svg" alt="Tumblr Logo" />Tumblr</a>
            <br />

            {/* Steam */}
            <a className="button button-steam" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/steam.svg" alt="Steam Logo" />Steam</a>
            <br />

            {/* Vimeo */}
            <a className="button button-vimeo" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/vimeo.svg" alt="Vimeo Logo" />Vimeo</a>
            <br />

            {/* Wordpress */}
            <a className="button button-wordpress" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/wordpress.svg" alt="Wordpress Logo" />Wordpress</a>
            <br />

            {/* Goodreads */}
            <a className="button button-goodreads" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/goodreads.svg" alt="Goodreads Logo" />Goodreads</a>
            <br />

            {/* Skoob */}
            <a className="button button-skoob" href="#" target="_blank" rel="noreferrer"><img className="icon" src="/icons/skoob.svg" alt="Skoob Logo" />Skoob</a>
            <br />

            <br />
            <br />
            <p style={{marginBottom: 0, paddingBottom: "1rem"}}>Build your own by forking <a href="https://littlelink.io" target="_blank" rel="noreferrer">LittleLink</a>.</p>

          </div>
        </div>
      </div>
    </body>
  )
}

export default Home;
