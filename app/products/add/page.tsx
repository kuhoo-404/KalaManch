"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Mic, MicOff, Upload, X, ImageIcon, Sparkles, Tag, IndianRupee } from "lucide-react"

const productCategories = [
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

const materials = [
  "Cotton",
  "Silk",
  "Wool",
  "Clay",
  "Wood",
  "Metal",
  "Silver",
  "Gold",
  "Brass",
  "Copper",
  "Bamboo",
  "Stone",
  "Leather",
  "Glass",
  "Other",
]

const occasions = ["Daily Use", "Festival", "Wedding", "Decoration", "Gift", "Religious", "Traditional", "Modern"]

export default function AddProductPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isRecording, setIsRecording] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    description: "",
    voiceDescription: "",
    materials: [] as string[],
    dimensions: "",
    weight: "",
    colors: "",
    occasions: [] as string[],
    priceRange: "",
    timeToMake: "",
    story: "",
    culturalSignificance: "",
    careInstructions: "",
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

  const handleInputChange = (field: string, value: string | string[]) => {
    setProductData((prev) => ({ ...prev, [field]: value }))
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    // Here we would integrate with speech-to-text API
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // In a real app, we'd upload to cloud storage
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setUploadedImages((prev) => [...prev, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item) ? array.filter((i) => i !== item) : [...array, item]
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <Tag className="w-6 h-6 text-primary" />
                <span>Product Basics</span>
              </CardTitle>
              <CardDescription>Let's start with the essential details about your craft</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Handwoven Warli Art Wall Hanging"
                  value={productData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={productData.category} onValueChange={(value) => handleInputChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your product category" />
                  </SelectTrigger>
                  <SelectContent>
                    {productCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Basic Description</Label>
                <div className="relative">
                  <Textarea
                    id="description"
                    placeholder="Describe your product - what it is, how it's made, what makes it special..."
                    value={productData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
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
              </div>

              <div className="space-y-2">
                <Label>Materials Used</Label>
                <div className="flex flex-wrap gap-2">
                  {materials.map((material) => (
                    <Badge
                      key={material}
                      variant={productData.materials.includes(material) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleInputChange("materials", toggleArrayItem(productData.materials, material))}
                    >
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <ImageIcon className="w-6 h-6 text-primary" />
                <span>Product Images</span>
              </CardTitle>
              <CardDescription>Upload photos that showcase your craft's beauty and details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Product Photos</Label>

                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Upload Product Images</p>
                    <p className="text-sm text-muted-foreground">Drag and drop or click to select multiple images</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Recommended: High-quality images showing different angles and details
                    </p>
                  </label>
                </div>

                {/* Uploaded Images Preview */}
                {uploadedImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Product ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                        {index === 0 && <Badge className="absolute bottom-2 left-2 text-xs">Main Image</Badge>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input
                    id="dimensions"
                    placeholder="e.g., 30cm x 40cm"
                    value={productData.dimensions}
                    onChange={(e) => handleInputChange("dimensions", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (if applicable)</Label>
                  <Input
                    id="weight"
                    placeholder="e.g., 500g"
                    value={productData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="colors">Colors Available</Label>
                <Input
                  id="colors"
                  placeholder="e.g., Natural brown, Deep red, Golden yellow"
                  value={productData.colors}
                  onChange={(e) => handleInputChange("colors", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <Sparkles className="w-6 h-6 text-primary" />
                <span>Story & Heritage</span>
              </CardTitle>
              <CardDescription>Share the cultural significance and story behind your craft</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="story">Craft Story</Label>
                <div className="relative">
                  <Textarea
                    id="story"
                    placeholder="Tell the story of this piece - how you made it, what inspired you, any special techniques used..."
                    value={productData.story}
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="culturalSignificance">Cultural Significance</Label>
                <div className="relative">
                  <Textarea
                    id="culturalSignificance"
                    placeholder="What does this craft represent in your culture? Any traditional meanings, symbols, or heritage aspects..."
                    value={productData.culturalSignificance}
                    onChange={(e) => handleInputChange("culturalSignificance", e.target.value)}
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
                <Label>Suitable Occasions</Label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map((occasion) => (
                    <Badge
                      key={occasion}
                      variant={productData.occasions.includes(occasion) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleInputChange("occasions", toggleArrayItem(productData.occasions, occasion))}
                    >
                      {occasion}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeToMake">Time to Create</Label>
                <Input
                  id="timeToMake"
                  placeholder="e.g., 3 days, 2 weeks"
                  value={productData.timeToMake}
                  onChange={(e) => handleInputChange("timeToMake", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="careInstructions">Care Instructions</Label>
                <Textarea
                  id="careInstructions"
                  placeholder="How should customers care for this product? Cleaning, storage, maintenance tips..."
                  value={productData.careInstructions}
                  onChange={(e) => handleInputChange("careInstructions", e.target.value)}
                  className="min-h-20"
                />
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <IndianRupee className="w-6 h-6 text-primary" />
                <span>Pricing & Final Details</span>
              </CardTitle>
              <CardDescription>Set your pricing and review your product listing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="priceRange">Price Range</Label>
                <Select
                  value={productData.priceRange}
                  onValueChange={(value) => handleInputChange("priceRange", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your price range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-500">Under ₹500</SelectItem>
                    <SelectItem value="500-1000">₹500 - ₹1,000</SelectItem>
                    <SelectItem value="1000-2500">₹1,000 - ₹2,500</SelectItem>
                    <SelectItem value="2500-5000">₹2,500 - ₹5,000</SelectItem>
                    <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="above-10000">Above ₹10,000</SelectItem>
                    <SelectItem value="custom">Custom Pricing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Product Summary */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg">Product Summary</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Name:</span> {productData.name}
                  </div>
                  <div>
                    <span className="font-medium">Category:</span> {productData.category}
                  </div>
                  <div>
                    <span className="font-medium">Materials:</span> {productData.materials.join(", ")}
                  </div>
                  <div>
                    <span className="font-medium">Occasions:</span> {productData.occasions.join(", ")}
                  </div>
                  <div>
                    <span className="font-medium">Images:</span> {uploadedImages.length} uploaded
                  </div>
                  {productData.dimensions && (
                    <div>
                      <span className="font-medium">Dimensions:</span> {productData.dimensions}
                    </div>
                  )}
                  {productData.timeToMake && (
                    <div>
                      <span className="font-medium">Creation Time:</span> {productData.timeToMake}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center space-y-4">
                <h4 className="font-semibold">Ready to Generate AI Content?</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI will create compelling product descriptions, social media posts, and marketing materials based
                  on your inputs while preserving your authentic voice and cultural heritage.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span>AI will enhance your story while keeping it authentic</span>
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
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Add New Product</h1>
          <p className="text-muted-foreground">Share your craft with the world</p>
        </div>

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
            <Button asChild>
              <a href="/products/generate">
                Generate AI Content
                <Sparkles className="w-4 h-4 ml-2" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
