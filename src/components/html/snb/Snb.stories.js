export default {
    title: "HTML/Standard LNB (Coco)",
};

const showCategoryNavigation = () => {
    document.getElementById("standardNavigation").classList.remove("open");
    document.getElementById("categoryNavigation").classList.add("open");
};

const hideCategoryNavigation = () => {
    document.getElementById("standardNavigation").classList.add("open");
    document.getElementById("categoryNavigation").classList.remove("open");
};

export const Snb = (args) => (
    <section>
        <div class="lms-standard-navbar">
            <div class="container">
                <div class="standard-navbar__block-wrap" id="categoryNavigation" onClick={hideCategoryNavigation}>
                    <div class="standard-navbar__block horizontal-scrollable">
                        <div class="standard-navbar__headline">
                            <button class="standard-navbar__button" id="hideCategoryNavigation" type="button">
                                <img src="images/icons/24px/CancelClose24px.svg" alt="Go to child menu" />
                            </button>
                            <div class="standard-navbar__title">Trainings</div>
                        </div>
                        <ul class="standard-navbar__menu">
                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    Hardware
                                </a>
                            </li>
                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    Software
                                </a>
                            </li>
                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    System &amp; Services
                                </a>
                            </li>

                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    Soft skills
                                </a>
                            </li>
                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    Live Trainings
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="standard-navbar__block-wrap open" id="standardNavigation" onClick={showCategoryNavigation}>
                    <div class="standard-navbar__block horizontal-scrollable">
                        <div class="standard-navbar__headline">
                            <button class="standard-navbar__button" id="showCategoryNavigation" type="button">
                                <img src="images/icons/24px/Drawer24px.svg" alt="Go to parent menu" />
                            </button>
                            <div class="standard-navbar__title">Hardware</div>
                        </div>
                        <ul class="standard-navbar__menu">
                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    Smartphones
                                </a>
                            </li>
                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    Tablets &amp; Notebooks
                                </a>
                            </li>
                            <li>
                                <a class="standard-navbar__link " href="#test">
                                    Zubehor
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
