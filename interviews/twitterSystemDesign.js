/* Problem Statement

Write functions/methods implementing the following functionality:

1. Post a tweet, takes a user handle string ("@X") and tweet text string.
2. Follow another user, takes the follower user handle string ("@X") and the followee user handle string ("@Y"). X follows tweets made by Y.
3. Print the feed of a given user, takes a single user handle string ("@X"). Feed of a user is all the tweets posted by everyone that this user is following.

- You may store the tweets/followers-information in a global object/hashMap/list or any other data structure.


*/

var TweetsDb = function () {
  (this.id = 1), (this.postList = new Map());
  this.following = new Map();
};

TweetsDb.prototype.postTweet = function (userId, tweetId) {
  const post = this.postList.get(userId);
  const tween = { tweetId, id: this.id++ };

  post ? post.push(tween) : this.postList.set(userId, [tween]);
  // post.shift();
};

TweetsDb.prototype.getNewsFeed = function (userId) {
  const following = this.following.get(userId) ?? [];
  const newsFeed = [userId, ...following].reduce((news, user) => {
    const post = this.postList.get(user);

    return post ? [...news, ...post] : news;
  }, []);

  return newsFeed
    .sort((a, b) => b.postId - a.postId)
    .slice(0, 10)
    .map((feed) => feed.tweetId);
};

TweetsDb.prototype.follow = function (followerId, followeeId) {
  const following = this.following.get(followerId);

  following
    ? following.add(followeeId)
    : this.following.set(followerId, new Set([followeeId]));
};

var obj = new TweetsDb();
obj.postTweet(1, 'tweetId');
var param_2 = obj.getNewsFeed(1);
console.log(obj.follow(1, 2));
