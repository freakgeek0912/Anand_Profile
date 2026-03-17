document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or use the OS default
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    }
    
    // Add click event to toggle theme
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Optional: announce the theme change for screen readers
            const liveRegion = document.getElementById('form-msg');
            if (liveRegion) {
                // Temporarily disable visually, just for reader
                liveRegion.textContent = `Theme changed to ${isDark ? 'dark' : 'light'} mode`;
                setTimeout(() => { liveRegion.textContent = ''; }, 2000);
            }
        });
    }
});
