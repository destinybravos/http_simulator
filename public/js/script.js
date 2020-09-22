
$('#tabs li a').on('click', function () {
    // Get the Clicked Tab data-target (as the ID Content)
    $tab = $(this).data('target');

    // Remove Current Active and Place in the new one
    $('.tab-contents').removeClass('active');
    $($tab).addClass('active');

    // Change the Active Tab
    $('#tabs li a').removeClass('border-l border-t border-r');
    $(this).addClass('border-l border-t border-r');
});

$('form[name=request_form]').on('submit', function(e){
    e.preventDefault();
    $request = $('#method').val();
    $url = $('#url').val();

    if($request === 'post'){
        usePostMethod($url);
    }else if($request === 'get'){
        useGetMethod($url);
    }
});


function usePostMethod(url){
    axios.post(url)
    .then((response) => {
        console.log(response);
    })
    .catch((errors) => {
        console.log(errors);
    })
}

function useGetMethod(url){
    axios.get(url)
    .then((response) => {
        console.log(response.data);
    })
    .catch((errors) => {
        console.log(errors);
    })
}

function usePutMethod(){
    
}

function useDeleteMethod(){
    
}
