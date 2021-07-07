// Part of navbar

export default {
    title: "HTML/Tabs & LNB v2(WIP)",
};

// example with navigation
export const businessUnitsNavBarOverview = (args) => (
    <div className="business-units-nav-bar v2">
        <div className="container">
            <div className="row align-items-center row-wrapper-navbar-v2">
                <div className="nav-bar-text align-middle py-3 pl-3">Produkte</div>
                <div className="nav-bar-wrapper">
                    <nav className="navbar navbar-expand navbar-light bg-white nav-bar-wrapper-child">
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <a href="#test" className="active nav-link" role="button">
                                    Alle
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#test" className="nav-link" role="button">
                                    Display
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#test" className="nav-link" role="button">
                                    Speichermedien
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#test" className="nav-link" role="button">
                                    Mobile
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#test" className="nav-link" role="button">
                                    TV/AV
                                </a>
                            </div>
                            <div className="nav-item">
                                <a href="#test" className="nav-link" role="button">
                                    Hausgeräte
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
);

export const tabsItems = (args) => (
    <section>
        <h6>Business Units NavBar Tabs</h6>
        <div className="row storybook-description nav-item">
            <span class="col-1">Normal</span>
            <span class="col-1">Hover</span>
            <span class="col-1">Active</span>
        </div>
        <div className="storybook-separator nav">
            <div class="row business-units-nav-bar v2 tabs-v2">
                <div className="nav-item">
                    <a href="#test" className="nav-link" role="button">
                        Tab item
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#test" className="nav-link hover" role="button">
                        Tab item
                    </a>
                </div>
                <div className="nav-item">
                    <a href="#test" className="active nav-link" role="button">
                        Tab item
                    </a>
                </div>
            </div>
        </div>
    </section>
);
