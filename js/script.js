// Check if info message was closed and handle display
var infoMessageClosed = localStorage.getItem('infoMessageClosed');
if (infoMessageClosed === 'true') {
    document.getElementById('info').style.display = 'none';
}

document.getElementById('close_info').addEventListener('click', function() {
    document.getElementById('info').style.display = 'block';
    localStorage.setItem('infoMessageClosed', 'true');
});

// Function to dynamically prefix CSS properties
function prefixCSS() {
    const inputCode = document.getElementById('input').value;
    let lines = inputCode.split('\n');
    let isInComment = false;

    // List of properties that may need prefixes
 const properties = [
    'transform', 'transform-origin', 'transform-style', '@keyframes', 'animation',
    'animation-delay', 'animation-direction', 'animation-duration', 'animation-fill-mode', 
    'animation-iteration-count', 'animation-name', 'animation-play-state', 'animation-timing-function',
    'appearance', 'backface-visibility', 'background-clip', 'border-radius', 
    'box-shadow', 'box-sizing', 'column-count', 'column-gap', 'column-rule', 
    'column-rule-color', 'column-rule-style', 'column-rule-width', 'column-span', 
    'column-width', 'filter', 'flex', 'flex-basis', 'flex-direction', 'flex-flow', 
    'flex-grow', 'flex-shrink', 'flex-wrap', 'justify-content', 'align-items', 
    'align-self', 'align-content', 'order', 'grid', 'grid-area', 'grid-auto-columns', 
    'grid-auto-flow', 'grid-auto-rows', 'grid-column', 'grid-column-end', 'grid-column-gap',
    'grid-column-start', 'grid-gap', 'grid-row', 'grid-row-end', 'grid-row-gap',
    'grid-row-start', 'grid-template', 'grid-template-areas', 'grid-template-columns',
    'grid-template-rows', 'hyphens', 'image-rendering', 'mask', 'mask-image', 
    'mask-mode', 'mask-position', 'mask-repeat', 'mask-size', 'mask-type',
    'object-fit', 'object-position', 'opacity', 'overflow-scrolling', 'overscroll-behavior', 
    'perspective', 'perspective-origin', 'shape-margin', 'shape-outside', 'tab-size',
    'text-decoration', 'text-decoration-color', 'text-decoration-line', 
    'text-decoration-style', 'text-emphasis', 'text-emphasis-color', 'text-emphasis-position',
    'text-emphasis-style', 'text-orientation', 'text-size-adjust', 'text-transform', 
    'transform-box', 'transform-origin', 'transform-style', 'transition', 
    'transition-property', 'transition-duration', 'transition-timing-function', 
    'transition-delay', 'user-select', 'word-break', 'writing-mode', 'zoom', 
    '::placeholder', '::selection', '::-webkit-input-placeholder', '::-webkit-scrollbar',
    '::-webkit-scrollbar-thumb', '::-webkit-scrollbar-track'
];


    // Browser prefixes
    const prefixes = ['-webkit-', '-moz-', '-ms-', '-o-'];

    // Process each line
    const prefixedCode = lines.map(line => {
        // Check if the line starts or ends a comment
        if (line.trim().startsWith('/*')) isInComment = true;
        if (line.trim().endsWith('*/')) isInComment = false;

        // If inside a comment, skip prefixing
        if (isInComment) return line;

        // Apply vendor prefixes to each property
        properties.forEach(property => {
            const regex = new RegExp(`(^|\\s|:|,|\\()${property}(?=[;\\s:,\\)])`, 'g');
            if (regex.test(line)) {
                prefixes.forEach(prefix => {
                    line = line.replace(regex, `$1${prefix}${property}`);
                });
            }
        });

        return line;
    }).join('\n');

    // Display the result
    document.getElementById('output').value = prefixedCode;
}

// Event listeners for UI interactions
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
    let url = document.getElementById('url').value;
  
    navigator.clipboard.writeText(url)
    .then(() => {
        document.getElementById('copy_success').style.display = "block";
        urlValue.style.color = "#ff4500";

        setTimeout(() => {
            document.getElementById('copy_success').style.display = "none";
            urlValue.style.color = "inherit";
        }, 2000);
    })
    .catch(err => {
        console.error('Unable to copy text', err);
    });
});

// Copy prefixed CSS code
document.getElementById('copy_clipCss').addEventListener('click', function() {
    let textarea = document.getElementById('output');
    
    if (textarea.value.length === 0) {
        document.getElementById('temp_cop').textContent = "Input CSS value!";
        document.getElementById('temp_cop').style.color = "red";
        document.getElementById('output').style.border = "2px solid red";
        setTimeout(() => {
            document.getElementById('temp_cop').textContent = "Prefix Output";
            document.getElementById('temp_cop').style.color = "rgba(0,0,0,.7)";
            document.getElementById('output').style.border = "none";
        }, 2000);
    } else {
        textarea.select();
        document.execCommand('copy');
        textarea.setSelectionRange(0, 0);
        document.getElementById('temp_cop').textContent = "Copied!";
        document.getElementById('temp_cop').style.color = "#ff4500";
        setTimeout(() => {
            document.getElementById('temp_cop').textContent = "Prefix Output";
            document.getElementById('temp_cop').style.color = "rgba(0,0,0,.7)";
        }, 2000);
    }
});

// Remove the info box
document.getElementById('close_info').addEventListener('click', function(){
    document.getElementById('info').remove();
});

