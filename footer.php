<footer>
    <div class="container footer">
        <div class="row footer">
            <div class="col-lg-6 col-md-12">
                <?php
                 if(is_active_sidebar('footer-sidebar-1')){
                 dynamic_sidebar('footer-sidebar-1');
                 }
                 ?>
            </div>
            <div class="col-lg-6 col-md-12">
                <?php
                 if(is_active_sidebar('footer-sidebar-2')){
                 dynamic_sidebar('footer-sidebar-2');
                 }
                 ?>
            </div>
        </div>
    </div>
</footer>
</body>

</html>

