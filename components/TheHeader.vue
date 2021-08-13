<template>
  <header class="color-1 hovered menu-3">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="nav"> 
                <a href="index.html" class="logo">
                    <img src="../static/assets/img/header/logo_dark.png" alt="lets travel">
                </a>
                <div class="nav-menu-icon">
                <a href="#"><i></i></a>
                </div>
                <nav class="menu">
                    <ul>
                      <li class="type-1 active">
                          <nuxt-link to="/">home<span class="fa fa-angle-down"></span></nuxt-link>                          
                      </li>
                      <li class="type-1"><a href="#">Hotels<span class="fa fa-angle-down"></span></a>
                            <ul class="dropmenu">
                                <li><a href="index_2.html">Home Hotels</a></li>
                                <li><a href="hotel_list.html">List View</a></li>
                                <li><a href="hotel_list_2.html">List View 2</a></li>
                                <li><a href="hotel_grid.html">Grid View</a></li>
                                <li><a href="hotel_block.html">Block View</a></li>
                                <li><a href="hotel_detail.html">Hotel Details 1</a></li>
                                <li><a href="booking.html">Booking</a></li>
                                <li><a href="thank_you.html">Thank You</a></li>
                            </ul>
                        </li>
                        <li class="type-1"><a href="#">Flights<span class="fa fa-angle-down"></span></a>
                            <ul class="dropmenu">
                                <li><a href="plane.html">Home Flights</a></li>
                                <li><a href="flight_list.html">List View</a></li>
                                <li><a href="flight_grid.html">Grid View</a></li>
                                <li><a href="flight_block.html">Block View</a></li>
                                <li><a href="flight_details.html">Detailed</a></li>
                                <li><a href="booking.html">Booking</a></li>
                                <li><a href="thank_you.html">Thank You</a></li>
                            </ul>
                        </li>  
                        <li class="type-1"><a href="#">Cars<span class="fa fa-angle-down"></span></a>
                            <ul class="dropmenu">
                                <li><a href="car_list.html">List View</a></li>
                                <li><a href="car_grid.html">Grid View</a></li>
                                <li><a href="car_block.html">Block View</a></li>
                                <li><a href="car_detail.html">Detailed</a></li>
                                <li><a href="booking.html">Booking</a></li>
                                <li><a href="thank_you.html">Thank You</a></li>
                            </ul>
                        </li>
                        <li class="type-1">
                            <nuxt-link to="/category">
                                Vé tham quan
                                <span class="fa fa-angle-down"></span>
                            </nuxt-link>
                            <ul class="dropmenu">
                                <li><a href="car_list.html">List View</a></li>
                                <li><a href="car_grid.html">Grid View</a></li>
                            </ul>
                        </li>
                        <li class="type-1">
                            <nuxt-link to="/product">
                                product
                                <span class="fa fa-angle-down"></span>
                            </nuxt-link>
                            <ul class="dropmenu">
                                <li><a href="car_list.html">List View</a></li>
                                <li><a href="car_grid.html">Grid View</a></li>
                            </ul>
                        </li>
                        <li class="type-1"><a href="#">Shortcodes<span class="fa fa-angle-down"></span></a>
                            <ul class="dropmenu">
                                <li><a href="accordions.html">Accordions & Toggles</a></li>
                                <li><a href="tabs.html">Tabs</a></li>
                                <li><a href="buttons.html">Buttons</a></li>
                                <li><a href="gallery_2.html">Image & Gallery Styles</a></li>
                                <li><a href="gallery.html">Image Box Styles</a></li>
                                <li>
                                <a href="#">Listing Styles<span class="fa fa-chevron-right"></span></a>
                                    <ul class="dropmenu">
                                        <li><a href="tour_list.html">Listing Style 01</a></li>
                                        <li><a href="tour_list_2.html">Listing Style 02</a></li>							
                                        <li><a href="tour_list_3.html">Listing Style 03</a></li>							
                                        <li><a href="tour_list_4.html">Listing Style 04</a></li>									
                                    </ul>
                                </li>
                                <li><a href="dropdowns.html">Dropdowns</a></li>
                                <li><a href="prices.html">Pricing Tables</a></li>
                                <li><a href="testimonials.html">Testimonials</a></li>
                                <li><a href="ourteam.html">Our team</a></li>
                                <li><a href="gallerypopup.html">Gallery Popup</a></li>
                                <li><a href="thank_you.html">Thank you</a></li>
                            </ul>
                        </li>
                    </ul>
            </nav>
            </div>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>