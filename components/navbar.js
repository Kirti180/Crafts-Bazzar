function navbar(){
    return`
    <nav>
        <i class="fa-solid fa-bars" id="hamburger"></i>
        <div id="nav_right_side">
            <div id="brand_name">CraftBazaar</div>
            <input type="text" placeholder="Search here" >
        </div>
        <div id="nav_left_side">
            <div><i class="fa-solid fa-user "></i><span>Register / Login</span></div>
            <div><i class="fa-regular fa-heart "></i><span>Wishlist</span></div>
            <div><i class="fa-solid fa-cart-shopping "></i><span>Cart</span></div>
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