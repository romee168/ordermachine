export const theme = {
  colors: {
    primary: '#DA291C', // 麦当劳红
    secondary: '#FFC72C', // 麦当劳黄
    background: '#FFFFFF',
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      light: '#9CA3AF'
    }
  },
  spacing: {
    section: 'py-24 sm:py-32',
    container: 'max-w-7xl mx-auto px-6 lg:px-8'
  },
  typography: {
    h1: 'text-4xl md:text-5xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl font-bold leading-tight',
    h3: 'text-2xl md:text-3xl font-bold leading-tight',
    body: 'text-lg text-gray-600',
    small: 'text-sm text-gray-500'
  },
  buttons: {
    primary: 'bg-primary hover:bg-primary/90 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-xl shadow transition-all duration-300 hover:scale-105',
    secondary: 'bg-secondary hover:bg-secondary/90 text-primary font-semibold text-sm md:text-base px-6 py-3 rounded-xl shadow transition-all duration-300 hover:scale-105',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm md:text-base px-6 py-3 rounded-xl transition-all duration-300'
  },
  animations: {
    fadeIn: 'animate-fadeIn',
    slideUp: 'animate-slideUp',
    slideLeft: 'animate-slideLeft',
    slideRight: 'animate-slideRight'
  }
}; 