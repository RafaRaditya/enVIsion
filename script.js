document.addEventListener('DOMContentLoaded', () => {
  const paymentCards = document.querySelectorAll('.payment-card');
  paymentCards.forEach(card => {
    card.addEventListener('click', () => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        paymentCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      }
    });
  });

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterInput = document.getElementById('newsletter-email');
  const newsletterSuccess = document.getElementById('newsletter-success');

  if (newsletterForm && newsletterInput && newsletterSuccess) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailValue = newsletterInput.value.trim();

      const atIndex = emailValue.indexOf('@');
      const dotIndex = emailValue.lastIndexOf('.');

      const isValid = emailValue !== '' &&
        atIndex > 0 &&
        dotIndex > atIndex + 1 &&
        dotIndex < emailValue.length - 1;

      if (isValid) {
        newsletterSuccess.style.display = 'block';
        newsletterInput.value = '';
        setTimeout(() => {
          newsletterSuccess.style.display = 'none';
        }, 4000);
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  const orderForm = document.getElementById('order-form');
  if (orderForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const transferRadio = document.getElementById('pay-transfer');
    const cashRadio = document.getElementById('pay-cash');
    const successArea = document.getElementById('success-area');
    const addonBlueLight = document.getElementById('addon-blue-light');
    const addonLeatherCase = document.getElementById('addon-leather-case');
    const addonWarranty = document.getElementById('addon-warranty');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const paymentError = document.getElementById('payment-error');
    const addonsError = document.getElementById('addons-error');

    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      nameError.style.display = 'none';
      nameInput.classList.remove('error');
      emailError.style.display = 'none';
      emailInput.classList.remove('error');
      paymentError.style.display = 'none';
      addonsError.style.display = 'none';
      successArea.style.display = 'none';

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();

      if (nameVal === '') {
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
        nameInput.classList.add('error');
        hasError = true;
      } else if (nameVal.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        nameError.style.display = 'block';
        nameInput.classList.add('error');
        hasError = true;
      }

      if (emailVal === '') {
        emailError.textContent = 'Email address is required.';
        emailError.style.display = 'block';
        emailInput.classList.add('error');
        hasError = true;
      } else {
        const atIdx = emailVal.indexOf('@');
        const dotIdx = emailVal.lastIndexOf('.');
        const spaceIdx = emailVal.indexOf(' ');

        const isEmailFormatValid = atIdx > 0 &&
          dotIdx > atIdx + 1 &&
          dotIdx < emailVal.length - 1 &&
          spaceIdx === -1;

        if (!isEmailFormatValid) {
          emailError.textContent = 'Please enter a valid email address (e.g., name@domain.com).';
          emailError.style.display = 'block';
          emailInput.classList.add('error');
          hasError = true;
        }
      }

      if (!transferRadio.checked && !cashRadio.checked) {
        paymentError.textContent = 'Please select a payment method.';
        paymentError.style.display = 'block';
        hasError = true;
      }

      if (!addonBlueLight.checked && !addonLeatherCase.checked && !addonWarranty.checked) {
        addonsError.textContent = 'Please select at least one addon.';
        addonsError.style.display = 'block';
        hasError = true;
      }

      if (!hasError) {
        successArea.style.display = 'block';
        orderForm.reset();
        paymentCards.forEach(c => c.classList.remove('selected'));
        successArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 3) {
        nameError.style.display = 'none';
        nameInput.classList.remove('error');
      }
    });

    emailInput.addEventListener('input', () => {
      const val = emailInput.value.trim();
      const atIdx = val.indexOf('@');
      const dotIdx = val.lastIndexOf('.');
      const spaceIdx = val.indexOf(' ');
      if (atIdx > 0 && dotIdx > atIdx + 1 && dotIdx < val.length - 1 && spaceIdx === -1) {
        emailError.style.display = 'none';
        emailInput.classList.remove('error');
      }
    });

    transferRadio.addEventListener('change', () => {
      paymentError.style.display = 'none';
    });
    cashRadio.addEventListener('change', () => {
      paymentError.style.display = 'none';
    });

    [addonBlueLight, addonLeatherCase, addonWarranty].forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (addonBlueLight.checked || addonLeatherCase.checked || addonWarranty.checked) {
          addonsError.style.display = 'none';
        }
      });
    });
  }
});
