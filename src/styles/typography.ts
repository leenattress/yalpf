import { css } from "styled-components";

/**
 * Typography Mixin
 * 
 * Apply this to any container component to automatically style HTML tags inside it.
 * This cascades typography styles to all child elements without needing global styles.
 * Uses CSS variables set by ThemeProvider for font families.
 * 
 * @example
 * ```tsx
 * import { typographyStyles } from '../styles/typography';
 * 
 * export const Container = styled.div`
 *   ${typographyStyles}
 *   // your other styles...
 * `;
 * ```
 * 
 * Now any HTML inside this container gets automatic styling:
 * ```tsx
 * <ThemeProvider theme={sansSerifTheme}>
 *   <Container>
 *     <h1>Automatically styled with theme</h1>
 *     <p>Typography follows theme settings</p>
 *   </Container>
 * </ThemeProvider>
 * ```
 */
export const typographyStyles = css`
  /* Headings - Mobile-first responsive sizing */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--heading-font-family, var(--font-family, sans-serif));
    line-height: 1.2;
    font-weight: 700;
    margin-top: 0;
    color: inherit;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 40px;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  h2 {
    font-size: 28px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      font-size: 36px;
    }
  }

  h3 {
    font-size: 24px;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      font-size: 28px;
    }
  }

  h4 {
    font-size: 20px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  h5 {
    font-size: 18px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  h6 {
    font-size: 16px;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  /* Body text - Optimal readability */
  p {
    font-family: var(--font-family, sans-serif);
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 24px;
    max-width: 75ch;
    color: inherit;
  }

  /* Lead paragraph variant - use class="lead" */
  p.lead {
    font-size: 18px;
    margin-bottom: 28px;

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  /* Small text - use <small> tag */
  small {
    font-family: var(--font-family, sans-serif);
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    display: block;
    margin-bottom: 12px;
    color: inherit;
  }

  /* Lists - Proper spacing */
  ul, ol {
    font-family: var(--font-family, sans-serif);
    font-size: 16px;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 24px;
    padding-left: 24px;
    max-width: 75ch;
  }

  li {
    margin-bottom: 8px;
  }

  /* Strong and emphasis */
  strong, b {
    font-weight: 700;
  }

  em, i {
    font-style: italic;
  }
`;
