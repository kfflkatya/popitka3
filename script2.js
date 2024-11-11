document.addEventListener('DOMContentLoaded', () => {

    const scrollElement = document.querySelector('.product-card2');
    
    const handleScroll = () => {
    
    const elementPosition = scrollElement.getBoundingClientRect().top;
    
    const viewportHeight = window.innerHeight;
    
    if (elementPosition < viewportHeight) {
    
    scrollElement.classList.add('visible');
    
    }
    
    };
    
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
    
    });