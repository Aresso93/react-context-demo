import { useContext } from "react";
import { HeadingContext } from "./contexts/headingContext";

export function Section({children}){

    const level = useContext(HeadingContext);
    
    return (
        <section>
            <HeadingContext.Provider 
            value={level +1}
            >
            {children}
            </HeadingContext.Provider>
        </section>
    )
}