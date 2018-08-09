'use strict';

fetch('http://localhost:8080')
.then( res => {
    res.json().then( data => {
        console.log(data);
    })
})