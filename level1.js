const btn = document.getElementsByTagName('button')[0];
const btn1 = document.getElementsByTagName('button')[1];
const text = document.getElementById("text");
const imgs = document.getElementsByTagName("img");
const divs = document.getElementsByClassName("item1");
const numbers = document.getElementsByClassName("number");
const names = document.getElementsByClassName("name");
const singers = document.getElementsByClassName("singer");
const albums = document.getElementsByClassName("album");
btn.onclick = function () {
    // 1.创建对象
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    // 2.初始化，设置请求方法和URL
    xhr.open('GET', 'http://musicapi.leanapp.cn/personalized?limit=10');
    // 3.发送
    xhr.send();
    xhr.onreadystatechange = function () {
        // 判断(服务端返回了所有的结果)
        if (xhr.readyState === 4) {
            // 判断响应状态码
            if (xhr.status >= 200 && xhr.status < 300) {
                for (let i = 0; i < 10; i++) {
                    imgs[i].src = "" + xhr.response.result[i].picUrl + "";
                    divs[i].innerHTML = '<a href="https://music.163.com/#/playlist?id=' + `${xhr.response.result[i].id}` + '"' + '>' + `${xhr.response.result[i].name}` + '</a> ';
                }
            } else {
                console.log("error");
            }
        }
    }


}
btn1.onclick = function () {
    // 1.创建对象
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    // 2.初始化，设置请求方法和URL
    xhr.open('GET', 'http://musicapi.leanapp.cn/search?keywords= '+text.value);
    // 3.发送
    xhr.send();
    xhr.onreadystatechange = function () {
        // 判断(服务端返回了所有的结果)
        if (xhr.readyState === 4) {
            // 判断响应状态码
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response);
                console.log(xhr.response.result.songs.length);
                for (let i = 0; i < 10; i++) {
                    numbers[i].innerHTML = (i >= 9 ? (i+1)+"  " : "0" + (i+1))+"  ";
                    names[i].innerHTML = "  " + xhr.response.result.songs[i].name + "";
                    singers[i].innerHTML = "" + xhr.response.result.songs[i].artists[0].name + "";
                    albums[i].innerHTML = "" + xhr.response.result.songs[i].album.name + "";
                }
            } else {
                console.log("error");
            }
        }


    }


}