import type { Meta, StoryObj } from "@storybook/react-vite";
import Page from "../atoms/Page";
import Section from "../atoms/Section";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import Hero from "../organisms/Hero";
import FeatureCard from "../molecules/FeatureCard";
import Carousel from "../molecules/Carousel";
import { ThemedStoryWrapper, lightTheme, darkTheme } from "../theme";
import type { Theme } from "../theme/types";

// Define custom args for landing page stories
interface LandingPageArgs {
  theme: Theme;
}

/**
 * Example landing page composition using Page and Section components.
 * This demonstrates how to combine atomic components into a complete page layout.
 * 
 * Pages in Atomic Design represent specific instances with real content,
 * typically used for documentation and example purposes in component libraries.
 */
const meta = {
  title: "Pages/LandingPage",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A complete landing page example showing typical sections: hero, features, testimonials, and CTA.",
      },
    },
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
      mapping: {
        light: lightTheme,
        dark: darkTheme,
      },
      description: "Theme to apply to the landing page",
      defaultValue: "light",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<LandingPageArgs>;

export default meta;
type Story = StoryObj<LandingPageArgs>;

/**
 * Complete landing page with hero, features, testimonials, and call-to-action sections.
 * Uses only plain HTML with no styling - demonstrates content structure.
 */
export const Default: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Page>
            {/* Hero Section */}
            <Hero
              headline={<h1>Welcome to Our Product</h1>}
              subheadline={<p>The best solution for your business needs. Simple, powerful, and built for you.</p>}
              primaryCTA={
                <Button 
                  size="large"
                  style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
                >
                  Get Started
                </Button>
              }
              secondaryCTA={<Button variant="outline">Learn More</Button>}
              media={<Image src="https://placedog.net/640/480" alt="Product" aspectRatio="16/9" rounded="lg" />}
            />

            {/* Features Section */}
            <Section>
              <Section.Inner>
                <h2>Features</h2>
                <p>Everything you need to succeed</p>
              </Section.Inner>
              <Section.Inner>
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/200/200" alt="Fast performance icon" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Fast Performance</h3>}
                    description={<p>Lightning-fast load times and optimal performance for your users.</p>}
                    align="center"
                  />
                </Section.Column>
                
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/300/300" alt="Easy to use icon" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Easy to Use</h3>}
                    description={<p>Intuitive interface that anyone can master in minutes.</p>}
                    align="center"
                  />
                </Section.Column>
                
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/400/400" alt="Security icon" objectFit="cover" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Secure</h3>}
                    description={<p>Enterprise-grade security to protect your data.</p>}
                    align="center"
                  />
                </Section.Column>
              </Section.Inner>
            </Section>

            {/* About Section */}
            <Section>
              <Section.Inner>
                <Section.Column width={3}>
                  <h2>About Our Solution</h2>
                  <p>We've been helping businesses grow since 2020. Our platform combines cutting-edge technology with user-friendly design to deliver results that matter.</p>
                  <p>With over 10,000 satisfied customers worldwide, we understand what it takes to build something great.</p>
                  <Button variant="secondary">Read Our Story</Button>
                </Section.Column>
                
                <Section.Column width={2}>
                  <h3>Quick Stats</h3>
                  <ul>
                    <li>10,000+ Active Users</li>
                    <li>99.9% Uptime</li>
                    <li>24/7 Support</li>
                    <li>50+ Integrations</li>
                  </ul>
                </Section.Column>
              </Section.Inner>
            </Section>

            {/* Testimonials Section */}
            <Section>
              <Section.Inner>
                <h2>What Our Customers Say</h2>
              </Section.Inner>
              <Section.Inner>
                <Section.Column>
                  <blockquote>
                    <p>This product transformed how we work. Highly recommended!</p>
                    <footer>- Jane Smith, CEO at TechCorp</footer>
                  </blockquote>
                </Section.Column>
                
                <Section.Column>
                  <blockquote>
                    <p>The best investment we made this year. Simple and powerful.</p>
                    <footer>- John Doe, Founder of StartupXYZ</footer>
                  </blockquote>
                </Section.Column>
                
                <Section.Column>
                  <blockquote>
                    <p>Customer support is amazing. They really care about success.</p>
                    <footer>- Sarah Johnson, Product Manager</footer>
                  </blockquote>
                </Section.Column>
              </Section.Inner>
            </Section>

            {/* Pricing Section */}
            <Section>
              <Section.Inner>
                <h2>Simple Pricing</h2>
                <p>Choose the plan that works for you</p>
              </Section.Inner>
              <Section.Inner>
                <Section.Column>
                  <h3>Starter</h3>
                  <p>$9/month</p>
                  <ul>
                    <li>Up to 5 users</li>
                    <li>Basic features</li>
                    <li>Email support</li>
                  </ul>
                  <Button fullWidth>Choose Plan</Button>
                </Section.Column>
                
                <Section.Column>
                  <h3>Professional</h3>
                  <p>$29/month</p>
                  <ul>
                    <li>Up to 20 users</li>
                    <li>Advanced features</li>
                    <li>Priority support</li>
                    <li>API access</li>
                  </ul>
                  <Button fullWidth>Choose Plan</Button>
                </Section.Column>
                
                <Section.Column>
                  <h3>Enterprise</h3>
                  <p>Custom pricing</p>
                  <ul>
                    <li>Unlimited users</li>
                    <li>All features</li>
                    <li>Dedicated support</li>
                    <li>Custom integrations</li>
                  </ul>
                  <Button fullWidth variant="secondary">Contact Sales</Button>
                </Section.Column>
              </Section.Inner>
            </Section>

            {/* CTA Section */}
            <Section>
              <Section.Inner>
                <h2>Ready to Get Started?</h2>
                <p>Join thousands of satisfied customers today</p>
                <Button 
                  size="large"
                  style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
                >
                  Start Free Trial
                </Button>
                <p>No credit card required. Cancel anytime.</p>
              </Section.Inner>
            </Section>

            {/* Footer Section */}
            <Section>
              <Section.Inner>
                <Section.Column width={2}>
                  <h3>Company</h3>
                  <p>Building amazing products since 2020.</p>
                </Section.Column>
                
                <Section.Column>
                  <h4>Product</h4>
                  <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Roadmap</a></li>
                  </ul>
                </Section.Column>
                
                <Section.Column>
                  <h4>Company</h4>
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </Section.Column>
                
                <Section.Column>
                  <h4>Legal</h4>
                  <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                  </ul>
                </Section.Column>
              </Section.Inner>
            </Section>
          </Page>
        </ThemedStoryWrapper>
    ),
};

