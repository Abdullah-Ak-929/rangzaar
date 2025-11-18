function Navbar(){
    return(
        <>
            <nav class="fixed top-0 left-0 w-full z-50 bg-blue-600">
                <div class="max-w-6xl mx-auto flex justify-between items-center">
                    {/* <img class="h-30 w-40 object-cover" src="media/rangzaar.jpg" alt=""/> */}
                        <ul class="hidden md:flex justify-between">
                            <li class="ml-10 relative transition-all duration-300 hover:scale-110"><a class="pb-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full  hover:text-red-600" href="index.html">Home</a></li>
                            <li class="ml-10 relative transition-all duration-300 hover:scale-110"><a class="pb-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full  hover:text-red-600" href="catagory.html">Catagory</a></li>
                            <li class="ml-10 relative transition-all duration-300 hover:scale-110"><a class="pb-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full  hover:text-red-600" href="product.html">Product</a></li>
                            <li class="ml-10 relative transition-all duration-300 hover:scale-110"><a class="pb-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full  hover:text-red-600" href="about.html">About Us</a></li>
                            <li class="ml-10 relative transition-all duration-300 hover:scale-110"><a class="pb-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full  hover:text-red-600" href="blog.html">Blog</a></li>
                            <li class="ml-10 relative transition-all duration-300 hover:scale-110"><a class="pb-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full  hover:text-red-600" href="faqs.html">FAQS & Return</a></li>
                            <li class="ml-10 relative transition-all duration-300 hover:scale-110"><a class="pb-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full  hover:text-red-600" href="seasonal.html">Seasonal</a></li>
                        </ul>
                        {/* <div>
                            <a href="#"><i class="fa-solid fa-user-plus text-xl transition-all duration-300 hover:scale-110"></i></a>
                            <a href="#"><i class="fa-solid fa-magnifying-glass text-xl ml-2 transition-all duration-300 hover:scale-110"></i></a>
                        </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;