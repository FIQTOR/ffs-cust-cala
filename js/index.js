const title = document.querySelector('.title')
const text = Array.from('happy mensive cala 🤍')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    // Use textContent instead of innerHTML for emoji support
    const span = document.createElement('span')
    span.textContent = text[index]
    title.appendChild(span)
  } else {
    const space = document.createElement('span')
    space.style.width = '1rem'
    title.appendChild(space)
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});