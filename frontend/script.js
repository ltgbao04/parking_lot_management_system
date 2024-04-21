const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// Hàm để sinh số ngẫu nhiên từ 1 đến 200
function generateRandomNumber() {
    return Math.floor(Math.random() * 200) + 1;
}

// Hàm để đặt số ngẫu nhiên vào ô textArea 'ticketID' mà vẫn giữ nguyên chữ 'MÃ PHIẾU'
function setRandomNumberToTicketID() {
    var randomNumber = generateRandomNumber();
    var ticketIDTextArea = document.getElementById('ticketID');
    ticketIDTextArea.value = "MÃ PHIẾU: " + randomNumber;
}


// Gọi hàm khi trang được tải
window.onload = function() {
    setRandomNumberToTicketID();
};
