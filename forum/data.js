var defaultThreads = [
    { 
        title: "Flood",
        author: "lqwxx",
        date: Date.now(),
        content: "Flood",
        comments: [
            {
                author: "lqwxx",
                date: Date.now(),
                content: "тест"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads1')) {
    threads = JSON.parse(localStorage.getItem('threads1'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}