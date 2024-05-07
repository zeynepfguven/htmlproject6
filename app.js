const blogs = document.querySelectorAll('.blog');

window.addEventListener('scroll', checkBlogs);

checkBlogs();

function checkBlogs() {
    const triggerBottom = (window.innerHeight / 6) * 4;

    blogs.forEach(blog => {
        const blogTop = blog.getBoundingClientRect().top; 

        if (blogTop < triggerBottom) {
            blog.classList.add('show');
        } else {
            blog.classList.remove('show');
        }
    });
}
