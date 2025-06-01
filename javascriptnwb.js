function searchBlogs() {
  const query = document.getElementById("search").value.toLowerCase();  // Get the search query
  const blogPosts = document.querySelectorAll(".blog-post");  // Select all blog post elements

  blogPosts.forEach(post => {
    const title = post.querySelector(".blog-title").textContent.toLowerCase();  // Get the title of each blog post
    if (title.includes(query)) {
      post.style.display = "block";  // Show post if it matches the query
    } else {
      post.style.display = "none";  // Hide post if it doesn't match
    }
  });
}
// Toggle content for the Read More button
function toggleContent(blogId) {
  const content = document.getElementById(blogId);
  content.style.display = content.style.display === "block" ? "none" : "block";
}