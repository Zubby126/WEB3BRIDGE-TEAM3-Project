const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');
const commentCount = document.getElementById('commentCount');

function addComment() {
    const commentText = commentInput.value.trim();

    if (commentText === '') {
        alert('Please enter a comment');
        return;
    }

    // Create a new comment element
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentText;

    // Add the comment to the comment list
    commentList.appendChild(commentDiv);

    // Clear the input field
    commentInput.value = '';

    // Update the comment count
    updateCommentCount();
}

function updateCommentCount() {
    // Get only the comments inside the commentList container
    const comments = commentList.querySelectorAll('.comment'); // Changed to target comments within commentList only
    commentCount.textContent = comments.length;
}
