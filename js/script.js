document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a:not(.button)');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            sections.forEach(sec => sec.style.display = 'none');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // 子頁面切換
    const subNavLinks = document.querySelectorAll('.subnav a, .subsubnav a');
    subNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const parentSection = link.closest('section');
            const subSections = parentSection.querySelectorAll('div[id]');
            subSections.forEach(sub => sub.style.display = 'none');
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // 預設顯示首頁
    document.getElementById('home').style.display = 'block';
});
