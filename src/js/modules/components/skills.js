export function initSkills() {
    const tabs = document.querySelectorAll('.skills__tab');
    const skillsIcon = document.getElementById('skillsIcon');
    const skillsCategory = document.getElementById('skillsCategory');
    const skillsProgress = document.getElementById('skillsProgress');
    const skillsProgressFill = document.getElementById('skillsProgressFill');
    const skillsDescription = document.getElementById('skillsDescription');
    const skillsItems = document.getElementById('skillsItems');

    const skillsData = {
        'all': {
            title: "Мой стек",
            percent: null,
            description: "Полный список всех моих навыков и технологий, которые я использую в работе.",
            image: "icons/portfoli_ico.png",
            items: [
                "HTML5 (Bootstrap)",
                "CSS3 (SCSS/SASS/LESS)",
                "JavaScript",
                "Vue 3",
                "PHP 8+",
                "Laravel 10+",
                "SQL",
                "Docker",
                "Git (GitHub)",
                "Figma",
                "Composer",
                "Postman"
            ]
        },
        'htmlcss': {
            title: "HTML/CSS",
            percent: "85%",
            description: "Отлично ориентируюсь в вёрстке, способен быстро и качественно составить скелет сайта, очень стараюсь содержать код в чистоте и уюте, разделять все по компонентам.",
            image: "icons/portfoli_ico.png",
            items: [
                "HTML5",
                "CSS3",
                "SCSS/SASS/LESS",
                "Bootstrap",
                "Figma",
                "Адаптивная верстка",
                "Кроссбраузерность"
            ]
        },
        'php': {
            title: "PHP",
            percent: "75%",
            description: "Имею опыт работы с PHP, включая работу с фреймворком Laravel. Умею создавать RESTful API, работать с базами данных и реализовывать безопасность приложений.",
            image: "icons/portfoli_ico.png",
            items: [
                "PHP 8+",
                "Laravel 10+",
                "Composer",
                "RESTful API",
                "MVC архитектура",
                "ООП"
            ]
        },
        'js': {
            title: "JavaScript",
            percent: "70%",
            description: "Знаю основы JavaScript, работал с Vue.js. Понимаю асинхронное программирование, работаю с DOM и событиями.",
            image: "icons/portfoli_ico.pngg",
            items: [
                "JavaScript ES6+",
                "Vue 3",
                "DOM Manipulation",
                "AJAX/Fetch",
                "Async Programming"
            ]
        },
        'database': {
            title: "Базы данных",
            percent: "65%",
            description: "Имею опыт работы с реляционными базами данных, умею создавать и оптимизировать запросы, проектировать структуру БД.",
            image: "icons/portfoli_ico.png",
            items: [
                "SQL",
                "MySQL",
                "PostgreSQL",
                "Миграции",
                "Оптимизация запросов"
            ]
        },
        'other': {
            title: "Другие навыки",
            percent: "80%",
            description: "Дополнительные инструменты и технологии, которые я использую в работе.",
            image: "icons/portfoli_ico.png",
            items: [
                "Docker",
                "Git/GitHub",
                "Figma",
                "Postman",
                "Terminal",
                "DevTools"
            ]
        }
    };

    function updateSkills(category) {
        const data = skillsData[category];
        
        skillsItems.style.opacity = '0';
        
        setTimeout(() => {
            skillsIcon.src = data.image;
            skillsIcon.alt = data.title;
            skillsCategory.textContent = data.title;
            skillsProgress.textContent = data.percent;
            skillsProgressFill.style.width = data.percent;
            skillsDescription.textContent = data.description;
            
            skillsItems.innerHTML = '';
            data.items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'skills__item';
                div.textContent = item;
                skillsItems.appendChild(div);
            });
            
            setTimeout(() => {
                skillsItems.style.opacity = '1';
            }, 50);
        }, 300);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            
            updateSkills(category);
        });
    });

    updateSkills('all');
}