import React from "react";
import instagram from "../assets/Images/instagram.png"
import linkedin from "../assets/Images/linkedin.png"

const About = () =>{
    return (<>

    <div className="fixed right-6 bottom-3">
        
    <div className='flex flex-row gap-6 justify-center p-5'>
    <div className="px-3 text-sm bold">
            Visit My Profile: 
        </div>
                                        <a href='https://instagram.com/cool_deep_96?igshid=NTc4MTIwNjQ2YQ=='>
                                            <img className="h-5 w-5 grayscale hover:grayscale-0 transition duration-1000 " src={instagram} alt="instagram" />
                                        </a>
                                        <a href='https://www.linkedin.com/in/cool-deep96/'>
                                            <img className="h-5 w-5 grayscale hover:grayscale-0 transition duration-1000 " src={linkedin} alt="linkedin" />
                                        </a>
                                        <a href='https://www.linkedin.com/in/cool-deep96/'>
                                            <img className="h-5 w-5 grayscale hover:grayscale-0 transition duration-1000 " src={linkedin} alt="linkedin" />
                                        </a>


                                    </div>

    </div>
    </>

    )
}

export default About;