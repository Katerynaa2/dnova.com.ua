    // Масив з індексами новин
    var currentIndex = 0;
    var newsItems = document.querySelectorAll('.news-item');

    function showNews(index) {
        // Ховаємо всі новини
        for (var i = 0; i < newsItems.length; i++) {
            newsItems[i].style.display = 'none';
        }
        // Показуємо вибрану новину
        newsItems[index].style.display = 'block';
    }

    function showPrev() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = newsItems.length - 1;
        }
        showNews(currentIndex);
    }

    function showNext() {
        currentIndex++;
        if (currentIndex >= newsItems.length) {
            currentIndex = 0;
        }
        showNews(currentIndex);
    }

    // Показуємо першу новину при завантаженні сторінки
    showNews(0);