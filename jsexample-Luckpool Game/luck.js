const tagsContainer = document.getElementById('tags');
const txtarea = document.getElementById('txtarea');
txtarea.focus();



txtarea.addEventListener('keyup', (e) => {
    createTag(e.target.value)

    if (e.key === ' ') {
        setTimeout()
    }
});

function createTag(tag) {
    const trimmedTag = tag.trim()
    if (trimmedTag !== '') {
        const tagSpan = document.createElement('span')
        tagSpan.classList.add('tag')
        tagSpan.innerHTML = trimmedTag
        tagsContainer.appendChild(tagSpan)

    }
}

