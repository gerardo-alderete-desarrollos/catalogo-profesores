const ajax = request => {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(request.method, request.url, true)
        xhr.addEventListener( 'load' , e => {
            resolve(e.target)
        })
        xhr.send()

    })
}

const showTeachers = async () => {
    const url = 'http://localhost:8080/v1/teachers'
    const request = {
        method: 'GET',
        url: url
    }

    const response = await ajax(request)

    console.log(response)
}