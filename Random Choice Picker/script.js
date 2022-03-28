<<<<<<< HEAD
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
    }

})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim()
    !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
=======
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
    .then(res => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
>>>>>>> b0a92bbb1aaba9f9c298713079524165f7906589
    })
}

function randomSelect() {
    const times = 30

    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(() => {
        unhighlightTag(random)
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

funtion highlightTag(tag) {
    tag.classList.add('highlight')
}

funtion unhighlightTag(tag) {
    tag.classList.remove('highlight')
}