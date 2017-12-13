/**
 * NorthTech Engineering
 * https://www.northtechengineering.com
 * 
 * Designed and developed by
 * Alpha Magnus Studios
 * https://www.alphamstudios.com
 */


function navbar(page = "index")
{
    document.write(`
<nav class="navbar navbar-default">
    <div class="navbar-header navbar-left">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        <h1><a class="navbar-brand" href="index.html"><img src="images/NorthTech-Engineering.png"></a></h1>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->

    <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
        <nav class="link-effect-8" id="link-effect-8">
            <ul class="nav navbar-nav">
                <li` + ((page == "index")    ? ' class="active"' : '') + `><a href="index.html">Home</a></li>
                <li` + ((page == "about")    ? ' class="active"' : '') + `><a href="about.html">About</a></li>
                <li` + ((page == "products") ? ' class="active"' : '') + `><a href="products.html">Products</a></li>
                <li` + ((page == "services") ? ' class="active"' : '') + `><a href="services.html">Services</a></li>
                <li` + ((page == "contact")  ? ' class="active"' : '') + `><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</nav>
    `);
}

function footer()
{
    document.write(`
<div class="footer">
    <div class="container">
        <h2><a href="/">NorthTech Engineering</a></h2>
        <div class="agileits_w3layouts_nav">
            <div class="agileits_w3layouts_nav_left">
                <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="agileits_w3layouts_nav_right">
                <ul>
                    <li><a href="https://www.facebook.com/Northtechengineering/" class="w3_agile_facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/northtechengineering/" class="w3_agile_instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <p>&copy; 2017 <a href="/">NorthTech Engineering</a>. All rights reserved | Designed and Developed by <a target="_blank" href="https://www.alphamstudios.com">Alpha Magnus Studios</a></p>
    </div>
</div>
    `);
}