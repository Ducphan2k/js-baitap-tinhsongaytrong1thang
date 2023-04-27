let calculationDate = document.getElementById('calculationDate');

calculationDate.addEventListener('click', function () {
    let month = document.getElementById('month').value;
    let numberOfDay;
    switch (month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            numberOfDay = 31;
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            numberOfDay = 30;
            break;
        case '2':
            numberOfDay = '28 hoặc 29';
            break;
        
    }
    let result = document.getElementById('result');
    result.innerHTML = `Tháng ${month} có ${numberOfDay} ngày`;
})