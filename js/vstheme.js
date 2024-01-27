function highlightCode() {
    const textarea = document.getElementById('input');
    const code = textarea.value;
  
    // Regular expression patterns to match class, property, and value
    const classPattern = /\.([^\s\{]+)/g;
    const propertyPattern = /([a-zA-Z-]+)\s*:/g;
    const valuePattern = /:\s*([^;]+);/g;
  
    // Clear previous spans
    textarea.innerHTML = code;
  
    // Match and wrap classes with spans
    textarea.innerHTML = textarea.innerHTML.replace(classPattern, '<span class="red">.$1</span>');
  
    // Apply styles based on detected type
    textarea.innerHTML = textarea.innerHTML
      .replace(propertyPattern, '<span class="green">$1</span>:')
      .replace(valuePattern, ': <span class="white">$1</span>;');
  }
  
  document.getElementById('input').addEventListener('input', highlightCode);
  