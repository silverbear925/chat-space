class MessagesController < ApplicationController
  before_action :set_group 

  def index
      @message = Message.new
      @messages = @group.messages.includes(:user)
      @newmessages = []
      respond_to do |format|
        format.json 
        format.html
      end
    end

  def create
    @message = @group.messages.new(message_params)
    if @message.save
      respond_to do |format|
        format.html { redirect_to "group_messages_path(params[:group_id])" }
        format.json
      end
    else
      flash[:notice] = "メッセージを入力してください"
     @messages = @group.messages.includes(:user)
      render :index
    end
end

  
  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end