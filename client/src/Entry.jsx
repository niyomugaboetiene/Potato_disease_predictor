import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Prediction from "./Prediction";

const Entry = () => {
    return (
         <>
           <section id="home">
                <Home />
           </section>
           <section id="home">
                <HowItWorks />
           </section>
           <section id="prediction">
               <Prediction />
           </section>
        </>
    )
}

export default Entry