/**
 * Minimal landing page with just hero and CTA sections.
 */
export const Minimal: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
          <Page>
            <Hero
              headline={<h1>Simple Landing Page</h1>}
              subheadline={<p>Get started with the essentials</p>}
              primaryCTA={
                <Button 
                  size="large"
                  style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
                >
                  Sign Up Free
                </Button>
              }
              media={<Image src="https://placedog.net/500/400" alt="Simple" aspectRatio="16/9" rounded="lg" />}
            />

            <Section>
              <Section.Inner>
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/500/500" alt="Feature one icon" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Feature One</h3>}
                    description={<p>Description of the first key feature</p>}
                    align="center"
                  />
                </Section.Column>
                
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/600/600" alt="Feature two icon" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Feature Two</h3>}
                    description={<p>Description of the second key feature</p>}
                    align="center"
                  />
                </Section.Column>
              </Section.Inner>
            </Section>

            <Section>
              <Section.Inner>
                <h2>Ready to Start?</h2>
                <Button 
                  size="large"
                  style={{ backgroundColor: "var(--color-primary)", color: "var(--color-text-on-primary)" }}
                >
                  Get Started Now
                </Button>
              </Section.Inner>
            </Section>
          </Page>
        </ThemedStoryWrapper>
    ),
};

/**
 * Product-focused landing page with detailed features and benefits.
 */
