function highlightCode(){const textarea=document.getElementById("input"),code=textarea.value,classPattern=/\.([^\s\{]+)/g,propertyPattern=/([a-zA-Z-]+)\s*:/g,valuePattern=/:\s*([^;]+);/g;textarea.innerHTML=code,textarea.innerHTML=textarea.innerHTML.replace(classPattern,'<span class="red">.$1</span>'),textarea.innerHTML=textarea.innerHTML.replace(propertyPattern,'<span class="green">$1</span>:').replace(valuePattern,': <span class="white">$1</span>;')}document.getElementById("input").addEventListener("input",highlightCode);