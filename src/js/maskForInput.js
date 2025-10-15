const phoneInput = document.querySelectorAll('#inputNum');
phoneInput.forEach(input => {
  input.setAttribute('data-prev-value', '');
  
  input.addEventListener('input', function(e) {
    const input = e.target;
    const newValue = input.value;
    const oldValue = input.getAttribute('data-prev-value') || '';
    
    const isAdding = newValue.length > oldValue.length;
    
    input.setAttribute('data-prev-value', newValue);
    
    if (isAdding) {
      let value = newValue.replace(/\D/g, '');
      
      if (value === '') {
        input.value = '';
        return;
      }

      if (value.startsWith('7')) {
        value = value.substring(1);
      }
      
      if (value.length > 10) {
        input.value = oldValue;
        input.setAttribute('data-prev-value', oldValue);
        return;
      }
      
      let formattedValue = '+7';
      
      if (value.length > 0) {
        formattedValue += ' (' + value.substring(0, 3);
      }
      if (value.length > 3) {
        formattedValue += ') ' + value.substring(3, 6);
      }
      if (value.length > 6) {
        formattedValue += '-' + value.substring(6, 8);
      }
      if (value.length > 8) {
        formattedValue += '-' + value.substring(8, 10);
      }
      
      input.value = formattedValue;
      // Обновляем сохраненное значение после форматирования
      input.setAttribute('data-prev-value', formattedValue);
    }
  });
});