export const ProductFocused: Story = {
  args: {
    theme: darkTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Page>
            <Hero
              headline={<h1>Introducing Our New Product</h1>}
              subheadline={<p>Revolutionary features that will change how you work</p>}
              media={<Image src="https://placedog.net/700/500" alt="Product" aspectRatio="16/9" rounded="lg" />}
            />

            <Section>
              <Section.Inner>
                <Section.Column width={2}>
                  <Image src="https://placedog.net/600/400" alt="Product screenshot" aspectRatio="4/3" rounded="lg" />
                </Section.Column>
                
                <Section.Column width={3}>
                  <h2>Built for Modern Teams</h2>
                  <p>Our product helps teams collaborate better, move faster, and achieve more together.</p>
                  <ul>
                    <li>Real-time collaboration</li>
                    <li>Powerful integrations</li>
                    <li>Advanced analytics</li>
                    <li>Mobile apps</li>
                  </ul>
                  <button>Try It Free</button>
                </Section.Column>
              </Section.Inner>
            </Section>

            <Section>
              <Section.Inner>
                <h2>Key Features</h2>
              </Section.Inner>
              <Section.Inner>
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/700/700" alt="Dashboard icon" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Dashboard</h3>}
                    description={<p>See everything at a glance with our intuitive dashboard.</p>}
                    align="center"
                  />
                </Section.Column>
                
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/800/800" alt="Automation icon" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Automation</h3>}
                    description={<p>Save time with powerful automation workflows.</p>}
                    align="center"
                  />
                </Section.Column>
                
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/900/900" alt="Reports icon" aspectRatio="16/9" rounded="md" />}
                    headline={<h3>Reports</h3>}
                    description={<p>Get insights with comprehensive reporting tools.</p>}
                    align="center"
                  />
                </Section.Column>
                
                <Section.Column>
                  <FeatureCard
                    image={<Image src="https://placedog.net/1000/1000" alt="Integrations icon" aspectRatio="1/1" rounded="md" width={64} height={64} />}
                    headline={<h3>Integrations</h3>}
                    description={<p>Connect with all your favorite tools seamlessly.</p>}
                    align="center"
                  />
                </Section.Column>
              </Section.Inner>
            </Section>

            <Section>
              <Section.Inner>
                <h2>Start Your Free Trial</h2>
                <p>No credit card required. Get started in minutes.</p>
                <form>
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Start Free Trial</button>
                </form>
              </Section.Inner>
            </Section>
          </Page>
        </ThemedStoryWrapper>
    ),
};

/**
 * Wedding website landing page inspired by modern wedding platforms.
 * Demonstrates multi-section layout with hero, features carousel, benefits, and CTAs.
 */
