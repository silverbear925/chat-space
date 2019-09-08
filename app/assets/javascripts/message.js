$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = ` <div class= "message" "data-message-id"=${message.id}>
                  <div class= upper-message>
                    <div class= upper-message__user-name>
                      ${message.user_name}
                    </div>
                    <div class= upper-message__date>
                      ${message.created_at}
                    </div>
                  </div>
                  <div class= lower-message>
                    <div class= lower-message__content>
                      ${message.content}
                    </div>
                      ${img}
                  </div>
              </div>`
  return html;
}

$('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = (window.location.href);

    $.ajax({  
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      function scrollBottom(){
        var target = $('.message').last();
        var position = target.offset().top + $('.messages').scrollTop();
        $('.messages').animate({
          scrollTop: position
        }, 300, 'swing');
      }
      var html = buildHTML(data);
      $('.messages').append(html);
      $('#message_content').val('')
      scrollBottom();
    })

    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false);
    })
  })
})
