// const article = document.querySelector("article");

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }

const badge = document.createElement('button');
badge.style.position = 'absolute';
badge.style.bottom = '20px';
badge.style.right = '20px';
badge.style.zIndex = '100';

chrome.storage.local.get(["clickedTimes"]).then((result) => {
    clickedCount = result.clickedTimes || 0;
    badge.innerText = `Click me. Clicked ${clickedCount}`;
});

badge.addEventListener('click', () => {
    let els = document.querySelectorAll('body *');
    els.forEach((el) => {
        el.style.fontSize = `${Math.floor(Math.random() * 20 + 5)}px`;
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;

        el.style.color = `rgb(${r}, ${g}, ${b})`;
    });

    clickedCount++;
    chrome.storage.local.set({ clickedTimes: clickedCount }).then(() => {
        console.log("Value is set");
        badge.innerText = `Click me. Clicked ${clickedCount}`;
    });
});

document.documentElement.appendChild(badge);