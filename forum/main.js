var defaultThreads = [
    {
        id: 1,
        title: "flodilka",
        author: "lqwxx",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "lqwxx",
                date: Date.now(),
                content: "lqwxx"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads5')) {
    threads = JSON.parse(localStorage.getItem('threads5'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}