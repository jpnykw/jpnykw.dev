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
                              }
                              break;
                  }
            });
      };
})();