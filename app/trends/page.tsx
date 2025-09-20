"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  ShoppingBag,
  Target,
  Lightbulb,
  ExternalLink,
  Star,
  BarChart3,
  Search,
} from "lucide-react"

// Mock data for trends analysis
const trendingCrafts = [
  {
    name: "Warli Painting",
    growth: "+45%",
    trend: "up",
    searches: "12.5K",
    competition: "Medium",
    opportunity: "High",
    seasonality: "Festival Season Peak",
  },
  {
    name: "Handloom Textiles",
    growth: "+32%",
    trend: "up",
    searches: "8.9K",
    competition: "High",
    opportunity: "Medium",
    seasonality: "Wedding Season",
  },
  {
    name: "Pottery & Ceramics",
    growth: "+28%",
    trend: "up",
    searches: "6.7K",
    competition: "Low",
    opportunity: "High",
    seasonality: "Home Decor Trend",
  },
  {
    name: "Metal Craft",
    growth: "-12%",
    trend: "down",
    searches: "4.2K",
    competition: "Medium",
    opportunity: "Low",
    seasonality: "Off Season",
  },
]

const trendingKeywords = [
  { keyword: "handmade wall art", volume: "15.2K", difficulty: "Medium", cpc: "₹12" },
  { keyword: "traditional indian crafts", volume: "11.8K", difficulty: "High", cpc: "₹18" },
  { keyword: "warli painting online", volume: "8.5K", difficulty: "Low", cpc: "₹8" },
  { keyword: "handwoven textiles", volume: "7.3K", difficulty: "Medium", cpc: "₹15" },
  { keyword: "pottery home decor", volume: "6.9K", difficulty: "Low", cpc: "₹10" },
  { keyword: "indian art gifts", volume: "5.4K", difficulty: "Medium", cpc: "₹14" },
]

const marketplaceInsights = [
  {
    platform: "Amazon Karigar",
    category: "Warli Painting",
    avgPrice: "₹2,500 - ₹4,000",
    competition: "Medium",
    rating: 4.3,
    tips: "Focus on detailed product descriptions and cultural stories",
  },
  {
    platform: "Etsy",
    category: "Handloom Textiles",
    avgPrice: "$25 - $60",
    competition: "High",
    rating: 4.6,
    tips: "Emphasize sustainability and traditional techniques",
  },
  {
    platform: "Flipkart Samarth",
    category: "Pottery & Ceramics",
    avgPrice: "₹800 - ₹2,200",
    competition: "Low",
    rating: 4.1,
    tips: "Highlight functional and decorative uses",
  },
]

const seasonalTrends = [
  {
    season: "Diwali Season",
    period: "Oct - Nov",
    trending: ["Diyas", "Rangoli Art", "Traditional Lamps", "Decorative Items"],
    growth: "+180%",
    recommendation: "Focus on festive decorations and traditional lighting",
  },
  {
    season: "Wedding Season",
    period: "Nov - Feb",
    trending: ["Bridal Jewelry", "Wedding Decor", "Gift Items", "Traditional Wear"],
    growth: "+120%",
    recommendation: "Create wedding-themed collections and gift sets",
  },
  {
    season: "Summer Collection",
    period: "Mar - May",
    trending: ["Cotton Textiles", "Light Crafts", "Home Cooling", "Natural Materials"],
    growth: "+65%",
    recommendation: "Emphasize breathable and cooling properties",
  },
  {
    season: "Monsoon Crafts",
    period: "Jun - Sep",
    trending: ["Indoor Decor", "Waterproof Items", "Cozy Textiles", "Warm Colors"],
    growth: "+40%",
    recommendation: "Focus on indoor comfort and warm aesthetics",
  },
]

