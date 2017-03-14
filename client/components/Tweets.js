import React from 'react';

class Tweets extends React.Component{
 state = { tweets: [], handle: '' };

fetchTweets = (e) => {
 e.preventDefault();
 //geting the handle from the input of the form
 //making the ajax get request to our server
 //setting state of the tweets that came back
 //reset the form and refocus the user into the handle field
 let { handle, tweetForm} = this.refs;
 $.ajax({
   type: 'GET',
   url: '/api/tweets',
   dataType: 'JSON',
   data: {handle: handle.value }
 }).done(tweets => {
   this.setState({ tweets, handle: handle.value });
   tweetForm.reset();
   handle.focus();
 }).fail( data => {
   console.log(data);
 });
}


displayTweets = () => {
 //loop all this.stat.tweets -map
 //generate jsx to be returned
 let { tweets } = this.state

 if(tweets.length) {
   let tweetsJsx = [];
   this.state.tweets.forEach( tweet => {
     tweetsJsx.push(
       <div
         key={tweet.id}
         className='well well-lg col-xs-12 col-sm-4 text-center'
         style={{ height: '300px', overflow: 'scroll' }}
         >
         <img src={ tweet.user.profile_image_url } alt='profile pic'/>
         <blockquote>
           {tweet.text}
         </blockquote>
         <i>Tweeted At: { tweet.created_at }</i>
       </div>
     );
   });
   return tweetsJsx;
 }else {
   return(<h3>No Tweets, Please Submit the Form</h3>);
 }
}

tweet = (e) => {
 e.preventDefault();
 let { addTweetForm, tweetText } = this.refs;
 $.ajax({
   url: '/api/tweets',
   type: 'POST',
   dataType: 'JSON',
   data: { tweetText: tweetText.value, handle: 'VALtron11' }
 }).done( tweets =>{
   this.setState({tweets, tweetText: tweetText.value});
   addTweetForm.reset();
   tweetText.focus();
 }).fail( data => {
   console.lob(data);
 });
}

 render (){
   return(
     <div>
       <form ref='tweetform' className='col-sx-12 col-sm-6' onSubmit={ this.fetchTweets }>
         <input
          autoFocus={true}
          ref='handle' required type='text'
          placeholder='Twitter Handle'
          />
         <input type='submit' value='Get Tweets' />
       </form>
       <form ref='addTweetForm' className='col-sx-12 col-sm-6' onSubmit={ this.tweet }>
         <textarea required placeholder="Tweet Text" ref='tweetText'></textarea>
         <br />
         <input type='submit' value='Create New Tweet' />
       </form>

       <hr />
       <h3>All Tweets for Handle: {this.state.handle}</h3>
       {this.displayTweets()}

     </div>
   );
 }
}

export default Tweets;
