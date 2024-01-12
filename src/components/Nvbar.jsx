import myimage from '../assets/myimg.png'

function Nvbar(){
  return(
    <header>
    <nav className="md:flex justify-between items-center w-[92%] mx-auto mt-2 sm:block ">
      <div>
        <img src={myimage} alt="..." className="w-10 border-2  rounded-full sm:mb-2 hover:border-green-300"/>
        </div>
        <div>
          <ul className=" md:flex items-center gap-6 text-white font-semibold sm:block sm:py-4 z-50">
            <li><a className="hover:text-green-300 cursor-pointer">About Me</a></li>
            <li><a className="hover:text-green-300 cursor-pointer" href="">Resume</a></li>
            <li><a className="hover:text-green-300 cursor-pointer" href="">Projects</a></li>
            <li><a className="hover:text-green-300 cursor-pointer" href="">Contact Me</a></li>

          </ul>
        </div>
    </nav>
  </header>
  )
 }
 
 export default Nvbar;