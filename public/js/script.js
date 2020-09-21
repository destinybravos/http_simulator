$('#tabs li a').on('click', function () {
    // Get the Clicked Tab data-target (as the ID Content)
    $tab = $(this).data('target');

    // Remove Current Active and Place in the new one
    $('.tab-contents').removeClass('active');
    $($tab).addClass('active');

    // Change the Active Tab
    $('#tabs li a').removeClass('border-l border-t border-r');
    $(this).addClass('border-l border-t border-r')

});
