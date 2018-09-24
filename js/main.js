(function() {
      window.onload = init();
      function init() {
            Array.from(document.getElementsByClassName('anker')[0].getElementsByTagName('a')).map(dom => dom.addEventListener('click', () => scroll(document.getElementById(dom.classList[0]).getBoundingClientRect().top)));

            function scroll(height){
                  let offset = window.pageYOffset;

                  let loop = setInterval(() => {
                        offset += (height - offset) / 13;
                        window.scrollTo(0, offset);

                        Math.abs(offset - height) < .1 && clearInterval(loop);
                  }, 10);
            }
      }
})();
