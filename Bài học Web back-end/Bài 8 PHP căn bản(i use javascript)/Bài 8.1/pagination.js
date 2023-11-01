// Dữ liệu mẫu, bạn có thể thay thế bằng dữ liệu thực tế.
const items = Array.from({ length: 100 }, (_, i) => `Mục số ${i + 1}`);

const itemsPerPage = 10; // Số mục trên mỗi trang
let currentPage = 1; // Trang hiện tại

function displayItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = items.slice(start, end);

    const content = document.getElementById('pageContent');
    content.innerHTML = '';

    for (const item of itemsToDisplay) {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        content.appendChild(itemElement);
    }
}

function displayPagination() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.textContent = i;
        pageLink.href = '#';
        pageLink.addEventListener('click', () => {
            currentPage = i;
            displayItems(currentPage);
            displayPagination();
        });

        if (i === currentPage) {
            pageLink.classList.add('current-page');
        }

        pagination.appendChild(pageLink);
    }
}

displayItems(currentPage);
displayPagination();
