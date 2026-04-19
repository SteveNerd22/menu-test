document.addEventListener('DOMContentLoaded', function() {
    const bookElement = document.getElementById('menuBook');

    function getDimensions() {
        const safeMargin = 60;
        const availableHeight = window.innerHeight - safeMargin;
        const availableWidth = window.innerWidth - 20;

        let height = Math.min(availableHeight, 750);
        let width = height * 0.7;

        if (width * 2 > availableWidth && window.innerWidth > 768) {
            width = (availableWidth / 2) - 10;
            height = width / 0.7;
        } else if (width > availableWidth) {
            width = availableWidth - 10;
            height = width / 0.7;
        }

        return { width, height };
    }

    const dims = getDimensions();

    const pageFlip = new St.PageFlip(bookElement, {
        width: dims.width,
        height: dims.height,
        size: "stretch",
        minWidth: 280,
        maxWidth: 450,
        minHeight: 400,
        maxHeight: 800,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: true,
        usePortrait: true,
        startPage: 0
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    bookElement.classList.add('visible');
});