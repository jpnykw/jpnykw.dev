(_ => {
      const init = _ => {
            console.log('OK');
            const goTopButton = document.getElementById('go-top');
            goTopButton.onclick = _ => window.scrollTo(0, 0);
      };

      window.onload = init;
})();