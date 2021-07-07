export default {
    title: "HTML/Snackbar v2(WIP)",
};

export const Snackbar = (args) => (
    <section>
        <div class="snackbar-v2">
            <div class="snack-info">Informational notification</div>
        </div>
        <div>
            <br />
        </div>
        <div class="snackbar-v2">
            <div class="snack-info with-btn">Informational notification</div>
            <div class="snack-btn">
                <button class="btn-v2 btn-underline-white">Sample label</button>
            </div>
        </div>
        <div>
            <br />
        </div>
        <div class="snackbar-v2">
            <div class="snack-info with-btn">Informational notification Informational notification Informational notification</div>
            <div class="snack-btn with-multiline-text">
                <button class="btn-v2 btn-underline-white">Sample label</button>
            </div>
        </div>
    </section>
);
