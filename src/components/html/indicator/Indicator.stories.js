export default {
    title: "HTML/GalleryIndicators",
};
export const GalleryIndicators = (args) => (
    <section>
        <h6>Dot Indicators</h6>
        <div class="row storybook-description">
            <span class="col-2">Active and normal state</span>
        </div>
        <div class="row storybook-separator">
            <div class="col-2">
                <div class="indicators">
                    <ol class="dot-indicators">
                        <li data-target="#myGallery" data-slide-to="0" class="active"></li>
                        <li data-target="#myGallery" data-slide-to="1" class=""></li>
                        <li data-target="#myGallery" data-slide-to="2" class=""></li>
                        <li data-target="#myGallery" data-slide-to="3" class=""></li>
                        <li data-target="#myGallery" data-slide-to="4" class=""></li>
                        <li data-target="#myGallery" data-slide-to="5" class=""></li>
                        <li data-target="#myGallery" data-slide-to="6" class=""></li>
                        <li data-target="#myGallery" data-slide-to="7" class=""></li>
                        <li data-target="#myGallery" data-slide-to="8" class=""></li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
);
