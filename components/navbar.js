function navbar(){
    return`
    <nav>
        <i class="fa-solid fa-bars" id="hamburger"></i>
        <div id="nav_right_side">
            <div id="brand_name"><a href="./index.html" class="indexstyle1">CraftBazaar</a> </div>
            <input type="text" placeholder="Search here" >
        </div>
        <div id="nav_left_side">
            <div><i class="fa-solid fa-user "></i><span><a class="indexstyle" href="./customerRegister.html"> Register / Login</a></span></div>
            <div><i class="fa-regular fa-heart "></i><span><a href="#" class="indexstyle">Wishlist</a> </span></div>
            <div><i class="fa-solid fa-cart-shopping "></i><span><a href="./cartpage.html" class="indexstyle">Cart</a> </span></div>
        </div>
    </nav>


    <div id="burger">
        <div>Register/Login</div>
        <div>Wishlist</div>
        <div>Cart</div>
    </div>
    <!-- NAVBAR END HERE -->




    <!-- SUB NAVBAR -->
    <div id="sub-navbar">
        <div class="home_decor">Home Decor</div>
        <div class="home_decor">Product Near Me</div>
    </div>
    <!-- SUB NAVBAR ENDS HERE -->
    `
}

export default navbar