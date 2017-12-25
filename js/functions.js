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
        <h1>
            <a class="navbar-brand" href="index.html">
                <img src="images/NorthTech-Engineering.png">
            </a>
        </h1>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->

    <div class="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
        <nav class="link-effect-8" id="link-effect-8">
            <ul class="nav navbar-nav">
                <li` + ((page == "index")    ? ' class="active"' : '') + `><a href="index.html">Home</a></li>
                <li` + ((page == "about")    ? ' class="active"' : '') + `><a href="about.html">About</a></li>
                <li` + ((page == "pns")      ? ' class="active"' : '') + ` class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Products &amp; Services <b class="caret"></b></a>
                    <ul class="dropdown-menu agile_short_dropdown">
                        <li><a href="products-and-services.html">All</a></li>
                        <li><a class="pns-link" href="products-and-services.html#cons">Construction</a></li>
                        <li><a class="pns-link" href="products-and-services.html#adm">Admixtures / Construction Chemicals</a></li>
                        <li><a class="pns-link" href="products-and-services.html#gna">Grouts &amp; Anchors</a></li>
                        <li><a class="pns-link" href="products-and-services.html#wp">Waterproofing</a></li>
                        <li><a class="pns-link" href="products-and-services.html#floor">Industrial / Residential  Flooring</a></li>
                        <li><a class="pns-link" href="products-and-services.html#retro">Structural Repairs &amp; Retrofitting</a></li>
                        <li><a class="pns-link" href="products-and-services.html#prefab">Pre-Fabricated Structures</a></li>
                        <li><a class="pns-link" href="products-and-services.html#peb">Pre Engineered Structures (PEB)</a></li>
                        <li><a class="pns-link" href="products-and-services.html#mt">Material Testing</a></li>
                        <li><a class="pns-link" href="products-and-services.html#ce">Construction Equipments</a></li>
                        <li><a class="pns-link" href="products-and-services.html#ndt">Non Destructive Testing (NDT)</a></li>
                        <li><a class="pns-link" href="products-and-services.html#survey">Survey Equipments and Power Tools</a></li>
                        <li><a class="pns-link" href="products-and-services.html#arch">Architectural / Structural Consulting</a></li>
                        <li><a class="pns-link" href="products-and-services.html#gis">Geographic Information Science (GIS)</a></li>
                    </ul>
                </li>
                <li` + ((page == "career")  ? ' class="active"' : '') + `><a href="career.html">Careers</a></li>
                <li` + ((page == "contact") ? ' class="active"' : '') + `><a href="contact.html">Contact</a></li>
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
                    <li><a href="products-and-services.html">Products &amp; Services</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="career.html">Careers</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="agileits_w3layouts_nav_right">
                <ul>
                    <li><a href="https://www.facebook.com/Northtechengineering/" target="_blank" class="w3_agile_facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/northtechengineering/" target="_blank" class="w3_agile_instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div class="clearfix"> </div>
        </div>
        <p>&copy; 2017 <a href="/">NorthTech Engineering</a>. All rights reserved | Designed and Developed by <a target="_blank" href="https://www.alphamstudios.com">Alpha Magnus Studios</a></p>
    </div>
</div>
    `);
}