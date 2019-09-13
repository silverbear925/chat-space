$(document).on('turbolinks:load', function(){
  function buildHTML(message) {
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
    var html = ` <div class= "message" data-message-id=${message.id}>
                  <div class= upper-message>
                    <div class= upper-message__user-name>
                      ${message.user_name}
                    </div>
                    <div class= upper-message__date>
                      ${message.data}
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
  var url =  $(this).attr('action');

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
      $("#new_message")[0].reset();
      scrollBottom();
    })

    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(() => {
      $('.form__submit').removeAttr("disabled");
    });
  });

 var reloadMessages = function () {
  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    var last_message_id = $('.message:last').data("message-id");

    $.ajax({ 
      url: "api/messages",
      type: 'get', 
      dataType: 'json', 
      data: {last_id: last_message_id} 
    })
    .done(function (messages) { 
      var insertHTML = '';
      messages.forEach(function (message) {
        insertHTML = buildHTML(message);
        $('.messages').append(insertHTML);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast')
      })
    })
    .fail(function () {
      alert('自動更新に失敗しました');
    });
  }
};
setInterval(reloadMessages, 5000);
})
