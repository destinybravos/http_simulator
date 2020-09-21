
$('#makecall').on('click', function(){
    call();
})

function call() {
    axios.get('http://localhost/axios_test/index.html')
    .then((response) => {
        // let page_mirror = document.getElementById('page_mirror');
        displayContent(response.data);
    });
}

function displayContent(data) {
    $('#page_mirror').html(data);
}

