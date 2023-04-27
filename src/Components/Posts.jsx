import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} style={{ margin: "10px" }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {"User ID: " + post.userId}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {"ID: " + post.id}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
            Tags: {post.tags.join(', ')}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Reactions:  {post.reactions}
            </Typography>
            <Typography variant="body2" component="p">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Posts;
