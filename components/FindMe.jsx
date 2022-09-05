import Github from "../src/assets/github.png"
import Linkedin from "../src/assets/linkedin.png"
import Email from "../src/assets/email.png"


function FindMe(props){
    return(
        <div className="findme">
            <a 
                href={props.github}
                >
                <img src={Github} className="findme--icon"/>
            </a>
            <a 
                href={props.linkedin}
                >
                <img src={Linkedin} className="findme--icon"/>
            </a>
            <a 
                href={props.email}
                >
                <img src={Email} className="findme--icon"/>
            </a>
        </div>
    )
}

export default FindMe