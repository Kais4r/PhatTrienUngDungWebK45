function getZodiacSign() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);

    if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
        document.getElementById("result").textContent = "Ngày hoặc tháng không hợp lệ.";
    } else {
        const zodiacSign = calculateZodiacSign(day, month);
        document.getElementById("result").textContent = `Chòm sao của bạn là: ${zodiacSign}`;
    }
}

function calculateZodiacSign(day, month) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Bạch Dương";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Kim Ngưu";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Song Tử";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cự Giải";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Sư Tử";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Xử Nữ";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Thiên Bình";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Bọ Cạp";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Nhân Mã";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Ma Kết";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Bảo Bình";
    } else {
        return "Song Ngư";
    }
}
