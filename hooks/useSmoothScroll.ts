import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useSmoothScroll = () => {
  const router = useRouter();

  const scrollToSection = (sectionId: string, offset: number = 0) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigateAndScroll = (sectionId: string, offset: number = 80) => {
    // If we're already on the home page, just scroll
    if (window.location.pathname === '/') {
      scrollToSection(sectionId, offset);
    } else {
      // Navigate to home page and then scroll
      router.push('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId, offset);
      }, 300);
    }
  };

  // Handle hash in URL on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(sectionId, 80);
      }, 100);
    }
  }, []);

  return { scrollToSection, navigateAndScroll };
};
