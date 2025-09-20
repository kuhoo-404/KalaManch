"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { BarChart3, Eye, Heart, TrendingUp, Users, Globe, Calendar, Target, Award } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center space-x-2">
            <BarChart3 className="w-8 h-8 text-primary" />
            <span>Analytics Dashboard</span>
          </h1>
          <p className="text-muted-foreground">Detailed insights into your craft performance and audience engagement</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12,456</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +23% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">7.2%</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +1.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Visits</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3,421</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Global Reach</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">15</div>
              <p className="text-xs text-muted-foreground">Countries reached</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>Your most viewed and engaged products this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Handwoven Warli Art Wall Hanging",
                    views: 1245,
                    likes: 89,
                    shares: 23,
                    trend: "+45%",
                  },
                  {
                    name: "Traditional Pottery Vase Set",
                    views: 892,
                    likes: 67,
                    shares: 15,
                    trend: "+32%",
                  },
                  {
                    name: "Embroidered Silk Cushion Cover",
                    views: 756,
                    likes: 54,
                    shares: 12,
                    trend: "+28%",
                  },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-sm">{product.name}</h4>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                        <span>{product.views} views</span>
                        <span>{product.likes} likes</span>
                        <span>{product.shares} shares</span>
                      </div>
                    </div>
                    <Badge variant="default" className="text-green-600 bg-green-100">
                      {product.trend}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
              <CardDescription>Demographics and behavior of your audience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Top Locations</h4>
                  <div className="space-y-2">
                    {[
                      { country: "India", percentage: 65 },
                      { country: "United States", percentage: 15 },
                      { country: "United Kingdom", percentage: 8 },
                      { country: "Canada", percentage: 6 },
                      { country: "Australia", percentage: 6 },
                    ].map((location, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{location.country}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: `${location.percentage}%` }} />
                          </div>
                          <span className="text-xs text-muted-foreground w-8">{location.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm mb-3">Age Groups</h4>
                  <div className="space-y-2">
                    {[
                      { age: "25-34", percentage: 35 },
                      { age: "35-44", percentage: 28 },
                      { age: "45-54", percentage: 20 },
                      { age: "18-24", percentage: 12 },
                      { age: "55+", percentage: 5 },
                    ].map((age, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{age.age}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-muted rounded-full h-2">
                            <div className="bg-accent h-2 rounded-full" style={{ width: `${age.percentage}%` }} />
                          </div>
                          <span className="text-xs text-muted-foreground w-8">{age.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <span>Recent Achievements</span>
            </CardTitle>
            <CardDescription>Milestones and accomplishments in your artisan journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "1K Views Milestone",
                  description: "Your Warli painting reached 1,000 views",
                  date: "2 days ago",
                  icon: Eye,
                },
                {
                  title: "Featured Product",
                  description: "Product featured in trending section",
                  date: "1 week ago",
                  icon: Target,
                },
                {
                  title: "International Reach",
                  description: "First order from United States",
                  date: "2 weeks ago",
                  icon: Globe,
                },
              ].map((achievement, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-2 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {achievement.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
