"use client"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Sparkles,
  Copy,
  Download,
  Share2,
  RefreshCw,
  Instagram,
  Facebook,
  Twitter,
  FileText,
  Megaphone,
  Heart,
  CheckCircle,
} from "lucide-react"

// Mock generated content - in real app this would come from AI API
const mockGeneratedContent = {
  productDescription: {
    short:
      "Handcrafted Warli art wall hanging featuring traditional tribal motifs on natural cotton canvas. Each piece tells the story of Maharashtra's ancient artistic heritage through intricate geometric patterns and nature-inspired designs.",
    detailed:
      "This exquisite Warli art wall hanging is a testament to the timeless beauty of Maharashtra's tribal artistry. Hand-painted on premium cotton canvas using natural pigments, each piece features the characteristic geometric patterns that have been passed down through generations of Warli artists.\n\nThe artwork depicts scenes of daily life, harvest celebrations, and the deep connection between humans and nature - core themes in Warli tradition. The earthy tones of ochre, white, and natural brown create a harmonious palette that complements any living space while honoring the cultural significance of this ancient art form.\n\nMeasuring 30cm x 40cm, this piece is perfect for adding authentic Indian heritage to your home or office. The cotton canvas is treated for longevity, ensuring your investment in traditional art will be cherished for years to come.",
    culturalStory:
      "Warli painting is more than art - it's a 2,500-year-old tradition that captures the essence of tribal life in Maharashtra. Our artisan learned this sacred craft from her grandmother, who was one of the few women in her village to master the intricate geometric language of Warli. Each circle represents the cycle of life, each triangle the mountains and trees, and each line the connection between all living things.",
  },
  socialMedia: {
    instagram:
      "✨ Bringing 2,500 years of heritage to your walls ✨\n\nThis handcrafted Warli art piece carries the stories of Maharashtra's tribal communities. Every geometric pattern has meaning - circles for life cycles, triangles for nature, lines for connections.\n\n🎨 Hand-painted with natural pigments\n🌿 Sustainable cotton canvas\n💝 Perfect for gifting authentic Indian art\n\n#WarliArt #IndianHeritage #HandmadeWithLove #TribalArt #SustainableArt #CulturalPreservation #ArtisanMade",
    facebook:
      "Discover the ancient art of Warli painting through this beautiful handcrafted wall hanging. \n\nWarli art is a 2,500-year-old tradition from Maharashtra that uses simple geometric shapes to tell complex stories of life, nature, and community. This piece was created using traditional techniques passed down through generations, with natural pigments on sustainable cotton canvas.\n\nWhen you bring this artwork into your home, you're not just decorating - you're preserving a cultural legacy and supporting traditional artisans.\n\nSize: 30cm x 40cm\nMaterials: Cotton canvas, natural pigments\nOrigin: Maharashtra, India\n\n#WarliArt #IndianCulture #TraditionalArt #Handmade",
    twitter:
      "🎨 2,500 years of tribal wisdom in one beautiful piece\n\nThis Warli art wall hanging tells stories through sacred geometry - each shape has meaning rooted in Maharashtra's ancient traditions.\n\nHandcrafted with natural pigments on cotton canvas ✨\n\n#WarliArt #IndianHeritage #TraditionalCrafts",
  },
  marketingCopy: {
    headline: "Own a Piece of 2,500-Year-Old Heritage",
    subheadline: "Authentic Warli Art That Transforms Spaces and Preserves Traditions",
    bulletPoints: [
      "Hand-painted using traditional techniques passed down through generations",
      "Natural pigments on sustainable cotton canvas for eco-conscious collectors",
      "Each geometric pattern carries deep cultural significance and meaning",
      "Perfect size (30cm x 40cm) for any room in your home or office",
      "Supports traditional artisans and helps preserve ancient art forms",
      "Comes with a certificate of authenticity and cultural story card",
    ],
    callToAction: "Bring Ancient Wisdom to Your Modern Space - Order Now",
  },
  productTags: [
    "Warli Art",
    "Traditional Indian Art",
    "Tribal Painting",
    "Maharashtra Heritage",
    "Handmade Wall Decor",
    "Natural Pigments",
    "Cotton Canvas",
    "Cultural Art",
    "Geometric Patterns",
    "Sustainable Art",
    "Artisan Made",
    "Heritage Craft",
  ],
}

