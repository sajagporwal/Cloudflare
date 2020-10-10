const Router = require('./router')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(request) {

    const init = {
        headers: { 'content-type': 'application/json' },
    }

    const links = [
        { "name": "Link #1 : PlayStation", "url": "https://www.playstation.com/en-us/" },
        { "name": "Link #2 : Xbox", "url": "https://www.xbox.com/en-US" },
        { "name": "Link #3 : Stadia", "url": "https://stadia.google.com/" }
    ]

    const body = JSON.stringify(links)

    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()

    r.get('/links', () => handler(request))

    const resp = await r.route(request)

    return resp
}