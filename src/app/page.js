"use client";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";

export default function Home() {
    let videoS4E5 = "/videos/s4e5.mp4"
    let videoS4E4 = "/videos/s4e4.mp4"
    let videoS4E3 = "/videos/s4e3.mp4"

    let videoDemo = "/videos/demo.mp4"

    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
        setDomLoaded(true)
    }, []);

    return (
        <article>
            {domLoaded &&
                <>
                    <section>
                        <h1>Сезон 4</h1>
                        <div className="flex flex-row">
                            <ReactPlayer
                                url={videoS4E5}
                                controls={true}
                                pip={true}
                            />
                            <source src={videoS4E5} type="video/mp4" />

                            <ReactPlayer
                                url={videoS4E4}
                                controls={true}
                                pip={true}
                            />
                            <source src={videoS4E4} type="video/mp4" />

                            <ReactPlayer
                                url={videoS4E3}
                                controls={true}
                                pip={true}
                            />
                            <source src={videoS4E3} type="video/mp4" />
                        </div>
                    </section>

                    <section className="mt-[20px]">
                        <h1>work in progress</h1>
                        <div className="flex flex-row">
                            <ReactPlayer
                                url={videoDemo}
                                controls={true}
                                pip={true} // picture in picture
                            />
                            <source src={videoDemo} type="video/mp4" />
                        </div>
                    </section>
                </>
            }
        </article>
    );
}
