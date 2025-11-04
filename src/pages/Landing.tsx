import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Sun,
  Moon
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import heroImage from "@/assets/hero-image.jpg";
import analyticsFeature from "@/assets/analytics-feature.jpg";
import scheduleFeature from "@/assets/schedule-feature.jpg";
import aiFeature from "@/assets/ai-feature.jpg";

const Landing = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">SocialFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/dashboard">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-5"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                AI-Powered Social Media Management
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Manage All Your Social Media in{" "}
                <span className="bg-clip-text text-transparent bg-[var(--gradient-primary)]">
                  One Place
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Streamline your social media workflow with AI-powered automation, 
                analytics, and scheduling across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full bg-primary/20 border-2 border-background"></div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">10,000+</span> users trust SocialFlow
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Social Media Management Dashboard" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Powerful Features for Every Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage, analyze, and grow your social media presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Schedule posts across all platforms with AI-powered best time recommendations",
                image: scheduleFeature
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Track performance with detailed insights and actionable recommendations",
                image: analyticsFeature
              },
              {
                icon: MessageSquare,
                title: "Unified Inbox",
                description: "Manage all your messages and comments from one centralized dashboard"
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description: "Work together seamlessly with role-based permissions and workflows"
              },
              {
                icon: Zap,
                title: "AI Automation",
                description: "Let AI handle repetitive tasks and suggest content improvements",
                image: aiFeature
              },
              {
                icon: TrendingUp,
                title: "Growth Tools",
                description: "Discover trends and opportunities to grow your audience faster"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-hover group cursor-pointer border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {feature.image && (
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="rounded-lg mb-4 w-full h-40 object-cover"
                    />
                  )}
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Why Choose SocialFlow?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of businesses and creators who trust SocialFlow to manage their social media presence
              </p>
              <div className="space-y-4">
                {[
                  { icon: Clock, title: "Save 10+ Hours Per Week", description: "Automate repetitive tasks and focus on what matters" },
                  { icon: TrendingUp, title: "Boost Engagement by 3x", description: "Post at optimal times with data-driven insights" },
                  { icon: Shield, title: "Enterprise-Grade Security", description: "Your data is protected with bank-level encryption" },
                  { icon: Users, title: "Unlimited Team Members", description: "Collaborate with your entire team at no extra cost" }
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Active Users", value: "10K+" },
                  { label: "Posts Scheduled", value: "1M+" },
                  { label: "Time Saved", value: "50K hrs" },
                  { label: "Platforms", value: "10+" }
                ].map((stat, index) => (
                  <Card key={index} className="card-hover text-center p-6">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$19",
                description: "Perfect for individuals and small creators",
                features: [
                  "Up to 5 social accounts",
                  "Schedule 30 posts/month",
                  "Basic analytics",
                  "Email support"
                ]
              },
              {
                name: "Professional",
                price: "$49",
                description: "For growing businesses and agencies",
                features: [
                  "Up to 15 social accounts",
                  "Unlimited posts",
                  "Advanced analytics",
                  "Priority support",
                  "Team collaboration",
                  "AI content suggestions"
                ],
                featured: true
              },
              {
                name: "Enterprise",
                price: "$99",
                description: "For large teams and organizations",
                features: [
                  "Unlimited social accounts",
                  "Unlimited posts",
                  "Custom analytics",
                  "24/7 dedicated support",
                  "Advanced team features",
                  "White-label options"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`card-hover relative ${plan.featured ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/dashboard" className="block">
                    <Button 
                      className="w-full" 
                      variant={plan.featured ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Card className="card-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-10"></div>
            <CardContent className="relative p-12 text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of businesses already using SocialFlow to streamline their social media management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Free Trial
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">SocialFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The all-in-one social media management platform powered by AI
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="text-sm text-muted-foreground">Theme:</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="h-8 w-8"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SocialFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
