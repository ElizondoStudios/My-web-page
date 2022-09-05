import Github from "../src/assets/github_small.png"
import Linkedin from "../src/assets/linkedin_small.png"
import Email from "../src/assets/email_small.png"


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
                <img src={Email
                } className="findme--icon"/>
            </a>
        </div>
    )
}

export default FindMe