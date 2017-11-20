ready = ->
  $(document).on 'click', '.clickable', ->
    window.location.href = $(this).data('url')
    return false

$(document).on('ready', ready);
