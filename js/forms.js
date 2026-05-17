/* ============================================
   FORMS — Validation, submit feedback
   ============================================ */

(function () {
  'use strict';

  // ── Utility ──────────────────────────────────────────────────────
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function setFieldError(input, message) {
    input.classList.add('is-error');
    let errEl = input.parentElement.querySelector('.field-error');
    if (!errEl) {
      errEl = document.createElement('span');
      errEl.className = 'field-error';
      errEl.setAttribute('role', 'alert');
      errEl.style.cssText = 'display:block;font-size:0.75rem;color:#c0375d;margin-top:0.3rem;font-family:var(--font-mono);letter-spacing:0.06em;';
      input.parentElement.appendChild(errEl);
    }
    errEl.textContent = message;
  }

  function clearFieldError(input) {
    input.classList.remove('is-error');
    const errEl = input.parentElement.querySelector('.field-error');
    if (errEl) errEl.remove();
  }

  function showSuccess(form, message) {
    form.style.transition = 'opacity 0.3s';
    form.style.opacity = '0';
    setTimeout(function () {
      form.innerHTML = '<div class="form-success" style="text-align:center;padding:2rem 0;">'
        + '<div style="font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--magenta);margin-bottom:0.75rem;">ODDANO</div>'
        + '<p style="font-size:0.95rem;color:var(--ink-soft);line-height:1.6;">' + message + '</p>'
        + '</div>';
      form.style.opacity = '1';
    }, 300);
  }

  // ── Newsletter forms ─────────────────────────────────────────────
  document.querySelectorAll('.form-newsletter').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = form.querySelector('[type="email"]');
      if (!emailInput) return;

      clearFieldError(emailInput);

      if (!isValidEmail(emailInput.value)) {
        setFieldError(emailInput, 'Vnesite veljaven e-poštni naslov.');
        emailInput.focus();
        return;
      }

      // Placeholder submission — swap for real handler
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Posiljam...';
        btn.disabled = true;
      }

      setTimeout(function () {
        showSuccess(form, 'Hvala. Ko se Akademija odpre, boste med prvimi obveščeni.');
      }, 800);
    });
  });

  // ── Contact form ─────────────────────────────────────────────────
  document.querySelectorAll('.form-kontakt').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let hasError = false;

      const nameInput = form.querySelector('[name="ime"]');
      const emailInput = form.querySelector('[name="email"]');
      const msgInput = form.querySelector('[name="sporocilo"]');

      if (nameInput) clearFieldError(nameInput);
      if (emailInput) clearFieldError(emailInput);
      if (msgInput) clearFieldError(msgInput);

      if (nameInput && nameInput.value.trim().length < 2) {
        setFieldError(nameInput, 'Vnesite vaše ime.');
        hasError = true;
      }

      if (emailInput && !isValidEmail(emailInput.value)) {
        setFieldError(emailInput, 'Vnesite veljaven e-poštni naslov.');
        hasError = true;
      }

      if (msgInput && msgInput.value.trim().length < 10) {
        setFieldError(msgInput, 'Sporocilo je prekratko.');
        hasError = true;
      }

      if (hasError) {
        const firstError = form.querySelector('.is-error');
        if (firstError) firstError.focus();
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Posiljam...';
        btn.disabled = true;
      }

      setTimeout(function () {
        showSuccess(form, 'Hvala za vaše povprasevanje. Tanja se vam bo oglasila v roku 1-2 delovnih dni.');
      }, 900);
    });
  });

  // ── Akademija signup ─────────────────────────────────────────────
  document.querySelectorAll('.form-akademija').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nameInput = form.querySelector('[name="ime"]');
      const emailInput = form.querySelector('[name="email"]');
      let hasError = false;

      if (nameInput) clearFieldError(nameInput);
      if (emailInput) clearFieldError(emailInput);

      if (nameInput && nameInput.value.trim().length < 2) {
        setFieldError(nameInput, 'Vnesite vaše ime.');
        hasError = true;
      }

      if (emailInput && !isValidEmail(emailInput.value)) {
        setFieldError(emailInput, 'Vnesite veljaven e-poštni naslov.');
        hasError = true;
      }

      if (hasError) return;

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Posiljam...';
        btn.disabled = true;
      }

      setTimeout(function () {
        showSuccess(form, 'Odlicno. Sporocili vam bomo takoj, ko se Akademija odpre.');
      }, 800);
    });
  });

  // ── Error styling ────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = '.form-input.is-error,.form-textarea.is-error,.form-select.is-error{border-color:#c0375d;box-shadow:0 0 0 3px rgba(192,55,93,0.12);}';
  document.head.appendChild(style);

})();
