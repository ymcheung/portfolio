export const screenMobile = (typeof window !== 'undefined') && window.matchMedia('(max-width: 767px)').matches;
export const screenTablet = (typeof window !== 'undefined') && window.matchMedia('(min-width: 768px)').matches;
