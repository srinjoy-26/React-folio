import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
function Footer(){
  return(
    <footer className=" bg-black py-12">
    <div className="container mx-auto px-8 text-white">
    <div className="md:flex justify-between sm:block space-y-4 ">
    <div >
      <h2 className="text-lg font-semibold mb-2">Send me an email</h2>
      <p>srinjoydev26@gmail.com</p>
    </div>

    <div>
      <h2 className="text-lg font-semibold mb-2">Know more</h2>
      <ul>
        <li><a className="hover:text-green-300 cursor-pointer">About Me</a></li>
          <li><a className="hover:text-green-300 cursor-pointer" href="">Resume</a></li>
          <li><a className="hover:text-green-300 cursor-pointer" href="">Projects</a></li>
          <li><a className="hover:text-green-300 cursor-pointer" href="">Contact Me</a></li>
      </ul>
    </div>
    
    <div className="">
      <h2 className="font-semibold text-lg leading-normal text-white mb-2">Would love to connect with you all</h2>
      <ul className="flex space-x-2">
  <li><a href="https://github.com/srinjoy-26" className="cursor-pointer"><img src={github} alt=""/></a></li>
  <li><a href="https://www.linkedin.com/in/srinjoy-pati-7b14301b7/" className="cursor-pointer"><img src={linkedin} alt=""/></a></li>
      <li> <a href="https://twitter.com/srinjoy_pati" className="cursor-pointer"><img src={twitter} alt=""/></a></li>
  </ul>
    </div>
    </div>
    </div>
  </footer>
  )
 }
 
 export default Footer;