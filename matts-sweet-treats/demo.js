// Shared behavior for Drew Cox Web Design concept sites.
(function () {
  // Price estimator: <div class="est" data-est> with a <select data-base> and checkboxes data-add
  document.querySelectorAll('[data-est]').forEach(function (box) {
    var out = box.querySelector('[data-total]');
    function calc() {
      var total = 0;
      box.querySelectorAll('select[data-base]').forEach(function (s) { total += Number(s.value) || 0; });
      box.querySelectorAll('input[data-add]:checked').forEach(function (c) { total += Number(c.value) || 0; });
      out.textContent = '$' + total.toLocaleString();
    }
    box.addEventListener('change', calc);
    calc();
  });

  // Before / after slider
  document.querySelectorAll('.ba').forEach(function (ba) {
    var r = ba.querySelector('input[type=range]');
    function set() { ba.style.setProperty('--pos', r.value + '%'); }
    r.addEventListener('input', set);
    set();
  });

  // Concept forms do not send anywhere
  document.querySelectorAll('form[data-demo]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var m = f.querySelector('.demo-msg');
      if (m) m.classList.add('show');
    });
  });

  var y = document.querySelectorAll('[data-year]');
  y.forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
