let score = 100000;

setInterval(() => {
    score -= 100;
    if (score <= 0) {
        score = 0;
    }
}, 1000);