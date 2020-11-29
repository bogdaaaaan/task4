export async function sendOrder(body) {
    const url = 'https://my-json-server.typicode.com/bogdaaaaan/db-pizza/pizza';
    let headers = {
        'Content-Type' : 'application/json'
    }
    return fetch(url, {
        method : 'POST',
        body : JSON.stringify(body),
        headers : headers
    }).then(response => {
        return response.json();
    })
}