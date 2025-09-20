"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Mic, MicOff, Globe, Palette, Heart } from "lucide-react"

const languages = [
  { code: "hi", name: "हिंदी", english: "Hindi" },
  { code: "en", name: "English", english: "English" },
  { code: "bn", name: "বাংলা", english: "Bengali" },
  { code: "te", name: "తెలుగు", english: "Telugu" },
  { code: "mr", name: "मराठी", english: "Marathi" },
  { code: "ta", name: "தமிழ்", english: "Tamil" },
  { code: "gu", name: "ગુજરાતી", english: "Gujarati" },
  { code: "kn", name: "ಕನ್ನಡ", english: "Kannada" },
  { code: "ml", name: "മലയാളം", english: "Malayalam" },
  { code: "pa", name: "ਪੰਜਾਬੀ", english: "Punjabi" },
]

const craftCategories = [
  "Warli Painting",
  "Handloom Textiles",
  "Pottery & Ceramics",
  "Wood Carving",
  "Metal Craft",
  "Jewelry Making",
  "Embroidery",
  "Block Printing",
  "Leather Craft",
  "Bamboo Craft",
  "Stone Carving",
  "Other",
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isRecording, setIsRecording] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "",
    location: "",
    craftType: "",
    experience: "",
    story: "",
    inspiration: "",
    challenges: "",
    goals: "",
  })

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Here we would integrate with speech-to-text API
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome to KalaManch</CardTitle>
              <CardDescription>Let's start by getting to know you and setting up your preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Preferred Language</Label>
                <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preferred language" />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4" />
                          <span>
                            {lang.name} ({lang.english})
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <Palette className="w-6 h-6 text-primary" />
                <span>Your Craft</span>
              </CardTitle>
              <CardDescription>Tell us about your artistic journey and specialization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="craftType">Type of Craft</Label>
                <Select value={formData.craftType} onValueChange={(value) => handleInputChange("craftType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your craft category" />
                  </SelectTrigger>
                  <SelectContent>
                    {craftCategories.map((craft) => (
                      <SelectItem key={craft} value={craft}>
                        {craft}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="How long have you been practicing your craft?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1-2 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="6-10">6-10 years</SelectItem>
                    <SelectItem value="11-20">11-20 years</SelectItem>
                    <SelectItem value="20+">20+ years</SelectItem>
                    <SelectItem value="generational">Generational (family tradition)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="story">Your Craft Story</Label>
                <div className="relative">
                  <Textarea
                    id="story"
                    placeholder="Share the story of your craft - how did you learn it? What makes it special? What traditions does it carry?"
                    value={formData.story}
                    onChange={(e) => handleInputChange("story", e.target.value)}
                    className="min-h-32 pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={toggleRecording}
                  >
                    {isRecording ? (
                      <MicOff className="w-4 h-4 text-destructive" />
                    ) : (
                      <Mic className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {isRecording && (
                  <Badge variant="destructive" className="text-xs">
                    Recording... Speak in your preferred language
                  </Badge>
                )}
                <p className="text-xs text-muted-foreground">
                  You can type or use the microphone to record your story in your preferred language
                </p>
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 text-primary" />
                <span>Your Inspiration & Goals</span>
              </CardTitle>
              <CardDescription>Help us understand what drives your creativity and aspirations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="inspiration">What Inspires Your Work?</Label>
                <div className="relative">
                  <Textarea
                    id="inspiration"
                    placeholder="What motivates your creativity? Nature, traditions, family stories, cultural heritage...?"
                    value={formData.inspiration}
                    onChange={(e) => handleInputChange("inspiration", e.target.value)}
                    className="min-h-24 pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={toggleRecording}
                  >
                    {isRecording ? (
                      <MicOff className="w-4 h-4 text-destructive" />
                    ) : (
                      <Mic className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenges">Current Challenges</Label>
                <div className="relative">
                  <Textarea
                    id="challenges"
                    placeholder="What challenges do you face in marketing or selling your crafts? Limited reach, pricing, storytelling...?"
                    value={formData.challenges}
                    onChange={(e) => handleInputChange("challenges", e.target.value)}
                    className="min-h-24 pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={toggleRecording}
                  >
                    {isRecording ? (
                      <MicOff className="w-4 h-4 text-destructive" />
                    ) : (
                      <Mic className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goals">Your Goals with KalaManch</Label>
                <div className="relative">
                  <Textarea
                    id="goals"
                    placeholder="What do you hope to achieve? Reach more customers, tell your story better, increase sales, preserve traditions...?"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    className="min-h-24 pr-12"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={toggleRecording}
                  >
                    {isRecording ? (
                      <MicOff className="w-4 h-4 text-destructive" />
                    ) : (
                      <Mic className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Welcome to Your Journey!</CardTitle>
              <CardDescription>Your profile is ready. Let's start building your digital presence.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Profile Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Name:</span> {formData.name}
                  </div>
                  <div>
                    <span className="font-medium">Craft:</span> {formData.craftType}
                  </div>
                  <div>
                    <span className="font-medium">Experience:</span> {formData.experience}
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> {formData.location}
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium">Language:</span>{" "}
                    {languages.find((l) => l.code === formData.language)?.english}
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <h4 className="font-semibold">What's Next?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <p className="font-medium">Add Products</p>
                    <p className="text-muted-foreground text-xs">Upload your craft photos and descriptions</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <p className="font-medium">AI Enhancement</p>
                    <p className="text-muted-foreground text-xs">Let AI create compelling marketing content</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <p className="font-medium">Go Live</p>
                    <p className="text-muted-foreground text-xs">Launch on marketplaces and social media</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {currentStep} of 4</span>
            <span className="text-sm text-muted-foreground">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        {renderStep()}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep < 4 ? (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={() => (window.location.href = "/dashboard")}>
              Go to Dashboard
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
