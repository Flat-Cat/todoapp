import "./home.scss";
//import { Link } from "react-router-dom";




function Home() {
    const onContact = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };
    // HomePictures
    return (
        <div className="Home ">

            <section className="home-introduction has-background-white-ter pt-6">
                <div className="container px-4">

{/*__________columns__________*/}
                    <div className="columns my-0 ">
                        <div className="column is-6 py-0">

                            <h2 className="title is-2">
                                Hier entsteht etwas...
                            </h2>

                            <h5 className="subtitle is-5">
                                Fortsetzung folgt...
                            </h5>
                            {/* Button */}

                            <button
                                className="button is-small is-outlined is-outlined mr-5 mt-5 my-5"
                                onClick={onContact}>
                                Meine Webseite
                            </button>

                            <a
                                href="https://github.com/Flat-Cat/"
                                target="_blank"
                                className="button is-small is-outlined mt-5 my-5">
                                GitHub
                            </a>
                        </div>

                        <div className="column is-6 py-0 pt-4">

<h2 className="title"> :) </h2>
                        </div>



                    </div>
                </div>
            </section>
            <section className="home-skills">

                {/*x Hier farbe ändern */}

            </section>
        </div>
    );
}
export default Home;