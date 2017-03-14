class Api::TweetsController < ApplicationController
 def index
  render json: TwitterClient.client.user_timeline(params[:whereiamneeded])

 end

 def create
   TwitterClient.client.update(params[:tweetText])
   render json: TwitterClient.client.user_timeline(params[:whereiamneeded])
 end
end