export default function TrendsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedTimeframe, setSelectedTimeframe] = useState("3months")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center space-x-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span>Market Trends</span>
              </h1>
              <p className="text-muted-foreground">Discover opportunities and insights for your craft category</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="warli">Warli Painting</SelectItem>
                  <SelectItem value="textiles">Handloom Textiles</SelectItem>
                  <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                  <SelectItem value="metal">Metal Craft</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                  <SelectItem value="6months">6 Months</SelectItem>
                  <SelectItem value="1year">1 Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="marketplaces">Marketplaces</TabsTrigger>
            <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
            <TabsTrigger value="recommendations">Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Trending Crafts */}
            <Card>
              <CardHeader>
                <CardTitle>Trending Craft Categories</CardTitle>
                <CardDescription>
                  Current market performance and growth trends for different craft types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingCrafts.map((craft, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            craft.trend === "up" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {craft.trend === "up" ? (
                            <TrendingUp className="w-5 h-5" />
                          ) : (
                            <TrendingDown className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold">{craft.name}</h4>
                          <p className="text-sm text-muted-foreground">{craft.seasonality}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold">{craft.growth}</p>
                          <p className="text-muted-foreground">Growth</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{craft.searches}</p>
                          <p className="text-muted-foreground">Searches</p>
                        </div>
                        <div className="text-center">
                          <Badge
                            variant={
                              craft.opportunity === "High"
                                ? "default"
                                : craft.opportunity === "Medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {craft.opportunity}
                          </Badge>
                          <p className="text-muted-foreground mt-1">Opportunity</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Growth</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+34%</div>
                  <p className="text-xs text-muted-foreground">Handmade crafts sector</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Online Searches</CardTitle>
                  <Search className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">52.3K</div>
                  <p className="text-xs text-muted-foreground">Monthly for your category</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Best Season</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent">Oct-Nov</div>
                  <p className="text-xs text-muted-foreground">Festival season peak</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="keywords" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Trending Keywords</CardTitle>
                <CardDescription>Popular search terms related to your craft category with SEO insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingKeywords.map((keyword, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Search className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{keyword.keyword}</h4>
                          <p className="text-sm text-muted-foreground">Monthly search volume</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <p className="font-semibold">{keyword.volume}</p>
                          <p className="text-muted-foreground">Volume</p>
                        </div>
                        <div className="text-center">
                          <Badge
                            variant={
                              keyword.difficulty === "Low"
                                ? "default"
                                : keyword.difficulty === "Medium"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {keyword.difficulty}
                          </Badge>
                          <p className="text-muted-foreground mt-1">Difficulty</p>
                        </div>
                        <div className="text-center">
                          <p className="font-semibold">{keyword.cpc}</p>
                          <p className="text-muted-foreground">CPC</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marketplaces" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Marketplace Insights</CardTitle>
                <CardDescription>Performance data and recommendations for different selling platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {marketplaceInsights.map((marketplace, index) => (
                    <Card key={index} className="border-border/50">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center space-x-2">
                              <ShoppingBag className="w-5 h-5 text-primary" />
                              <span>{marketplace.platform}</span>
                            </CardTitle>
                            <CardDescription>{marketplace.category}</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Average Price</p>
                            <p className="font-semibold">{marketplace.avgPrice}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Competition</p>
                            <Badge variant="outline">{marketplace.competition}</Badge>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Avg Rating</p>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold">{marketplace.rating}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Opportunity</p>
                            <Badge variant="default">Good</Badge>
                          </div>
                        </div>
                        <div className="bg-muted/50 rounded-lg p-3">
                          <p className="text-sm">
                            <strong>Tip:</strong> {marketplace.tips}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seasonal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Seasonal Trends</CardTitle>
                <CardDescription>
                  Plan your product launches and marketing campaigns around seasonal demand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {seasonalTrends.map((season, index) => (
                    <Card key={index} className="border-border/50">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg flex items-center space-x-2">
                              <Calendar className="w-5 h-5 text-primary" />
                              <span>{season.season}</span>
                            </CardTitle>
                            <CardDescription>{season.period}</CardDescription>
                          </div>
                          <Badge variant="default" className="text-green-600 bg-green-100">
                            {season.growth}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium mb-2">Trending Items:</p>
                            <div className="flex flex-wrap gap-2">
                              {season.trending.map((item, itemIndex) => (
                                <Badge key={itemIndex} variant="outline">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="bg-primary/5 rounded-lg p-3">
                            <p className="text-sm">
                              <strong>Recommendation:</strong> {season.recommendation}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <span>Personalized Recommendations</span>
                  </CardTitle>
                  <CardDescription>Based on your craft category and current market trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">Optimize for Festival Season</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your Warli paintings are perfect for Diwali decorations. Consider creating festival-themed
                        collections and highlighting traditional significance in your descriptions.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-accent">Expand to International Markets</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Etsy shows high demand for authentic Indian crafts. Focus on storytelling and cultural heritage
                        to appeal to international buyers seeking authentic pieces.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">Leverage SEO Keywords</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Include "handmade wall art" and "traditional indian crafts" in your product titles and
                        descriptions to improve discoverability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Action Items</CardTitle>
                  <CardDescription>Specific steps to improve your market position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "Create Festival Collection",
                        description: "Develop 5-7 Diwali-themed Warli paintings",
                        priority: "High",
                        timeline: "2 weeks",
                      },
                      {
                        action: "Optimize Product Titles",
                        description: "Include trending keywords in existing product listings",
                        priority: "Medium",
                        timeline: "3 days",
                      },
                      {
                        action: "Join Amazon Karigar",
                        description: "Set up seller account and list top 3 products",
                        priority: "High",
                        timeline: "1 week",
                      },
                      {
                        action: "Create Video Content",
                        description: "Film painting process for social media marketing",
                        priority: "Medium",
                        timeline: "1 week",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Target className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{item.action}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant={item.priority === "High" ? "default" : "secondary"}>{item.priority}</Badge>
                          <span className="text-sm text-muted-foreground">{item.timeline}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
