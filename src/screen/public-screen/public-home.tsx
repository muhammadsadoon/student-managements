// Public Home screen
import { Link } from "react-router-dom"
import logo from "../../assets/image/logo.png"
import style from "./style.module.css"
import commitImage from "../../assets/image/commit.svg"
import handImage from "../../assets/image/hand-image.svg"
import dashboardImage from "../../assets/image/dashboard-image.png"


const PublicHomeScreen = () => {
  return (
    <>

      <div className="scroll-smooth duration-200">
        <div className="bg-linear-to-b from-[#101212] relative to-[#08201D]">
          <header className="absolute inset-x-0 top-0 z-10 w-full">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
              <div className="flex items-center justify-around h-16">
                <div className="shrink-0">
                  <Link to="#" title="" className="flex">
                    <img className="w-auto h-8" src={logo} alt="" />
                  </Link>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-center gap-7 w-full">
                  <Link to="#Features" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Features </Link>
                  <Link to="#Solutions" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Solutions </Link>
                  <Link to="#Resources" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Resources </Link>
                  <Link to="#Pricing" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80"> Pricing </Link>
                </div>

                <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto text-nowrap">
                  <Link to="/login" title="" className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"> Log in </Link>
                </div>

                <button type="button" className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800">

                  <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>


                  <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </header>

          <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
              <div className="max-w-xl mx-auto text-center">
                <button className="p-4 h-5 border-amber-500 border text-amber-500 font-semibold text-sm rounded-full">
                  <span className="relative -top-2.5">Get your free consultation now</span>
                </button>
                <h1 className="text-4xl font-bold sm:text-6xl">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-green-300 to-white"> Manage your team easily with task man </span>
                </h1>
                <p className="mt-5 text-base text-white sm:text-xl">Statisdaa is a  school management solution that offers a personalized portal to each type of user,</p>

                <Link to="/login" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
                  Get Started
                  <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className={`${style.linearBG}`} id="Features">
        <img className="mx-auto" src={dashboardImage} alt="" />
      </section>
      <section className="bg-white text-black p-5 md:p-10" id="Solutions">
        <div className="p-5 flex gap-7 items-center justify-center flex-col lg:flex-row w-full">
          <div className="w-full">
            <div className="flex mt-2 items-center gap-4 justify-center flex-col md:flex-row">
              <img src={commitImage} className="shadow-lg rounded-xl" alt="" />
              <img src={commitImage} className="shadow-lg rounded-xl md:rotate-6" alt="" />
            </div>
            <div className="hidden md:flex mt-2 items-center gap-4 justify-center flex-col md:flex-row">
              <img src={commitImage} className="shadow-lg rounded-xl" alt="" />
              <img src={commitImage} className="shadow-lg rounded-xl" alt="" />
            </div>
          </div>
          <div className="w-full p-3 md:p-8">
            <h1 className="text-3xl font-semibold my-4">Create your task</h1>
            <p className="text-gray-900 opacity-70 text-sm"> Statisdaa is a  school management solution that offers a personalized portal to each type of user, ensuring that your institution is always engaged with teachers, students, and their parents</p>
            <div className="h-15 my-4 rounded-xl font-semibold shadow-md flex items-start pl-4 flex-col justify-center w-full">
              <p>Create your task</p>
            </div>
            <div className="h-15 my-4 rounded-xl font-semibold shadow-md flex items-start pl-4 flex-col justify-center w-full">
              <p>Create your task</p>
            </div>
            <div className="massage-box p-3 my-5 text-white bg-sky-500 rounded-xl">
              <h5 className="text-md">Manage the task easily and clearly</h5>
              <p className="text-sm">Statisdaa increases communication between all stakeholders: students, teachers, parents and administrative staff, with a dedicated web portal for any type of end-user. Keeping your students and parents engaged with the academic process is a crucial factor in each student’s success.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="Resources">
        <div className="p-3 w-full md:p-6 flex items-center justify-center md:flex-row flex-col">
          <div className="w-full p-10">
            <h1 className="text-3xl font-bold my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Ametut lobortis pellentesque a, luctus maecenas.</p>
            <p>Feugiat sed enim vitae viverra cras tristique eu. Pellentesque bibendum volutpat metus, dictum.</p>
          </div>
          <div className="w-full">
            <img src={handImage} alt="" />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$38</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
            <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>$56</span>
                  <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Tumeric plaid portland
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Hexagon neutra unicorn
                </p>
                <p className="flex items-center text-gray-600 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Vexillologist pitchfork
                </p>
                <p className="flex items-center text-gray-600 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Mixtape chillwave tumeric
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-200 body-font" style={{
        background: "#08201D",
        color: "#fff"
      }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>First Link</Link>
                </li>
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>Second Link</Link>
                </li>
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>Third Link</Link>
                </li>
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>First Link</Link>
                </li>
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>Second Link</Link>
                </li>
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>Third Link</Link>
                </li>
                <li>
                  <Link className="text-gray-200 hover:text-gray-800" to={"#"}>Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-200">Placeholder</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="lg:mt-2 xl:mt-0 shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                <br className="lg:block hidden" />waistcoat green juice
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default PublicHomeScreen;
