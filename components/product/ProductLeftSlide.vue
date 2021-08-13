<template>
    <div class="col-xs-12 col-sm-4 col-md-3">
        <div class="sidebar bg-white clearfix">          
            <div class="sidebar-block">
                <h4 class="sidebar-title color-dark-2">điểm tham quan</h4>
                <ul class="sidebar-category color-3">
                    <li class="active">
                        <a class="cat-drop" href="#">tours <span class="fr">(68)</span></a>
                        <ul>
                            <li><a href="#">sea tours (785)</a></li>
                            <li><a href="#">food tours (85)</a></li>
                            <li><a href="#">romantic tours (125)</a></li>
                            <li><a href="#">honeymoon tours (70)</a></li>
                            <li><a href="#">mountain tours (159)</a></li>
                        </ul>
                    </li>
                    <li>
                        <a class="cat-drop" href="#">hotels <span class="fr">(125)</span></a>
                        <ul>
                            <li><a href="#">sea tours (785)</a></li>
                            <li><a href="#">food tours (85)</a></li>
                            <li><a href="#">romantic tours (125)</a></li>
                            <li><a href="#">honeymoon tours (70)</a></li>
                            <li><a href="#">mountain tours (159)</a></li>
                        </ul>									
                    </li>
                    <li>
                        <a class="cat-drop" href="#">cruises <span class="fr">(75)</span></a>
                        <ul>
                            <li><a href="#">sea tours (785)</a></li>
                            <li><a href="#">food tours (85)</a></li>
                            <li><a href="#">romantic tours (125)</a></li>
                            <li><a href="#">honeymoon tours (70)</a></li>
                            <li><a href="#">mountain tours (159)</a></li>
                        </ul>									
                    </li>
                    <li>
                        <a class="cat-drop" href="#">flights  <span class="fr">(93)</span></a>
                        <ul>
                            <li><a href="#">sea tours (785)</a></li>
                            <li><a href="#">food tours (85)</a></li>
                            <li><a href="#">romantic tours (125)</a></li>
                            <li><a href="#">honeymoon tours (70)</a></li>
                            <li><a href="#">mountain tours (159)</a></li>
                        </ul>									
                    </li>								
                </ul>
            </div>
            <div class="sidebar-block">
                <h4 class="sidebar-title color-dark-2">giá</h4>
                <div class="slider-range color-3 clearfix" data-counter="$" data-position="start" data-from="0" data-to="1500" data-min="0" data-max="2000">
                    <div class="range"></div>
                    <input type="text" class="amount-start" readonly value="$0">
                    <input type="text" class="amount-end" readonly value="$1500">						
                </div>
                <input type="submit" class="c-button b-40 bg-dr-blue-2 hv-dr-blue-2-o" value="Tìm kiếm">				
            </div>
            <div class="sidebar-block">
                <h4 class="sidebar-title color-dark-2">dịch vụ</h4>
                <div class="sidebar-rating">
                    <div class="input-entry color-5">
                        <input class="checkbox-form" id="text-1" type="checkbox" name="checkbox" value="climat control">
                        <label class="clearfix" for="text-1" >
                            <span class="sp-check"><i class="fa fa-check"></i></span>
                            <span class="checkbox-text">điểm tham quan</span>
                        </label>
                    </div>
                    <div class="input-entry color-5">
                        <input class="checkbox-form" id="text-2" type="checkbox" name="checkbox" value="climat control">
                        <label class="clearfix" for="text-2" >
                            <span class="sp-check"><i class="fa fa-check"></i></span>
                            <span class="checkbox-text">ẩm thực</span>
                        </label>
                    </div>                   													
                </div>											
            </div>
					
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>