
  

function prefixCSS() {
    // Get the input CSS code
    const inputCode = document.getElementById('input').value;


    // Add vendor prefix for 'transform'
    const prefixedCode = inputCode
    .replace(/transform:/g, '-webkit-transform:').replace(/@keyframes/g, '@-webkit-keyframes')



    // Display the result
    document.getElementById('output').value = prefixedCode;
  }


  document.getElementById('share_me').addEventListener('click', function(){
    document.getElementById('share_me_pop').style.display  = "flex";
  });
  document.getElementById('close_popup').addEventListener('click', function(){
    document.getElementById('share_me_pop').style.display  = "none";
  });

  let currentUrl = window.location.href;
  let urlValue = document.getElementById('url');
  urlValue.value = currentUrl;
  
  document.getElementById('copy_me').addEventListener('click', function() {
      // Get the span element
      let url = document.getElementById('url').value;
  
      navigator.clipboard.writeText(url)
      .then(() => {
          // Copy successful
          document.getElementById('copy_success').style.display = "block";
          urlValue.style.color = "#ff4500";

          setTimeout(() => {
              document.getElementById('copy_success').style.display = "none";
              urlValue.style.color = "inherit";
          }, 2000);
      })
      .catch(err => {
          // Unable to copy
          console.error('Unable to copy text', err);
      });
  });

//   ==============================
document.getElementById('copy_clipCss').addEventListener('click', function() {
    // Get the textarea element
    let textarea = document.getElementById('output');

    // if (cssCode.includes('{') && cssCode.includes('}'))

    // try{
    //     await navigator.clipboard.writeText(textarea.value);
    //     textarea.style.color = "#ff4500";

    //     setTimeout(() => {
    //         textarea.style.color = "inherit";
    //     }, 2000);
    // }catch (err){
    //     console.log('Unable to copy text', err);
    // }

    // Select the text inside the textarea
    
    if(textarea.value.length === 0){
        document.getElementById('temp_cop').textContent = "Input css value!";
        document.getElementById('temp_cop').style.color = "red";
        document.getElementById('output').style.border = "2px solid red";
        setTimeout(() => {
            // textarea.style.color = "inherit";
            document.getElementById('temp_cop').textContent = "Prefix Output";
            document.getElementById('temp_cop').style.color = "rgba(0,0,0,.7)";
            document.getElementById('output').style.border = "none";
        }, 2000);
    }else{
        textarea.select();
        // Copy the selected text to the clipboard
        document.execCommand('copy');
    
        // Deselect the text
        textarea.setSelectionRange(0, 0);
        // textarea.style.color = "#ff4500";
        document.getElementById('temp_cop').textContent = "Copied!";
        document.getElementById('temp_cop').style.color = "#ff4500";
        setTimeout(() => {
            // textarea.style.color = "inherit";
            document.getElementById('temp_cop').textContent = "Prefix Output";
            document.getElementById('temp_cop').style.color = "rgba(0,0,0,.7)";
        }, 2000);
    }
    
});



  






