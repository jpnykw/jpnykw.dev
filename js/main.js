(_ => {
      onload = _ => {
            console.log('OK');
            const goTopButton = document.getElementById('go-top');
            goTopButton.onclick = _ => window.scrollTo(0, 0);

            let tag = location.href.split('?');
            tag.shift();

            tag.join('?').split('&').map(data => {
                  let expand = data.split('=');
                  let name = expand[0];
                  expand.shift();

                  let value = expand.join('=');
                  switch (name.toLowerCase()) {
                        case 'ar':
                              if (value === 'true') {
                                    // console.log('AR-Mode');
                                    document.getElementsByClassName('ar-mode')[0].classList.remove('hide');
                                    setTimeout(() => {
                                          if (confirm('QRコードの読み取りありがとうございます！\nARカメラを起動して宜しいですか？')) {
                                                open('https://jpnykw.github.io/Xmas2018/');
                                          }
                                    }, 500);
                              }
                              break;
                  }
            });
      };
})();
