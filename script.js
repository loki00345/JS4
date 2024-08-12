// task1 

class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }

    print(text) {
        document.write(`<p style="font-size: ${this.fontSize}; color: ${this.fontColor}; font-family: ${this.fontFamily};">${text}</p>`);
    }
}

const printer = new PrintMachine("16px", "blue", "Arial");

printer.print("This is the text that will be printed in the appropriate font.");

// task2

class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = new Date(publicationDate);
    }

    print() {
        const currentDate = new Date();
        const diffTime = Math.abs(currentDate - this.publicationDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let formattedDate;
        if (diffDays === 0) {
            formattedDate = 'today';
        } else if (diffDays < 7) {
            formattedDate = `${diffDays} days ago`;
        } else {
            const day = this.publicationDate.getDate();
            const month = this.publicationDate.getMonth() + 1;
            const year = this.publicationDate.getFullYear();
            formattedDate = `${day}.${month}.${year}`;
        }

        console.log(`Title: ${this.title}`);
        console.log(`Text: ${this.text}`);
        console.log(`Tags: ${this.tags.join(', ')}`);
        console.log(`Publication Date: ${formattedDate}`);
    }
}

// Example Usage
const news1 = new News(
    "New Record in Running",
    "Today, the athlete broke his own record in the 100-meter run.",
    ["sport", "running", "record"],
    "2024-06-01T12:00:00"
);

news1.print();

// task3

class NewsFeed {
    constructor() {
        this.news = [];
    }

    get count() {
        return this.news.length;
    }

    displayAllNews() {
        console.log("All News:");
        this.news.forEach(news => {
            console.log(`Title: ${news.title}`);
            console.log(`Text: ${news.text}`);
            console.log(`Tags: ${news.tags.join(', ')}`);
            console.log(`Publication Date: ${news.publicationDate}`);
            console.log("-----------");
        });
    }

    addNews(news) {
        this.news.push(news);
    }

    deleteNews(title) {
        this.news = this.news.filter(news => news.title !== title);
    }

    sortByDate() {
        this.news.sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
    }

    searchByTag(tag) {
        return this.news.filter(news => news.tags.includes(tag));
    }
}

class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = publicationDate;
    }
}

// Приклад використання
const newsFeed = new NewsFeed();

const news1 = new News(
    "New Record in Running",
    "Today, the athlete broke his own record in the 100-meter run.",
    ["sport", "running", "record"],
    "2024-06-01"
);

const news2 = new News(
    "New Study on Climate Change",
    "Scientists have released a new study on the effects of climate change on marine life.",
    ["science", "climate", "research"],
    "2024-05-30"
);

newsFeed.addNews(news1);
newsFeed.addNews(news2);

console.log("Total News Count:", newsFeed.count);
console.log("----------");
newsFeed.displayAllNews();
console.log("----------");

newsFeed.deleteNews("New Record in Running");
console.log("After Deleting News:");
newsFeed.displayAllNews();
console.log("----------");

newsFeed.sortByDate();
console.log("After Sorting by Date:");
newsFeed.displayAllNews();
console.log("----------");

const searchResult = newsFeed.searchByTag("science");
console.log("Search Result for Tag 'science':");
searchResult.forEach(news => console.log(news.title));
