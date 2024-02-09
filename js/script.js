    var infoMessageClosed = localStorage.getItem('infoMessageClosed');
    if (infoMessageClosed == 'true') {
        document.getElementById('info').style.display = 'none';
    }
    document.getElementById('close_info').addEventListener('click', function() {
        document.getElementById('info').style.display = 'block';
        localStorage.setItem('infoMessageClosed', 'true');
    });


    function prefixCSS() {
        const inputCode = document.getElementById('input').value;
        let lines = inputCode.split('\n');
        let isInComment = false;
    

    // Process each line
    const prefixedCode = lines.map(line => {
        // Check if the line starts a comment
        if (line.trim().startsWith('/*')) {
            isInComment = true;
        }
        if (line.includes('-')) {
            isInComment = true;
        }
        // Check if the line ends a comment
        if (line.trim().endsWith('*/')) {
            isInComment = false;
        }

        // If inside a comment, skip prefixing
        if (isInComment) {
            return line;
        }
    
        // Apply vendor prefixes to the line
        return line
    .replace(/transform/g, '-webkit-transform')
    .replace(/transform-origin/g, '-webkit-transform-origin')
    .replace(/transform-style/g, '-webkit-transform-style')
    .replace(/@keyframes/g, '@-webkit-keyframes')
    .replace(/animation-name/g, '-webkit-animation-name')
    .replace(/appearance/g, '-webkit-appearance')
    .replace(/backface-visibility/g, '-webkit-backface-visibility')
    .replace(/background-clip/g, '-webkit-background-clip')
    .replace(/border-radius/g, '-webkit-border-radius')
    .replace(/box-shadow/g, '-webkit-box-shadow')
    .replace(/box-sizing/g, '-webkit-box-sizing')
    .replace(/column-count/g, '-webkit-column-count')
    .replace(/column-gap/g, '-webkit-column-gap')
    .replace(/column-rule/g, '-webkit-column-rule')
    .replace(/column-width/g, '-webkit-column-width')
    .replace(/filter/g, '-webkit-filter')
    // .replace(/flex/g, '-webkit-flex')
    .replace(/flex-direction/g, '-webkit-flex-direction')
    .replace(/flex-flow/g, '-webkit-flex-flow')
    .replace(/flex-wrap/g, '-webkit-flex-wrap')
    .replace(/justify-content/g, '-webkit-justify-content')
    .replace(/align-items/g, '-webkit-align-items')
    .replace(/align-self/g, '-webkit-align-self')
    .replace(/align-content/g, '-webkit-align-content')
    .replace(/order/g, '-webkit-order')
    .replace(/hyphens/g, '-webkit-hyphens')
    .replace(/perspective/g, '-webkit-perspective')
    .replace(/perspective-origin/g, '-webkit-perspective-origin')
    .replace(/transition/g, '-webkit-transition')
    .replace(/transition-property/g, '-webkit-transition-property')
    .replace(/transition-duration/g, '-webkit-transition-duration')
    .replace(/transition-timing-function/g, '-webkit-transition-timing-function')
    .replace(/transition-delay/g, '-webkit-transition-delay')
    .replace(/user-select/g, '-webkit-user-select')
    .replace(/::placeholder/g, '::-webkit-input-placeholder');
    // .replace(/::selection/g, '-webkit-appearance:')
    // .replace(/:placeholder-shown/g, '-webkit-appearance:')
    // .replace(/:read-only/g, '-webkit-appearance:')
    // .replace(/:read-write/g, '-webkit-appearance:')
    // .replace(/:fullscreen/g, '-webkit-appearance:')
    // .replace(/:nth-child/g, '-webkit-appearance:')
    // .replace(/:nth-last-child/g, '-webkit-appearance:')
    // .replace(/:nth-of-type/g, '-webkit-appearance:')
    // .replace(/:nth-last-of-type/g, '-webkit-appearance:')
        }).join('\n');
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

document.getElementById('close_info').addEventListener('click', function(){
    document.getElementById('info').remove();
});







  