export default function GenerateContentPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedContent, setSelectedContent] = useState<string>("")
  const [copiedContent, setCopiedContent] = useState<string>("")

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
  }

  const copyToClipboard = async (content: string, type: string) => {
    await navigator.clipboard.writeText(content)
    setCopiedContent(type)
    setTimeout(() => setCopiedContent(""), 2000)
  }

  const downloadContent = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center justify-center space-x-2">
            <Sparkles className="w-8 h-8 text-primary" />
            <span>AI Content Generation</span>
          </h1>
          <p className="text-muted-foreground">
            Compelling marketing content that honors your heritage and amplifies your voice
          </p>
        </div>

        {/* Product Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Product: Handwoven Warli Art Wall Hanging</CardTitle>
            <CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Warli Painting</Badge>
                <Badge variant="outline">Cotton Canvas</Badge>
                <Badge variant="outline">Natural Pigments</Badge>
                <Badge variant="outline">30cm x 40cm</Badge>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Generate Button */}
        {!isGenerating && Object.keys(mockGeneratedContent).length === 0 && (
          <div className="text-center mb-8">
            <Button size="lg" onClick={handleGenerate} className="text-lg px-8 py-6">
              <Sparkles className="w-5 h-5 mr-2" />
              Generate AI Content
            </Button>
          </div>
        )}

        {/* Loading State */}
        {isGenerating && (
          <Card className="mb-8">
            <CardContent className="py-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <RefreshCw className="w-8 h-8 text-primary animate-spin" />
                </div>
                <h3 className="text-xl font-semibold">Creating Your Content...</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our AI is crafting compelling marketing materials while preserving your authentic voice and cultural
                  heritage.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span>Analyzing your story</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span>Generating content</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span>Preserving authenticity</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Generated Content */}
        {!isGenerating && (
          <Tabs defaultValue="descriptions" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="descriptions" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Descriptions</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center space-x-2">
                <Share2 className="w-4 h-4" />
                <span>Social Media</span>
              </TabsTrigger>
              <TabsTrigger value="marketing" className="flex items-center space-x-2">
                <Megaphone className="w-4 h-4" />
                <span>Marketing</span>
              </TabsTrigger>
              <TabsTrigger value="tags" className="flex items-center space-x-2">
                <Heart className="w-4 h-4" />
                <span>Tags & SEO</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="descriptions" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Short Description</CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(mockGeneratedContent.productDescription.short, "short-desc")}
                        >
                          {copiedContent === "short-desc" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            downloadContent(mockGeneratedContent.productDescription.short, "short-description.txt")
                          }
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Perfect for marketplace listings and quick overviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={mockGeneratedContent.productDescription.short}
                      readOnly
                      className="min-h-24 resize-none"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Detailed Description</CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(mockGeneratedContent.productDescription.detailed, "detailed-desc")
                          }
                        >
                          {copiedContent === "detailed-desc" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            downloadContent(
                              mockGeneratedContent.productDescription.detailed,
                              "detailed-description.txt",
                            )
                          }
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Comprehensive description for your website or detailed listings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={mockGeneratedContent.productDescription.detailed}
                      readOnly
                      className="min-h-48 resize-none"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Cultural Story</CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(mockGeneratedContent.productDescription.culturalStory, "cultural-story")
                          }
                        >
                          {copiedContent === "cultural-story" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            downloadContent(mockGeneratedContent.productDescription.culturalStory, "cultural-story.txt")
                          }
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Heritage narrative that connects customers to your craft's roots</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={mockGeneratedContent.productDescription.culturalStory}
                      readOnly
                      className="min-h-32 resize-none"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="social" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center space-x-2">
                        <Instagram className="w-5 h-5 text-pink-500" />
                        <span>Instagram Post</span>
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(mockGeneratedContent.socialMedia.instagram, "instagram")}
                        >
                          {copiedContent === "instagram" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            downloadContent(mockGeneratedContent.socialMedia.instagram, "instagram-post.txt")
                          }
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Engaging post with hashtags optimized for Instagram</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={mockGeneratedContent.socialMedia.instagram}
                      readOnly
                      className="min-h-40 resize-none"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center space-x-2">
                        <Facebook className="w-5 h-5 text-blue-500" />
                        <span>Facebook Post</span>
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(mockGeneratedContent.socialMedia.facebook, "facebook")}
                        >
                          {copiedContent === "facebook" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            downloadContent(mockGeneratedContent.socialMedia.facebook, "facebook-post.txt")
                          }
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Detailed post perfect for Facebook's longer format</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={mockGeneratedContent.socialMedia.facebook}
                      readOnly
                      className="min-h-40 resize-none"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center space-x-2">
                        <Twitter className="w-5 h-5 text-blue-400" />
                        <span>Twitter/X Post</span>
                      </CardTitle>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(mockGeneratedContent.socialMedia.twitter, "twitter")}
                        >
                          {copiedContent === "twitter" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadContent(mockGeneratedContent.socialMedia.twitter, "twitter-post.txt")}
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription>Concise post optimized for Twitter's character limit</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={mockGeneratedContent.socialMedia.twitter}
                      readOnly
                      className="min-h-24 resize-none"
                    />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="marketing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Headlines</CardTitle>
                  <CardDescription>Compelling headlines that capture attention and drive sales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Main Headline</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <Input value={mockGeneratedContent.marketingCopy.headline} readOnly className="flex-1" />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(mockGeneratedContent.marketingCopy.headline, "headline")}
                      >
                        {copiedContent === "headline" ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Subheadline</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <Input value={mockGeneratedContent.marketingCopy.subheadline} readOnly className="flex-1" />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(mockGeneratedContent.marketingCopy.subheadline, "subheadline")}
                      >
                        {copiedContent === "subheadline" ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Key Selling Points</CardTitle>
                      <CardDescription>Bullet points highlighting your product's unique value</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(mockGeneratedContent.marketingCopy.bulletPoints.join("\n• "), "bullets")
                      }
                    >
                      {copiedContent === "bullets" ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {mockGeneratedContent.marketingCopy.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Call to Action</CardTitle>
                  <CardDescription>Compelling CTA that drives conversions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Input value={mockGeneratedContent.marketingCopy.callToAction} readOnly className="flex-1" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(mockGeneratedContent.marketingCopy.callToAction, "cta")}
                    >
                      {copiedContent === "cta" ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tags" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Product Tags & Keywords</CardTitle>
                      <CardDescription>SEO-optimized tags to improve discoverability</CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(mockGeneratedContent.productTags.join(", "), "tags")}
                    >
                      {copiedContent === "tags" ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockGeneratedContent.productTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* Action Buttons */}
        {!isGenerating && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button variant="outline" onClick={handleGenerate}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Regenerate Content
            </Button>
            <Button asChild>
              <a href="/dashboard">Return to Dashboard</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