export const WeddingWebsite: Story = {
  args: {
    theme: lightTheme,
  },
  render: (args) => (
    <ThemedStoryWrapper theme={args.theme}>
      <Page>
        {/* Header */}
        <Section style={{ 
          backgroundColor: "white",
          padding: "16px 0",
        }}>
          <Section.Inner>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center" 
            }}>
              <div style={{ 
                fontSize: "24px", 
                fontWeight: "bold",
                color: "#00bcd4",
                letterSpacing: "2px"
              }}>
                ❤️ ZURU
              </div>
              <Button
                style={{ 
                  backgroundColor: "#00bcd4",
                  color: "white",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "14px",
                  borderRadius: "20px",
                  padding: "8px 24px"
                }}
              >
                START YOUR WEBSITE
              </Button>
            </div>
          </Section.Inner>
        </Section>

        {/* Hero Section */}
        <Section>
          <Section.Inner style={{ backgroundColor: "#c3d7e5" }}>
            <Hero
              headline={
                <h1 style={{ 
                  fontSize: "52px", 
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  marginBottom: "32px"
                }}>
                  Free, Beautiful<br />Wedding Websites
                </h1>
              }
              primaryCTA={
                <Button
                  size="large"
                  style={{ 
                    backgroundColor: "#00bcd4", 
                    color: "white",
                    border: "none",
                    padding: "16px 40px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "30px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}
                >
                  Start Your Website
                </Button>
              }
              media={
                <Image 
                  src="https://placedog.net/600/600" 
                  alt="Wedding website example" 
                  aspectRatio="4/3"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                />
              }
            />
          </Section.Inner>
        </Section>

        {/* Design Showcase Section */}
        <Section style={{ textAlign: "center", padding: "80px 0", backgroundColor: "white" }}>
          <Section.Inner>
            <h2 style={{ 
              fontSize: "36px", 
              marginBottom: "56px",
              fontWeight: "bold"
            }}>
              Over 100 Gorgeous Designs
            </h2>
            <Carousel
              items={[
                <Image 
                  src="https://placedog.net/600/800" 
                  alt="Colorado Dreams design" 
                  aspectRatio="3/4" 
                  rounded="lg"
                  style={{ 
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                  }}
                />,
                <Image 
                  src="https://placedog.net/650/850" 
                  alt="Starry Night design" 
                  aspectRatio="3/4" 
                  rounded="lg"
                  style={{ 
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                  }}
                />,
                <Image 
                  src="https://placedog.net/700/900" 
                  alt="Beach Wedding design" 
                  aspectRatio="3/4" 
                  rounded="lg"
                  style={{ 
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                  }}
                />,
                <Image 
                  src="https://placedog.net/550/750" 
                  alt="Garden Party design" 
                  aspectRatio="3/4" 
                  rounded="lg"
                  style={{ 
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                  }}
                />,
                <Image 
                  src="https://placedog.net/620/820" 
                  alt="Modern Minimal design" 
                  aspectRatio="3/4" 
                  rounded="lg"
                  style={{ 
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                  }}
                />,
                <Image 
                  src="https://placedog.net/680/880" 
                  alt="Rustic Charm design" 
                  aspectRatio="3/4" 
                  rounded="lg"
                  style={{ 
                    boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
                  }}
                />,
              ]}
              itemsPerView={3}
              gap={24}
              controlsPosition="inline"
              style={{ marginBottom: "40px" }}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="large"
                style={{ 
                  backgroundColor: "#00bcd4", 
                  color: "white",
                  border: "none",
                  padding: "16px 40px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "30px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}
              >
                Explore Designs
              </Button>
            </div>
          </Section.Inner>
        </Section>

        {/* Benefits Section */}
        <Section style={{ backgroundColor: "#335f81", color: "white", padding: "80px 0" }}>
          <Section.Inner style={{ textAlign: "center" }}>
            <h2 style={{ 
              fontSize: "36px", 
              marginBottom: "64px", 
              color: "white",
              fontWeight: "bold"
            }}>
              Why You'll Love Our Wedding Websites
            </h2>
            <Section.Inner gap={"64px"}>
              <Section.Column>
                <div style={{ maxWidth: "280px", margin: "0 auto" }}>
                  <div style={{ 
                    width: "100px", 
                    height: "100px", 
                    margin: "0 auto 24px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }}>
                    <div style={{ fontSize: "48px" }}>💻</div>
                  </div>
                  <h3 style={{ 
                    color: "white", 
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginBottom: "12px"
                  }}>
                    So Easy
                  </h3>
                  <p style={{ 
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "1.6"
                  }}>
                    With our user-friendly builder,<br />you can create your site in minutes.
                  </p>
                </div>
              </Section.Column>

              <Section.Column>
                <div style={{ maxWidth: "280px", margin: "0 auto" }}>
                  <div style={{ 
                    width: "100px", 
                    height: "100px", 
                    margin: "0 auto 24px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }}>
                    <div style={{ fontSize: "48px" }}>🎨</div>
                  </div>
                  <h3 style={{ 
                    color: "white", 
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginBottom: "12px"
                  }}>
                    Super Customizable
                  </h3>
                  <p style={{ 
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "1.6"
                  }}>
                    Add photos, PDFs, stories,<br />and even password protection.
                  </p>
                </div>
              </Section.Column>

              <Section.Column>
                <div style={{ maxWidth: "280px", margin: "0 auto" }}>
                  <div style={{ 
                    width: "100px", 
                    height: "100px", 
                    margin: "0 auto 24px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                  }}>
                    <div style={{ fontSize: "48px" }}>✓</div>
                  </div>
                  <h3 style={{ 
                    color: "white", 
                    fontSize: "22px",
                    fontWeight: "bold",
                    marginBottom: "12px"
                  }}>
                    Guest-Approved
                  </h3>
                  <p style={{ 
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "1.6"
                  }}>
                    They'll love getting all your wedding<br />details and RSVPing <span style={{ textDecoration: "underline" }}>in one place</span>.
                  </p>
                </div>
              </Section.Column>
            </Section.Inner>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
              <Button
                size="large"
                style={{ 
                  backgroundColor: "#00bcd4",
                  color: "white",
                  border: "none",
                  padding: "16px 40px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "30px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}
              >
                Create Your Website
              </Button>
            </div>
          </Section.Inner>
        </Section>

        {/* Save the Dates Section */}
        <Section style={{ padding: "0", backgroundColor: "#ede2de" }}>
          <Section.Inner>
            <Section.Column width={2}>
              <Image 
                src="https://placedog.net/500/600" 
                alt="Save the date invitations" 
                aspectRatio="5/6" 
                rounded="none"
              />
            </Section.Column>
            
            <Section.Column width={3}>
              <h2 style={{ 
                fontSize: "42px", 
                marginTop: "124px",
                marginBottom: "24px",
                fontWeight: "bold",
                lineHeight: "1.2"
              }}>
                Add Matching<br />Save the Dates and<br />Invitations
              </h2>
              <p style={{ 
                fontSize: "18px", 
                marginBottom: "32px",
                lineHeight: "1.6",
                color: "#333"
              }}>
                And get <strong style={{ color: "#e94f6c", fontSize: "20px" }}>30% OFF</strong> your first order with code PAPER30.*
              </p>
              <Button
                size="large"
                style={{ 
                  backgroundColor: "#00bcd4",
                  color: "white",
                  border: "none",
                  padding: "18px 48px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "30px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}
              >
                Get Started
              </Button>
            </Section.Column>
          </Section.Inner>
        </Section>

        {/* Registry Section */}
        <Section style={{ backgroundColor: "#f9f5f1", padding: "80px 0" }}>
          <Section.Inner>
            <Section.Column width={2}>
              <h2 style={{ 
                fontSize: "36px", 
                marginBottom: "20px",
                fontWeight: "bold",
                lineHeight: "1.3"
              }}>
                Put Your Zola<br />Registry On Your<br />Wedding Website
              </h2>
              <p style={{ 
                fontSize: "18px", 
                marginBottom: "24px", 
                color: "#666",
                lineHeight: "1.6"
              }}>
                Let guests shop and get wedding<br />details, all in one place.
              </p>
              <Button
                size="large"
                style={{ 
                  backgroundColor: "#00bcd4",
                  color: "white",
                  border: "none",
                  padding: "16px 40px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "30px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}
              >
                Get Started
              </Button>
            </Section.Column>
            
            <Section.Column width={3}>
              <Image 
                src="https://placedog.net/700/500" 
                alt="Registry preview" 
                aspectRatio="7/5" 
                rounded="lg"
                style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
              />
            </Section.Column>
          </Section.Inner>
        </Section>

        {/* Final CTA Section */}
        <Section style={{ 
          background: "linear-gradient(135deg, #44687d 0%, #5a8ba6 100%)",
          color: "white",
          padding: "80px 0",
          textAlign: "center"
        }}>
          <Section.Inner>
            <h2 style={{ 
              fontSize: "48px", 
              fontFamily: "cursive",
              marginBottom: "32px",
              color: "white",
              fontWeight: "300"
            }}>
              We'll make this fun and easy!
            </h2>
              <Button
                size="large"
                style={{ 
                  backgroundColor: "#00bcd4",
                  color: "white",
                  border: "none",
                  padding: "18px 48px",
                  fontSize: "16px",
                  fontWeight: "600",
                  borderRadius: "30px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}
              >
                Start Your Website
              </Button>
          </Section.Inner>
        </Section>
      </Page>
    </ThemedStoryWrapper>
  ),
};
