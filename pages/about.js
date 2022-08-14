import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div>
        <Head>
            <meta charSet="UTF-8"/>
            <title>Zackery.</title>
            <meta name="description" content="Just trying my best to do everything I can in life." />
            <meta name="keywords" content="Music,Friends,Family,Singing,Stage,Besties,BestFriends,Personal" />
            <meta name="author" content="Zackery" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Zackery." />
            <meta property="og:description" content="Just trying my best to do everything I can in life." />
            <meta property="og:url" content="https://zackeryjs.xyz/" />
            <meta property="og:image" content="https://zackeryjs.xyz/logo.jpg" />
            <meta name="theme-color" content="#7DD3FC" />
        </Head>

            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex flex-grow items-center">
                    <div className="w-full">
                        <div className="container flex mx-auto justify-center">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                                <h1 className="text-center md:text-6xl text-3xl font-bold">
                                    About <span className="text-sky-300">Me</span>
                                </h1>
                                <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                                    <div className="text-left md:text-justify space-y-6 text-lg font-medium text-gray-200">
                                        <p>Hey, I'm Zackery! I am a young high schooler trying to make it through life as I can. Let's go back to my old roots, shall we? </p>
                                        
                                        <p>Back in public school, specifically Elementary, I loved having the social life I wish I had now. Had so many friends an elementary student could ever want. But it wasn't til June of that year I was gonna be pulled out for something stupid. Although I won't bring it up here, it's still something that's in my past.</p>
                                        <p>This was one of the toughest times for me, as I wouldn't be able to talk to my friends nor have the social life I always wanted.</p>
                                        
                                        <p>After I was pulled, something that helped me through it was Music. And honestly, I wouldn't be here today with everything that I have without Music. It helped me through a lot of stressful times, and even now I sleep to it. I know that may sound weird to you, but I grew up to it since I was 2 years old.</p>
                                        
                                        <p>Another thing people may not know about me is that I am Christian, and back in 2018, me and my family decided to go to Church, so we did, we did exactly that and Church hopped for a few months. And found I Church I used to go to.</p>
                                        <p>During that Youth service, that's when my social life began. It was odd, I will say. Not knowing anyone there or knowing about my faith. It changed    my    life.</p>
                                        
                                        <p>Around half the time I was there I met some of the best people I ever met. And that's where I started my Content Creation. Me and my family eventually Church hopped again, to the Church I go to now. Although leaving all those people behind me, and in my past. It was difficult, thankfully I had Music.</p>
                                        
                                        <p>In 2021, I ended up getting COVID-19, which honestly, it sucked. But I was being supported and surrounded with love and support, and I'm thankful for that.</p>
                                        
                                        <p>Also during the time of 2021, and 2022 Content side, I met some wonderful people and communities. And I am super glad to be part of them.</p>
                                        <p> I love to sing. I sing in my Content, I sing outside of Content, I just sing whenever I want to and can. And at my current Church now, is where I sing for! Being a worship leader is something I always dreamed of, more than Twitch or whatnot. I became one. </p>
                                  
                                        <p>Okay, now we're done with the autobiography lol! I am a Twitch Affiliate/Streamer with over 400 followers, and I own two birds (Cockatiels) by the name of Apollo and Clementine. I hope you enjoy my content and my journey with everything. :)</p>              
                                  </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
