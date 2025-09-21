"use client";

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, MessageSquare, TrendingUp, Globe, Sparkles, Users } from "lucide-react"

import PhoneAuth from "../components/auth/PhoneAuth";
import GoogleLoginButton from "../components/auth/GoogleAuth";
import VoiceRecorder from "@/components/VoiceRecorder";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">KalaManch</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </nav>
          <Button asChild>
            <a href="/onboarding">Get Started</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
            Empowering Traditional Crafts with AI
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-8 leading-tight">
            Your Stories, <span className="text-primary">Your Craft</span>,{" "}
            <span className="text-accent">Your Success</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-12 leading-relaxed max-w-2xl mx-auto">
            KalaManch empowers Indian artisans to tell their stories, market their products, and expand their reach in
            the digital marketplace with AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/onboarding">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Crafted for Artisans</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Every feature is designed to honor your heritage while expanding your digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Voice-First Storytelling</CardTitle>
                <CardDescription>
                  Share your craft's story in your native language. Our AI converts voice to compelling product
                  narratives.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>AI Content Generation</CardTitle>
                <CardDescription>
                  Automatically create product descriptions, social media posts, and marketing materials that honor your
                  heritage.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Market Insights</CardTitle>
                <CardDescription>
                  Get trend analysis and marketplace recommendations tailored to your craft category and target
                  audience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Multi-Language Support</CardTitle>
                <CardDescription>
                  Work in your preferred language with automatic translation to reach global markets.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Categorization</CardTitle>
                <CardDescription>
                  AI automatically categorizes your crafts and suggests optimal presentation strategies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Community & Heritage</CardTitle>
                <CardDescription>
                  Connect with fellow artisans and showcase the cultural significance of your traditional crafts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Voice to Text Demo</h1>
        <VoiceRecorder />
      </main>
      <div className="min-h-screen flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-bold">Artisan Auth Demo</h1>
        <PhoneAuth />
        <GoogleLoginButton />
      </div>
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple. Powerful. Respectful.</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              From your first story to global marketplace success, we guide you every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Share Your Story</h3>
              <p className="text-muted-foreground">
                Tell us about your craft, heritage, and products in your own voice and language.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Enhancement</h3>
              <p className="text-muted-foreground">
                Our AI creates compelling content while preserving your authentic voice and cultural context.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Market Ready</h3>
              <p className="text-muted-foreground">
                Get market insights, trend analysis, and platform recommendations for your products.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-accent-foreground">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-muted-foreground">
                Launch on multiple marketplaces with culturally-rich content that resonates worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Share Your Heritage?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Join thousands of artisans who are preserving tradition while embracing digital innovation.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="/onboarding">
              Begin Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">KalaManch</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              Dedicated to preserving heritage, empowering artisans, and celebrating culture.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
