export const tabActive = () => {
    const tabs = document.querySelectorAll('.hero__tab-link');
    const tabList = document.querySelector('.hero__tab-list');

    tabList.addEventListener('click', e => {
        if (e.target && e.target.classList.contains('hero__tab-link')) {
            tabs.forEach((item, i) => {
                if (e.target === item) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });
};