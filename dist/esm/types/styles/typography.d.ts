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
export declare const typographyStyles: import("styled-components").RuleSet<object>;
