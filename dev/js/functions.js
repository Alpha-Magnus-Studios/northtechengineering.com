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
        <h1><a class="navbar-brand" href="index.html"><img src="images/NorthTech-Engineering.png" style="width: 295px; max-width: 90%;"></a></h1>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->

    <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
        <nav class="link-effect-8" id="link-effect-8">
            <ul class="nav navbar-nav">
                <li` + ((page == "index") ? ' class="active"' : '') + `><a href="index.html">Home</a></li>
                <li` + ((page == "about") ? ' class="active"' : '') + `><a href="about.html">About</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Short Codes <b class="caret"></b></a>
                    <ul class="dropdown-menu agile_short_dropdown">
                        <li><a href="icons.html">Web Icons</a></li>
                        <li><a href="typography.html">Typography</a></li>
                    </ul>
                </li>
                <li` + ((page == "contact") ? ' class="active"' : '') + `><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>
    </div>
    <div class="agile_search">
        <!-- cd-search -->
        <div class="cd-main-header">
            <ul class="cd-header-buttons">
                <li><a class="cd-search-trigger" href="#cd-search"> <span></span></a></li>
            </ul>
            <!-- cd-header-buttons -->
        </div>
        <div id="cd-search" class="cd-search agileinfo">
            <form action="#" method="post">
                <input name="Search" type="search" placeholder="Click enter after typing...">
            </form>
        </div>
        <!-- //cd-search -->

    </div>
</nav>
    `);
}

function footer()
{
    document.write(`
<div class="footer">
    <div class="container">
        <h2><a href="index.html"><i class="fa fa-magic" aria-hidden="true"></i>  Exec</a></h2>
        <h3>Subscribe To Our Newsletter</h3>
        <p class="footer_info_w3ls_agile">Subscribe to our newsletter and we will inform you about newest projects and promotions.</p>
        <form action="#" method="post">
            <input type="email" name="email" placeholder="Your email..." required="">
            <input type="submit" value="Subscribe">
        </form>
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
                    <li><a href="#" class="w3_agile_facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="agile_twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="w3_agile_dribble"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    <li><a href="#" class="w3_agile_vimeo"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <p>&copy; 2017 NorthTech Engineering. All rights reserved | Designed and Developed by <a target="_blank" href="https://www.alphamstudios.com">Alpha Magnus Studios</a></p>
    </div>
</div>
    `);
}