export interface ExternalLink {
  label: string;
  href: string;
}

export interface ExternalLinksConfig {
  social: {
    instagram: ExternalLink;
    linkedin: ExternalLink;
    twitter: ExternalLink;
    behance?: ExternalLink;
  };
  contact: {
    email: string;
    emailHref: string; // mailto: 형식
  };
}

export const externalLinks: ExternalLinksConfig = {
  social: {
    instagram: {
      label: 'Instagram',
      href: 'https://www.instagram.com/socon_jpg/?igsh=MTVtMHNjMjF1YjQweA%3D%3D#',
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
    twitter: {
      label: 'Twitter',
      href: 'https://twitter.com',
    },
  },
  contact: {
    email: 'hello@socon.studio',
    emailHref: 'mailto:hello@socon.studio',
  },
};

// 편의 함수: 모든 소셜 링크를 배열로 반환
export const getAllSocialLinks = (): ExternalLink[] => {
  return Object.values(externalLinks.social).filter(
    (link): link is ExternalLink => link !== undefined
  );
};

// 특정 소셜 링크만 가져오기
export const getSocialLinks = (
  platforms: Array<keyof typeof externalLinks.social>
): ExternalLink[] => {
  return platforms
    .map((platform) => externalLinks.social[platform])
    .filter((link): link is ExternalLink => link !== undefined);
};
