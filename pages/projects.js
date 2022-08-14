import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Work() {
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
                                <div className="text-center">
                                    <h1 className="md:text-6xl text-3xl font-bold">
                                        My <span className="text-sky-300">Projects</span>
                                    </h1>
                                    <p className="text-gray-200 text-lg font-medium px-4">
                                            Featured & recent projects
                                    </p>
                                </div>
                                        <div className="flex-grow space-y-2 md:p-16 p-4">
                                            <h1 className="text-3xl font-bold">Electronomy eSports</h1>
                                            <p className="text-gray-400 py- text-justify">
                                                Electronomy is an entertainment organization bringing love, joy, peace, to all its players and content creators, and more. We are based in the North American region.
                                            </p>
                                            <div className="flex space-x-2">
                                                <a className="rounded-full" href="https://www.solo.to/electronomy" target="_blank">
                                                    <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Link</title>
                                                        <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                                        <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                                        <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                                    </svg>
                                                </a>
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
