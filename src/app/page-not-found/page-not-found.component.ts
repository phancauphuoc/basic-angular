import { Component } from "@angular/core";

@Component({
    selector: 'page-not-found',
    standalone: true,
    template: `
    <main>
        <body>
            <section>
                <div class="container">
                    <div class="text">
                        <h1>Page Not Found</h1>
                        <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
                        <div class="input-box">
                            <input type="text" id="input-box" placeholder="Search..." autocomplete="off">
                        </div>
                        <div class="result-box"></div>
                        <ul class="menu">
                            <li><a href="#">Go to Homepage</a></li>
                            <li><a href="#">Visit our Blog</a></li>
                            <li><a href="#">Contact support</a></li>
                        </ul>
                    </div>
                    <div><img class="image" src="https://omjsblog.files.wordpress.com/2023/07/errorimg.png" alt=""></div>
                </div>
            </section>
        </body>
    </main>
    `,
    styleUrl: './page-not-found.component.css'
})
export class pageNotFound {
    constructor() { }
}