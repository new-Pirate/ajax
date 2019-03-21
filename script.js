/* AJAX запрос чистый */

function loadDataNative() {
    var xhr = new XMLHttpRequest();       //объект, дающий возможность делать запросы к серверу без перезагрузки стриницы
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);      //конфигурация запроса
    xhr.send();         //отправка запроса
    xhr.onreadystatechange = function () {      //событие состояний запроса
        if (this.readyState == 4 && this.status == 200) {       //4 - запрос завершен, 200 - запрос выполнен успешно
            let data = JSON.parse(this.responseText);           //JSON.parse превращает JSON в объект/массив
            const { userId, id, title, comleted } = data;
            const render = `<ul class="container__lists">
                                <li class="container__lists_item">User ID: ${userId}</li>
                                <li class="container__lists_item">ID : ${id}</li>
                                <li class="container__lists_item">User Email : ${title}</li>
                                <li class="container__lists_item">User Address : ${comleted}</li>
                            </ul>`
            document.querySelector('#contentNative').innerHTML += render;
        }
    }
}

/* AJAX запрос fetch */

function loadDataFetch() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())        //парсит ответ как json
    .then((data) => {
        const { userId, id, title, comleted } = data;
        const render = `<ul class="container__lists">
                            <li class="container__lists_item">User ID: ${userId}</li>
                            <li class="container__lists_item">ID : ${id}</li>
                            <li class="container__lists_item">User Email : ${title}</li>
                            <li class="container__lists_item">User Address : ${comleted}</li>
                        </ul>`
        document.querySelector('#contentFetch').innerHTML += render;
    })
    .catch((err)=>console.log(err))
}